import { iconHome, iconPiechart } from "@siemens/ix-icons/icons";
import { IxMenu, IxMenuItem } from "@siemens/ix-react";

function AppMenu(props: {
  selectedPage: string;
  setSelectedPage: (selectedPage: string) => void;
}) {
  return (
    <IxMenu>
      <IxMenuItem
        home
        icon={iconHome}
        onClick={() => props.setSelectedPage("Home")}
      >
        Home
      </IxMenuItem>
      <IxMenuItem
        icon={iconPiechart}
        onClick={() => props.setSelectedPage("Dashboard")}
      >
        Dashboard
      </IxMenuItem>
    </IxMenu>
  );
}

export default AppMenu;
