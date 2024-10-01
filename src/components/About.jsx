import React, { useState, useEffect } from 'react';
import { Typography, Row, Col, Card, Statistic } from 'antd';
import { Typewriter } from 'react-simple-typewriter';
import { 
  Book, 
  Code2, 
  Cpu, 
  Globe, 
  Heart, 
  Lightbulb, 
  Radio, 
  Trophy, 
  Github,
  Twitter,
  Linkedin,
  Mail
} from 'lucide-react';

const { Title, Paragraph } = Typography;

const achievements = [
  { icon: <Github className="w-8 h-8" />, value: "1.5K+", title: "Profile Views" },
  { icon: <Code2 className="w-8 h-8" />, value: 15, title: "Projects Completed" },
  { icon: <Trophy className="w-8 h-8" />, value: 7, title: "GitHub Trophies" },
  { icon: <Heart className="w-8 h-8" />, value: "100+", title: "GitHub Stars" },
];

const skills = [
  { 
    icon: <Code2 className="w-8 h-8" />, 
    title: "Frontend Development", 
    description: "React.js, Next.js, TypeScript",
    color: "bg-blue-500" 
  },
  { 
    icon: <Cpu className="w-8 h-8" />, 
    title: "UI/UX Design", 
    description: "Figma, Tailwind CSS, Responsive Design",
    color: "bg-purple-500"
  },
  { 
    icon: <Radio className="w-8 h-8" />, 
    title: "Languages", 
    description: "JavaScript, Python, HTML5, CSS3",
    color: "bg-green-500"
  },
  { 
    icon: <Lightbulb className="w-8 h-8" />, 
    title: "Problem Solving", 
    description: "Algorithms, Data Structures, Clean Code",
    color: "bg-yellow-500"
  },
];

const socialLinks = [
  { icon: <Github className="w-6 h-6" />, url: "https://github.com/aashik9567", color: "bg-gray-800" },
  { icon: <Twitter className="w-6 h-6" />, url: "https://twitter.com/your-profile", color: "bg-blue-400" },
  { icon: <Linkedin className="w-6 h-6" />, url: "https://linkedin.com/in/your-profile", color: "bg-blue-600" },
  { icon: <Mail className="w-6 h-6" />, url: "mailto:aashik9567@example.com", color: "bg-red-500" },
];

export default function EnhancedAbout() {
  const [isVisible, setIsVisible] = useState({});

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

  return (
    <div className="flex flex-col flex-grow pt-2 pl-2 pr-2">
    <header className="bg-blue-500 text-white pl-12 py-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-4xl font-bold mb-2">About Page</h2>
    </header>
    <div className="w-full rounded-xl flex flex-col flex-grow bg-gradient-to-b from-emerald-50 to-gray-100">
      {/* Hero Section */}
      <section id="hero" className={`min-h-screen flex items-center transition-opacity duration-1000 ${
        isVisible['hero'] ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="container mx-auto px-4">
          <Row className="w-full max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden" align="middle" justify="space-between">
            <Col xs={24} md={10} className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-8 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-white rounded-full blur-2xl opacity-20 animate-pulse"></div>
                  <img 
                    src="https://avatars.githubusercontent.com/u/89069898?s=400&u=5b4aa57567c3a3815328091a5c81c56b8ba48fc0&v=4"
                    alt="AashiQ Mahato"
                    className="relative rounded-full w-48 h-48 object-cover border-4 border-white shadow-lg animate-float"
                  />
                </div>
              </div>
              <div className="text-center">
                <h1 className="text-4xl font-bold text-white mb-4">AashiQ Mahato</h1>
                <div className="flex justify-center space-x-3 mb-6">
                  {socialLinks.map((link, index) => (
                    <a 
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${link.color} p-2 rounded-full text-white hover:opacity-80 transition-opacity`}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
                <div className="text-xl font-semibold text-orange-200">
                  <Typewriter
                    words={[
                      "Frontend Developer",
                      "React JS Expert",
                      "Electronics Engineer",
                      "Problem Solver"
                    ]}
                    loop
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </div>
              </div>
            </Col>
            <Col xs={24} md={14} className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">About Me</h2>
              <p className="text-lg text-gray-600 mb-6">
                I'm a passionate Frontend Developer from Nepal 🇳🇵, skilled in building beautiful, responsive, and high-performance web applications using the latest technologies.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-gray-700">
                  <Code2 className="w-6 h-6 mr-3 text-blue-500" />
                  Currently working on React.js projects with Tailwind CSS
                </div>
                <div className="flex items-center text-gray-700">
                  <Book className="w-6 h-6 mr-3 text-purple-500" />
                  Learning more about Next.js and TypeScript
                </div>
                <div className="flex items-center text-gray-700">
                  <Globe className="w-6 h-6 mr-3 text-green-500" />
                  Looking to collaborate on open-source React projects
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 transition-opacity duration-1000 ${
        isVisible['skills'] ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">My Expertise</h2>
          <Row gutter={[24, 24]}>
            {skills.map((skill, index) => (
              <Col xs={24} sm={12} md={6} key={index}>
                <Card 
                  className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  bodyStyle={{ padding: '2rem' }}
                >
                  <div className={`flex justify-center mb-6 ${skill.color} w-16 h-16 rounded-full mx-auto text-white p-4`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-4">{skill.title}</h3>
                  <p className="text-center text-gray-600">
                    {skill.description}
                  </p>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className={`py-20 bg-gradient-to-r from-blue-50 to-indigo-50 transition-opacity duration-1000 ${
        isVisible['achievements'] ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Milestones Reached</h2>
          <Row gutter={[24, 24]} justify="center">
            {achievements.map((achievement, index) => (
              <Col xs={12} sm={6} key={index}>
                <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="flex justify-center mb-4 text-blue-500">
                    {achievement.icon}
                  </div>
                  <Statistic 
                    value={achievement.value} 
                    title={achievement.title}
                    className="custom-statistic"
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      <style jsx global>{`
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        .custom-statistic .ant-statistic-title {
          color: #4F46E5;
          font-weight: 500;
        }

        .custom-statistic .ant-statistic-content {
          color: #1F2937;
          font-size: 24px;
        }
      `}</style>
    </div>
    </div>
  );
}