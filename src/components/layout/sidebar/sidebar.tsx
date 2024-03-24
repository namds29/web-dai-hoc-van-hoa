import { Link } from "react-router-dom";
import styles from "./sidebar.module.scss";
import { DashboardOutlined } from "@ant-design/icons";

const Sidebar = ({ menuOpen }: any) => {
  const menuItem = [
    { title: "About", icon: <DashboardOutlined />, route: "/admin/about" },
    { title: "News", icon: <DashboardOutlined />, route: "/news" },
    { title: "Academics", icon: <DashboardOutlined />, route: "/academics" },
    { title: "Admission", icon: <DashboardOutlined />, route: "/admission" },
    {
      title: "Student Support",
      icon: <DashboardOutlined />,
      route: "/student-support",
    },
    {
      title: "International Partners",
      icon: <DashboardOutlined />,
      route: "/international-partners",
    },
    { title: "Research", icon: <DashboardOutlined />, route: "/research" },
  ];
  return (
    <div className={styles.sidebar}>
      {menuItem.map((item, index) => (
        <nav
          key={index}
          aria-label="main mailbox folders"
          style={{ padding: 0 }}
        >
          <Link to={item.route} className={styles.link}>
            <div className={styles["menu-sidebar"]}>
              <div className={styles["icon-sidebar"]}>{item.icon}</div>
              <div
                className={
                  menuOpen ? styles["menu--text"] : styles["menu--text-closed"]
                }
              >
                {item.title}{" "}
              </div>
            </div>
          </Link>
        </nav>
      ))}
    </div>
  );
};

export default Sidebar;
