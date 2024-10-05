import React from 'react';
import { FaGithub, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <>
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-center md:text-left">Portfólio pessoal Matheus Condez.</p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/MatheussGC"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://instagram.com/matheuss.gc"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
