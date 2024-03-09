import React, { useState, useEffect } from "react";
import { DualAxes } from "@ant-design/plots";
import { Area } from "@ant-design/plots";
import { Col, Row, Card } from "antd";
import { Gauge } from "@ant-design/plots";
import { Liquid } from "@ant-design/plots";
import { RingProgress } from "@ant-design/plots";

export default function Dashboard(props) {
  const [data, setData] = useState([]);

  const uvBillData = [
    {
      time: "2019-03",
      value: 350,
      type: "uv",
    },
    {
      time: "2019-04",
      value: 900,
      type: "uv",
    },
    {
      time: "2019-05",
      value: 300,
      type: "uv",
    },
    {
      time: "2019-06",
      value: 450,
      type: "uv",
    },
    {
      time: "2019-07",
      value: 470,
      type: "uv",
    },
    {
      time: "2019-03",
      value: 220,
      type: "bill",
    },
    {
      time: "2019-04",
      value: 300,
      type: "bill",
    },
    {
      time: "2019-05",
      value: 250,
      type: "bill",
    },
    {
      time: "2019-06",
      value: 220,
      type: "bill",
    },
    {
      time: "2019-07",
      value: 362,
      type: "bill",
    },
  ];
  const transformData = [
    {
      time: "2019-03",
      count: 800,
    },
    {
      time: "2019-04",
      count: 600,
    },
    {
      time: "2019-05",
      count: 400,
    },
    {
      time: "2019-06",
      count: 380,
    },
    {
      time: "2019-07",
      count: 220,
    },
  ];
  const config = {
    data: [uvBillData, transformData],
    xField: "time",
    yField: ["value", "count"],
    geometryOptions: [
      {
        geometry: "column",
        isGroup: true,
        seriesField: "type",
        columnWidthRatio: 0.4,
        label: {},
        color: ["#5B8FF9", "#5D7092"],
        pattern: ({ type }) => {
          return {
            type: type === "bill" ? "square" : "line",
          };
        },
      },
      {
        geometry: "line",
        color: "#5AD8A6",
      },
    ],
    legend: {
      custom: true,
      position: "bottom",
      items: [
        {
          value: "uv",
          name: "uv",
          marker: {
            symbol: "square",
            style: {
              fill: "#5B8FF9",
              r: 5,
            },
          },
        },
        {
          value: "bill",
          name: "账单",
          marker: {
            symbol: "square",
            style: {
              fill: "#5D7092",
              r: 5,
            },
          },
        },
        {
          value: "count",
          name: "数值",
          marker: {
            symbol: "square",
            style: {
              fill: "#5AD8A6",
              r: 5,
            },
          },
        },
      ],
    },
  };

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch(
      "https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };
  const configs = {
    data,
    xField: "timePeriod",
    yField: "value",
    xAxis: {
      range: [0, 1],
    },
  };
  const confige = {
    percent: 0.75,
    radius: 0.75,
    range: {
      color: "#30BF78",
      width: 12,
    },
    indicator: {
      pointer: {
        style: {
          stroke: "#D0D0D0",
        },
      },
      pin: {
        style: {
          stroke: "#D0D0D0",
        },
      },
    },
    statistic: {
      content: {
        formatter: ({ percent }) => `Rate: ${(percent * 100).toFixed(0)}%`,
      },
      style: {
        fontSize: 60,
      },
    },
    gaugeStyle: {
      lineCap: "round",
    },
  };
  const confi = {
    percent: 0.25,
    outline: {
      border: 4,
      distance: 8,
    },
    wave: {
      length: 128,
    },
  };
  const data1 = {
    height: 300,
    width: 150,
    autoFit: false,
    percent: 0.3,
    color: ["#4096ff", "#E8EDF3"],
  };
  const data2 = {
    height: 300,
    width: 150,
    autoFit: false,
    percent: 0.5,
    color: ["#b7eb8f", "#E8EDF3"],
  };
  const data3 = {
    height: 300,
    width: 150,
    autoFit: false,
    percent: 0.7,
    color: ["#237804", "#E8EDF3"],
  };

  return (
    <Col span={24} style={{ marginTop: "80px" }}>
      <h1>Monitor Dashboard</h1>
      <Col span={24}>
        <Row gutter={[6, 6]}>
          <Col span={18}>
            <Card>
              {/* <Col span={24}>
              <Row>
                <Col span={6}><h2>4,543,233</h2></Col>
                <Col span={6}><h2>92%</h2></Col>
                <Col span={6}><h2>01:10:12</h2></Col>
                <Col span={6}><h2>234</h2></Col>
              </Row>
            </Col> */}
              <Col span={24}>
                <DualAxes {...config} style={{ height: "68vh" }} />
              </Col>
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Area {...configs} style={{ height: "31vh", width: "47vh" }} />{" "}
            </Card>
            <Card>
              <Gauge {...confige} style={{ height: "31vh", width: "47vh" }} />
            </Card>
          </Col>
        </Row>
        <Col span={24} style={{ padding: "10px" }}>
          <Row gutter={[6, 6]}>
            <Col span={18}>
              <Row gutter={[32, 32]}>
                <Col span={18}>
                  <Card>
                    <Col span={24}>
                      <Row gutter={[10, 10]} justify={"center"}>
                        <Col span={8}>
                          <RingProgress {...data1} />
                        </Col>
                        <Col span={8}>
                          <RingProgress {...data2} />
                        </Col>
                        <Col span={8}>
                          <RingProgress {...data3} />
                        </Col>
                      </Row>
                    </Col>
                  </Card>
                </Col>
                <Col span={6}>
                  <Card></Card>
                </Col>
              </Row>
            </Col>
            <Col span={4}>
              {" "}
              <Card style={{ height: "36vh", width: "50vh" }}>
                <Liquid {...confi} style={{ height: "33vh", width: "47vh" }} />
              </Card>
            </Col>
          </Row>
        </Col>
      </Col>
    </Col>
  );
}
