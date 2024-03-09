import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Row, Col, Input } from "antd";

export default function DemoApi(props) {
  const [apiData, setApiData] = useState([]);
  console.log(apiData, "apiData");
  const [search, setSearch] = useState("");

  useEffect(() => {
    getApiData();
  }, []);

  const getApiData = async () => {
    await axios
      .get("https://api.publicapis.org/entries")
      .then((response) => {
        setApiData(response?.data?.entries);
      })
      .catch((error) => {
        alert("Something went Wrong");
        console.error("There was an error!", error);
      });
  };

  const colums = [
    {
      title: "API",
      dataIndex: "API",
    },
    {
      title: "Category",
      dataIndex: "Category",
    },
    {
      title: "Description",
      dataIndex: "Description",
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
                    ({apiData.length})
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
            ? apiData.filter(
                (e) =>
                  e.API?.toUpperCase()?.indexOf(search) > -1 ||
                  e.API?.toLowerCase()?.indexOf(search) > -1 ||
                  e.API?.indexOf(search) > -1
              )
            : apiData
        }
        columns={colums}
      />
    </div>
  );
}
