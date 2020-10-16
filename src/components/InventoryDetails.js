import React from "react";
import "antd/dist/antd.css";
import { Container, Row, Col } from "react-bootstrap";
import { Input, Button, Select } from "antd";

class InventoryDetails extends React.Component {
  state = {
    //access from Inventory Schema
    inventoryarray: {
      gloves: 10,
      testingkit: 10,
      syringes: 10,
      salinebottles: 10,
      masks: 10,
      ppekits: 10
    },
    //access from Beds Schema
    beds: {
      occupied: {
        covid: 10,
        icu: 2,
        noncovid: 3
      },
      available: {
        covid: 10,
        icu: 2,
        noncovid: 3
      }
    }

    //   let url = 'https://';
    //   try {
    //     const response = await fetch(url, {
    //       method: 'POST',
    //       body: JSON.stringify({ accountId: awsAccountId }),
    //       credentials: 'same-origin',
    //       headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json',
    //         'Access-Control-Allow-Credentials': ''
    //       }
    //     });
    //     const json = await response.json();
  };

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
                Number of Covid Beds available:{this.state.beds.available.covid}
              </span>
            </Col>
            <Col sm={12}>
              <span style={{ color: "#11999" }}>
                {" "}
                Number of Covid Occupied:
                {this.state.beds.occupied.covid}
              </span>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <span style={{ color: "#11999" }}>
                {" "}
                Number of ICU Beds available:{this.state.beds.available.icu}
              </span>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <span style={{ color: "#11999" }}>
                {" "}
                Number of ICU Beds Occupied:
                {this.state.beds.available.icu}
              </span>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <span style={{ color: "#11999" }}>
                {" "}
                Number of Non-Covid Beds available:
                {this.state.beds.available.noncovid}
              </span>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <span style={{ color: "#11999" }}>
                {" "}
                Number of Non-Covid Beds Occupied:{" "}
                {this.state.beds.occupied.noncovid}
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
                Number of PPE kits available:{this.state.inventoryarray.ppekits}
              </span>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <span style={{ color: "#11999" }}>
                {" "}
                Number of masks available:{this.state.inventoryarray.masks}
              </span>
            </Col>
          </Row>{" "}
          <Row>
            <Col sm={12}>
              <span style={{ color: "#11999" }}>
                {" "}
                Number of saline bottles kits available:
                {this.state.inventoryarray.salinebottles}
              </span>
            </Col>
          </Row>{" "}
          <Row>
            <Col sm={12}>
              <span style={{ color: "#11999" }}>
                {" "}
                Number of syringes available:
                {this.state.inventoryarray.syringes}
              </span>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <span style={{ color: "#11999" }}>
                {" "}
                Number of gloves available:{this.state.inventoryarray.gloves}
              </span>
            </Col>
          </Row>{" "}
          <Row>
            <Col sm={12}>
              <span style={{ color: "#11999" }}>
                {" "}
                Number of testing kits available:
                {this.state.inventoryarray.testingkit}
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