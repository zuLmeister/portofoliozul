import React, { useState, useRef } from "react"; // <-- Perbaikan: Impor useState dan useRef
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

// Ganti nama prop `text` jika berbeda, atau gunakan nama ini agar konsisten
const EducationAndOrg = ({ data, textColor, text }) => {
  const [filter, setFilter] = useState("all");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const carouselRef = useRef(null);

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
      <div id="education" style={{ paddingTop: "80px", paddingBottom: "48px" }}>
        <Divider>
          {/* Perbaikan: Menggunakan prop 'text' untuk judul */}
          <Title level={3} style={{ color: textColor }}>
            {text.mainTitle}
          </Title>
        </Divider>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Card title={text.educationCardTitle} style={{ height: "100%" }}>
              <Title level={5}>{data.education.institution}</Title>
              <Text strong>{data.education.degree}</Text>
              <Paragraph type="secondary">
                {data.education.period} | {text.gpaLabel}: {data.education.gpa}
              </Paragraph>
              <Paragraph>
                <Text strong>{text.thesisLabel}:</Text> {data.education.thesis}
              </Paragraph>
              <Divider />
              <Title level={5}>{data.training.institution}</Title>
              <Paragraph strong>
                {data.training.field} ({data.training.period})
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card title={text.orgCardTitle} style={{ height: "100%" }}>
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
          </Col>
        </Row>
      </div>

      {/* BAGIAN SERTIFIKASI & PUBLIKASI (Implementasi Dinamis) */}
      <div style={{ paddingTop: "48px", paddingBottom: "48px" }}>
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
          <Button
            onClick={() => setFilter("all")}
            type={filter === "all" ? "primary" : "default"}
          >
            {text.filterAll}
          </Button>
          <Button
            onClick={() => setFilter("certification")}
            type={filter === "certification" ? "primary" : "default"}
          >
            {text.filterCertification}
          </Button>
          <Button
            onClick={() => setFilter("copyright")}
            type={filter === "copyright" ? "primary" : "default"}
          >
            {text.filterCopyright}
          </Button>
          <Button
            onClick={() => setFilter("publication")}
            type={filter === "publication" ? "primary" : "default"}
          >
            {text.filterPublication}
          </Button>
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
                      <img
                        src={cert.image}
                        alt={cert.name}
                        style={imageStyle}
                        onClick={() => showModal(cert.image)}
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
                      <img
                        src={cert.image}
                        alt={cert.name}
                        style={imageStyle}
                        onClick={() => showModal(cert.image)}
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
                      <img
                        src={cert.image}
                        alt={text.huaweiTitle}
                        style={imageStyle}
                        onClick={() => showModal(cert.image)}
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
                      <img
                        src={cert.image}
                        alt={text.publicationTitle}
                        style={imageStyle}
                        onClick={() => showModal(cert.image)}
                      />
                      <Paragraph
                        style={{ textAlign: "center", marginBottom: "8px" }}
                      >
                        "{cert.title}" ({cert.year})
                      </Paragraph>
                      <Button
                        type="primary"
                        ghost
                        onClick={() => window.open(cert.link, "_blank")}
                      >
                        Lihat Publikasi
                      </Button>
                    </div>
                  );
                  break;
                  return null;
              }
              return (
                <div key={`cert-${index}`}>
                  <Card title={cardTitle}>
                    <div style={carouselContentStyle}>{cardContent}</div>
                  </Card>
                </div>
              );
            })}
          </Carousel>
          <Button
            style={{ ...navButtonStyle, left: 0 }}
            icon={<LeftOutlined />}
            onClick={() => carouselRef.current.prev()}
          />
          <Button
            style={{ ...navButtonStyle, right: 0 }}
            icon={<RightOutlined />}
            onClick={() => carouselRef.current.next()}
          />
        </div>
      </div>

      {/* Modal untuk menampilkan gambar */}
      <Modal
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        centered
      >
        <img
          alt="Sertifikat"
          style={{ width: "100%", marginTop: "20px" }}
          src={modalImage}
        />
      </Modal>
    </>
  );
};

export default EducationAndOrg;
