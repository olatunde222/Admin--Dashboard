import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";

const StatisticChart = () => {
  // Defining Chart Options/inputs
  const option = {
    // X-Axis
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
    ],
    // Y-Azis
    yAxis: [
      {
        type: "value",
        splitLine: {
          show: false,
        },
      },
    ],
    // Chart Data
    series: [
      {
        type: "line",
        smooth: "true", // Line should be smooth
        //Line Styling
        lineStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            // First line Gradient color
            {
              offset: 0,
              color: "rgb(255,191,0)",
            },
            // Second Line gradient color ontop of the first one
            {
              offset: 1,
              color: "#f450d3",
            },
          ]),
          //   width of Line
          width: 4,
        },
        // Area Styling
        areaStyle: {
          opacity: 0.5,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 0.8, [
            {
              offset: 0,
              color: "#fe4c00",
            },
            {
              offset: 1,
              color: "rgba(255,144,70,0.1)",
            },
          ]),
        },
        emphasis: {
            focus: 'series',
        },
        // removing the dots on the line 
        showSymbol: false,
        // Chart Data
        data: [28000, 19000, 32000, 18000, 41000, 30000, 26000],
      },
    ],

    // Save image
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    // Pointer
    tooltip:{
        trigger : 'axis',
        axisPointer : {
            type : 'cross'
        },
        backgroundColor : 'rgba(0,0,0,0.59)',
        borderWidth : 0,
    },
    // Grid
    grid:{
        left : '3%',
        right: '4%',
        bottom : '3%',
        containLabel : true,
        show: false,
    }
  };
  return (
    // E-Chart from React library
    <ReactEcharts option={option} /> // chart option
  );
};

export default StatisticChart;
