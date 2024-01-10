
import { SearchOutlined } from "@ant-design/icons";
import styles from "./header.module.scss";

import { items } from './menu.ts'

import DropdownItem from "../../../components/dropdown/dropdown-item.tsx";



const Header = ({ }: any) => {

  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <div className="flex gap-3 items-center mr-4">
          <button className="leading-none" onClick={() => console.log('1')}>
            <SearchOutlined className="text-white" />
          </button>
          <a href=""> <img className="h-4" src="img/vn.png" alt="" /></a>
          <a href=""> <img className="h-4" src="img/en.png" alt="" /></a>
        </div>

      </div>
      <section className=" bg-white">
        <div className="flex justify-between">
          <div className="h-20 flex px-8 py-2 items-center">
            <img className="h-full" src="img/LOGO.jpg" alt="" />
            <div className="text-orange-700 ml-4">
              <p className="font-extrabold text-xl ">TUCST University</p>
              <p>Thanh Hoa University of Culture, Sports and Tourism</p>
            </div>
          </div>
          <div className="flex items-center" >
            <DropdownItem label="About" items={items} />
            <DropdownItem label="News" items={items} />
            <DropdownItem label="Academics" items={items} />
            <DropdownItem label="Admission" items={items} />
            <DropdownItem label="Student Support" items={items} />
            <DropdownItem label="International Support" items={items} />
            <DropdownItem label="Research" items={items} />
          </div>
        </div>
      </section>
    </header>

  );
};

export default Header;
