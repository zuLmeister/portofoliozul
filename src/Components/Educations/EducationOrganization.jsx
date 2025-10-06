import React, { useState, useRef } from "react";
import {
  Row,
  Col,
  Typography,
  Card,
  Space,
  Divider,
  Timeline,
  Carousel,
  Tag,
  Button,
  Modal,
} from "antd";
import {
  FileTextOutlined,
  CopyrightOutlined,
  TrophyOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import useIntersectionObserver from "../../hooks/UseIntersectionObserver";

const { Title, Paragraph, Text } = Typography;

const carouselContentStyle = {
  minHeight: "350px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "16px",
  gap: "16px",
};

const imageStyle = {
  maxHeight: "200px",
  maxWidth: "100%",
  objectFit: "contain",
  marginBottom: "16px",
  cursor: "pointer",
};

const navButtonStyle = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 2,
  background: "rgba(0, 0, 0, 0.3)",
  color: "white",
  border: "none",
};

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const buttonVariants = {
  hover: { scale: 1.1, transition: { duration: 0.3 } },
  tap: { scale: 0.95 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const carouselItemVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const EducationAndOrg = ({ data, textColor, text }) => {
  const [filter, setFilter] = useState("all");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const carouselRef = useRef(null);

  // Use the intersection observer hook for both sections
  const [educationRef, educationVisible] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [certsRef, certsVisible] = useIntersectionObserver({ threshold: 0.1 });

  const filteredCerts = data.certifications.filter((cert) => {
    if (filter === "all") return true;
    if (filter === "certification")
      return cert.type === "dicoding" || cert.type === "huawei";
    return cert.type === filter;
  });

  const showModal = (image) => {
    setModalImage(image);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      {/* BAGIAN PENDIDIKAN & ORGANISASI */}
      <motion.div
        ref={educationRef}
        variants={sectionVariants}
        initial="hidden"
        animate={educationVisible ? "visible" : "hidden"}
        id="education"
        style={{ paddingTop: "80px", paddingBottom: "48px" }}
      >
        <Divider>
          <Title
            level={3}
            style={{
              color: textColor,
              whiteSpace: "normal",
              wordWrap: "break-word",
              overflowWrap: "break-word",
            }}
          >
            {text.mainTitle}
          </Title>
        </Divider>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={educationVisible ? "visible" : "hidden"}
              transition={{ delay: 0.2 }}
            >
              <Card
                title={text.educationCardTitle}
                style={{ height: "100%" }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Title level={5}>{data.education.institution}</Title>
                <Text strong>{data.education.degree}</Text>
                <Paragraph
                  type="secondary"
                  style={{
                    color: textColor,
                  }}
                >
                  {data.education.period} | {text.gpaLabel}:{" "}
                  {data.education.gpa}
                </Paragraph>

                <Paragraph>
                  <Text strong>{text.thesisLabel}:</Text>{" "}
                  {data.education.thesis}
                </Paragraph>
                <Divider />
                <Title level={5}>{data.training.institution}</Title>
                <Paragraph strong>
                  {data.training.field} ({data.training.period})
                </Paragraph>
              </Card>
            </motion.div>
          </Col>
          <Col xs={24} md={12}>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={educationVisible ? "visible" : "hidden"}
              transition={{ delay: 0.4 }}
            >
              <Card
                title={text.orgCardTitle}
                style={{ height: "100%" }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Timeline
                  items={data.organizations.map((org, index) => ({
                    key: index,
                    children: `${org.role} (${org.period})`,
                  }))}
                />
                <Divider>{text.volunteerDivider}</Divider>
                <Space direction="vertical">
                  {data.volunteering.map((v) => (
                    <Text key={v.event}>{v.event}</Text>
                  ))}
                </Space>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </motion.div>

      {/* BAGIAN SERTIFIKASI & PUBLIKASI */}
      <motion.div
        ref={certsRef}
        variants={sectionVariants}
        initial="hidden"
        animate={certsVisible ? "visible" : "hidden"}
        style={{ paddingTop: "48px", paddingBottom: "48px" }}
      >
        <Divider>
          <Title level={3} style={{ color: textColor }}>
            {text.certsCardTitle}
          </Title>
        </Divider>

        {/* Tombol Filter */}
        <Space
          style={{
            marginBottom: 24,
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {[
            { label: text.filterAll, value: "all" },
            { label: text.filterCertification, value: "certification" },
            { label: text.filterCopyright, value: "copyright" },
            { label: text.filterPublication, value: "publication" },
          ].map((btn, index) => (
            <motion.div
              key={btn.value}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              initial="hidden"
              animate={certsVisible ? "visible" : "hidden"}
              transition={{ delay: 0.1 * index }}
            >
              <Button
                onClick={() => setFilter(btn.value)}
                type={filter === btn.value ? "primary" : "default"}
              >
                {btn.label}
              </Button>
            </motion.div>
          ))}
        </Space>

        {/* Wrapper untuk Carousel dan Tombol Navigasi */}
        <div style={{ position: "relative" }}>
          <Carousel
            ref={carouselRef}
            key={filter}
            dots={false}
            autoplay
            autoplaySpeed={5000}
          >
            {filteredCerts.map((cert, index) => {
              let cardTitle, cardContent;
              switch (cert.type) {
                case "copyright":
                  cardTitle = (
                    <>
                      <CopyrightOutlined />{" "}
                      <Text strong>{text.copyrightTitle}</Text>
                    </>
                  );
                  cardContent = (
                    <>
                      <motion.img
                        src={cert.image}
                        alt={cert.name}
                        style={imageStyle}
                        onClick={() => showModal(cert.image)}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                      <Tag
                        color="purple"
                        style={{ fontSize: "14px", padding: "5px 10px" }}
                      >
                        {cert.name}
                      </Tag>
                    </>
                  );
                  break;
                case "dicoding":
                  cardTitle = (
                    <>
                      <TrophyOutlined />{" "}
                      <Text strong>{text.dicodingTitle}</Text>
                    </>
                  );
                  cardContent = (
                    <>
                      <motion.img
                        src={cert.image}
                        alt={cert.name}
                        style={imageStyle}
                        onClick={() => showModal(cert.image)}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                      <Tag
                        color="geekblue"
                        style={{ fontSize: "14px", padding: "5px 10px" }}
                      >
                        {cert.name}
                      </Tag>
                    </>
                  );
                  break;
                case "huawei":
                  cardTitle = (
                    <>
                      <TrophyOutlined /> <Text strong>{text.huaweiTitle}</Text>
                    </>
                  );
                  cardContent = (
                    <>
                      <motion.img
                        src={cert.image}
                        alt={text.huaweiTitle}
                        style={imageStyle}
                        onClick={() => showModal(cert.image)}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                      <Text style={{ textAlign: "center" }}>{cert.text}</Text>
                    </>
                  );
                  break;
                case "publication":
                  cardTitle = (
                    <>
                      <FileTextOutlined />{" "}
                      <Text strong>{text.publicationTitle}</Text>
                    </>
                  );
                  cardContent = (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <motion.img
                        src={cert.image}
                        alt={text.publicationTitle}
                        style={imageStyle}
                        onClick={() => showModal(cert.image)}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                      <Paragraph
                        style={{ textAlign: "center", marginBottom: "8px" }}
                      >
                        "{cert.title}" ({cert.year})
                      </Paragraph>
                      <motion.div
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <Button
                          type="primary"
                          ghost
                          onClick={() => window.open(cert.link, "_blank")}
                        >
                          Lihat Publikasi
                        </Button>
                      </motion.div>
                    </div>
                  );
                  break;
                default:
                  return null;
              }
              return (
                <div key={`cert-${index}`}>
                  <motion.div
                    variants={carouselItemVariants}
                    initial="hidden"
                    animate={certsVisible ? "visible" : "hidden"}
                    transition={{ delay: 0.2 * index }}
                  >
                    <Card title={cardTitle}>
                      <div style={carouselContentStyle}>{cardContent}</div>
                    </Card>
                  </motion.div>
                </div>
              );
            })}
          </Carousel>
          <motion.div
            style={{ ...navButtonStyle, left: 0 }}
            whileHover={{ opacity: 1, backgroundColor: "rgba(0,0,0,0.5)" }}
            transition={{ duration: 0.2 }}
          >
            <Button
              icon={<LeftOutlined />}
              type="text"
              onClick={() => carouselRef.current.prev()}
              style={{ color: "white" }}
            />
          </motion.div>

          <motion.div
            style={{ ...navButtonStyle, right: 0 }}
            whileHover={{ opacity: 1, backgroundColor: "rgba(0,0,0,0.5)" }}
            transition={{ duration: 0.2 }}
          >
            <Button
              icon={<RightOutlined />}
              type="text"
              onClick={() => carouselRef.current.next()}
              style={{ color: "white" }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Modal untuk menampilkan gambar */}
      <Modal
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        centered
      >
        <motion.div variants={modalVariants} initial="hidden" animate="visible">
          <img
            alt="Sertifikat"
            style={{ width: "100%", marginTop: "20px" }}
            src={modalImage}
          />
        </motion.div>
      </Modal>
    </>
  );
};

export default EducationAndOrg;
