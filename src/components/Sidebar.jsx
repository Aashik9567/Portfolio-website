import React, { useState, useEffect, useContext } from 'react';
import { ActiveTabContext } from '../contextState';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Menu,
  Home,
  User,
  Contact,
  Projector,
  BookA,
  PenLine
} from 'lucide-react';

// MenuItem Component
const MenuItem = ({ icon, label, isActive, onClick, isExpanded }) => (
  <li>
    <button
      onClick={onClick}
      className={`flex items-center w-full space-x-3 p-2 rounded-lg transition-all duration-300
        ${isActive ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'}
        ${isExpanded ? '' : 'justify-center'}`}
    >
      {icon}
      {isExpanded && <span>{label}</span>}
    </button>
  </li>
);

// Sidebar Component
const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const { activeItem, setActiveItem } = useContext(ActiveTabContext);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle responsive changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsExpanded(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Set active item based on current path
  useEffect(() => {
    const path = location.pathname.slice(1);
    const activeMenuItem = menuItems.find(item => item.path === path);
    if (activeMenuItem) {
      setActiveItem(activeMenuItem.label);
    }
  }, [location, setActiveItem]);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const menuItems = [
    { icon: <Home size={20} />, label: 'Home', path: '' },
    { icon: <User size={20} />, label: 'About', path: 'about' },
    { icon: <Projector size={20} />, label: 'Projects', path: 'projects' },
    { icon: <Contact size={20} />, label: 'Contact', path: 'contactus' },
    { icon: <BookA size={20} />, label: 'Education', path: 'education' },
    { icon: <PenLine size={20} />, label: 'Blog', path: 'blog' },
  ];

  const handleItemClick = (label, path) => {
    setActiveItem(label);
    navigate(`/${path}`);
  };

  return (
    <>
      {/* Mobile toggle button */}
      {isMobile && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 p-2 bg-blue-500 text-white rounded-lg shadow-lg"
        >
          <Menu size={24} />
        </button>
      )}
      <div
        className={`fixed md:sticky top-0 left-0 h-screen bg-white shadow-lg transition-transform duration-300 ease-in-out
          ${isExpanded ? 'w-64' : 'w-20'}
          ${isMobile && !isExpanded ? '-translate-x-full' : 'translate-x-0'}
          md:relative z-40`}
      >
        {/* Sidebar header */}
        <div className="flex h-16 items-center justify-between px-4 bg-blue-500 text-white">
          {isExpanded && (
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-blue-500 font-bold text-xl">A</span>
              </div>
              <span className="text-lg font-semibold">Aashik</span>
            </div>
          )}
          {!isMobile && (
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              <Menu size={20} />
            </button>
          )}
        </div>

        {/* Menu items */}
        <nav className="px-4 py-6">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <MenuItem
                key={item.label}
                icon={item.icon}
                label={item.label}
                isActive={activeItem === item.label}
                onClick={() => handleItemClick(item.label, item.path)}
                isExpanded={isExpanded}
              />
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;