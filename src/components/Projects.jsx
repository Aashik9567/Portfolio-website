import React from 'react';
import { Card, Typography, Button, Tag, Space } from 'antd';
import { GithubOutlined, LinkOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB.",
    imageUrl: "/api/placeholder/800/400",
    tags: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    liveUrl: "https://ecommerce-platform-demo.com"
  },
  {
    title: "Weather App",
    description: "A responsive weather application using React and integrating with a weather API.",
    imageUrl: "/api/placeholder/800/400",
    tags: ["React", "API Integration", "CSS"],
    githubUrl: "https://github.com/yourusername/weather-app",
    liveUrl: "https://weather-app-demo.com"
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <>
    <div className="flex w-full flex-col flex-grow pt-2 pl-2 pr-2">
       <header className="bg-blue-500 text-white pl-12 py-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-4xl font-bold mb-2">Project Page</h2>
          <p className={` text-blue-100 font-bold`}>Welcome To My Profile</p>
      </header>
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-green-100 p-8">
      <Title level={1} className="text-center mb-12 font-inter text-4xl font-bold text-gray-800">
        Projects
      </Title>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card 
            key={index}
            cover={<img alt={project.title} src={project.imageUrl} className="h-48 object-cover" />}
            className="shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            <Title level={3} className="font-inter mb-2">{project.title}</Title>
            <Paragraph className="font-inter text-gray-700 mb-4">{project.description}</Paragraph>
            <div className="mb-4">
              {project.tags.map((tag, tagIndex) => (
                <Tag key={tagIndex} color="green" className="mr-2 mb-2">{tag}</Tag>
              ))}
            </div>
            <Space>
              <Button type="primary" icon={<GithubOutlined />} href={project.githubUrl} target="_blank">
                GitHub
              </Button>
              <Button icon={<LinkOutlined />} href={project.liveUrl} target="_blank">
                Live Demo
              </Button>
            </Space>
          </Card>
        ))}
      </div>
    </div>
    </div>
    </>
  );
};

export default Projects;