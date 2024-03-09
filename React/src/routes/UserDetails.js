import React, { useState, useEffect } from "react";
import { Col, Row, Button, Divider, Card } from "antd";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../App.css";

export default function UserDetails(props) {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(`/getUserDetails/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Col span={24} style={{marginTop:"80px"}}>
      <Row justify={"space-between"}>
        <Col span={12} offset={8} style={{ justifyContent: "center" }}>
          <Card
            style={{
              width: "50vh",
              marginTop: "12px",
              backgroundColor: "#ffa700",
            }}
            headStyle={{ fontWeight: "bold", fontSize: "18px" }}
            title="User Information"
          >
            <Row justify="space-between">
              <Col>First Name:</Col>
              <Col>
                <b style={{ textTransform: "capitalize" }}>{user?.firstName}</b>
              </Col>
              <Divider style={{ margin: "15px 0" }} />
              <Col>Last Name:</Col>
              <Col>
                <b style={{ textTransform: "capitalize" }}>{user?.lastName}</b>
              </Col>
              <Divider style={{ margin: "15px 0" }} />
              <Col>Email:</Col>
              <Col>
                <b style={{ textTransform: "capitalize" }}>{user?.email}</b>
              </Col>
              <Divider style={{ margin: "15px 0" }} />
              <Col>Phone:</Col>
              <Col>
                <b style={{ textTransform: "capitalize" }}>{user?.phone}</b>
              </Col>
              <Divider style={{ margin: "15px 0" }} />
              <Col>Date of Birth:</Col>
              <Col>
                <b style={{ textTransform: "capitalize" }}>{user?.dob}</b>
              </Col>
              <Divider style={{ margin: "15px 0" }} />
              <Col>Designation:</Col>
              <Col>
                <b style={{ textTransform: "capitalize" }}>
                  {user?.designation}
                </b>
              </Col>
              <Divider style={{ margin: "15px 0" }} />
              <Col>Comments:</Col>
              <Col>
                <b style={{ textTransform: "capitalize" }}>{user?.comments}</b>
              </Col>
              <Divider style={{ margin: "15px 0" }} />
            </Row>
          </Card>
        </Col>
        <Col span={4}>
          <Button
            style={{
              backgroundColor: "#0958d9",
              color: "#fff",
              marginTop: "12px",
            }}
            onClick={() => window.history.back(-1)}
          >
            BACK
          </Button>
        </Col>
      </Row>
    </Col>
  );
}
