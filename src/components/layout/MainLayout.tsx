import { Layout, Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import { NavLink, Outlet } from "react-router-dom";
const { Content, Footer, Header } = Layout;

const items: MenuProps["items"] = [
  {
    key: "DashBoard",
    label: <NavLink to={"/admin/dashboard"}>DashBoard</NavLink>,
  },
  {
    key: "User Management",
    label: "User Management",
    children: [
      {
        key: "Create Admin",
        label: <NavLink to={"/admin/create-admin"}>Create Admin</NavLink>,
      },
      {
        key: "Create Faculty",
        label: <NavLink to={"/admin/create-faculty"}>Create Faculty</NavLink>,
      },
      {
        key: "Create Student",
        label: <NavLink to={"/admin/create-student"}>Create Student</NavLink>,
      },
    ],
  },
];

const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        // onBreakpoint={(broken) => {
        //   console.log(broken);
        // }}
        // onCollapse={(collapsed, type) => {
        //   console.log(collapsed, type);
        // }}
      >
        <div className="text-white h-16 flex justify-center items-center">
          <h1 className="font-semibold text-xl">PH University</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
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
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
