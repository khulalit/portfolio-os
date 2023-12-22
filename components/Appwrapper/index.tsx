import { AppProvider, useAppContext } from "@/context/Appcontext";
import React, { Fragment } from "react";
import Statusbar from "@/components/StatusBar";
import AppDock from "../AppDock";
import Window from "../Window";

export default function Appwrapper() {
  const { AppList } = useAppContext();
  return (
    <div className="h-full">
      <Statusbar />
      {AppList?.map((component: any) => (
        <Fragment key={component.zindex}>
          <Window
            zindex={999}
            styleClass={`${component.minimize && "hidden"}`}
            Component={component.component}
            title={component.name}
            maximize={component.maximize}
            onTop={component.onTop}
          />
        </Fragment>
      ))}
      <AppDock />
    </div>
  );
}
