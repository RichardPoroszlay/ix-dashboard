import "./echarts-circle.scoped.css";

import { useEffect, useState } from "react";
import { getComputedCSSProperty, registerTheme } from "@siemens/ix-echarts";
import { themeSwitcher } from "@siemens/ix";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts/core";
import type { EChartsOption } from "echarts";

export default function EchartsCircle() {
  registerTheme(echarts);

  const [theme, setTheme] = useState(themeSwitcher.getCurrentTheme());

  useEffect(() => {
    themeSwitcher.themeChanged.on((theme: string) => {
      setTheme(theme);
    });
  }, []);

  const data = [
    { value: 72.17, name: "Windows" },
    { value: 15.42, name: "macOS" },
    { value: 4.03, name: "Linux" },
    { value: 2.27, name: "Chrome OS" },
    { value: 6.11, name: "Other" },
  ];

  const options: EChartsOption = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      icon: "rect",
      bottom: "0",
      left: "0",
    },
    series: [
      {
        name: "OS Share",
        type: "pie",
        radius: ["60%", "90%"],
        label: {
          show: true,
          color: getComputedCSSProperty("color-neutral"),
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 25,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: true,
        },
        data: data,
      },
    ],
  };

  return (
    <ReactEcharts
      style={{ height: "40rem" }}
      option={options}
      theme={theme}
      className="echarts"
    />
  );
}
