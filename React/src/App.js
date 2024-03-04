import React from "react";

import { Layout, Button, Col, Row } from "antd";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Form1 from "./Form1";
import UsersTable from "./UsersTable";
import UserDetails from "./routes/UserDetails";
import HomePage from "./HomePage";
import Dashboard from "./Dashboard";
import Login from "./Login";
import EditUser from "./EditUser";
import DemoApi from "./DemoApi";
import DemoEmployeeData from "./DemoEmployeeData";

const { Header } = Layout;

const App = (props) => {
  console.log(props, "props");

  return (
    <div style={{ height: "100vh", overflowX: "hidden" }}>
      <>
        {window.location.pathname !== "/" && (
          <Header style={{ position: "fixed", width: "100%", zIndex: "100" }}>
            <Col span={24}>
              <div style={{ backgroundColor: "#8d99ae", height: "60px" }}>
                <Col span={24}>
                  <Row style={{ justifyContent: "right" }}>
                    <Col span={3} id="nav-links-container">
                      <Button
                        style={{
                          backgroundColor: "#8d99ae",
                          color: "#000",
                          border: "0px",
                          fontWeight: "600",
                          fontSize: "20px",
                          marginTop: "10px",
                        }}
                        onClick={() => (window.location.href = "/dashboard")}
                      >
                        DASHBOARD
                      </Button>
                    </Col>
                    <Col span={2} id="nav-links-container">
                      <Button
                        style={{
                          backgroundColor: "#8d99ae",
                          color: "#000",
                          border: "0px",
                          fontSize: "20px",
                          fontWeight: "600",
                          marginTop: "10px",
                        }}
                        onClick={() => (window.location.href = "/homePage")}
                      >
                        HOME
                      </Button>
                    </Col>
                    <Col span={2}>
                      <Button
                        style={{
                          backgroundColor: "#8d99ae",
                          color: "#000",
                          border: "0px",
                          fontSize: "20px",
                          fontWeight: "600",
                          marginTop: "10px",
                        }}
                        onClick={() => (window.location.href = "/usersTable")}
                      >
                        USERS
                      </Button>
                    </Col>
                    <Col span={2}>
                      <Button
                        style={{
                          backgroundColor: "#8d99ae",
                          color: "#000",
                          border: "0px",
                          fontSize: "20px",
                          fontWeight: "600",
                          marginTop: "10px",
                        }}
                        onClick={() => (window.location.href = "/demoApi")}
                      >
                        Demo Data
                      </Button>
                    </Col>
                    <Col span={2}>
                      <Button
                        style={{
                          backgroundColor: "#8d99ae",
                          color: "#000",
                          border: "0px",
                          fontSize: "20px",
                          fontWeight: "600",
                          marginTop: "10px",
                        }}
                        onClick={() => (window.location.href = "/demoExcel")}
                      >
                        Demo Employee Data
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </div>
            </Col>
          </Header>
        )}
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/homePage" element={<HomePage />} />
            <Route path="/addUser" element={<Form1 />} />
            <Route path="/usersTable" element={<UsersTable />} />
            <Route path="/getUserDetails/:id" element={<UserDetails />} />
            <Route path="/updateUserDetails/:id" element={<EditUser />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/demoApi" element={<DemoApi />} />
            <Route path="/demoExcel" element={<DemoEmployeeData />} />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
};

export default App;
