import DashboardContent from "../DashboardContent/DashboardContent";
import HomeContent from "../HomeContent/HomeContent";

function AppContent(props: { selectedPage: string }) {
  return (
    <>
      {props.selectedPage === "Home" && <HomeContent />}
      {props.selectedPage === "Dashboard" && <DashboardContent />}
    </>
  );
}

export default AppContent;
