import React, { useState } from "react";
import { Row, Col, Typography, Space, Button, Avatar } from "antd";
import { LinkedinOutlined, FileTextOutlined } from "@ant-design/icons"; // <-- Tambahkan FileTextOutlined
import { motion } from "framer-motion";

const { Title, Paragraph, Link } = Typography;

const Hero = ({ data, textColor }) => {
  const [isLinkedInHovered, setIsLinkedInHovered] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <Row
      id="home"
      align="middle"
      style={{ minHeight: "90vh", paddingTop: "48px", paddingBottom: "48px" }}
    >
      {/* Kolom untuk Avatar dengan animasi */}
      <Col xs={24} md={8} style={{ textAlign: "center", marginBottom: "24px" }}>
        <motion.div variants={itemVariants} initial="hidden" animate="visible">
          <Avatar size={200} src="/zulach.jpg" />
        </motion.div>
      </Col>

      {/* Kolom untuk teks dengan container animasi */}
      <Col xs={24} md={16}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Nama dan Ikon Sosial Media */}
          <motion.div
            variants={itemVariants}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <Title level={2} style={{ color: textColor, margin: 0 }}>
              {data.name}
            </Title>
            <Space>
              {/* === ICON LINKEDIN === */}
              <Link
                href={data.contact.linkedin}
                target="_blank"
                onMouseEnter={() => setIsLinkedInHovered(true)}
                onMouseLeave={() => setIsLinkedInHovered(false)}
              >
                <Avatar
                  icon={<LinkedinOutlined />}
                  style={{
                    backgroundColor: isLinkedInHovered ? "#0077B5" : "",
                    transition: "background-color 0.3s",
                  }}
                />
              </Link>
              {/* === TOMBOL CV BARU === */}
              <Button
                type="primary"
                icon={<FileTextOutlined />}
                href={data.cv_link}
                target="_blank"
              >
                {data.cv_button_text}
              </Button>
            </Space>
          </motion.div>

          {/* Judul dan Ringkasan */}
          <motion.div variants={itemVariants}>
            <Title level={4} type="secondary" style={{ marginTop: "8px" }}>
              {data.title}
            </Title>
          </motion.div>
          <motion.div variants={itemVariants}>
            {data.summary.split("\n\n").map((para, index) => (
              <Paragraph key={index}>{para}</Paragraph>
            ))}
          </motion.div>
        </motion.div>
      </Col>
    </Row>
  );
};

export default Hero;
