import React from "react";
import styles from "./layout.module.scss";
import Header from "./header/header";
import Footer from "./footer";

type Props = {
  children: React.ReactNode;
};
const Layout: React.FC<Props> = ({ children }) => {
  // const [menuOpen, setMenuOpen] = useState(true);

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles["main-content"]}>{children}</div>
      </div>
      <Footer />
    </div>
  );
};
export default Layout;
