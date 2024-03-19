import { SearchOutlined } from "@ant-design/icons";
import { AppBar, Toolbar, IconButton, Typography, Avatar } from "@mui/material";
import styles from "./header.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const AdminHeader = ({ handleMenuToggle }: any) => {
  const menuItem = [
    { title: "About", route: "/about" },
    { title: "News", route: "/news" },
    { title: "Academics", route: "/academics" },
    { title: "Admission", route: "/admission" },
    { title: "Student Support", route: "/student-support" },
    { title: "International Partners", route: "/international-partners" },
    { title: "Research", route: "/research" },
  ];
  return (
    <>
      <AppBar position="sticky" className={styles["app-bar"]}>
        <Toolbar>
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center">
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuToggle}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={styles.title}>
                Quản lý trang chủ
              </Typography>
            </div>

            <div className="flex">
              <Avatar>N</Avatar>
              {/* <DropdownHeader /> */}
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AdminHeader;
