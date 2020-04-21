import React from "react";

const ImageComponent = (props) => {
  const handleClick = (e) => {
    if (props.index !== 0) {
      props?.onClick && props.onClick(e);
    }
  };
  return (
    <div className="pingme-img-container" onClick={handleClick}>
      {props.index !== 0 && (
        <img src={props.src} alt="" className={props.className} />
      )}
    </div>
  );
};

export default ImageComponent;
