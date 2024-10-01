import React, { useState } from 'react';
import { Form, Input, Button, Card, Typography } from 'antd';
import { Mail, Phone, Send, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const SocialLink = ({ icon: Icon, href, color }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className={`${color} p-2 rounded-full text-white hover:opacity-80 transition-all duration-300 hover:-translate-y-1`}
  >
    <Icon className="w-5 h-5" />
  </a>
);

const ContactUs = () => {
  const [form] = Form.useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onFinish = async (values) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted:', values);
    setIsSubmitting(false);
    form.resetFields();
  };

  return (
    <div className="flex flex-col flex-grow pt-2 pl-2 pr-2">
          <header className="bg-blue-500 backdrop-blur-md text-white z-50 pl-12 py-6 rounded-lg shadow-lg mb-6 mx-2">
            <h2 className="text-4xl font-bold mb-2">Get in Touch</h2>
          </header>
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-white-lines-moving-randomly-24033-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/50 to-purple-500/50 backdrop-blur-sm"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full min-h-screen flex flex-col">

          <div className="flex-grow flex items-center justify-center p-4">
            <Card className="w-full max-w-5xl shadow-2xl bg-white/80 backdrop-blur-md">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column - Contact Info */}
                <div className="space-y-8">
                  <div className="text-center md:text-left">
                    <Title level={2} className="!mb-4">Let's Connect</Title>
                    <Paragraph className="text-lg text-gray-600">
                      Have a question or want to work together? I'd love to hear from you!
                    </Paragraph>
                  </div>

                  {/* 3D Avatar */}
                  <div className="flex justify-center md:justify-start">
                    <img 
                      src="https://p.turbosquid.com/ts-thumb/bz/IQab07/b9NDIH6R/image2/png/1555437531/1920x1080/fit_q87/f72545806fed0cf1c1587d26b88f303fcdb8f614/image2.jpg" 
                      alt="3D Avatar" 
                      className="w-48 h-48 rounded-full shadow-lg animate-float" 
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-gray-700">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <Phone className="w-5 h-5 text-blue-500" />
                      </div>
                      <span>+977-9808711811</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-700">
                      <div className="bg-purple-100 p-2 rounded-full">
                        <Mail className="w-5 h-5 text-purple-500" />
                      </div>
                      <span>aashikmahato9567@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-700">
                      <div className="bg-green-100 p-2 rounded-full">
                        <MapPin className="w-5 h-5 text-green-500" />
                      </div>
                      <span>Kathmandu, Nepal</span>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <SocialLink icon={Github} href="https://github.com/aashik9567" color="bg-gray-800" />
                    <SocialLink icon={Linkedin} href="#" color="bg-blue-600" />
                    <SocialLink icon={Twitter} href="#" color="bg-blue-400" />
                  </div>
                </div>

                {/* Right Column - Contact Form */}
                <div className="bg-white p-6 rounded-lg shadow-inner">
                  <Form form={form} onFinish={onFinish} layout="vertical">
                    <Form.Item
                      name="name"
                      rules={[{ required: true, message: 'Please input your name!' }]}
                    >
                      <Input 
                        placeholder="Your Name" 
                        size="large"
                        className="hover:border-blue-500 focus:border-blue-500" 
                      />
                    </Form.Item>
                    <Form.Item
                      name="email"
                      rules={[
                        { required: true, message: 'Please input your email!' },
                        { type: 'email', message: 'Please enter a valid email!' }
                      ]}
                    >
                      <Input 
                        placeholder="Your Email" 
                        size="large"
                        className="hover:border-blue-500 focus:border-blue-500"
                      />
                    </Form.Item>
                    <Form.Item
                      name="message"
                      rules={[{ required: true, message: 'Please input your message!' }]}
                    >
                      <TextArea 
                        rows={4} 
                        placeholder="Your Message" 
                        className="hover:border-blue-500 focus:border-blue-500"
                      />
                    </Form.Item>
                    <Form.Item>
                      <Button 
                        type="primary" 
                        htmlType="submit" 
                        icon={<Send className="w-4 h-4" />}
                        size="large"
                        loading={isSubmitting}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 border-0 hover:shadow-lg transition-all duration-300"
                        block
                      >
                        Send Message
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        .ant-input, .ant-input-textarea {
          transition: all 0.3s ease;
        }

        .ant-btn-primary {
          height: 48px;
          font-size: 16px;
        }

        .ant-card {
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default ContactUs;