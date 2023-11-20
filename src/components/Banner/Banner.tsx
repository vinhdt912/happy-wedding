import "./Banner.scss";

export default function Banner() {
  return (
    <div className="Banner">
      {/* <Carousel autoplay autoplaySpeed={3000}>
        <img
          src={require("../../assets/images/banner-1.gif")}
          alt="thiep-cuoi"
        />
        <img
          src={require("../../assets/images/banner-2.png")}
          alt="thiep-cuoi"
        />
      </Carousel> */}
      <img src={require("../../assets/images/banner-1.gif")} alt="thiep-cuoi" />
      {/* <img
        src={require("../../assets/images/banner.gif")}
        alt="happy-wedding"
      /> */}
    </div>
  );
}
