import React, { useState } from "react";
import axios from "axios";
import {
  Form,
  Input,
  Button,
  DatePicker,
  TreeSelect,
  Col,
  Row,
  Card,
} from "antd";


const { TextArea } = Input;

export default function Form1() {
  const [dob, setDob] = useState("");
  const onResetValues = () => {
    document.getElementById("myForm").reset();
  };

  const onSubmitForm = async (values) => {
    const response = await axios.post("/addForm", {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      gender: values.gender,
      designation: values.designation,
      phone: values.phone,
      dob: dob,
      comments: values.comments,
      dataType: "form",
      createdAt: Date.now(),
    });
    // console.log(response, "response");
    // return;
    if (response.status === 200) {
      onResetValues();
      window.location.href = "/usersTable";
    } else {
      alert("Data Not Submited");
    }
  };

  return (
    <div style={{ marginTop: "80px" }}>
      <Col span={22} style={{ marginTop: "20px" }}>
        <Row justify={"end"}>
          <Button
            style={{ backgroundColor: "#0958d9", color: "#fff" }}
            onClick={() => window.history.back(-1)}
          >
            BACK
          </Button>
        </Row>
      </Col>
      <Col span={24}>
        <Row justify="center" style={{ marginTop: "50px" }}>
          <Col span={8}>
            <Form
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              layout="horizontal"
              onFinish={onSubmitForm}
              id="myForm"
            >
              <Card>
                <Row gutter={[24, 24]}>
                  <Col span={12}>
                    <Form.Item
                      name="firstName"
                      label="First Name"
                      rules={[
                        {
                          required: true,
                          message: "Please input your first name",
                        },
                      ]}
                    >
                      <Input placeholder="First Name" />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name="lastName"
                      label="Last Name"
                      rules={[
                        {
                          required: true,
                          message: "Please input your last name",
                        },
                      ]}
                    >
                      <Input placeholder="Last Name" />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={[24, 24]}>
                  <Col span={12}>
                    <Form.Item
                      name="email"
                      label="Email ID"
                      rules={[
                        {
                          required: true,
                          message: "Please input your email",
                        },
                      ]}
                    >
                      <Input type="email" placeholder="Email" />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name="gender"
                      label="Gender"
                      rules={[
                        {
                          required: true,
                          message: "Please select your gender",
                        },
                      ]}
                    >
                      <TreeSelect
                        treeData={[
                          {
                            title: "Male",
                            value: "male",
                          },
                          {
                            title: "Female",
                            value: "female",
                          },
                        ]}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={[24, 24]}>
                  <Col span={24}>
                    <Form.Item
                      name="designation"
                      label="Designation"
                      labelCol={{ style: { marginRight: "99px" } }} // Add this line to apply styling
                      rules={[
                        {
                          required: true,
                          message: "Please select your designation",
                        },
                      ]}
                    >
                      <TreeSelect
                       style={{ width: '491px',right: '104px' }}
                        treeData={[
                          {
                            title: "Front-End Developer",
                            value: "Front-End-Developer",
                          },
                          {
                            title: "Back-End Developer",
                            value: "Back-End-Developer",
                          },
                          // Add other designations as needed
                        ]}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={[24, 24]}>
                  <Col span={12}>
                    <Form.Item
                      name="phone"
                      label="Mobile"
                      rules={[
                        {
                          required: true,
                          message: "Please input your phone number",
                        },
                      ]}
                    >
                      <Input type="number" placeholder="Mobile Phone" />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name="dob"
                      label="Date of Birth"
                      rules={[
                        {
                          required: true,
                          message: "Please select your date of birth",
                        },
                      ]}
                    >
                      <DatePicker format="DD/MM/YYYY" />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={[24, 24]}>
                  <Col span={24}>
                    <Form.Item
                      name="comments"
                      label="Comments"
                      labelCol={{ style: { marginRight: '99px' } }}
                      rules={[
                        {
                          required: true,
                          message: "Please input your comments",
                        },
                      ]}
                    >
                      <Input.TextArea 
                       style={{ width: '498px', right: '104px' }}
                      
                      rows={4} placeholder="Comments" />
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Card>
            </Form>
          </Col>
        </Row>
      </Col>
    </div>
  );
}
