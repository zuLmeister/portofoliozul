import React, { useState } from "react";
import { Row, Col, Typography, Space, Button, Avatar } from "antd";
import { LinkedinOutlined, FileTextOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import useIntersectionObserver from "../../hooks/UseIntersectionObserver";

const { Title, Paragraph, Link } = Typography;

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const avatarVariants = {
  hidden: { opacity: 0, scale: 0.5, y: -50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      type: "spring",
      bounce: 0.4,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, rotate: 10 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  hover: { scale: 1.1, transition: { duration: 0.3 } },
  tap: { scale: 0.95 },
};

const paragraphVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.2 },
  }),
};

const Hero = ({ data, textColor }) => {
  const [isLinkedInHovered, setIsLinkedInHovered] = useState(false);

  // Use Intersection Observer for the Hero section
  const [heroRef, heroVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <motion.div
      ref={heroRef}
      variants={containerVariants}
      initial="hidden"
      animate={heroVisible ? "visible" : "hidden"}
      id="home"
      style={{ minHeight: "90vh", paddingTop: "48px", paddingBottom: "48px" }}
    >
      <Row align="middle">
        {/* Kolom untuk Avatar dengan animasi */}
        <Col xs={24} md={8} style={{ textAlign: "center", marginBottom: "24px" }}>
          <motion.div variants={avatarVariants}>
            <Avatar size={200} src={data.avatar || "/zulach.jpg"} />
          </motion.div>
        </Col>

        {/* Kolom untuk teks dengan container animasi */}
        <Col xs={24} md={16}>
          <motion.div variants={containerVariants}>
            {/* Nama dan Ikon Sosial Media */}
            <motion.div
              variants={titleVariants}
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
                {/* LinkedIn Icon */}
                <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
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
                </motion.div>
                {/* CV Button */}
                <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                  <Button
                    type="primary"
                    icon={<FileTextOutlined />}
                    href={data.cv_link}
                    target="_blank"
                  >
                    {data.cv_button_text}
                  </Button>
                </motion.div>
              </Space>
            </motion.div>

            {/* Judul dan Ringkasan */}
            <motion.div variants={titleVariants}>
              <Title level={4} type="secondary" style={{ marginTop: "8px" }}>
                {data.title}
              </Title>
            </motion.div>
            {data.summary.split("\n\n").map((para, index) => (
              <motion.div
                key={`para-${index}`}
                custom={index}
                variants={paragraphVariants}
              >
                <Paragraph>{para}</Paragraph>
              </motion.div>
            ))}
          </motion.div>
        </Col>
      </Row>
    </motion.div>
  );
};

export default Hero;