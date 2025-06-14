import {
  IxApplicationHeader,
  IxAvatar,
  IxDropdownItem,
} from "@siemens/ix-react";

function AppHeader() {
  return (
    <IxApplicationHeader name="IX Admin Dashboard">
      <div className="placeholder-logo" slot="logo"></div>
      <IxAvatar username="John Doe" extra="Administrator">
        <IxDropdownItem label="Action 1"></IxDropdownItem>
        <IxDropdownItem label="Action 2"></IxDropdownItem>
      </IxAvatar>
    </IxApplicationHeader>
  );
}

export default AppHeader;
