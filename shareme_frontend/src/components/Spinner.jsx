import React from "react";
import { Hourglass } from "react-loader-spinner";

const Spinner = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <Hourglass
        visible={true}
        height="80"
        width="200"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        className="m-5"
        colors={["#00BFFF", "#72a1ed"]}
      />

      <p className="text-lg text-center px-2">{message}</p>
    </div>
  );
};

export default Spinner;
