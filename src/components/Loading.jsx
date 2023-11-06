import React from "react";
import LoadingBar from "react-top-loading-bar";

function Loading() {
  console.log("I did Run!!!");
  return (
    <LoadingBar
      color="#f11946"
      progress={100}
      height={3}
      transitionTime={2000}
    />
  );
}

export default Loading;
