import "./styles.css";
import React from "react";
import Image from "next/image";
import BrowserIcon from "@/assets/Appdockicon/browsericon.png";
import TerminalIcon from "@/assets/Appdockicon/terminal.png";
import DirectoryIcon from "@/assets/Appdockicon/79503_folder_home_icon.png";
import SettingIcon from "@/assets/Appdockicon/setting.png";
import VscodeIcon from "@/assets/Appdockicon/Visual_Studio_Code_1.35_icon.svg.png";
import { useAppContext } from "@/context/Appcontext";
import { appIdResolver } from "@/utils/appIdResolver";

const ICON_SIZE = 40;

export default function () {
  const { addApp, AppList }: any = useAppContext();

  function appOpenHandler(id: number) {
    const app = appIdResolver(id);
    if (!app) return;
    addApp(app);
    console.log(AppList);
  }

  function isOpen(name: string) {
    for (let app of AppList) {
      if (app.name === name && app.minimize) return true;
    }
    return false;
  }

  return (
    <ul className="app-dock">
      <li onClick={() => appOpenHandler(1)}>
        <Image
          src={BrowserIcon}
          alt="icon-browser"
          width={ICON_SIZE}
          data-type="application"
          data-name="browser"
        />
        <Image src={BrowserIcon} alt="icon-browser" width={ICON_SIZE} />
      </li>
      <li onClick={() => appOpenHandler(2)}>
        <Image
          src={TerminalIcon}
          alt="icon-browser"
          width={ICON_SIZE}
          data-type="application"
          data-name="terminal"
        />
        <Image src={TerminalIcon} alt="icon-browser" width={ICON_SIZE} />
      </li>
      <li onClick={() => appOpenHandler(5)}>
        <Image
          src={DirectoryIcon}
          alt="icon-browser"
          width={ICON_SIZE}
          data-type="application"
          data-name="about"
        />
        <Image src={DirectoryIcon} alt="icon-browser" width={ICON_SIZE} />
      </li>
      {/* <li onClick={() => appOpenHandler(4)}>
        <Image
          src={SettingIcon}
          alt="icon-browser"
          width={ICON_SIZE}
          data-type="application"
          data-name="setting"
        />
        <Image src={SettingIcon} alt="icon-browser" width={ICON_SIZE} />
      </li> */}
      <li onClick={() => appOpenHandler(4)}>
        <Image
          src={VscodeIcon}
          alt="icon-browser"
          width={ICON_SIZE}
          data-type="application"
          data-name="vscode"
          className={isOpen("About") ? "badge" : ""}
        />
        <Image src={VscodeIcon} alt="icon-browser" width={ICON_SIZE} />
      </li>
    </ul>
  );
}
