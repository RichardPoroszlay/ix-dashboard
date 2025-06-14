import { IxApplication } from "@siemens/ix-react";
import "./App.css";
import AppHeader from "./components/AppHeader/AppHeader";
import AppMenu from "./components/AppMenu/AppMenu";
import AppContent from "./components/AppContent/AppContent";
import { useState } from "react";

function App() {
  const [selectedPage, setSelectedPage] = useState<string>("Home");

  return (
    <IxApplication>
      <AppHeader />
      <AppMenu selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <AppContent selectedPage={selectedPage} />
    </IxApplication>
  );
}

export default App;
