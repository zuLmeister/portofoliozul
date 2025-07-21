// src/Components/Skills/Skills.jsx

import React from "react";
import { Typography, Card, Tooltip, Divider, Row, Col } from "antd";
import { motion } from "framer-motion";

const { Title } = Typography;

const Skills = ({ data, textColor }) => {
  return (
    <div id="skills" style={{ paddingTop: "80px", paddingBottom: "48px" }}>
      <Divider>
        <Title level={3} style={{ color: textColor }}>
          Tech Stacks
        </Title>
      </Divider>
      <Card>
        <Row gutter={[48, 48]} justify="center">
          {data.map((skill) => (
            <Col
              key={skill.name}
              xs={8}
              sm={6}
              md={4}
              style={{ textAlign: "center" }}
            >
              <Tooltip title={skill.name} color={skill.color}>
                <motion.div
                  whileHover={{ scale: 1.2, y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: skill.color, // Memberi warna pada ikon
                  }}
                >
                  {skill.icon}
                </motion.div>
              </Tooltip>
            </Col>
          ))}
        </Row>
      </Card>
    </div>
  );
};

export default Skills;
