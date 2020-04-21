import React, { useState, useEffect } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
const IDropDown = (props) => {
  const [state, setState] = useState(props?.title ?? "GET");
  useEffect(() => {
    setState(props?.title ?? "GET");
  }, [props.title]);

  const handleChange = (item) => {
    props.onChange && props.onChange(item);
    setState(item);
  };
  return (
    <DropdownButton
      as={props.as}
      variant="secondary"
      title={state}
      id="input-group-dropdown-1"
      className="pingme-input-dropdown"
    >
      {props?.items &&
        props.items.map((item) => {
          return (
            <Dropdown.Item onClick={() => handleChange(item)} href="#">
              {item}
            </Dropdown.Item>
          );
        })}
    </DropdownButton>
  );
};
export default IDropDown;
