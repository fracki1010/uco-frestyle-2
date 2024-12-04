/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import { Tabs } from "flowbite-react";
import { BoldText } from "./BoldText";

//import { HiUserCircle } from "react-icons/hi";
//import { MdDashboard } from "react-icons/md";

export const TabCard = ({ title1, text1, title2, text2 = [] }) => {

  return (
    <Tabs  aria-label="Default tabs" variant="default">
      <Tabs.Item active title={title1}>
        <div className=" text-black"><BoldText text={text1}></BoldText></div>
      </Tabs.Item>
      <Tabs.Item title={title2}>
        <div className=" text-black">
          {
          text2.map((benefit, index) => (
            <><BoldText key={index} text={benefit}></BoldText> <br /></>
          ))
          }
        </div>
      </Tabs.Item>
    </Tabs>
  );
};
