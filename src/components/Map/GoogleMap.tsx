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
          url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1860.240160060719!2d105.897856!3d21.17307!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31350777530a77d3%3A0x753db835085d97d0!2zQmlhIEjGoWkgxJDDrG5oIEx14bqtbg!5e0!3m2!1svi!2sus!4v1697989684053!5m2!1svi!2sus"
          width="100%"
          height="450"
          frameBorder={0}

          //   allowfullscreen=""
          //   loading="lazy"
          //   referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
      <div style={{ marginTop: 40 }}>
        <TextColor className="text-center">Địa chỉ nhà trai</TextColor>

        <Iframe
          url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232.58288211419224!2d105.84561931789814!3d21.139416355288137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313500e43bf5a929%3A0x62d55cd6dc3a005a!2zQ-G7rWEgSMOgbmcgU8ahbiBTxqFuIFTDuW5n!5e0!3m2!1svi!2s!4v1700278614704!5m2!1svi!2s"
          width="100%"
          height="450"
          frameBorder={0}

          //   allowfullscreen=""
          //   loading="lazy"
          //   referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
      <Divider dashed />
    </div>
  );
}
