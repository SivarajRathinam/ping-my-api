import React from "react";
import "../styles/loader.scss";
const Loader = () => {
  return (
    <div class="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
export default Loader;
