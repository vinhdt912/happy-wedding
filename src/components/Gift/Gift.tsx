import { useContext } from "../../hooks/context";
import { Text, TextColor } from "../../libs";
import { EGuestOf } from "../../types/enum";
import "./Gift.scss";
export default function Gift() {
  const { guestOf } = useContext();

  return (
    <div className="Gift">
      <img src={require("../../assets/images/gift.png")} alt="gif" />
      <TextColor className="text-center" style={{ marginTop: 20 }}>
        Gửi lời chúc đến đôi uyên ương
      </TextColor>
      <div className="qr-code" hidden={guestOf !== EGuestOf.girl}>
        <img
          src={require("../../assets/images/lan-qr-code.png")}
          alt="qr-code"
        />
        <div>
          <Text strong>Nguyễn Thị Ngọc Lan</Text>
        </div>
        <div>
          <Text>0301000407534</Text>
        </div>
      </div>
      <div className="qr-code" hidden={guestOf !== EGuestOf.man}>
        <img
          src={require("../../assets/images/nam-qr-code.png")}
          alt="qr-code"
        />
        <div>
          <Text strong>Ngô Đăng Nam</Text>
        </div>
        <div>
          <Text>0351000967884</Text>
        </div>
      </div>
    </div>
  );
}
