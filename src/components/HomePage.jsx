import React, { useState, useEffect } from 'react';
import { Typography, Button, Row, Col, Card, Progress, Space } from 'antd';
import { Cpu, Radio, Wifi, Terminal, Download, Github, Linkedin, Twitter, AlertCircle } from 'lucide-react';

const { Title, Paragraph } = Typography;

const skills = [
  { name: 'Digital Electronics', icon: <Cpu className="w-8 h-8" />, level: 90 },
  { name: 'Communication Systems', icon: <Radio className="w-8 h-8" />, level: 85 },
  { name: 'Network Design', icon: <Wifi className="w-8 h-8" />, level: 88 },
  { name: 'Programming', icon: <Terminal className="w-8 h-8" />, level: 82 },
];

export default function EnhancedPortfolio() {
  const [isVisible, setIsVisible] = useState({});
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section').forEach(
      (section) => observer.observe(section)
    );

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-gray-50 ">
       <header className="bg-blue-500 text-white pl-12 py-6 rounded-lg shadow-lg mt-2 mb-4">
          <h2 className="text-4xl font-bold mb-2">Home Page</h2>
          <p className=" text-blue-100 font-bold ">Welcome To My Profile</p>
      </header>
      {/* Hero Section */}
      <section id="hero" className={`min-h-screen flex items-center bg-gradient-to-br from-blue-100 to-indigo-100 p-4 transition-opacity duration-1000 ${isVisible['hero'] ? 'opacity-100' : 'opacity-0'}`}>
        <Row className="w-full ml-20" justify="space-between">
          <Col xs={24} md={12} className="space-y-6">
            <Title level={1} className="text-5xl !font-bold text-gray-800 animate-fade-in-up">
              AashiQ Mahato
            </Title>
            <Title level={2} className="!text-2xl text-indigo-600 !font-semibold animate-fade-in-up delay-200">
              Electronics & Communication Engineer
            </Title>
            <Paragraph className="text-gray-600 text-xl animate-fade-in-up delay-300">
              Bridging the gap between hardware and software with innovative solutions
            </Paragraph>
            <Space size="middle" className="animate-fade-in-up delay-400">
              <Button type="primary" icon={<Download className="w-4 h-4" />} size="large">
                Download CV
              </Button>
              <Button icon={<Github className="w-4 h-4" />} size="large" />
              <Button icon={<Linkedin className="w-4 h-4" />} size="large" />
              <Button icon={<Twitter className="w-4 h-4" />} size="large" />
            </Space>
          </Col>
          <Col xs={24} md={12} className="mt-10 md:mt-0 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <img 
                src="https://scontent.fktm21-1.fna.fbcdn.net/v/t1.6435-9/183098936_2554255218211672_3927423143591598125_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=2a1932&_nc_ohc=RC4NxKMzWX4Q7kNvgGwaqvz&_nc_ht=scontent.fktm21-1.fna&_nc_gid=AJmewjFQ1jDzVpym2UBPvhP&oh=00_AYB2Mp40kW7yq7zmnmXNrW5l5QYe6MXB7nnhlSHxr7Fv9g&oe=67233025"
                alt="Profile"
                className="relative rounded-full w-64 h-64 object-cover border-4 border-white shadow-lg animate-float"
              />
            </div>
          </Col>
        </Row>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 transition-opacity duration-1000 ${isVisible['skills'] ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto px-4">
          <Title level={2} className="text-center mb-16">Technical Expertise</Title>
          <Row gutter={[24, 24]}>
            {skills.map((skill, index) => (
              <Col xs={24} sm={12} lg={6} key={skill.name}>
                <Card 
                  className={`h-full transform transition-all duration-500 hover:scale-105 ${
                    index === currentSkillIndex ? 'border-indigo-500 border-2' : ''
                  }`}
                >
                  <div className="flex justify-center mb-4">
                    {skill.icon}
                  </div>
                  <Title level={3} className="text-center mb-4">{skill.name}</Title>
                  <Progress
                    percent={skill.level}
                    strokeColor={{
                      '0%': '#4F46E5',
                      '100%': '#818CF8',
                    }}
                    className="custom-progress"
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Call to Action */}
      <section id="cta" className={`py-20 bg-gradient-to-r from-indigo-600 to-blue-500 text-white transition-opacity duration-1000 ${isVisible['cta'] ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto px-4 text-center">
          <AlertCircle className="w-16 h-16 mx-auto mb-6 animate-bounce" />
          <Title level={2} className="!text-white mb-4">Let's Innovate Together</Title>
          <Paragraph className="text-xl mb-8 max-w-2xl mx-auto text-white">
            Looking to bring your electronic and communication projects to life? Let's combine our expertise to create something extraordinary.
          </Paragraph>
          <Button size="large" className="bg-white text-indigo-600 hover:bg-gray-100">
            Start a Project
          </Button>
        </div>
      </section>

      <style jsx global>{`
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
          opacity: 0;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-400 {
          animation-delay: 0.4s;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .custom-progress .ant-progress-inner {
          background-color: #E5E7EB;
        }
      `}</style>
    </div>
  );
}