const e = require("express");
var express               = require("express"),
    mongoose              = require("mongoose"),
    passport              = require("passport"),
    bodyParser            = require("body-parser"),
    LocalStrategy         = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose"),
    User                  = require("./models/user"),
    PatientTreament       = require("./models/patienttreatment"),
    Medicinegiven         = require("./models/medicinegiven"),
    Inventory             = require("./models/inventory"),
    Bed                   = require("./models/bed"),
    Workhour               = require("./models/workhour");

//SETTING UP DATABASE
// var localmongodburl = "mongodb://localhost:27017/hostipaldb"
var mongodburl = "mongodb+srv://covid_cluster_user:randomlygenerated@covidpatients.cf3et.mongodb.net/covidPatients?retryWrites=true&w=majority"
mongoose.connect(mongodburl, { useNewUrlParser: true, useUnifiedTopology: true });
var app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

//AUTHENTICATION SETUP
app.use(require("express-session")({
    secret: "Some_random_key",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Passing in the current user in every page
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
});

// Routes setup
app.get("/", function(req,res){
    res.redirect("/login");
})

app.get("/login", function(req,res){
    res.render("login");
})

app.post("/login", passport.authenticate("local", {
    successRedirect: "/api/currentuser",
    failureRedirect: "/login"
}) ,function(req, res){
});


app.get("/signup/patients", function(req,res){
    res.render("patient_signup");
})

app.post("/signup/patients",function(req,res){
    var newuser = {
        username : req.body.username,
        isPatient : true,
        forPatient : { 
            name : req.body.name,
            dob : req.body.dob,
            age : req.body.age,
            address : req.body.address,
            gender : req.body.gender,
            bloodgroup : req.body.blood,
            phone : req.body.mobile,
            weight : req.body.weight,
            insuranceno : req.body.insurance,
            emergencycontact : {
                name : req.body.emergencyname,
                phone : req.body.emergencynumber
            },
            allergies : req.body.allergy,
            history : req.body.patienthistory,
        }
    }
    User.register(new User(newuser),req.body.password , function(err,patient){
        if(err){
            console.log(err);
            res.send("Some Error");
        }
        passport.authenticate('local')(req,res,function(){
            res.redirect("/api/currentuser");
        });
    });
});

app.get("/signup/staff", function(req,res){
    res.render("staff_signup");
});

app.post("/signup/staff",function(req,res){
    var newUser = {
        username : req.body.username,
        isStaff : true,
        forStaff : {
            name : req.body.name,
            dob : req.body.dob,
            age : req.body.age,
            gender : req.body.gender,
            address : req.body.address,
            phone : req.body.mobile,
            joinedOn: req.body.joinedon,
            role : req.body.role,
            department : req.body.department,
        } 
    }
    User.register(new User(newUser),req.body.password , function(err,staff){
        if(err){
            console.log(err);
            res.redirect('/signup/staff');
        }
        passport.authenticate('local')(req,res,function(){
            res.redirect("/api/currentuser");
        });
    });
});

app.get("/api/currentuser", isLoggedIn, function(req,res){
    User.findById(req.user._id, function(err, user){
        if(err){
            res.send("No current user");
        } else{
            res.send(user);
        }
    });
});
//-------------- Uncomment to create an instance of beds ------------------
// app.get("/createbeds", function(req,res){
//     Bed.create({}, function(err,bed){
//         if(err)
//             console.log(err)
//         else
//             res.redirect("/api/bedoccupancy");
//     })
// })

// Patient Routes
app.get("/patient/:id/addtreatment", function(req,res){
    res.render("treatment_form",{id:req.params.id});
})

app.post("/patient/:id/addtreatment", function(req,res){
    var medicinegiven = {
        time : req.body.time,
        nameofmedicine : req.body.medicinename,
        dosage : req.body.dosage,
        supervisedby : req.body.givenby 
    }
    User.findById(req.params.id, function(err,patient){
        if(err)
            res.send(err);
        else{
            PatientTreament.findOne({date : req.body.date}, function(err, found){
                if(err){
                    PatientTreament.create({
                        date : req.body.date,
                        symptoms : req.body.symptoms
                    }, function(err,newtreatment){
                        if(err)
                            res.send(err);
                        else{
                            Medicinegiven.create({medicinegiven}, function(err,record){
                                if(err)
                                    res.send(err);
                                else
                                    newtreatment.medicine.push(record);
                                    newtreatment.save();
                            });
                            patient.forPatient.treatment.medicinerecord.push(newtreatment);
                            patient.save();
                            res.redirect("/api/patient/"+req.params.id);
                        }
                    })
                }else{
                    Medicinegiven.create({medicinegiven}, function(err,record){
                        if(err)
                            res.send(err);
                        else
                            found.medicine.push(record);
                            found.save();
                            res.redirect("/api/patient/"+req.params.id);
                    });
                }
            })
        }
    })
});

app.get("/patient/:id/discharge", function(req,res){
    User.findById(req.params.id , function(err,patient){
        if(err)
            res.send("No such patient");
        else
            res.render("admit_or_discharge",{patient:patient, type:"discharge"});
    })
})

app.post("/patient/:id/discharge", function(req,res){
    User.findByIdAndUpdate(req.params.id, {"forPatient.treatment.dischargedate" : req.body.date}, function(err, updtaedPatient){
        if(err)
            res.redirect("/api/patient/"+ req.params.id)
        else
            res.redirect("/api/patient/"+ req.params.id)
    })
})

app.get("/patient/:id/admit", function(req,res){
    User.findById(req.params.id , function(err,patient){
        if(err)
            res.send("No such patient");
        else
            res.render("admit_or_discharge",{patient:patient, type:"admit"});
    })
})

app.post("/patient/:id/admit", function(req,res){
    User.findByIdAndUpdate(req.params.id, {"forPatient.treatment.admitdate" : req.body.date , "forPatient.treatment.treatedby" : req.body.doctor , "forPatient.treatment.covidpositive" : req.body.corona}, function(err, updtaedPatient){
        if(err)
            res.redirect("/api/patient/"+ req.params.id)
        else
            res.redirect("/api/patient/"+ req.params.id)
    })
})

app.get("/patient/:id/update", function(req,res){
    User.findById(req.params.id , function(err,patient){
        if(err)
            res.send("No such patient");
        else
            res.render("edit_patient_details",{patient:patient});
    })
})

app.post("/patient/:id/update", function(req,res){
    var newuser = {
        forPatient : { 
            name : req.body.name,
            dob : req.body.dob,
            age : req.body.age,
            address : req.body.address,
            gender : req.body.gender,
            bloodgroup : req.body.blood,
            phone : req.body.mobile,
            weight : req.body.weight,
            insuranceno : req.body.insurance,
            emergencycontact : {
                name : req.body.emergencyname,
                phone : req.body.emergencynumber
            },
            allergies : req.body.allergy,
            history : req.body.patienthistory,
        }
    }
    User.findByIdAndUpdate(req.params.id, newuser, function(err, updtaedPatient){
        if(err)
            res.redirect("/api/patient/"+ req.params.id)
        else
            res.redirect("/api/patient/"+ req.params.id)
    })
})

app.get("/patient/:id", function(req,res){
    User.findById(req.params.id , function(err,patient){
        if(err)
            res.send("No such patient");
        else
            res.render("home",{patient,patient});
    })
})

app.get("/api/patient/:id", function(req,res){
    User.findById(req.params.id , function(err,patient){
        if(err)
            res.send("No such patient");
        else
            res.send(patient);
    })
})

// Staff Routes
app.get("/staff/:id/addintime", function(req,res){
    User.findById(req.params.id , function(err,staff){
        if(err)
            res.send(err);
        else
        res.render("addtime",{time:"intime", id:req.params.id});
    })
})

app.post("/staff/:id/addintime", function(req,res){
    User.findById(req.params.id , function(err,staff){
        if(err)
            res.send(err);
        else{
            Workhour.create({date:req.body.date, checkIn:req.body.intime, checkOut:null}, function(err, work){
                if(err){
                    console.log(err);
                } else {
                    staff.forStaff.workHours.push(work);
                    staff.save();
                    res.redirect('/api/staff/' + req.params.id);
                }
             })
        }
    });
})

app.get("/staff/:id/addouttime", function(req,res){
    User.findById(req.params.id , function(err,staff){
        if(err)
            res.send(err);
        else
        res.render("addtime",{time:"outtime", id:req.params.id, staff:staff});
    })
})

app.post("/staff/:id/addouttime", function(req,res){
            Workhour.findOneAndUpdate({date:req.body.date},{checkOut:req.body.outtime}, function(err, work){
                if(err){
                    console.log(err);
                } else {
                    res.redirect('/api/staff/' + req.params.id);
                }
             })
})

app.get("/staff/:id/relieve", function(req,res){
    User.findById(req.params.id , function(err,staff){
        if(err)
            res.send(err);
        else
            res.render("addtime",{time:"relive", id:req.params.id, staff:staff})
    })
})

app.post("/staff/:id/relieve", function(req,res){
    User.findByIdAndUpdate(req.params.id, {"forStaff.relievedOn" : req.body.relieve},function(err, staff){
        if(err)
            res.send(err);
        else{
            res.redirect('/api/staff/' + req.params.id);
        }
    })
})

app.get("/staff/:id", function(req,res){
    User.findById(req.params.id , function(err,staff){
        if(err)
            res.send(err);
        else
            res.render("home_staff",{staff:staff, id:req.params.id});
    })
})

app.get("/api/staff/:id", function(req,res){
    User.findById(req.params.id , function(err,staff){
        if(err)
            res.send("No such staff");
        else
            res.send(staff);
    })
})

// Bed occupancy
app.get("/api/bedoccupancy", function(req,res){
    Bed.find({},function(err,beds){
        if(err){
            res.send("cant show bed");
        }else{
            res.send(beds);
        }
    })
})

//-------------- Uncomment to create an instance of inventory ------------------
// app.get("/createinventory", function(req,res){
//     Inventory.create({}, function(err,items){
//         if(err)
//             console.log(err)
//         else
//             res.redirect("/api/inventory");
//     })
// })


// Inventory routes
app.get("/api/inventory", function(req,res){
    Inventory.find({},function(err,items){
        if(err){
            res.redirect("/login");
        }else{
            res.send(items);
        }
    })
});

app.get("/inventory/add", function(req,res){
    Inventory.find({},function(err,items){
        if(err){
            res.send("cant add to inventory");
        }else{
            res.render("edit_inven",{items:items, act:"add"});
        }
    })
})

app.post("/inventory/add", function(req,res){
    Inventory.find({},function(err,items){
        if(err){
            res.send("something wrong");
        }else{
    if(req.body.item=="gloves"){
        Inventory.findOneAndUpdate({} ,{ "gloves" : items[0].gloves+Number(req.body.value)},function(err,result){
            if(err){
                console.log(err)
            }else{
                res.redirect("/api/inventory");
        }
        })
    }else if(req.body.item=="testingkit"){
        Inventory.findOneAndUpdate({} ,{ "testingkit" : items[0].testingkit+Number(req.body.value)},function(err,result){
            if(err){
                console.log(err)
            }else{
                res.redirect("/api/inventory");
        }
        })
    }else if(req.body.item=="syringes"){
        Inventory.findOneAndUpdate({} ,{ "syringes" : items[0].syringes+Number(req.body.value)},function(err,result){
            if(err){
                console.log(err)
            }else{
                res.redirect("/api/inventory");
        }
        })
    }else if(req.body.item=="salinebottles"){
        Inventory.findOneAndUpdate({} ,{ "salinebottles" : items[0].salinebottles+Number(req.body.value)},function(err,result){
            if(err){
                console.log(err)
            }else{
                res.redirect("/api/inventory");
        }
        })
    }else if(req.body.item=="masks"){
        Inventory.findOneAndUpdate({} ,{ "masks" : items[0].masks+Number(req.body.value)},function(err,result){
            if(err){
                console.log(err)
            }else{
                res.redirect("/api/inventory");
        }
        })
    }else{
        Inventory.findOneAndUpdate({} ,{ "ppekits" : items[0].ppekits+Number(req.body.value)},function(err,result){
            if(err){
                console.log(err)
            }else{
                res.redirect("/api/inventory");
        }
        })
    }
    }
    })
})

app.get("/inventory/remove", function(req,res){
    Inventory.find({},function(err,items){
        if(err){
            res.send("cant remove inventory");
        }else{
            res.render("edit_inven",{items:items, act:"delete"});
        }
    })
})

app.post("/inventory/remove", function(req,res){
    Inventory.find({},function(err,items){
        if(err){
            res.send("something wrong");
        }else{
    if(req.body.item=="gloves"){
        Inventory.findOneAndUpdate({} ,{ "gloves" : items[0].gloves-Number(req.body.value)},function(err,result){
            if(err){
                console.log(err)
            }else{
                res.redirect("/api/inventory");
        }
        })
    }else if(req.body.item=="testingkit"){
        Inventory.findOneAndUpdate({} ,{ "testingkit" : items[0].testingkit-Number(req.body.value)},function(err,result){
            if(err){
                console.log(err)
            }else{
                res.redirect("/api/inventory");
        }
        })
    }else if(req.body.item=="syringes"){
        Inventory.findOneAndUpdate({} ,{ "syringes" : items[0].syringes-Number(req.body.value)},function(err,result){
            if(err){
                console.log(err)
            }else{
                res.redirect("/api/inventory");
        }
        })
    }else if(req.body.item=="salinebottles"){
        Inventory.findOneAndUpdate({} ,{ "salinebottles" : items[0].salinebottles-Number(req.body.value)},function(err,result){
            if(err){
                console.log(err)
            }else{
                res.redirect("/api/inventory");
        }
        })
    }else if(req.body.item=="masks"){
        Inventory.findOneAndUpdate({} ,{ "masks" : items[0].masks-Number(req.body.value)},function(err,result){
            if(err){
                console.log(err)
            }else{
                res.redirect("/api/inventory");
        }
        })
    }else{
        Inventory.findOneAndUpdate({} ,{ "ppekits" : items[0].ppekits-Number(req.body.value)},function(err,result){
            if(err){
                console.log(err)
            }else{
                res.redirect("/api/inventory");
        }
        })
    }
    }
    })
})

app.get("/inventory", function(req,res){
    Inventory.find({},function(err,items){
        if(err){
            res.redirect("/login");
        }else{
            res.render("invendisplay",{items:items});
        }
    })
})

// Logout Route
app.get("/logout" , function(req,res){
    req.logout();
    res.redirect("/");
});

//Middleware
function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/");
}

app.listen(5000, () => console.log(`Server is running!!!`))