import { IxContent, IxContentHeader } from "@siemens/ix-react";

function AppContent() {
  return (
    <IxContent>
      <IxContentHeader
        slot="header"
        headerTitle="My Content Page"
      ></IxContentHeader>
    </IxContent>
  );
}

export default AppContent;
