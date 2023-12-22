import React from "react";
import "./styles.css";
import Image from "next/image";
import MinimizeIcon from "@/assets/Titlebar/minimize.svg";
import MaximizeIcon from "@/assets/Titlebar/maximize.svg";
import CloseIcon from "@/assets/Titlebar/close.svg";
import { useAppContext } from "@/context/Appcontext";

const ICON_SIZE = 8;

export default function Titlebar({
  title,
  onTop,
}: {
  title: string;
  onTop: boolean;
}) {
  const { removeApp, addApp, AppList, setAppList } = useAppContext();

  function closeHandler(title: string) {
    removeApp(title);
  }

  function maximizeHandler(title: string) {
    const appList = [...AppList];
    appList.forEach((app: any) => {
      if (app.name === title) {
        app.maximize = !app.maximize;
      }
    });
    setAppList(appList);
  }

  function minimizeHandlder(title: string) {
    const appList = [...AppList];
    appList.forEach((app: any) => {
      if (app.name === title) {
        app.minimize = !app.minimize;
      }
    });
    setAppList(appList);
  }

  function bringToFront(identifier: string) {
    console.log("onthe top");
    const appList = [...AppList];
    appList.forEach((app: any) => {
      if (app.name === identifier) {
        app.onTop = true;
      } else {
        app.onTop = false;
      }
    });
    setAppList(appList);
  }

  return (
    <div className="titlebar width-[250px]">
      <div
        className="text-white text-sm flex-1"
        onClick={() => {
          bringToFront(title);
        }}
      >
        {title}
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => {
            minimizeHandlder(title);
          }}
        >
          <Image
            src={MinimizeIcon}
            width={ICON_SIZE}
            height={ICON_SIZE}
            alt="minimize"
          />
        </button>
        <button
          onClick={() => {
            maximizeHandler(title);
          }}
        >
          <Image
            src={MaximizeIcon}
            width={ICON_SIZE}
            height={ICON_SIZE}
            alt="maximize"
          />
        </button>
        <button
          onClick={() => {
            closeHandler(title);
          }}
        >
          <Image
            src={CloseIcon}
            width={ICON_SIZE}
            height={ICON_SIZE}
            alt="close"
          />
        </button>
      </div>
    </div>
  );
}
