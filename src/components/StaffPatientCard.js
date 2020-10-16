import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from 'antd';

function StaffPatientCard({ data }) {
    return (
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
                    <strong style={{ color: "#212529" }}>{data.name}</strong>
                </Col>
                <Col sm={12}>
                    <span style={{ color: "#999" }}> Room number - {data.roomno}</span>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <span style={{ color: "#999" }}> Covid - {data.covidstatus}</span>
                </Col>
            </Row>
            <br />
            { //edit here}
                // return (
                    (data.admitno == null) ? //edit here
                    (
                        <Button href='/Patient' type="primary" m-2 htmlType="submit">
                            Admit Patient
                        </Button>
                    ) : ( 
                        <div>
                        <Button href='/Patient' type="primary" m-2 htmlType="submit">
                            Add Treatment
                        </Button> {" "}
                        <Button href='/Staff' type="primary" m-2 htmlType="submit">
                            Discharge Patient
                        </Button>
                        </div>
                    )	
                // )
            }
            {/* <Button href='/Patient' type="primary" m-2 htmlType="submit">
                Add Treatment
            </Button> {' '}
            <Button href='/Staff' type="primary" m-2 htmlType="submit">
                Discharge Patient
            </Button> */}
        </Container>
    );
}

export default StaffPatientCard;
