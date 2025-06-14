import { IxApplication } from "@siemens/ix-react";
import "./App.css";
import AppHeader from "./components/AppHeader/AppHeader";
import AppMenu from "./components/AppMenu/AppMenu";
import AppContent from "./components/AppContent/AppContent";

function App() {
  return (
    <IxApplication>
      <AppHeader />
      <AppMenu />
      <AppContent />
    </IxApplication>
  );
}

export default App;
