import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
const ITabs = (props) => {
  return (
    <Tabs defaultActiveKey={props.activeKey} id={props.id}>
      {props.tabList.map((tab) => {
        return (
          <Tab eventKey={tab.key} title={tab.title}>
            {tab.content}
          </Tab>
        );
      })}
    </Tabs>
  );
};
export default ITabs;
