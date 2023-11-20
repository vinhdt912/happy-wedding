import React from "react";
import { Carousel } from "antd";
import { TextColor } from "../../libs";

import "./Gallery.scss";

export default function Gallery() {
  return (
    <div className="Gallery">
      <TextColor className="text-center">Ảnh cưới của chúng mình</TextColor>
      <Carousel autoplay autoplaySpeed={5000} style={{ marginBottom: 8 }}>
        {Array.from(Array(2).keys()).map((value) => (
          <div key={value}>
            <img
              src={require(`../../assets/images/photo2-${value}.jpg`)}
              alt="avt-man"
            />
          </div>
        ))}
      </Carousel>

      <Carousel autoplay autoplaySpeed={3000} style={{ marginBottom: 40 }}>
        {Array.from(Array(13).keys()).map((value) => (
          <div key={value}>
            <img
              src={require(`../../assets/images/photo-${value}.jpg`)}
              alt="avt-man"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
