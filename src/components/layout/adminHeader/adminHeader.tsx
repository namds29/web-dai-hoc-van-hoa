import { SearchOutlined } from "@ant-design/icons";
import styles from "./header.module.scss";

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
    <header className={styles.header}>
      <div className="flex justify-between">
        <Link to={"/"}>
          <div className="h-20 flex px-8 py-2 items-center">
            <img className="h-full" src="img/LOGO.jpg" alt="" />
            <div className="text-orange-700 ml-4">
              <p className="font-extrabold text-xl ">TUCST University</p>
              <p>Thanh Hoa University of Culture, Sports and Tourism</p>
            </div>
          </div>
        </Link>
        <div className="flex items-center gap-10 mr-10">
          {menuItem.map((item) => (
            <Link className="cursor-pointer" to={item.route}>
              {item.title}
            </Link>
          ))}

          {/* <DropdownItem label="About" items={items} />
            <DropdownItem label="News" items={items} />
            <DropdownItem label="Academics" items={items} />
            <DropdownItem label="Admission" items={items} />
            <DropdownItem label="Student Support" items={items} />
            <DropdownItem label="International Support" items={items} />
            <DropdownItem label="Research" items={items} /> */}
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;