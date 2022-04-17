import React from "react";

function ShortUnderline(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 228 8"
      fill="none"
    >
      <text x={props.x} y={props.y} fill={props.color} class="font finalText">
        {props.text}
      </text>
      <path
        d="M227.999 1.38396C228.435 -1.20343 4.46015 0.459886 1.84811 1.38396C-0.763925 2.30802 -0.463579 4.58158 1.84811 7.298C4.1598 10.0144 220.742 3.97134 220.742 3.97134C220.742 3.97134 227.564 3.97134 227.999 1.38396Z"
        fill="#FF0000"
      />
    </svg>
  );
}

export default ShortUnderline;
