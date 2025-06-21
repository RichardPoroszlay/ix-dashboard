import { IxCard, IxContent, IxContentHeader, IxTile } from "@siemens/ix-react";
import PieChart from "../Charts/PieChart/PieChart";
import DonutChart from "../Charts/DonutChart/DonutChart";

import "./DashboardContent.css";
import BarChart from "../Charts/BarChart/BarChart";

function DashboardContent() {
  return (
    <IxContent>
      <IxContentHeader slot="header" headerTitle="Dashboard"></IxContentHeader>
      <div id="gridWrapper">
        <div id="dashboardGrid">
          <IxCard>
            <BarChart />
          </IxCard>
          <IxCard>
            <PieChart />
          </IxCard>
          <IxCard>
            <DonutChart />
          </IxCard>
        </div>
        <div id="dashboardTitles">
          <IxTile size="medium">
            <div slot="header">BarChart</div>
            <div className="text-l">Top Selling Products</div>
          </IxTile>
          <IxTile size="medium">
            <div slot="header">PieChart</div>
            <div className="text-l">CO2 emissions</div>
          </IxTile>
          <IxTile size="medium">
            <div slot="header">DonutChart</div>
            <div className="text-l">Endpoint OS Distribution</div>
          </IxTile>
        </div>
      </div>
    </IxContent>
  );
}

export default DashboardContent;
