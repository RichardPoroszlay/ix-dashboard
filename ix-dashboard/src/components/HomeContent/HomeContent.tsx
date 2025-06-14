import { FlipTileState } from "@siemens/ix";
import { iconBulb, iconInfo, iconRocket } from "@siemens/ix-icons/icons";
import {
  IxCardList,
  IxContent,
  IxContentHeader,
  IxFlipTile,
  IxFlipTileContent,
  IxIcon,
  IxPushCard,
} from "@siemens/ix-react";

function HomeContent() {
  return (
    <IxContent>
      <IxContentHeader
        slot="header"
        headerTitle="Hi there, John Doe"
      ></IxContentHeader>
      <IxCardList label="Flow Layout" showAllCount={12} listStyle={"scroll"}>
        <IxPushCard
          icon={iconRocket}
          notification="3"
          heading="Heading content"
          subheading="Subheading"
          variant="filled"
        ></IxPushCard>
        <IxPushCard
          icon={iconBulb}
          notification="1"
          heading="Heading content"
          subheading="Subheading"
          variant="warning"
        ></IxPushCard>
        <IxPushCard
          icon={iconRocket}
          notification="3"
          heading="Heading content"
          subheading="Subheading"
          variant="filled"
        ></IxPushCard>
        <IxPushCard
          icon={iconRocket}
          notification="3"
          heading="Heading content"
          subheading="Subheading"
          variant="filled"
        ></IxPushCard>
        <IxPushCard
          icon={iconRocket}
          notification="3"
          heading="Heading content"
          subheading="Subheading"
          variant="filled"
        ></IxPushCard>
      </IxCardList>
      <div>
        <IxFlipTile state={FlipTileState.Primary}>
          <div slot="header">Flip header</div>
          <div slot="footer">
            <div>Predicted maintenance date</div>
            <div className="footer-date">
              <IxIcon name={iconInfo} size="16"></IxIcon>2021-06-22
            </div>
          </div>
          <IxFlipTileContent> Example 1 </IxFlipTileContent>
          <IxFlipTileContent> Example 2 </IxFlipTileContent>
        </IxFlipTile>
        <IxFlipTile state={FlipTileState.Primary}>
          <div slot="header">Flip header</div>
          <div slot="footer">
            <div>Predicted maintenance date</div>
            <div className="footer-date">
              <IxIcon name={iconInfo} size="16"></IxIcon>2021-06-22
            </div>
          </div>
          <IxFlipTileContent> Example 1 </IxFlipTileContent>
          <IxFlipTileContent> Example 2 </IxFlipTileContent>
        </IxFlipTile>
      </div>
    </IxContent>
  );
}

export default HomeContent;
