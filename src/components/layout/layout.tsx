import React, { useState } from "react";
import styles from "./layout.module.scss";
import Header from "./header/header";


type Props = {
    children: React.ReactNode;
};
const Layout: React.FC<Props> = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(true);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <div>
            <Header handleMenuToggle={handleMenuToggle} />
            <div className={styles.container}>
                <div className={styles["main-content"]}>
                    {children}
                </div>
            </div>
        </div>
    );
};
export default Layout;
