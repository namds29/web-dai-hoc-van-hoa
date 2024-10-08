import { SearchOutlined, MenuOutlined } from "@ant-design/icons";
import styles from "./header.module.scss";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItem = [
    { title: "About", route: "/about" },
    { title: "News", route: "/news" },
    { title: "Academics", route: "/academics" },
    { title: "Admission", route: "/admission" },
    { title: "Student Support", route: "/student-support" },
    { title: "International Partners", route: "/international-partners" },
    { title: "Research", route: "/research" },
  ];

  useEffect(() => {
    // console.log(isOpen, window.innerWidth < 1280 ? false : true)
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 1280 && setIsOpen(false)
    );
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <div className={styles.slogan}>
          Nurturing passion - Encouraging creativity - Respecting differences -
          Cooperating for the development
        </div>
        <div className="flex gap-3 items-center mr-4 relative">
          <button className="leading-none" onClick={() => console.log("1")}>
            <SearchOutlined className="text-white" />
          </button>
          <a href="https://tucst.edu.vn/web/">
            <img className="h-4" src="img/vn.png" alt="" />
          </a>
          <a>
            <img className="h-4" src="img/en.png" alt="" />
          </a>
        </div>
      </div>
      <section className="relative bg-white">
        <div className="flex flex-col xl:flex-row justify-between">
          <Link to={"/"}>
            <div className="h-20 flex px-4 xl:px-8 py-2 items-center">
              <img className="h-full" src="img/LOGO.jpg" alt="" />
              <div className="text-orange-700 ml-4 mr-8">
                <p className="font-extrabold text-xl ">TUCST</p>
                <p>Thanh Hoa University of Culture, Sports and Tourism</p>
              </div>
            </div>
          </Link>

          <div
            className="absolute top-[30px] right-[20px] xl:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <MenuOutlined />
          </div>

          <div
            className={`flex flex-col h-[85vh] xl:h-20 xl:flex-row ${
              !isOpen ? styles.nav_item : ""
            } items-end xl:items-center gap-8 mr-10`}
          >
            {menuItem.map((item, index) => (
              <Link
                key={index}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer"
                to={item.route}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
