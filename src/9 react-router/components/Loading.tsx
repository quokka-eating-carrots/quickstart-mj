import React from "react";
import { HashLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="w-100 h-75 position-fixed">
      <div className="row w-100 h-100 justify-content-center align-items-center">
        <div className="col-6 text-center">
          <HashLoader />
        </div>
      </div>
    </div>
  );
};

export default Loading;
