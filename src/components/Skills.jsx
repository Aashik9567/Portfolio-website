import React from 'react';
import { Typography, Progress, Tooltip } from 'antd';
import { motion } from 'framer-motion';
import { CodeOutlined, GlobalOutlined, ToolOutlined, TeamOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const skillCategories = [
  {
    title: "Programming",
    icon: <CodeOutlined className="text-4xl text-blue-600" />,
    skills: [
      { name: "C", level: 85 },
      { name: "C++", level: 80 },
      { name: "Python", level: 75 },
      { name: "JavaScript", level: 82 },
    ]
  },
  {
    title: "Web Tech",
    icon: <GlobalOutlined className="text-4xl text-green-600" />,
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "React JS", level: 80 },
      { name: "MySQL", level: 75 },
    ]
  },
  {
    title: "Hardware",
    icon: <ToolOutlined className="text-4xl text-yellow-600" />,
    skills: [
      { name: "Arduino", level: 90 },
      { name: "Raspberry Pi", level: 80 },
    ]
  },
  {
    title: "Soft Skills",
    icon: <TeamOutlined className="text-4xl text-purple-600" />,
    skills: [
      { name: "Quick Learner", level: 95 },
      { name: "Teamwork", level: 90 },
      { name: "Problem Solving", level: 85 },
    ]
  }
];

const SkillCard = ({ category, index }) => (
  <motion.div 
    className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
  >
    <div className="p-6">
      <div className="flex items-center mb-4">
        {category.icon}
        <Title level={3} className="ml-4 mb-0">{category.title}</Title>
      </div>
      <div className="space-y-4">
        {category.skills.map((skill, skillIndex) => (
          <motion.div 
            key={skillIndex}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: skillIndex * 0.1 + index * 0.2 }}
          >
            <div className="flex justify-between items-center mb-2">
              <Text strong className="text-lg">{skill.name}</Text>
              <Text className="text-gray-500">{skill.level}%</Text>
            </div>
            <Tooltip title={`${skill.level}% proficiency`}>
              <Progress 
                percent={skill.level} 
                showInfo={false}
                strokeColor={{
                  '0%': '#3B82F6',
                  '100%': '#2563EB',
                }}
                trailColor="#E5E7EB"
                strokeWidth={8}
              />
            </Tooltip>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <div className="w-full bg-gradient-to-br from-blue-400 to-indigo-100 min-h-screen">
      <div className="container mx-auto px-4">
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 px-4 sm:px-6 rounded-2xl shadow-2xl m-4">
        <motion.h1 
          className="text-5xl font-extrabold text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Technical Expertise
        </motion.h1>
        <motion.p 
          className="mt-4 max-w-2xl mx-auto text-xl text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Mastering Electronics, Programming, and Web Development
        </motion.p>
      </header>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
        </motion.div>
        
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} index={index}  />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;