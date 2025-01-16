import { Button, Layout } from "antd";

import { Outlet } from "react-router-dom";

import SideBar from "./SideBar";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";

const { Content, Header } = Layout;

const MainLayout = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Layout style={{ height: "100%" }}>
      <SideBar />
      <Layout>
        <Header className="p-0 text-right">
          <Button
            onClick={handleLogout}
            className="bg-red-500 text-white border-none mr-4"
          >
            Logout
          </Button>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            {/* main content */}
            <Outlet></Outlet>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
