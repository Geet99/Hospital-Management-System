import React from "react";
import "antd/dist/antd.css";
import { Container, Row, Col } from "react-bootstrap";
import { Input, Button, Select } from "antd";

class InventoryDetails extends React.Component {
  constructor(){
    super();
    this.state = {
      items : {},
      bedsoccupy : {},
      bedsavai : {}
    }
  }

  componentDidMount(){
    //Api for inventory
    fetch("/api/inventory")
    .then(response => response.json())
    .then(response => {
      this.setState({items : response[0]})
    })
    //Api for bed occupancy
    fetch("/api/bedoccupancy")
    .then(response => response.json())
    .then(response => {
      this.setState({bedsoccupy : response[0].occupied , bedsavai : response[0].available})
      console.log(this.state.beds)
    })
  }

  render() {
    return (
      <div>
        <Container
          style={{
            border: "1px solid lightgrey",
            textAlign: "left",
            padding: "1rem",
            margin: "1rem",
            marginLeft: "auto",
            marginRight: "auto",
            color: "#636363",
            fontSize: "0.9rem"
          }}
        >
          <Row>
            <Col sm={12}>
              <strong style={{ color: "#11999" }}> BED OCCUPANCY</strong>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <span style={{ color: "#11999" }}>
                {" "}
                Number of Covid Beds available:
                {this.state.bedsavai.covid}
              </span>
            </Col>
            <Col sm={12}>
              <span style={{ color: "#11999" }}>
                {" "}
                Number of Covid Occupied:
                {this.state.bedsoccupy.covid}
              </span>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <span style={{ color: "#11999" }}>
                {" "}
                Number of ICU Beds available:
                {this.state.bedsavai.icu}
              </span>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <span style={{ color: "#11999" }}>
                {" "}
                Number of ICU Beds Occupied:
                {this.state.bedsoccupy.icu}
              </span>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <span style={{ color: "#11999" }}>
                {" "}
                Number of Non-Covid Beds available:
                {this.state.bedsavai.noncovid}
              </span>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <span style={{ color: "#11999" }}>
                {" "}
                Number of Non-Covid Beds Occupied:{" "}
                {this.state.bedsoccupy.noncovid}
              </span>
            </Col>
          </Row>
        </Container>

        <Container
          style={{
            border: "1px solid lightgrey",
            textAlign: "left",
            padding: "1rem",
            margin: "1rem",
            marginLeft: "auto",
            marginRight: "auto",
            color: "#636363",
            fontSize: "0.9rem"
          }}
        >
          <Row>
            <Col sm={12}>
              <strong style={{ color: "#11999" }}> COVID INVENTORY</strong>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <span style={{ color: "#11999" }}>
                {" "}
                Number of PPE kits available:{this.state.items.ppekits}
              </span>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <span style={{ color: "#11999" }}>
                {" "}
                Number of masks available:{this.state.items.masks}
              </span>
            </Col>
          </Row>{" "}
          <Row>
            <Col sm={12}>
              <span style={{ color: "#11999" }}>
                {" "}
                Number of saline bottles kits available:
                {this.state.items.salinebottles}
              </span>
            </Col>
          </Row>{" "}
          <Row>
            <Col sm={12}>
              <span style={{ color: "#11999" }}>
                {" "}
                Number of syringes available:
                {this.state.items.syringes}
              </span>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <span style={{ color: "#11999" }}>
                {" "}
                Number of gloves available:{this.state.items.gloves}
              </span>
            </Col>
          </Row>{" "}
          <Row>
            <Col sm={12}>
              <span style={{ color: "#11999" }}>
                {" "}
                Number of testing kits available:
                {this.state.items.testingkit}
              </span>
            </Col>
          </Row>
          <br></br>
          <form action="/inventory/add" method="POST">
            {/* <h1>Adding Items</h1> */} <strong> For add operation: </strong>
            <br></br>
            <Select
              placeholder="Select item"
              style={{ width: 120, marginRight: "2%" }}
              name="item"
              required
            >
              <option value="none" selected disabled hidden>
                Select a item
              </option>
              <option value="gloves"> Gloves</option>
              <option value="testingkit"> Testing kits</option>
              <option value="syringes"> Syringes</option>
              <option value="salinebottles"> Saline Bottles</option>
              <option value="masks"> Masks</option>
              <option value="ppekits"> PPE Kits</option>
            </Select>
            <Input
              style={{ width: 180 }}
              placeholder="Enter quantity"
              type="number"
              name="value"
              required
            ></Input>
            <Button shape="round" type="submit" style={{ marginLeft: "2%" }}>
              Add Item
            </Button>
          </form>
          <br></br>
          <form action="/inventory/remove" method="POST">
            {/* <h1>Removing Items</h1> */}
            <strong>For remove operation: </strong>
            <br></br>

            <Select
              placeholder="Select item"
              style={{ width: 120, marginRight: "2%" }}
              name="item"
              required
            >
              <option value="none" selected disabled hidden>
                Select a item
              </option>
              <option value="gloves"> Gloves</option>
              <option value="testingkit"> Testing kits</option>
              <option value="syringes"> Syringes</option>
              <option value="salinebottles"> Saline Bottles</option>
              <option value="masks"> Masks</option>
              <option value="ppekits"> PPE Kits</option>
            </Select>
            <Input
              style={{ width: 180 }}
              placeholder="Enter quantity"
              type="number"
              name="value"
              required
            ></Input>
            <Button shape="round" style={{ marginLeft: "2%" }} type="submit">
              Delete Item
            </Button>
          </form>
        </Container>
        <div style={{ marginLeft: "10%" }}></div>
      </div>
    );
  }
}

export default InventoryDetails;