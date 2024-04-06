import { Link } from "react-router-dom";
import styles from "./sidebar.module.scss";
import {
  BankOutlined,
  BookOutlined,
  CoffeeOutlined,
  DesktopOutlined,
  FileSearchOutlined,
  GlobalOutlined,
  HomeOutlined,
  InfoOutlined,
} from "@ant-design/icons";

const Sidebar = ({ menuOpen }: any) => {
  const menuItem = [
    { title: "Home page", icon: <HomeOutlined />, route: "/admin" },
    { title: "About", icon: <InfoOutlined />, route: "/admin/about" },
    { title: "News", icon: <CoffeeOutlined />, route: "/admin/news" },
    { title: "Academics", icon: <BookOutlined />, route: "/admin/academics" },
    { title: "Admission", icon: <BankOutlined />, route: "/admin/admission" },
    {
      title: "Student Support",
      icon: <DesktopOutlined />,
      route: "/student-support",
    },
    {
      title: "International Partners",
      icon: <GlobalOutlined />,
      route: "/international-partners",
    },
    { title: "Research", icon: <FileSearchOutlined />, route: "/research" },
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
