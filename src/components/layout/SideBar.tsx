import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { sideBarItemsGenerator } from "../../utils/sideBarItemsGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.routes";
import { TSidebarItem } from "../../types";

const UserRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};

const SideBar = () => {
  const role = "admin";
  let sidebarItems: TSidebarItem[];

  switch (role) {
    case UserRole.ADMIN:
      sidebarItems = sideBarItemsGenerator(adminPaths, UserRole.ADMIN);
      break;
    case UserRole.FACULTY:
      sidebarItems = sideBarItemsGenerator(facultyPaths, UserRole.FACULTY);
      break;
    case UserRole.STUDENT:
      sidebarItems = sideBarItemsGenerator(studentPaths, UserRole.STUDENT);
      break;
    default:
      sidebarItems = [];
  }

  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div className="text-white h-16 flex justify-center items-center">
        <h1 className="font-semibold text-xl">PH University</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default SideBar;
