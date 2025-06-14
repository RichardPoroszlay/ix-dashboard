import { iconHome, iconPiechart } from "@siemens/ix-icons/icons";
import { IxMenu, IxMenuItem } from "@siemens/ix-react";

function AppMenu() {
  return (
    <IxMenu>
      <IxMenuItem home icon={iconHome}>
        Home
      </IxMenuItem>
      <IxMenuItem icon={iconPiechart}>Dashboard</IxMenuItem>
    </IxMenu>
  );
}

export default AppMenu;
