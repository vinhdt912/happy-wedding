import { Col, Divider, Row } from "antd";
import {
  ArrowIcon1,
  HeartIcon,
  ManIcon,
  RingIcon,
  WomanIcon,
} from "../../assets/icons";
import "./AboutUs.scss";
import { TextColor, TextDescription, Title, Text, Avatar } from "../../libs";

export default function AboutUs() {
  return (
    <div className="AboutUs">
      <Title>Về chúng tôi</Title>
      <HeartIcon style={{ width: 77, margin: "0 auto" }} />
      <Row style={{ marginTop: 40 }}>
        <Col span={14} className="col-img">
          <Avatar
            avtName="avt-man-1.png"
            style={{ rotate: "-7deg" }}
            pos3={
              <div style={{ position: "absolute", top: -12, right: -65 }}>
                <ArrowIcon1 style={{ width: 77 }} />
              </div>
            }
          />
        </Col>
        <Col span={10} className="col-info">
          <TextColor>Đăng Nam</TextColor>
          <Text style={{ marginBottom: 8 }}>22.03</Text>
          <ManIcon style={{ width: 36 }} />
        </Col>
      </Row>
      <TextDescription className="text-center" style={{ padding: 15 }}>
        Một chàng trai hiền lành và ít nói, luôn coi trọng tình cảm. Với anh: “Gia đình là điểm tựa vững chắc nhất, là bến đỗ bình yên trong cuộc đời”.
      </TextDescription>

      <Divider plain style={{ paddingInline: "10%", marginBlock: 25 }}>
        <RingIcon style={{ width: 68 }} />
      </Divider>
      <Row>
        <Col span={10} className="col-info">
          <TextColor>Ngọc Lan</TextColor>
          <Text style={{ marginBottom: 8 }}>23.03</Text>
          <WomanIcon style={{ width: 36 }} />
        </Col>
        <Col span={14} className="col-img">
          <Avatar
            avtName="avt-woman-1.png"
            style={{ rotate: "7deg" }}
            pos3={
              <div
                style={{
                  position: "absolute",
                  bottom: -12,
                  left: -68,
                  rotate: "-180deg",
                  right: "unset",
                }}
              >
                <ArrowIcon1 style={{ width: 77 }} />
              </div>
            }
          />
        </Col>
      </Row>
      <TextDescription className="text-center" style={{ padding: 15 }}>
        Một cô gái dịu dàng, nội tâm mong manh nhưng đôi khi lại vô cùng nổi loạn. Sau mỗi chuyến đi, một mái ấm bình yên - một gia đình hạnh phúc là nơi mà cô luôn muốn trở về
      </TextDescription>
    </div>
  );
}
