import React from "react";
import ReactFlow from "react-flow-renderer";

const New = ({ options }) => {
  return (
    <div style={{ height: 600 }}>
      <ReactFlow elements={options} />
    </div>
  );
};

export default New;
