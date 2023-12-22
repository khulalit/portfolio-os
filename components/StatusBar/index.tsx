import { useState } from "react";
import Dropdown from "../Dropdown";
import Controls from "./Controls";
import Timecomponent from "./Timecomponent";
import "./styles.css";
import { AnimatePresence } from "framer-motion";

export default function Statusbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="header-bar">
      <span className="flex-1 flex justify-center">
        <Timecomponent />
      </span>
      <div>
        <Controls onClick={() => setOpen((prev: boolean) => !prev)} />
        {open && (
          <AnimatePresence>
            <Dropdown />
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
