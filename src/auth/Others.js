import React from "react";
import Loader from "../components/Loader/Loader";
import TopBar from "../components/TopBar/TopBar";

export default function Others(props) {
  return (
    <div>
      <TopBar />
      {props.loaderStatus ? <Loader /> : <></>}
    </div>
  );
}
