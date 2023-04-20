import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-900">
      <div className="container-lg">
        <div className="py-8 flex justify-center space-x-4">
          <a
            href="https://github.com/jaseunda"
            target="_blank"
            rel="noreferrer"
            className="text-gray-100 hover:text-blue-600 duration-300"
          >
            <FaGithub size={32} />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/jaseunda/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-100 hover:text-blue-600 duration-300"
          >
            <FaLinkedin size={32} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="https://twitter.com/jaseunda"
            target="_blank"
            rel="noreferrer"
            className="text-gray-100 hover:text-blue-600 duration-300"
          >
            <FaTwitter size={32} />
            <span className="sr-only">Twitter</span>
          </a>
        </div>
        <div className="pb-4 flex justify-center">
          <p className="text-gray-100 text-sm">
            © 2021 Jaseunda. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;