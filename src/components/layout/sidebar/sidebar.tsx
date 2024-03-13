import { Link } from "react-router-dom";
import styles from "./sidebar.module.scss";
import {
  DashboardOutlined,
  ExclamationCircleOutlined,
  OrderedListOutlined,
} from "@ant-design/icons";

const Sidebar = ({ menuOpen }: any) => {
  const menuItem = [
    { title: "Dashboard", icon: <DashboardOutlined />, route: "/dashboard" },
    {
      title: "Category",
      icon: <ExclamationCircleOutlined />,
      route: "/category",
    },
    { title: "Wallpaper", icon: <OrderedListOutlined />, route: "/wallpaper" },
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
