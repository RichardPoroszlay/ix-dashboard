import type { CardVariant } from "@siemens/ix";
import {
  iconCapacity,
  iconHeart,
  iconInfo,
  iconReload,
  iconRocket,
  iconTicket,
} from "@siemens/ix-icons/icons";

export interface CardData {
  variant: CardVariant | undefined;
  icon: string;
  title: string;
  frameworks: string[];
  value: string | number;
}

export const cardData: CardData[] = [
  {
    variant: "primary",
    icon: iconCapacity,
    title: "Number of Components",
    frameworks: ["React", "Angular", "Vue", "Blazor", "Vanilla JS"],
    value: 5,
  },
  {
    variant: "info",
    icon: iconInfo,
    title: "Active Users",
    frameworks: ["Today", "This Week", "This Month"],
    value: 456,
  },
  {
    variant: "success",
    icon: iconHeart,
    title: "System Health",
    frameworks: ["CPU Usage", "Memory Usage", "Disk Space"],
    value: "Good",
  },
  {
    variant: "neutral",
    icon: iconTicket,
    title: "Open Tickets",
    frameworks: ["Critical", "High", "Medium", "Low"],
    value: 17,
  },
  {
    variant: "filled",
    icon: iconRocket,
    title: "Deployments",
    frameworks: ["Production", "Staging", "Development"],
    value: 8,
  },
  {
    variant: "warning",
    icon: iconReload,
    title: "Pending Updates",
    frameworks: ["Security", "Features", "Bugfixes"],
    value: 3,
  },
];
