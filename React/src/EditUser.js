import React, { useState, useEffect } from "react";
import { Form, Input, Button, TreeSelect, Col, Row, Card } from "antd";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./App.css";
import moment from "moment";

const { TextArea } = Input;

export default function EditUser(props) {
  const [form] = Form.useForm();
  const { id } = useParams();
  console.log(id, "id");
  const [user, setUser] = useState([]);
  const [dob, setDob] = useState("");

  // const updateUserById = (id, data) => {
  //   console.log(data, "data");
  //   return axios
  //     .put(`/updateUserDetails/${id}`, data)
  //     .then((response) => response.data)
  //     .catch((error) => {
  //       console.log(error);
  //       return null;
  //     });
  // };

  const onSubmitForm = async (values) => {
    values["dob"] = values?.dob.format("DD/MM/YYYY");
    return axios
      .put(`/forms/${id}`, values)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
        return null;
      });
  };

  useEffect(() => {
    axios
      .get(`/forms/${id}`)
      .then((response) => {
        if (response.data?.dob) {
          setDob(response.data?.dob);
        }
        form.setFieldsValue({
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          email: response.data.email,
          gender: response.data.gender,
          phone: response.data.phone,
          designation: response.data.designation,
          comments: response.data.comments,
          dataType: response.data.dataType,
          createdAt: response.data.createdAt,
        });
        setUser(response.data);
      })

      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Col span={24}>
        <Row>
          <Col span={24} style={{ marginTop: "50px" }}>
            <Card style={{ boxShadow: "  0 4px 8px 0 rgba(0, 0, 0, 0.2)" }}>
              <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                onFinish={onSubmitForm}
                id="myForm"
                form={form}
              >
                <Form.Item
                  name="firstName"
                  label="First Name "
                  rules={[
                    {
                      required: true,
                      message: "Please input your firstName",
                    },
                  ]}
                >
                  <Input placeholder="firstName" />
                </Form.Item>
                <Form.Item
                  name="lastName"
                  label="Last Name "
                  rules={[
                    {
                      required: true,
                      message: "Please input your lastName",
                    },
                  ]}
                >
                  <Input placeholder="lastName" />
                </Form.Item>

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
                  <Input type="email" placeholder="email" />
                </Form.Item>

                <Form.Item
                  name="gender"
                  label="Gender"
                  rules={[
                    {
                      required: true,
                      message: "Please input your gender",
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
                        title: "FeMale",
                        value: "female",
                      },
                    ]}
                  />
                </Form.Item>

                <Form.Item
                  name="designation"
                  label="Designation"
                  rules={[
                    {
                      required: true,
                      message: "Please input your designation",
                    },
                  ]}
                >
                  <TreeSelect
                    treeData={[
                      {
                        title: "Front-End-Developer",
                        value: "Front-End-Developer",
                      },
                      {
                        title: "Back-End-Developer",
                        value: "Back-End-Developer",
                      },
                      {
                        title: "Full-Stack-Developer",
                        value: "Full-Stack-Developer",
                      },
                      { title: "Mobile-Developer", value: "Mobile-Developer" },
                      {
                        title: "Software Developer",
                        value: "Software-Developer",
                      },
                      {
                        title: "Junior Software Developer",
                        value: "Junior-Software-Developer",
                      },
                      {
                        title: "Senior Software Developer",
                        value: "Senior-Software-Developer",
                      },
                      {
                        title: "Digital Marketing Analyst",
                        value: "Digital-Marketing-Analyst",
                      },
                      { title: "SEO Specialist", value: "SEO-Specialist" },
                      {
                        title: "Quality Assurance",
                        value: "Quality-Assurance",
                      },
                    ]}
                  />
                </Form.Item>
                <Form.Item
                  name="phone"
                  label="Mobile Phone"
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone",
                    },
                  ]}
                >
                  <Input type="number" placeholder="phone" />
                </Form.Item>

                <Form.Item
                  label="Date of Birth"
                  rules={[
                    {
                      required: true,
                      message: "Please input your dob",
                    },
                  ]}
                >
                  <Input
                    name="neededBy"
                    className="input-box2"
                    placeholder="Needed by date"
                    value={dob !== "" ? moment(dob).format("DD/MM/YYYY") : ""}
                    readOnly
                    style={{ width: "100%" }}
                  />
                </Form.Item>

                <Form.Item
                  name="comments"
                  label="Comments"
                  rules={[
                    {
                      required: true,
                      message: "Please input your comments",
                    },
                  ]}
                >
                  <TextArea rows={4} placeholder=" Please Enter comments" />
                </Form.Item>

                {/* <Form.Item label="Upload" valuePropName="fileList">
       <Upload action="/upload.do" listType="picture-card">
         <div>
           <PlusOutlined />
           <div style={{ marginTop: 8 }}>Upload</div>
         </div>
       </Upload>
     </Form.Item> */}

                <center>
                  <Form.Item>
                    <Button
                      type="submit"
                      htmlType="submit"
                      style={{
                        width: "144px",
                        backgroundColor: "#0958d9",
                        color: "#fff",
                      }}
                    >
                      Submit
                    </Button>
                  </Form.Item>
                </center>
              </Form>
            </Card>
          </Col>
          {/* <Col span={22}>
            <div className="user-details-container">
              <div className="user-details-card">
                <div className="card-body">
                  <h1 className="card-title"> Edit User Details</h1>
                  <p>
                    <strong>Name:</strong> {user.firstName} {user.lastName}
                  </p>
                  <p>
                    <strong>Email:</strong> {user.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {user.phone}
                  </p>
                  <p>
                    <strong>Date of Birth:</strong> {user.dob}
                  </p>
                  <p>
                    <strong>Designation:</strong> {user.designation}
                  </p>
                  <p>
                    <strong>Comments:</strong> {user.comments}
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col span={2}>
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
          </Col> */}
        </Row>
      </Col>
    </>
  );
}
