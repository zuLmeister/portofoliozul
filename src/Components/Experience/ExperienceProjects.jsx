import React, { useState } from "react";
import {
  Typography,
  Card,
  Space,
  Tag,
  Divider,
  Timeline,
  Modal,
  Carousel,
} from "antd";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useIntersectionObserver from "../../hooks/UseIntersectionObserver";

const { Title, Text } = Typography;

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  responsive: [
    { breakpoint: 992, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
};

// Random animation variants
const animationVariants = [
  {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  },
  {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  },
  {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  },
  {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  },
  {
    hidden: { opacity: 0, rotate: -10 },
    visible: { opacity: 1, rotate: 0, transition: { duration: 0.5 } },
  },
];

// Card for each project
const ProjectCard = ({ project, index, handleCardClick }) => {
  const [ref, isVisible] = useIntersectionObserver();
  const variant = animationVariants[index % animationVariants.length];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={variant}
      whileHover={{ scale: 1.03 }}
      style={{ height: "100%" }}
    >
      <Card
        hoverable
        onClick={() => handleCardClick(project)}
        cover={
          <img
            alt={project.title}
            src={project.images?.[0] || "/placeholder.png"}
            style={{
              height: 200,
              width: "100%",
              objectFit: "cover",
              borderRadius: 6,
            }}
          />
        }
        style={{ width: "100%", height: "100%" }}
        bodyStyle={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Card.Meta
          title={project.title}
          description={
            <Typography.Paragraph ellipsis={{ rows: 3 }}>
              {project.description}
            </Typography.Paragraph>
          }
        />
        <Divider style={{ margin: "12px 0" }} />
        <Space size={[0, 8]} wrap>
          {project.tags.map((tag) => (
            <Tag key={tag} color="blue">
              {tag}
            </Tag>
          ))}
        </Space>
      </Card>
    </motion.div>
  );
};

// Modern Lightbox
const Lightbox = ({ images, activeIndex, onClose }) => {
  const [current, setCurrent] = useState(activeIndex || 0);

  const next = () => setCurrent((current + 1) % images.length);
  const prev = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.85)",
          backdropFilter: "blur(6px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2000,
        }}
      >
        {/* Close Button */}
        <motion.div
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            position: "absolute",
            top: 20,
            right: 30,
            fontSize: 28,
            color: "#fff",
            cursor: "pointer",
          }}
        >
          ✕
        </motion.div>

        {/* Prev Button */}
        {images.length > 1 && (
          <motion.div
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            whileTap={{ scale: 0.9 }}
            style={{
              position: "absolute",
              left: 20,
              fontSize: 32,
              color: "#fff",
              cursor: "pointer",
              userSelect: "none",
            }}
          >
            ‹
          </motion.div>
        )}

        {/* Image */}
        <motion.img
          key={current}
          src={images[current]}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          style={{
            maxWidth: "85%",
            maxHeight: "85%",
            borderRadius: 12,
            objectFit: "contain",
            boxShadow: "0 0 40px rgba(255,255,255,0.12)",
          }}
          onClick={(e) => e.stopPropagation()}
        />

        {/* Next Button */}
        {images.length > 1 && (
          <motion.div
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            whileTap={{ scale: 0.9 }}
            style={{
              position: "absolute",
              right: 20,
              fontSize: 32,
              color: "#fff",
              cursor: "pointer",
              userSelect: "none",
            }}
          >
            ›
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

// Main component
const ExperienceAndProjects = ({ data, textColor, text }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Lightbox controller
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
    setSelectedProject(null);
  };

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setModalVisible(true);
  };

  const allProjects = data.experience.flatMap((job) => job.projects || []);

  return (
    <div id="experience" style={{ paddingTop: "80px", paddingBottom: "48px" }}>
      {/* Title */}
      <Divider>
        <Title level={3} style={{ color: textColor }}>
          {text.sectionTitle}
        </Title>
      </Divider>

      {/* Timeline */}
      <Title level={4} style={{ color: textColor, marginBottom: "24px" }}>
        {text.jobHistory}
      </Title>

      <Timeline mode="left">
        {data.experience.map((job, index) => (
          <Timeline.Item key={index}>
            <Text type="secondary" style={{ fontSize: "14px" }}>
              {job.company} ({job.period})
            </Text>
            <br />
            <Text strong>{job.title}</Text>
          </Timeline.Item>
        ))}
      </Timeline>

      {/* Projects */}
      <Title
        level={4}
        style={{ color: textColor, marginTop: "48px", marginBottom: "24px" }}
      >
        {text.projectExamples}
      </Title>

      <Slider {...sliderSettings}>
        {allProjects.map((project, index) => (
          <div key={project.title}>
            <ProjectCard
              project={project}
              index={index}
              handleCardClick={handleCardClick}
            />
          </div>
        ))}
      </Slider>

      {/* Modal */}
      <Modal
        open={modalVisible}
        title={selectedProject?.title}
        onCancel={closeModal}
        footer={null}
        width={800}
        centered
      >
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            style={{ marginTop: 8 }}
          >
            {/* ---------------- MAIN SLIDER ---------------- */}
            <div
              style={{
                width: "100%",
                height: 420,
                overflow: "hidden",
                borderRadius: 12,
                position: "relative",
              }}
            >
              <Carousel
                ref={(ref) => (window.projectSlider = ref)}
                autoplay
                dots={false}
                draggable
                swipeToSlide
                infinite
              >
                {selectedProject.images.map((imgUrl, idx) => (
                  <div key={idx}>
                    <img
                      src={imgUrl}
                      alt={`Slide ${idx}`}
                      style={{
                        width: "100%",
                        height: 420,
                        objectFit: "cover",
                        borderRadius: 12,
                      }}
                    />
                  </div>
                ))}
              </Carousel>

              {/* Prev Button */}
              <div
                onClick={() => window.projectSlider.prev()}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: 10,
                  transform: "translateY(-50%)",
                  background: "rgba(0,0,0,0.4)",
                  padding: "6px 10px",
                  borderRadius: 8,
                  cursor: "pointer",
                  fontSize: 22,
                  color: "#fff",
                  userSelect: "none",
                }}
              >
                ‹
              </div>

              {/* Next Button */}
              <div
                onClick={() => window.projectSlider.next()}
                style={{
                  position: "absolute",
                  top: "50%",
                  right: 10,
                  transform: "translateY(-50%)",
                  background: "rgba(0,0,0,0.4)",
                  padding: "6px 10px",
                  borderRadius: 8,
                  cursor: "pointer",
                  fontSize: 22,
                  color: "#fff",
                  userSelect: "none",
                }}
              >
                ›
              </div>
            </div>

            {/* ---------------- THUMBNAILS ---------------- */}
            <div
              style={{
                display: "flex",
                gap: 10,
                marginTop: 16,
                overflowX: "auto",
                paddingBottom: 6,
              }}
            >
              {selectedProject.images.map((thumb, idx) => (
                <img
                  key={idx}
                  src={thumb}
                  onClick={() => window.projectSlider.goTo(idx)}
                  style={{
                    width: 80,
                    height: 60,
                    objectFit: "cover",
                    borderRadius: 8,
                    cursor: "pointer",
                    opacity: 0.85,
                    transition: "0.2s",
                  }}
                  onMouseEnter={(e) => (e.target.style.opacity = 1)}
                  onMouseLeave={(e) => (e.target.style.opacity = 0.85)}
                />
              ))}
            </div>

            {/* ---------------- CONTENT ---------------- */}
            <Divider />

            <p style={{ fontSize: 15, lineHeight: 1.6 }}>
              {selectedProject.description}
            </p>

            <Space size={[0, 8]} wrap>
              {selectedProject.tags.map((tag) => (
                <Tag key={tag} color="blue">
                  {tag}
                </Tag>
              ))}
            </Space>
          </motion.div>
        )}
      </Modal>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={selectedProject.images}
          activeIndex={0}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </div>
  );
};

export default ExperienceAndProjects;
