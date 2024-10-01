import React from 'react';
import { Timeline, Card, Typography, Tag } from 'antd';
import { BookOutlined, CalendarOutlined, EnvironmentOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const educationData = [
  {
    degree: "Bachelor in Electronics Communication and Information Engineering",
    institution: "Advanced College of Engineering and Management",
    year: "2021-2025",
    location: "Kalanki, Kathmandu",
    achievements: ["Machine Learning", "Artificial Intelligence","Hardware Experience"],
    color: "blue"
  },
  {
    degree: "High School Class 11 and 12",
    institution: "Prasadi Academy",
    year: "2018-2020",
    location: "Jawlakhel, Lalitpur",
    achievements: ["11th and 12th degree "],
    color: "green"
  }
];

const Education = () => {
  return (
    <div className="flex flex-col flex-grow pt-2 pl-2 pr-2">
      <header className="bg-blue-500 text-white pl-12 py-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-4xl font-bold mb-2">Education Page</h2>
      </header>
    <div className="min-h-screen w-full bg-gradient-to-r from-blue-100 to-green p-8">
      <Title level={1} className="text-center mb-12 font-inter text-4xl font-bold text-gray-800">
        Education
      </Title>
      <div className="max-w-4xl mx-auto">
        <Timeline mode="alternate">
          {educationData.map((edu, index) => (
            <Timeline.Item 
              key={index} 
              color={edu.color}
              dot={<BookOutlined style={{ fontSize: '16px' }} />}
            >
              <Card 
                className="w-full md:w-96 shadow-lg hover:shadow-xl transition-shadow duration-300"
                headStyle={{ borderBottom: `4px solid ${edu.color}` }}
              >
                <Title level={4} className="font-inter mb-2">{edu.degree}</Title>
                <Text strong className="block mb-2 font-inter">{edu.institution}</Text>
                <div className="flex justify-between mb-4">
                  <Text className="text-gray-500"><CalendarOutlined /> {edu.year}</Text>
                  <Text className="text-gray-500"><EnvironmentOutlined /> {edu.location}</Text>
                </div>
                <div>
                  {edu.achievements.map((achievement, achIndex) => (
                    <Tag key={achIndex} color={edu.color} className="mr-2 mb-2">
                      {achievement}
                    </Tag>
                  ))}
                </div>
              </Card>
            </Timeline.Item>
          ))}
        </Timeline>
      </div>
    </div>
    </div>
  );
};

export default Education;