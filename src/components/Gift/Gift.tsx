import { Divider } from "antd";
import { Text, TextColor } from "../../libs";
import "./Gift.scss";
export default function Gift() {
  return (
    <div className="Gift">
      <img src={require("../../assets/images/gift.png")} alt="gif" />
      <TextColor className="text-center" style={{ marginTop: 40 }}>
        Gửi lời chúc đến đôi uyên ương
      </TextColor>
      <div className="qr-code">
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
      <div style={{ paddingInline: 80 }}>
        <Divider dashed />
      </div>
      <div className="qr-code">
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
