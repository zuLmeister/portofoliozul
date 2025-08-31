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
import { motion } from "framer-motion";
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

// --- Variasi animasi random ---
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

// --- Subcomponent untuk 1 Project Card ---
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

// --- Main Component ---
const ExperienceAndProjects = ({ data, textColor, text }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedProject(null);
  };

  const allProjects = data.experience.flatMap((job) => job.projects || []);

  return (
    <div id="experience" style={{ paddingTop: "80px", paddingBottom: "48px" }}>
      {/* Section Title */}
      <Divider>
        <Title level={3} style={{ color: textColor }}>
          {text.sectionTitle}
        </Title>
      </Divider>

      {/* Job History */}
      <Title level={4} style={{ color: textColor, marginBottom: "24px" }}>
        {text.jobHistory}
      </Title>
      <Timeline mode="left">
        {data.experience.map((job, index) => (
          <Timeline.Item key={index}>
            <div style={{ marginBottom: "4px" }}>
              <Text type="secondary" style={{ fontSize: "14px" }}>
                {job.company} ({job.period})
              </Text>
            </div>
            <Text strong style={{ fontSize: "16px" }}>
              {job.title}
            </Text>
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

      {/* Modal Detail */}
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
            {selectedProject.images?.length > 0 && (
              <div style={{ marginBottom: 24 }}>
                <Carousel autoplay dots>
                  {selectedProject.images.map((imgUrl, idx) => (
                    <div key={idx}>
                      <img
                        src={imgUrl}
                        alt={`Screenshot ${idx}`}
                        style={{
                          width: "100%",
                          height: 400,
                          objectFit: "cover",
                          borderRadius: 8,
                        }}
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
            )}
            <p>{selectedProject.description}</p>
            <Divider />
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
    </div>
  );
};

export default ExperienceAndProjects;
