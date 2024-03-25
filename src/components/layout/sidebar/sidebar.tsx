import { Link } from "react-router-dom";
import styles from "./sidebar.module.scss";
import { DashboardOutlined } from "@ant-design/icons";

const Sidebar = ({ menuOpen }: any) => {
  const menuItem = [
    { title: "About", icon: <DashboardOutlined onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />, route: "/admin/about" },
    { title: "News", icon: <DashboardOutlined onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />, route: "/news" },
    { title: "Academics", icon: <DashboardOutlined onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />, route: "/academics" },
    { title: "Admission", icon: <DashboardOutlined onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />, route: "/admission" },
    {
      title: "Student Support",
      icon: <DashboardOutlined onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />,
      route: "/student-support",
    },
    {
      title: "International Partners",
      icon: <DashboardOutlined onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />,
      route: "/international-partners",
    },
    { title: "Research", icon: <DashboardOutlined onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />, route: "/research" },
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
                {item.title}
              </div>
            </div>
          </Link>
        </nav>
      ))}
    </div>
  );
};

export default Sidebar;
