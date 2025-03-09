"use client";

import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Layout, theme, Button, Dropdown, Menu } from "antd";
import Image from "next/image";
import "./globals.css";
import {
  UserOutlined,
  ShoppingCartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import "@ant-design/v5-patch-for-react-19";
import { useUserStore } from "@/stores/userStore";
import { useRouter } from "next/navigation";
import type { MenuProps } from "antd";

const { Header, Content, Footer } = Layout;
const RootLayout = ({ children }: React.PropsWithChildren) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { user, isAuthenticated, logout } = useUserStore();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        logout(); // 清除状态
        router.push("/login");
      }
    } catch (error) {
      console.error("登出失败:", error);
    }
  };

  const userMenu: MenuProps["items"] = [
    {
      key: "1",
      label: `email: ${user?.email}`,
    },
    {
      key: "2",
      icon: <LogoutOutlined />,
      label: "退出登录",
      onClick: handleLogout,
    },

  ];

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
              <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                {isAuthenticated ? (
                  <>
                    <Dropdown menu={{items:userMenu}} placement="bottomRight">
                      <Button
                        type="text"
                        icon={<UserOutlined style={{ fontSize: 24 }} />}
                      />
                    </Dropdown>
                    <ShoppingCartOutlined style={{ fontSize: 24 }} />
                  </>
                ) : (
                  <Button type="primary" onClick={() => router.push("/login")}>
                    登录
                  </Button>
                )}
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
