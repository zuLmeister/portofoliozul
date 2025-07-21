import React from "react";
import { Typography, Space, Button, Divider } from "antd";
import {
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const Contact = ({ data, textColor }) => (
  <div
    id="contact"
    style={{ paddingTop: "80px", paddingBottom: "48px", textAlign: "center" }}
  >
    <Divider>
      <Title level={3} style={{ color: textColor }}>
        Mari Terhubung
      </Title>
    </Divider>
    <Paragraph>
      Saya terbuka untuk diskusi, kolaborasi, atau peluang kerja. Jangan ragu
      untuk menghubungi saya.
    </Paragraph>
  </div>
);

export default Contact;
