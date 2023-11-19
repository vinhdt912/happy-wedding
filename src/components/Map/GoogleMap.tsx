import { Divider } from "antd";
import Iframe from "react-iframe";
import { TextColor } from "../../libs";
export default function GoogleMap() {
  return (
    <div>
      <Divider dashed />

      <div>
        <TextColor className="text-center">Địa chỉ nhà gái</TextColor>

        <Iframe
          url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.431285790753!2d105.89133407592084!3d21.175019482737707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313507bdaaa8fe71%3A0x821e8e8c915b4381!2zTmjDoCBWxINuIEhvw6EgVGjDtG4gTeG6oW5oIFTDom4!5e0!3m2!1svi!2s!4v1700280810518!5m2!1svi!2s"
          width="100%"
          height="450"
          frameBorder={0}
        />
      </div>
      <div style={{ marginTop: 40 }}>
        <TextColor className="text-center">Địa chỉ nhà trai</TextColor>

        <Iframe
          url="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3721.329714418955!2d105.84313107525958!3d21.13927298053785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDA4JzIxLjQiTiAxMDXCsDUwJzQ0LjUiRQ!5e0!3m2!1svi!2s!4v1700367666641!5m2!1svi!2s"
          width="100%"
          height="450"
          frameBorder={0}
        />
      </div>
      <Divider dashed />
    </div>
  );
}
