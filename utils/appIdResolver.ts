import About from "@/components/Apps/About";
import Terminal from "@/components/Apps/Terminal";
import VsCode from "@/components/Apps/VsCode";
import Firefox from "@/components/Apps/FIrefox";

export function appIdResolver(id: number) {
  switch (id) {
    case 1:
      return {
        name: "Firefox",
        component: Firefox,
        zindex: 2,
        onTop: true,
        minimize: false,
        maximize: false,
      };
    case 2:
      return {
        name: "Firefox",
        component: Terminal,
        zindex: 3,
        onTop: true,
        minimize: false,
        maximize: false,
      };
    case 3:
      return {
        name: "Setting",
        component: Terminal,
        zindex: 4,
        onTop: true,
        minimize: false,
        maximize: false,
      };
    case 4:
      return {
        name: "VS Code",
        component: VsCode,
        zindex: 5,
        onTop: true,
        minimize: false,
        maximize: false,
      };
    case 5:
      return {
        name: "About",
        component: About,
        zindex: 6,
        onTop: true,
        minimize: false,
        maximize: false,
      };
    default:
      return null;
  }
}
