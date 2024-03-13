import React, { useState } from "react";
import styles from "./admin.layout.module.scss";
import AdminHeader from "../adminHeader/adminHeader";
import Sidebar from "../sidebar/sidebar";

type Props = {
    children: React.ReactNode;
  };
  const AdminLayout: React.FC<Props> = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(true);
  
    const handleMenuToggle = () => {
      setMenuOpen(!menuOpen);
    };
    return (
      <div>
        <AdminHeader handleMenuToggle={handleMenuToggle} />
        <div className={styles.container}>
          <Sidebar menuOpen={menuOpen} />
          <div className={styles["main-content"]}>
            <div className="absolute w-97 pr-3">{children}</div>
          </div>
        </div>
      </div>
    );
  };
  export default AdminLayout;
