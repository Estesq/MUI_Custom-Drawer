import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import { PieChart } from "react-minimal-pie-chart";

function makeTooltipContent(entry) {
  return `Sector ${entry.tooltip} has value ${entry.value} `;
}

function PieChartComp(props) {
  const [hovered, setHovered] = useState(null);
  const data = [
    {
      title: "Confirmed",
      value: 100,
      color: "#25201D"
    },
    {
      title: "Delivery-In-Progress",
      value: 60,
      color: "#FF5C00"
    }
    // {
    //   title: "Delivered",
    //   value: 60,
    //   color: "#5E81FE",
    // },
    // {
    //   title: "Completed",
    //   value: 70,
    //   color: "#54E73D",
    // },
  ].map(({ title, ...entry }) => {
    return {
      ...entry,
      tooltip: title
    };
  });

  return (
    <div data-tip="" data-for="chart" style={{ width: "12rem" }}>
      <PieChart
        data={data}
        onMouseOver={(_, index) => {
          setHovered(index);
        }}
        onMouseOut={() => {
          setHovered(null);
        }}
        lineWidth={20}
        startAngle={180}
        paddingAngle={20}
        rounded={true}
        animate={true}
        animationDuration={800}
        animationEasing="ease-in-out"
        background="#F4F5F6"
      />
      <ReactTooltip
        id="chart"
        // getContent={() =>
        //   typeof hovered === 'number' ? makeTooltipContent(data[hovered]) : null
        // }
        className="customeTheme"
        // style={{background: "#fff !important", color: "red !important"}}
      >
        {typeof hovered === "number" && (
          <p className="">
            {makeTooltipContent(data[hovered])}
            <span style={{ color: "#FF5C00" }}>Orders</span>
          </p>
        )}
      </ReactTooltip>
    </div>
  );
}

export default PieChartComp;
