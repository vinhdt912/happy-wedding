import { PhoneOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import { TextColor, Text } from "../../libs";
import "./ContactInfo.scss";

export default function ContactInfo() {
  return (
    <div className="ContactInfo">
      <TextColor className="text-center">Thông tin liên hệ</TextColor>

      <Row gutter={24} style={{ marginTop: 40 }}>
        <Col span={12} className="contact-container">
          <a href="tel:0328933327" className="contact">
            <Button
              type="default"
              icon={<PhoneOutlined />}
              size={"large"}
              shape="circle"
            />
            <div>
              <Text>LIÊN HỆ CÔ DÂU</Text>
            </div>
          </a>
        </Col>
        <Col span={12} className="contact-container">
          <a href="tel:0383311240" className="contact">
            <Button
              type="default"
              icon={<PhoneOutlined />}
              size={"large"}
              shape="circle"
            />
            <div>
              <Text>LIÊN HỆ CHÚ RỂ</Text>
            </div>
          </a>
        </Col>
      </Row>
    </div>
  );
}
