"use client";

import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Layout, theme } from "antd";
import Image from "next/image";
import './globals.css'
import { UserOutlined,ShoppingCartOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const RootLayout = ({ children }: React.PropsWithChildren) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <AntdRegistry>
          <Layout style={{ minHeight: "100vh" }}>
            <Header
              style={{
                position: "sticky",
                top: 0,
                zIndex: 1,
                width: "100%",
                display: "flex",
                alignItems: "center",
                backgroundColor: "#f1f1f1",
                justifyContent: "space-between",
              }}
            >
              <div
                className="logo"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 64, // 设置与 Image 高度一致
                }}
              >
                <Image src="/next.svg" alt="logo" width={80} height={64} />
              </div>
              <div style={{ display: "flex", gap: 16 }}>
              <UserOutlined style={{ fontSize: 24 }}/>
              <ShoppingCartOutlined style={{ fontSize: 24 }}/>
              </div>
            </Header>
            <Content style={{ padding: "0 48px" }}>
              <div
                style={{
                  padding: 24,
                  minHeight: 380,
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
                }}
              >
                {children}
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©{new Date().getFullYear()} Created by wuyeqianli
            </Footer>
          </Layout>
        </AntdRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
