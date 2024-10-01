import React from 'react';
import { Card, Typography, Space, Tag } from 'antd';
import { CalendarOutlined, UserOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const blogPosts = [
  {
    title: "The Future of Web Development",
    date: "2024-09-15",
    author: "Jane Doe",
    excerpt: "Exploring emerging trends in web development and their potential impact on the industry.",
    tags: ["Web Dev", "Future Tech"],
    imageUrl: "/api/placeholder/800/400"
  },
  {
    title: "Mastering React Hooks",
    date: "2024-09-10",
    author: "John Smith",
    excerpt: "A deep dive into React Hooks and how they can simplify your code and improve performance.",
    tags: ["React", "JavaScript"],
    imageUrl: "/api/placeholder/800/400"
  },
  // Add more blog posts as needed
];

const Blog = () => {
  return (
    <div className="flex flex-col flex-grow pt-2 pl-2 pr-2">
      <header className="bg-blue-500 text-white pl-12 py-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-4xl font-bold mb-2">Blog Page</h2>
      </header>
    <div className="min-h-screen w-full bg-gradient-to-r from-indigo-100 to-purple-100 p-8">
      <Title level={1} className="text-center mb-12 font-inter text-4xl font-bold text-gray-800">
        Blog
      </Title>
      <div className="max-w-4xl mx-auto grid gap-8">
        {blogPosts.map((post, index) => (
          <Card 
            key={index}
            hoverable
            cover={<img alt={post.title} src={post.imageUrl} className="h-48 object-cover" />}
            className="shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            <Title level={3} className="font-inter mb-2">{post.title}</Title>
            <Space className="mb-4">
              <span className="text-gray-500"><CalendarOutlined /> {post.date}</span>
              <span className="text-gray-500"><UserOutlined /> {post.author}</span>
            </Space>
            <Paragraph className="font-inter text-gray-700 mb-4">{post.excerpt}</Paragraph>
            <div>
              {post.tags.map((tag, tagIndex) => (
                <Tag key={tagIndex} color="blue" className="mr-2 mb-2">{tag}</Tag>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Blog;