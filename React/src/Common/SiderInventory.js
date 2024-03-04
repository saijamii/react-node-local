import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  AppstoreOutlined,
  BookOutlined,
  FileOutlined,
  TeamOutlined,
  ShoppingOutlined,
  StarOutlined,
  AppstoreAddOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  FileDoneOutlined,
  UsergroupAddOutlined,
  BulbOutlined,
  ApartmentOutlined,
  SkinOutlined,
  TagsOutlined,
  BarsOutlined,
  UserOutlined,
  DatabaseOutlined,
  DeploymentUnitOutlined,
} from "@ant-design/icons";
import { Link, Route, BrowserRouter, Routes } from "react-router-dom";
import SubMenu from "antd/lib/menu/SubMenu";
const { Sider } = Layout;

export default function SiderInventory({ defaultOpenKeys }) {
  const [openKeys, setOpenKeys] = useState("");
  const [collapsed, setcollapsed] = useState(true);
  const rootKeys = ["sub1", "sub2", "sub3"];
  const [show, setShow] = useState(false);

  const collapse = () => {
    setcollapsed(!collapsed);
    setShow(!show);
  };

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <>     
      <Sider
        collapsed={collapsed}
        onCollapse={() => collapse()}
        collapsible
        breakpoint="xl"
        onBreakpoint={(broken) => {
          console.log("");
        }}
      >
        <Menu
          inlineCollapsed={collapsed}
          onOpenChange={onOpenChange}
          openKeys={openKeys}
          className="sider-menu"
          mode="inline"
          defaultActiveFirst={["sub1"]}
          defaultOpenKeys={["sub1"]}
          style={{ position: "relative", height: "100%" }}
        >
          <Menu.Item
            key="1"
            style={{ marginLeft: "-3px" }}
            icon={<DashboardOutlined />}
          >
            <Link to="/dashboard" title="Dashboard">
              <span></span>
            </Link>
            Dashboard
          </Menu.Item>

          <SubMenu icon={<ShoppingCartOutlined />} title="SALES" key="sub1">
            <Menu.Item key="3" icon={<BookOutlined />}>
              <Link to="/quotation" title="Quotes">
                <span> </span>
              </Link>
              Quotes
            </Menu.Item>
            <Menu.Item key="4" icon={<ShoppingCartOutlined />}>
              <Link to="/salesOrderInventory">
                <span> </span>
              </Link>
              Sales Order
            </Menu.Item>
            <Menu.Item key="8" icon={<FileDoneOutlined />}>
              <Link to="/salesOrder">
                <span></span>
              </Link>
              SO Fulfilment
            </Menu.Item>
            <Menu.Item key="5" icon={<FileOutlined />}>
              <Link to="/invoices">
                <span> </span>
              </Link>
              Invoices
            </Menu.Item>
            <Menu.Item key="6" icon={<TeamOutlined />}>
              <Link to="/customers" title="Customers">
                <span> </span>
              </Link>
              Customers
            </Menu.Item>
          </SubMenu>
          <SubMenu icon={<BarsOutlined />} title="PROCUREMENT" key="sub2">
            <Menu.Item key="7" icon={<ShopOutlined />}>
              <Link to="/vendors">
                <span></span>
              </Link>
              Vendors
            </Menu.Item>
            <Menu.Item key="9" icon={<StarOutlined />}>
              <Link to="/wantbook" title="WantBook">
                <span></span>
              </Link>
              Want Book
            </Menu.Item>
            <Menu.Item key="10" icon={<ShoppingOutlined />}>
              <Link to="/purchaseOrders">
                <span></span>
              </Link>
              Purchase Orders
            </Menu.Item>
            <Menu.Item key="11" icon={<AppstoreAddOutlined />}>
              <Link to="/receivedPO">
                <span></span>
              </Link>
              Receive PO
            </Menu.Item>
            <Menu.Item key="12" icon={<AppstoreOutlined />}>
              <Link to="/receivedItems"></Link>
              Received Items
            </Menu.Item>
          </SubMenu>
          <SubMenu icon={<UserOutlined />} title="ADMIN" key="sub3">
            {/* <Menu.Item key="13" icon={<ContainerOutlined />}>
            <Link to="/reports">
              <span> </span>
            </Link>
            Reports
          </Menu.Item> */}
            {/* <Menu.Item key="14" icon={<SettingOutlined />}>
            <Link to="/settings"></Link>
            Settings
          </Menu.Item> */}
            <Menu.Item key="15" icon={<UsergroupAddOutlined />}>
              <Link to="/users"></Link>
              Users
            </Menu.Item>
            <Menu.Item key="16" icon={<ApartmentOutlined />}>
              <Link to="/roles"></Link>
              Roles
            </Menu.Item>
            <Menu.Item key="17" icon={<SkinOutlined />}>
              <Link to="/salesPerson"></Link>
              Sales Person
            </Menu.Item>
            <Menu.Item key="18" icon={<BulbOutlined />}>
              <Link to="/installationLocation"></Link>
              Installation Location
            </Menu.Item>
            <Menu.Item key="19" icon={<DeploymentUnitOutlined />}>
              <Link to="/dataManagement"></Link>
              Data Management
            </Menu.Item>
            <Menu.Item key="21" icon={<DatabaseOutlined />}>
              <Link to="/customProducts"></Link>
              Custom Products
            </Menu.Item>
            <Menu.Item key="20" icon={<TagsOutlined />}>
              <Link to="/customTags"></Link>
              Tags
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    </>
  );
}
