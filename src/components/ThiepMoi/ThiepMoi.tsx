import { Carousel } from "antd";
import React from "react";
import { useContext } from "../../hooks/context";
import { EGuestOf } from "../../types/enum";

export default function ThiepMoi() {
  const { guestOf } = useContext();
  return (
    <>
      <div hidden={guestOf !== EGuestOf.girl}>
        <img
          src={require("../../assets/images/thiep-nha-gai-1.png")}
          alt="thiep-cuoi"
        />
      </div>
      <div hidden={guestOf !== EGuestOf.man}>
        <Carousel autoplay autoplaySpeed={5000}>
          <img
            src={require("../../assets/images/thiep-nha-trai-1.png")}
            alt="thiep-cuoi"
          />
          <img
            src={require("../../assets/images/thiep-nha-trai-2.png")}
            alt="thiep-cuoi"
          />
        </Carousel>
      </div>
    </>
  );
}
