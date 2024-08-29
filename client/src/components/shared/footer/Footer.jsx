import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const footerSections = [
  {
    title: 'Company',
    links: [
      { name: 'About Us', path: '/about' },
      { name: 'Careers', path: '/careers' },
      { name: 'Press', path: '/press' },
      { name: 'Blog', path: '/blog' },
    ],
  },
  {
    title: 'Support',
    links: [
      { name: 'Help Center', path: '/help-center' },
      { name: 'Safety Center', path: '/safety-center' },
      { name: 'Community Guidelines', path: '/community-guidelines' },
      { name: 'Contact Us', path: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', path: '/privacy-policy' },
      { name: 'Terms of Service', path: '/terms-of-service' },
      { name: 'Cookie Policy', path: '/cookie-policy' },
      { name: 'Security', path: '/security' },
    ],
  },
];

const socialLinks = [
  { icon: Facebook, path: 'https://facebook.com' },
  { icon: Twitter, path: 'https://twitter.com' },
  { icon: Instagram, path: 'https://instagram.com' },
  { icon: Linkedin, path: 'https://linkedin.com' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className="bg-gradient-to-r from-gray-700 via-gray-700 to-gray-900 text-white py-12 rounded-xl w-full h-[350px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
              <ul>
                {section.links.map((link) => (
                  <li key={link.name} className="mb-2">
                    <Link to={link.path} className="hover:text-gray-400">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.path}
                  className="hover:text-gray-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500">© {currentYear} Your Company. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <Link to="/privacy-policy" className="hover:text-gray-400">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-gray-400">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
