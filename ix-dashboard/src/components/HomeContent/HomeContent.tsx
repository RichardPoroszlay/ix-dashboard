import {
  IxCard,
  IxCardContent,
  IxContent,
  IxContentHeader,
  IxIcon,
  IxTypography,
} from "@siemens/ix-react";

import "./HomeContent.css";
import { cardData } from "./cardData";

function HomeContent() {
  return (
    <IxContent>
      <IxContentHeader
        slot="header"
        headerTitle="Hi there, John Doe"
      ></IxContentHeader>
      <div id="gridWrapper">
        <div id="leftGrid">
          {cardData.map((card, idx) => (
            <IxCard
              variant={card.variant}
              style={{ width: "100%", height: "100%" }}
              key={idx}
            >
              <IxCardContent>
                <IxIcon name={card.icon}></IxIcon>
                <IxTypography bold>{card.title}</IxTypography>
                <IxTypography>
                  {card.frameworks.map((fw, i) => (
                    <span key={i}>
                      {fw}
                      <br />
                    </span>
                  ))}
                </IxTypography>
                <IxTypography format="h1">{card.value}</IxTypography>
              </IxCardContent>
            </IxCard>
          ))}
        </div>
        <div id="rightGrid">
          <div className="rightGridItem">
            <IxCard style={{ width: "100%", height: "100%" }}>
              <IxCardContent>
                <IxTypography format="h2" bold>
                  Network Traffic Monitor
                </IxTypography>
                <IxTypography>
                  <ul>
                    <li>Inbound: 520 Mbps</li>
                    <li>Outbound: 310 Mbps</li>
                    <li>Active Connections: 87</li>
                  </ul>
                </IxTypography>
              </IxCardContent>
            </IxCard>
          </div>
          <div className="rightGridItem">
            <IxCard style={{ width: "100%", height: "100%" }}>
              <IxCardContent>
                <IxTypography format="h2" bold>
                  Recent Activity
                </IxTypography>
                <IxTypography>
                  <ul>
                    <li>
                      User <b>admin</b> logged in
                    </li>
                    <li>Backup completed at 14:32</li>
                    <li>
                      New device registered: <b>Server-12</b>
                    </li>
                  </ul>
                </IxTypography>
              </IxCardContent>
            </IxCard>
          </div>
        </div>
      </div>
    </IxContent>
  );
}

export default HomeContent;
