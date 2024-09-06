"use client";
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import FaXTwitter instead of FaTwitter
import profilePics from "@/app/Home/Profilepics.JPG"
import Xicon from "@/app/Home/Xicon.png"

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white relative">
      {/* Vertical line */}
      <div className="absolute top-0 left-36 h-full w-px bg-white"></div>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row items-start justify-center h-screen pt-24">
        {/* Left Side */}
        <div className="flex flex-col justify-center ml-44 text-center lg:text-left lg:w-1/2 p-8">
          <div className="text-blue-500 text-xl ml-80 flex items-center justify-center lg:justify-start">
            Hey there! <span className="ml-2">👋</span>
          </div>
          <h1 className="mt-6 ml-80 text-lg font-medium">I am Walt Aneke</h1>
          <h2 className="text-4xl font-bold text-white mt-8 ml-24 whitespace-nowrap">Frontend Developer</h2>
          <p className="mt-8 text-sm text-gray-400 mr-9">
            "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it"
          </p>
          <p className="mt-2 text-gray-500 text-center ml-80 whitespace-nowrap text-base ">- Patrick McKenzie</p>
        </div>

        {/* Right Side */}
        <div className="lg:w-1/2 p-8 flex justify-center">
          <div className="w-48 h-60 overflow-hidden">
            <Image
              src={profilePics}
              alt="Walts Profile Image"
              width={192}
              height={192}
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Secondary Layout */}
      <div className="flex flex-col lg:flex-row items-start justify-between -mt-60">
        {/* Contact Info */}
        <div className="flex flex-col items-center lg:items-start lg:w-1/2 ml-56 ">
          <h3 className="text-xl ">Say hello</h3>
          <p className="text-gray-500 mt-2">anekewalter@gmail.com</p>
          <div className="flex space-x-4">
            <a href="https://twitter.com/your-x-link" target="_blank" rel="noopener noreferrer">
            <Image
              src={Xicon}
              alt="Walts Profile Image"
              width={30}
              height={30}
              style={{ filter: "invert(44%) sepia(85%) saturate(617%) hue-rotate(166deg) brightness(80%) contrast(120%)" }}
            />
            </a>
            <a href="https://github.com/your-github-link" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-blue-500" size={30} />
            </a>
            <a href="https://www.linkedin.com/in/your-linkedin-link" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-500" size={30} />
            </a>
          </div>
        </div>

        {/* Action Links */}
        <div className="flex flex-col lg:flex-row items-start justify-between w-full lg:w-1/2 space-y-8 lg:space-y-0 lg:space-x-">
          {/* My Works */}
          <div className="bg-gray-500 p-7 h-60 text-center whitespace-nowrap">
            <h4 className='text-lg'>My Works</h4>
            <p className="text-white-400 mt-2 text-sm">Just me playing around</p>
            <a href="/projects" className="block mt-20 border border-white text-white py-2 px-4 text-xs">
              Let's Go
            </a>
          </div>

          {/* Skills */}
          <div className="bg-blue-600 p-8 text-center whitespace-nowrap h-60">
            <h4 className='text-lg'>Skills</h4>
            <p className="text-white-400 mt-2 text-sm">My skillset</p>
            <a href="/skills" className="block border border-white text-white py-2 px-4 text-xs mt-20">
              Checkout my skills
            </a>
          </div>

          {/* Resume */}
          <div className="bg-blue-800 p-7 text-center text-sm h-60">
            <h4 className='text-lg'>Resume</h4>
            <p className="text-white-400 mt-2 whitespace-nowrap">Download my resume</p>
            <a href="/resume.pdf" download className="block mt-20 border border-white text-white py-2 px-4 text-xs">
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
