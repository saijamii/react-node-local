import React from "react";
import { Col, Row, Button, Form, Input, Card} from "antd";
import "./App.css";

function Login() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      className="bodyy"
      // style={{
      //   backgroundImage: `url(${login})`,
      //   backgroundSize: "cover",
      //   height: "100vh",
      //   display: "flex",
      //   alignItems: "center",
      //   justifyContent: "center",
      // }}
      // style={{
      //   backgroundColor: "#12181b",
      //   height: "100vh",
      //   display: "flex",
      //   alignItems: "center",
      //   justifyContent: "center",
      // }}
    >
      <Col span={24}>
        <Row>
          <Col span={10}></Col>
          <Col span={5}>
            <Card
              style={{
                boxShadow: "0 4px 8px 0 rgba(0, 0, 8, 0.2)",
                backgroundColor: "#c7c8cc",
                border: "transparent",
                marginTop:"25vh"
              }}
            >
              <center
                style={{
                  fontSize: "30px",
                  fontWeight: "800",
                  fontFamily: "unset",
                  color: "#000",
                }}
              >
                Welcome Back
              </center>

              <center
                style={{
                  color: "#5e636d",
                  fontSize: "16px",
                  alignContent: "center",
                  fontWeight: "bold",
                }}
              >
                Login to continue
              </center>
              <br />
              <Form
                name="basic"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <span
                  style={{ fontSize: "15px", color: "#000", fontWeight: "500" }}
                >
                  Username
                </span>
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <span
                  style={{ fontSize: "15px", color: "#000", fontWeight: "500" }}
                >
                  Password
                </span>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item>
                  <Button
                    onClick={() => (window.location.href = "/dashboard")}
                    style={{
                      width: "100%",
                      color: "#000",
                      fontWeight: "bold",
                      border: "transparent",
                      backgroundColor: "#fe6101 ",
                    }}
                    htmlType="submit"
                  >
                    Login
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </Col>
    </div>
  );
}

export default Login;
