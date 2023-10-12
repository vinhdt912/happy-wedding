// @ts-ignore
import { ReactComponent as HeartIcon } from "../assets/hearts-icon.svg";
import { Title } from "../libs";
import "./AboutUs.scss";

function AboutUs() {
  return (
    <div className="AboutUs">
      <Title>Về chúng tôi</Title>
      <HeartIcon className="AboutUs__HeartIcon" />
    </div>
  );
}

export default AboutUs;
