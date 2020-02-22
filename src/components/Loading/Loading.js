import React from "react";
import "./Loading.css";
//Loading package
//Loading
import { MoonLoader } from "react-spinners";

const Loading = ({ loading }) => {
  return (
    <>
      <div className="container_loading">
        <MoonLoader
          size={80}
          //size={"150px"} this also works
          color={"#fff"}
          loading={loading}
        />
      </div>
    </>
  );
};

export default Loading;
