import React from "react";
import { Input, Dropdown, Menu, Button, Breadcrumb } from "antd";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  HeartOutlined,
  UserOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  MdLocalOffer,
  MdChildFriendly,
  MdFiberNew,
  MdBrush,
  MdPhoneIphone,
  MdDevices,
  MdKitchen,
  MdCheckroom,
  MdDirectionsWalk,
  MdWatch,
} from "react-icons/md";
import bayroq from "../assets/img/bayroq.jpg";
import logo from "../assets/img/logo.png";

const Header = () => {
  const menu = (
    <Menu
      items={[
        { key: "1", label: <a href="#">Savol-javoblar</a> },
        { key: "2", label: <a href="#">Buyurtmalarim</a> },
        {
          key: "3",
          label: (
            <div className="flex items-center gap-1">
              <img src={bayroq} alt="flag" className="w-5 h-3 rounded" />
              O‘zbekcha
            </div>
          ),
        },
      ]}
    />
  );

  const categories = [
    { name: "Hafta tovarlari", icon: <MdLocalOffer className="text-xl" /> },
    { name: "Onalar va bolalar uchun", icon: <MdChildFriendly className="text-xl" /> },
    { name: "Yangi kolleksiya", icon: <MdFiberNew className="text-xl" /> },
    { name: "Xobbi va ijod", icon: <MdBrush className="text-xl" /> },
    { name: "Smartfonlar", icon: <MdPhoneIphone className="text-xl" /> },
    { name: "Elektronika", icon: <MdDevices className="text-xl" /> },
    { name: "Maishiy texnika", icon: <MdKitchen className="text-xl" /> },
    { name: "Kiyim", icon: <MdCheckroom className="text-xl" /> },
    { name: "Poyabzallar", icon: <MdDirectionsWalk className="text-xl" /> },
    { name: "Aksessuarlar", icon: <MdWatch className="text-xl" /> },
  ];
 

  return (
    <header className="w-full shadow-sm bg-white font-[Inter]">
      <div className="bg-gray-100 text-[15px] py-2 px-6 hidden md:flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-6 text-gray-700">
          <div className="flex items-center gap-1">
            <FaMapMarkerAlt className="text-purple-600" />
            <p>
              Shahar: <span className="font-semibold">Toshkent</span>
            </p>
          </div>
          <p className="hover:text-purple-600 cursor-pointer transition-colors">
            Topshirish punktlari
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-purple-600 font-semibold"
        >
          Buyurtmangizni 1 kun ichida bepul yetkazib beramiz!
        </motion.div>

        <Dropdown overlay={menu} placement="bottomRight">
          <a
            onClick={(e) => e.preventDefault()}
            className="cursor-pointer flex items-center gap-1 text-gray-700 hover:text-purple-600 transition-colors font-medium"
          >
            Sotuvchi bo‘lish <DownOutlined className="text-xs" />
          </a>
        </Dropdown>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-4 gap-4 bg-white border-b">
        <motion.a
          href="/"
          whileHover={{ scale: 1.03 }}
          className="flex items-center gap-2"
        >
          <img src={logo} alt="logo" className="w-44 h-auto object-contain" />
        </motion.a>

        <div className="flex items-center gap-3 w-full md:w-2/5">
          <Button
            type="default"
            className="border-purple-600 text-purple-600 rounded-full font-semibold text-[15px] hover:bg-purple-50 transition-all"
          >
            Katalog
          </Button>
          <Input
            placeholder="Mahsulotlar va turkumlar izlash"
            prefix={<SearchOutlined />}
            size="large"
            className="rounded-full hover:shadow-md transition-all text-[15px]"
          />
        </div>

        <ul className="hidden md:flex items-center gap-8 text-gray-700 text-[15px] font-medium">
          <motion.li
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2 cursor-pointer hover:text-purple-600 transition-all"
          >
            <UserOutlined /> Kirish
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2 cursor-pointer hover:text-purple-600 transition-all"
          >
            <HeartOutlined /> Saralangan
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2 cursor-pointer hover:text-purple-600 transition-all"
          >
            <ShoppingCartOutlined className="text-lg" /> Savat
          </motion.li>
        </ul>
      </div>

      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="hidden md:flex items-center justify-between w-full px-12 py-4 bg-white text-[15px] font-medium text-gray-700 shadow-sm"
      >
        {categories.map((cat, i) => (
          <motion.a
            key={i}
            href="#"
            whileHover={{
              scale: 1.05,
              color: "#9333EA",
            }}
            className="flex items-center gap-2 cursor-pointer whitespace-nowrap transition-all"
          >
            {cat.icon} {cat.name}
          </motion.a>
        ))}
      </motion.nav>
      <div className="w-full bg-gray-50 px-12 py-3 ">
        <Breadcrumb
          items={[
            { title: <a href="/" className="hover:text-purple-600">Bosh sahifa</a> },
            { title: <a href="#" className="hover:text-purple-600">Barcha toifalar</a> },
            { title: <span className="font-semibold text-gray-800">Elektronika</span> },
          ]}
        />
      </div>
    </header>
  );
};

export default Header;
