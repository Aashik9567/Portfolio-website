import React from 'react';
import { Timeline, Card, Typography, Tag } from 'antd';
import { BookOutlined, CalendarOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Title, Text } = Typography;

const educationData = [
  {
    degree: "Bachelor in Electronics Communication and Information Engineering",
    institution: "Advanced College of Engineering and Management",
    year: "2021-2025",
    location: "Kalanki, Kathmandu",
    achievements: ["Machine Learning", "Artificial Intelligence", "Hardware Experience"],
    color: "blue",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    degree: "High School Class 11 and 12",
    institution: "Prasadi Academy",
    year: "2018-2020",
    location: "Jawlakhel, Lalitpur",
    achievements: ["11th and 12th degree"],
    color: "green",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
];

const Education = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-green-200 to-indigo-50">
      <motion.header 
        className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-12 px-4 sm:px-6 rounded-2xl shadow-2xl m-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-extrabold text-center">Educational Journey</h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-center">Exploring the path of knowledge and growth</p>
      </motion.header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Title level={1} className="text-center mb-12 font-inter text-4xl font-bold text-gray-800">
            Education
          </Title>
        </motion.div>

        <Timeline mode="alternate">
          {educationData.map((edu, index) => (
            <Timeline.Item 
              key={index} 
              color={edu.color}
              dot={
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.2, type: "spring", stiffness: 260, damping: 20 }}
                >
                  <BookOutlined style={{ fontSize: '24px', color: edu.color }} />
                </motion.div>
              }
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3, duration: 0.5 }}
              >
                <Card 
                  className="w-full md:w-[450px] shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                  cover={<img alt={edu.institution} src={edu.image} className="h-48 object-cover" />}
                  headStyle={{ borderBottom: `4px solid ${edu.color}` }}
                >
                  <Title level={3} className="font-inter mb-2 text-gray-800">{edu.degree}</Title>
                  <Text strong className="block mb-2 font-inter text-lg">{edu.institution}</Text>
                  <div className="flex justify-between mb-4 text-gray-600">
                    <Text><CalendarOutlined className="mr-2" />{edu.year}</Text>
                    <Text><EnvironmentOutlined className="mr-2" />{edu.location}</Text>
                  </div>
                  <div className="mt-4">
                    <Text strong className="block mb-2 text-gray-700">Key Achievements:</Text>
                    {edu.achievements.map((achievement, achIndex) => (
                      <Tag key={achIndex} color={edu.color} className="mr-2 mb-2 px-3 py-1 text-sm">
                        {achievement}
                      </Tag>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </Timeline.Item>
          ))}
        </Timeline>
      </div>

      <footer className="mt-16 bg-gray-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left mb-4 md:mb-0">© 2024 Your Educational Journey. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400 transition duration-300">About</a>
            <a href="#" className="hover:text-blue-400 transition duration-300">Contact</a>
            <a href="#" className="hover:text-blue-400 transition duration-300">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Education;