import React from 'react';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    title: "The Future of Web Development",
    date: "2024-09-15",
    author: "Jane Doe",
    excerpt: "Exploring emerging trends in web development and their potential impact on the industry.",
    tags: ["Web Dev", "Future Tech"],
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
  },
  {
    title: "Mastering React Hooks",
    date: "2024-09-10",
    author: "John Smith",
    excerpt: "A deep dive into React Hooks and how they can simplify your code and improve performance.",
    tags: ["React", "JavaScript"],
    imageUrl: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80"
  },
  {
    title: "The Rise of AI in Design",
    date: "2024-09-05",
    author: "Emma Watson",
    excerpt: "How artificial intelligence is revolutionizing the field of design and what it means for designers.",
    tags: ["AI", "Design"],
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: "Cybersecurity in the Age of IoT",
    date: "2024-08-30",
    author: "Michael Brown",
    excerpt: "Exploring the challenges and solutions for securing the growing Internet of Things ecosystem.",
    tags: ["Cybersecurity", "IoT"],
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-200 to-pink-200">
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 px-4 sm:px-6 rounded-2xl shadow-2xl m-4">
        <motion.h1 
          className="text-5xl font-extrabold text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Cutting-Edge Tech Blog
        </motion.h1>
        <motion.p 
          className="mt-4 max-w-2xl mx-auto text-xl text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Explore the latest in web development, AI, and more
        </motion.p>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <img className="h-48 w-full object-cover" src={post.imageUrl} alt={post.title} />
              <div className="p-6">
                <h2 className="font-bold text-2xl mb-2 text-gray-800">{post.title}</h2>
                <p className="text-gray-600 text-sm mb-4">{post.date} • {post.author}</p>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap">
                  {post.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2">
                      #{tag}
                    </span>
                  ))}
                </div>
                <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <footer className="mt-16 bg-gray-800 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left mb-4 md:mb-0">© 2024 Cutting-Edge Tech Blog. All rights reserved.</p>
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

export default Blog;