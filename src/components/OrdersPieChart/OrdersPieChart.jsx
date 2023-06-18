import React from "react";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";

const OrdersPieChart = () => {
  const option = {
    // Pie Chart
    series: [
      {
        name: "Item",
        type: "pie",
        radius: ["60%", "80%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 50,
          borderColor: "black",
          borderWidth: 5,
        },
        label: {
          show: false,
          position: "center",
        },
        // Chart styling
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: "bold",
          },
        },
        // Chart color
        color: [
           // first color
          new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#1158e2",
            },
            {
              offset: 1, 
              color: "#42b5f2",
            },
          ]),

          // second color placed ontop of  the first
          new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0, 
              color: "#bc1fd7",
            },
            {
              offset: 1, 
              color: "#7f1dd1",
            },
          ]),
          // Third color placed ontop of  the second
          new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0, 
              color: "#e8a618",
            },
            {
              offset: 1, 
              color: "#eb6b36",
            },
          ]),
          new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0, 
              color: "#d131be",
            },
            {
              offset: 1, 
              color: "#bf1575",
            },
          ]),
        ],
        // Chart data
        data: [
          { value: 2190, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" },
        ],
      },
    ],
  };
  return (
    <ReactEcharts style={{ height: 140, marginTop: "1rem" }} option={option} />
  );
};

export default OrdersPieChart;
