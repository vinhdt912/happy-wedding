import React from "react";
import { Typography } from "antd";

import "./AboutUs.scss";
// @ts-ignore
import { ReactComponent as HeaderIcon } from "../assets/hearts-icon.svg";

function AboutUs() {
  return (
    <div>
      <Typography>Về chúng tôi</Typography>
      <h3 className="title">Về chúng tôi</h3>
      <HeaderIcon />
    </div>
  );
}

export default AboutUs;
