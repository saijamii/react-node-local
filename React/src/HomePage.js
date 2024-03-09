import React from "react";

import { Card, Col, Avatar, Space } from "antd";
import Carousel from "react-elastic-carousel";
import { UserOutlined } from "@ant-design/icons";
export default function HomePage() {
  const data = [
    {
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
    {
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      name: "Joe Black",
      age: 42,
      address: "London No. 1 Lake Pa rk",
    },
    {
      name: "Jim Green",
      age: 32,
      address: "Sidney No. 1 Lake Park",
    },
    {
      name: "Jim Red",
      age: 32,
      address: "London No. 2 Lake Park",
    },
    {
      name: "Jim Red",
      age: 32,
      address: "London No. 2 Lake Park",
    },
    {
      name: "Jim Red",
      age: 32,
      address: "London No. 2 Lake Park",
    },
  ];

  return (
    <div style={{ marginTop: "80px" }}>
      <Col span={24}>
        {/* <img src={unosimple} style={{ width: "30%", height: "40%" }} /> */}
        {/* <h1>HomePage</h1> */}
      </Col>
      <Col span={24}>
        <h2 style={{ textAlign: "center" }}>All Users</h2>
      </Col>
      <Col>
        <Carousel
          style={{ marginTop: "60px" }}
          className="carsole"
          itemPosition="CENTER"
          autoPlaySpeed={3000}
          enableAutoPlay
          enableMouseSwipe
          itemsToShow={
            window.screen.width >= "1025"
              ? 6
              : window.screen.width > "992" && window.screen.width <= "1024"
              ? 2
              : 1
          }
          itemsToScroll={1}
        >
          {data.map((e) => (
            <Card hoverable>
              <div style={{ textAlign: "center", height: "20vh" }}>
                <Space wrap size={16}>
                  <Avatar size={64} icon={<UserOutlined />} />
                </Space>
                <Col span={24}> {e.name}</Col>
                <Col span={24}> {e.age}</Col>
                <Col span={24}> {e.address}</Col>
              </div>
            </Card>
          ))}
        </Carousel>
      </Col>
    </div>
  );
}
