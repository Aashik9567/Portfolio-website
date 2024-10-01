import React from 'react';
import { Card, Typography, Button, Tag, Space, Row, Col } from 'antd';
import { GithubOutlined, ArrowRightOutlined, StarOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

// Motion components
const MotionRow = motion(Row);
const MotionCol = motion(Col);
const MotionCard = motion(Card);

const projects = [
  {
    title: "Ultrasonic Blind Stick with GSM/GPS",
    description: "An innovative assistive technology device that helps visually impaired individuals navigate safely. Features real-time obstacle detection, emergency GSM alerts, and GPS tracking for caretakers.",
    imageUrl: "https://media.springernature.com/lw685/springer-static/image/chp%3A10.1007%2F978-981-33-4866-0_23/MediaObjects/498359_1_En_23_Fig2_HTML.png",
    tags: ["Ultrasonic Sensors", "GSM Module", "GPS Tracking", "Arduino"],
    features: [
      "Obstacle detection up to 2 meters",
      "Emergency SOS button",
      "Real-time location tracking",
      "12-hour battery life"
    ],
    githubUrl: "https://github.com/Aashik9567/Arduino-projects-/tree/main/Ultrasonic-Blindstick-with-GSM-and-GPS-tracking-main"
  },
  {
    title: "Automated Attendance System",
    description: "A web-integrated attendance management system using facial recognition. Streamlines the attendance process for educational institutions with real-time updates and reporting.",
    imageUrl: "https://ubsapp.com/wp-content/uploads/2022/03/attendance_management-copy.png",
    tags: ["Face Recognition", "Web Integration", "Database", "Python"],
    features: [
      "99.5% recognition accuracy",
      "Real-time attendance tracking",
      "Automated report generation",
      "User-friendly dashboard"
    ],
    githubUrl: "https://github.com/Aashik9567/Attendance_Management_System"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const ProjectCard = ({ project }) => (
  <MotionCard
    hoverable
    variants={cardVariants}
    whileHover={{ 
      y: -10,
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      transition: { duration: 0.3 }
    }}
    className="project-card"
    cover={
      <motion.div style={{ overflow: 'hidden', height: 250 }}>
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          alt={project.title}
          src={project.imageUrl}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </motion.div>
    }
  >
    <motion.div className="card-content">
      <Title level={3} className="project-title">{project.title}</Title>
      <Paragraph className="project-description">{project.description}</Paragraph>
      
      <Space wrap className="mb-4">
        {project.tags.map((tag, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Tag className="custom-tag">{tag}</Tag>
          </motion.div>
        ))}
      </Space>
      
      <div className="features-section">
        <Title level={4} className="features-title">
          <StarOutlined className="star-icon" /> Key Features
        </Title>
        <ul className="features-list">
          {project.features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {feature}
            </motion.li>
          ))}
        </ul>
      </div>
      
      <Space className="button-group">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button 
            type="primary" 
            icon={<GithubOutlined />}
            onClick={() => window.open(project.githubUrl, '_blank')}
            className="github-button"
          >
            View Code
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button type="default" className="learn-more-button">
            Learn More <ArrowRightOutlined />
          </Button>
        </motion.div>
      </Space>
    </motion.div>
  </MotionCard>
);

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="projects-section"
    >
      <div className="projects-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <Title className="main-title">Engineering Projects</Title>
          <Paragraph className="subtitle">
            Innovative solutions in Electronics & Communication
          </Paragraph>
        </motion.div>
        
        <MotionRow
          gutter={[32, 32]}
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {projects.map((project, index) => (
            <MotionCol
              key={index}
              xs={24}
              md={12}
              variants={cardVariants}
            >
              <ProjectCard project={project} />
            </MotionCol>
          ))}
        </MotionRow>
      </div>
    </motion.div>
  );
};

export default Projects;