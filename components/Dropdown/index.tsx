import HeadphoneIcon from "@/assets/Statusbar/headphone.svg";
import BrightnessIcon from "@/assets/Statusbar/brightness.svg";
import WifiIcon from "@/assets/Statusbar/wifi.svg";
import RightIcon from "@/assets/Statusbar/right.svg";
import Image from "next/image";
import PowerIcon from "@/assets/Statusbar/power.svg";
import LockIcon from "@/assets/Statusbar/lock.svg";
import SettingIcon from "@/assets/Statusbar/setting.svg";
import { motion } from "framer-motion";
import "./styles.css";
import { useLockContext } from "@/context/LockContext";
import { useEffect } from "react";

export default function Dropdown() {
  const { setLock } = useLockContext();
  const variants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: 100, opacity: 0 },
  };

  return (
    <motion.div
      className="fixed bg-[#2d2d2d] p-4 w-[240px] right-[4px] rounded-lg top-8 shadow-md"
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="flex justify-between mb-4 gap-2 ">
        <Image src={HeadphoneIcon} alt="headphone icon" width={18} />
        <input type="range" className="flex-1" />
      </div>
      <div className="flex justify-between mb-4 gap-2 ">
        <Image src={BrightnessIcon} alt="headphone icon" width={18} />
        <input type="range" className="flex-1" />
      </div>
      <hr className="mx-8 text-black mb-4" />
      <div className="flex justify-between mb-4 gap-2 bg-gray-hover">
        <Image src={WifiIcon} alt="headphone icon" width={18} />
        <span className="text-gray-400">Lalit-wifi</span>
        <Image src={RightIcon} alt="headphone icon" width={18} />
      </div>
      <hr className="mx-8 text-black mb-4" />
      <div className="flex mb-4 gap-2 bg-gray-hover">
        <Image src={SettingIcon} alt="headphone icon" width={18} />
        <span className="text-gray-400">Settings</span>
      </div>
      <div className="flex mb-4 gap-2 bg-gray-hover">
        <Image src={LockIcon} alt="headphone icon" width={18} />
        <span className="text-gray-400">Lock</span>
      </div>
      <div
        className="flex justify-between mb-4 gap-2 bg-gray-hover cursor-pointer"
        onClick={() => {
          setLock(true);
        }}
      >
        <Image src={PowerIcon} alt="headphone icon" width={18} />
        <span className="text-gray-400">Power On/Off</span>
        <Image src={RightIcon} alt="headphone icon" width={18} />
      </div>
    </motion.div>
  );
}
