import { Divider } from "antd";
import Iframe from "react-iframe";
import { TextColor } from "../../libs";
import { useContext } from "../../hooks/context";
export default function GoogleMap() {
  const { guestOf } = useContext();

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
          url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232.58288211419224!2d105.84561931789814!3d21.139416355288137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313500e43bf5a929%3A0x62d55cd6dc3a005a!2zQ-G7rWEgSMOgbmcgU8ahbiBTxqFuIFTDuW5n!5e0!3m2!1svi!2s!4v1700278614704!5m2!1svi!2s"
          width="100%"
          height="450"
          frameBorder={0}
        />
      </div>
      <Divider dashed />
    </div>
  );
}
