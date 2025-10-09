import React from "react";
import Container from "./Container";
import { Link } from "react-router";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo.png"
const Footer = () => {
  return (
    <div>
      <div className="bg-[#06091A] text-neutral-content">
        <Container>
          <div className="max-w-7xl mx-auto px-3 py-10">
            <div className="grid gap-8 sm:gap-10 md:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
              <div>
                <Link to="/">
                  <div className="inline-flex items-center gap-2">
                    <img src={logo} alt="logo" className="size-12" />
                    <span className="text-xl font-semibold">HERO.IO</span>
                  </div>
                </Link>
                <p className="text-gray-400 mt-4 text-sm">A modern, responsive app gallery built with React, Vite and Tailwind. Discover apps, view insights, and manage installs locally.</p>
              </div>

              <div className="">
                <h3 className="text-white font-semibold mb-3">Quick Links</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <Link to="/" className="hover:underline">Home</Link>
                  </li>
                  <li>
                    <Link to="/apps" className="hover:underline">Apps</Link>
                  </li>
                  <li>
                    <Link to="/myinstallation" className="hover:underline">My Installation</Link>
                  </li>
                  <li>
                    <a href="https://hero-apps-301.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:underline">Live</a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-3">About Project</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <a href="/" className="hover:underline">Getting Started</a>
                  </li>
                  <li>
                    <a href="/" className="hover:underline">Features</a>
                  </li>
               
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-3">Follow</h3>
                <div className="flex flex-col gap-2 text-gray-300">
                  <a href="https://github.com/mahfuz-shakib" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:opacity-80">
                    <FaGithub aria-hidden="true" />
                    <span>GitHub</span>
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:opacity-80">
                    <FaFacebook aria-hidden="true" />
                    <span>Facebook</span>
                  </a>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:opacity-80">
                    <FaLinkedin aria-hidden="true" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center text-gray-400 border-t border-t-gray-600 text-sm mt-10 pt-6">
              <p>Copyright © {new Date().getFullYear()} - All rights reserved.</p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
