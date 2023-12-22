import { createContext, useContext, useState } from "react";

const AppContext = createContext<any>([]);

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }: any) => {
  const [AppList, setAppList] = useState<any>([]);
  console.log(AppList);

  function hasApp(name: string): boolean {
    for (let app of AppList) {
      if (app.name === name) return true;
    }
    return false;
  }

  const addApp = (App: any) => {
    if (AppList.length === 0 || !hasApp(App.name)) {
      setAppList((prevList: any) => {
        const n = prevList.map((element: any) => {
          return {
            ...element,
            onTop: false,
          };
        });
        return [...n, App];
      });
    } else if (hasApp(App.name)) {
      const newList = AppList.map((app: any) => {
        if (App.name === app.name) {
          app.minimize = false;
        }
        return app;
      });
      setAppList(newList);
    }
  };

  const removeApp = (apptitle: any) => {
    setAppList((prevList: any) =>
      prevList.filter((App: any) => App.name !== apptitle)
    );
  };

  return (
    <AppContext.Provider value={{ AppList, addApp, removeApp, setAppList }}>
      {children}
    </AppContext.Provider>
  );
};
