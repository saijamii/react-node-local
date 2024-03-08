import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Popover, Row, Col, Button, Popconfirm, Input } from "antd";
import {
  EllipsisOutlined,
  DeleteOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import Headers from "./Headers";
import { Link } from "react-router-dom";

export default function DemoEmployeeData(props) {
  const [users, setUsers] = useState([]);
  console.log(users, "users");
  const [search, setSearch] = useState("");

  useEffect(() => {
    getExcelData();
  }, []);

  const getExcelData = async () => {
    const { data } = await axios.get("/getExcel");
    setUsers(data);
    console.log(data, "data");
  };

  const colums = [
    {
      title: "Employee ID",
      dataIndex: "Employee ID",
    },
    {
      title: "Full Name",
      dataIndex: "Full Name",
    },
    {
      title: "Job Title",
      dataIndex: "Job Title",
    },
    {
      title: "Department",
      dataIndex: "Department",
    },
    {
      title: "Business Unit",
      dataIndex: "Business Unit",
    },
    {
      title: "Gender",
      dataIndex: "Gender",
    },
    {
      title: "Ethnicity",
      dataIndex: "Ethnicity",
    },
    {
      title: "Age",
      dataIndex: "Age",
    },
    {
      title: "Hire Date",
      dataIndex: "Hire Date",
    },
    {
      title: "Annual Salary",
      dataIndex: "Annual Salary",
    },
    {
      title: "Age",
      dataIndex: "Age",
    },
    {
      title: "Bonus %",
      dataIndex: "Bonus %",
    },
    {
      title: "Country",
      dataIndex: "Country",
    },
    {
      title: "City",
      dataIndex: "City",
    },
    {
      title: "Exit Date",
      dataIndex: "Exit Date",
    },
    {
      title: "Link",
      dataIndex: "Link",
      onCell: (record) => ({
        onClick: () => {
          window.location.href = `${record?.Link}`;
        },
      }),
      render: (Link) => {
        return <div style={{ cursor: "pointer" }}>{Link}</div>;
      },
    },
  ];


  // const colums = [
  //   {
  //     title: "Year",
  //     dataIndex: "Year",
  //   },
  //   {
  //     title: "Industry_aggregation_NZSIOC",
  //     dataIndex: "Industry_aggregation_NZSIOC",
  //   },
  //   {
  //     title: "Industry_code_NZSIOC",
  //     dataIndex: "Industry_code_NZSIOC",
  //   },
  //   {
  //     title: "Industry_name_NZSIOC",
  //     dataIndex: "Industry_name_NZSIOC",
  //   },
  //   {
  //     title: "Units",
  //     dataIndex: "Units",
  //   },
  //   {
  //     title: "Variable_code",
  //     dataIndex: "Variable_code",
  //   },
  //   {
  //     title: "Variable_name",
  //     dataIndex: "Variable_name",
  //   },
  //   {
  //     title: "Variable_category",
  //     dataIndex: "Variable_category",
  //   },
  //   {
  //     title: "Value",
  //     dataIndex: "Value",
  //   },
    
  // ];
  

  return (
    <div style={{ marginTop: "80px" }}>
      <Col span={24} className="fireFox">
        <Row justify="space-between" gutter={[16, 16]}>
          <Col span={12}>
            <div>
              <>
                <h2
                  style={{
                    fontSize: "30px",
                    marginLeft: "10px",
                  }}
                >
                  Data{" "}
                  <span style={{ fontSize: "20px", color: "#fe6101" }}>
                    ({users.length})
                  </span>
                </h2>
              </>
            </div>
          </Col>

          <Col span={12}>
            <Row gutter={[16, 16]} justify="end">
              <Col>
                <Input
                  style={{ marginTop: "25px" }}
                  placeholder="Search..."
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
              </Col>
              <Col>
                {/* <Button
                  style={{
                    minWidth: "160px",
                    borderRadius: "6px",
                    float: "right",
                    height: "36px",
                    marginRight: "12px",
                    marginTop: "22px",
                    backgroundColor: "#0050b3",
                    color: "#fff",
                    border: "#fe6101",
                  }}
                  onClick={() => (window.location.href = "/addUser")}
                >
                  <PlusOutlined />
                  Add User
                </Button> */}
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Table
        dataSource={
          search.length > 0
            ? users.filter(
                (e) =>
                  e.EmployeeID?.toUpperCase()?.indexOf(search) > -1 ||
                  e.EmployeeID?.toLowerCase()?.indexOf(search) > -1 ||
                  e.EmployeeID?.indexOf(search) > -1
              )
            : users
        }
        columns={colums}
      />
    </div>
  );
}
