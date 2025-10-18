import React, { useState } from "react";
import { Checkbox, Collapse, Button } from "antd";
import { motion } from "framer-motion";
import {
  MdPhoneIphone,
  MdHeadphones,
  MdComputer,
  MdTv,
  MdTabletMac,
  MdKitchen,
  MdVideogameAsset,
  MdCameraAlt,
  MdWatch,
  MdHomeWork,
  MdOutlineFitnessCenter,
  MdVideoLibrary,
} from "react-icons/md";
import { FaClock } from "react-icons/fa";

const { Panel } = Collapse;

const categories = [
  { name: "Smartfonlar", icon: <MdPhoneIphone /> },
  { name: "Quloqchinlar", icon: <MdHeadphones /> },
  { name: "Kompyuterlar va noutbuklar", icon: <MdComputer /> },
  { name: "Televizorlar", icon: <MdTv /> },
  { name: "Smart soatlar", icon: <FaClock /> },
  { name: "Planshetlar", icon: <MdTabletMac /> },
  { name: "Maishiy texnika", icon: <MdKitchen /> },
  { name: "O‘yin pristavkalari", icon: <MdVideogameAsset /> },
  { name: "Kameralar", icon: <MdCameraAlt /> },
  { name: "Soatlar va elektron budilniklar", icon: <MdWatch /> },
  { name: "Aqlli uy va xavfsizlik", icon: <MdHomeWork /> },
  {
    name: "Aqlli soatlar va fitnes bilaguzuklar",
    icon: <MdOutlineFitnessCenter />,
  },
  { name: "Geymerlar uchun mahsulotlar", icon: <MdVideogameAsset /> },
  { name: "Televizorlar va videotexnikalar", icon: <MdVideoLibrary /> },
];

const brands = ["Apple", "Samsung", "Xiaomi", "Sony", "Asus", "Lenovo", "LG"];
const colors = ["Qizil", "Ko'k", "Sriq", "Pushti", "Malla", "Oq", "Yashil"];
const contryes = [
  "Avstraliya",
  "Avstriya",
  "Amerika Samoasi",
  "Belarusiya",
  "Bermud orollari",
  "Buyuk Britaniya",
  "O'zbekiston",
];

const CategoriesSection = () => {
  const [selected, setSelected] = useState([]);

  const handleCheck = (checkedValues) => {
    setSelected(checkedValues);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 px-6 md:px-12 py-6 bg-gray-50 w-full">
      <motion.aside
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-1/4 bg-white rounded-2xl shadow-md p-5 border"
      >
        <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
          Turkumlar
        </h2>
        <div className="flex flex-col gap-3">
          {categories.map((cat, i) => (
            <motion.div
              whileHover={{ scale: 1.05, x: 8 }}
              key={i}
              className="flex items-center gap-3 text-gray-700 hover:text-purple-600 cursor-pointer text-[16px] font-medium transition-all"
            >
              <span className="text-2xl">{cat.icon}</span>
              {cat.name}
            </motion.div>
          ))}
        </div>

        <Collapse
          bordered={false}
          defaultActiveKey={["1"]}
          className="mt-6 bg-transparent"
        >
          <Panel
            header={
              <span className="font-semibold text-gray-800 text-[16px]">
                Brend
              </span>
            }
            key="1"
          >
            <Checkbox.Group
              options={brands}
              value={selected}
              onChange={handleCheck}
              className="flex flex-col gap-2 text-[15px]"
            />
          </Panel>
        </Collapse>
        <Collapse
          bordered={false}
          defaultActiveKey={["1"]}
          className="mt-6 bg-transparent"
        >
          <Panel
            header={
              <span className="font-semibold text-gray-800 text-[16px]">
                Rang
              </span>
            }
            key="1"
          >
            <Checkbox.Group
              options={colors}
              value={selected}
              onChange={handleCheck}
              className="flex flex-col gap-2 text-[15px]"
            />
          </Panel>
        </Collapse>
        <Collapse
          bordered={false}
          defaultActiveKey={["1"]}
          className="mt-6 bg-transparent"
        >
          <Panel
            header={
              <span className="font-semibold text-gray-800 text-[16px]">
                Ishlab chiqarish mamlakati
              </span>
            }
            key="1"
          >
            <Checkbox.Group
              options={contryes}
              value={selected}
              onChange={handleCheck}
              className="flex flex-col gap-2 text-[15px]"
            />
          </Panel>
        </Collapse>

        <Button className="!w-[100%] !h-[40xpx]">Hammasini tozalash</Button>
      </motion.aside>

      
    </div>
  );
};

export default CategoriesSection;
