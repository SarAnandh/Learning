import React, { useState, useEffect } from 'react';
import { Mail, Phone, Github, Globe, MapPin, ExternalLink, Code, Smartphone, Cloud, Database, Star, Zap, Sparkles, ChevronDown, GitBranchPlus, Braces, GithubIcon } from 'lucide-react';
import Img1 from '../img/img2.png'
// import Resume from ''
import Image from 'next/image';
import { Linkedin } from 'lucide-react';
export default function Portfolio() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const socialIcons = [{ name: 'Github', link: 'https://github.com/Subrxmanian', icon: <GithubIcon /> },
  { name: 'Geeks for Geeks', link: 'https://www.geeksforgeeks.org/user/srianandhavel9w3n/', icon: <Braces /> },
  { name: 'Linked In', link: 'https://www.linkedin.com/in/subramanian-m-0b5041247/', icon: <Linkedin /> }
  ]
  // Mock images - replace with actual images
  const profileImage = Img1;

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(totalScroll / windowHeight);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: any) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = {
    languages: ['Java', 'JavaScript', 'TypeScript','C','C++','Python(basics)','MySql','PowerBi','PHP'],
    mobile: ['React Native', 'Expo'],
    java: ['Core Java', 'JDBC(learning)', 'Servlet(learning)'],
    web: ['HTML', 'CSS', 'REST APIs', 'React.js'],
    cloud: ['AWS (CRUD)', 'Firebase'],
    ui: ['React Native Paper', 'NativeBase', 'NativeWind'],
    tools: ['Git', 'GitHub', 'Postman', 'Android Studio', 'VS Code']
  };

  const projects = [
    {
      title: 'Trip Management App',
      description: 'A mobile platform connecting vendors and drivers for managing transport trips.',
      features: [
        'Trip Creation with pickup/drop locations and fare calculation',
        'Real-time driver management and trip status updates',
        'Video recording for vehicle condition documentation',
        'Secure document upload and cloud storage',
        'Dynamic fare calculation using geolocation APIs'
      ],
      tech: 'React Native, AWS S3, REST API, Firebase Authentication, Push Notifications',
      gradient: 'from-purple-500 to-pink-500',
      link: 'https://github.com/Subrxmanian/DriverApp_ReactNative'
    },
    {
      title: 'Tic Tac Toe',
      description: 'A mobile platform to play infinity time with multiplayer and single player. ',
      features: [
        'Easy and Hard mode options',
        'Gives an Best experiences in smoothness and easy too play. ',
        'We can switch theme too light and hard theme.',
        'Game statistics some draws and wins of an each player and uses local storage to store data',
        'Dynamic fare calculation using  Async Storage'
      ],
      tech: 'React Native, Tailwind css',
      gradient: 'from-purple-500 to-pink-500',
      link: 'https://github.com/Subrxmanian/XO'
    },
    {
      title: 'Shopping App',
      description: 'An innovative e-commerce platform combining video content and live interaction.',
      features: [
        'Live shopping with real-time video streams',
        'Reel-based product promotion with integrated purchase',
        'Standard e-commerce functionality',
        'Amazon-style browsing and search features'
      ],
      tech: 'React Native, Firebase, REST APIs, AWS (planned), Video SDK (planned)',
      gradient: 'from-purple-500 to-pink-500',
      link: 'https://github.com/Subrxmanian/FLYKUP'
    }
  ];

  const NavButton = ({ section, label, isActive, onClick }: any) => (
    <button
      onClick={onClick}
      className={`relative px-4 py-2 md:px-6 md:py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-sm md:text-base ${isActive
          ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-purple-500/25'
          : 'text-gray-300 hover:text-white hover:bg-white/10 backdrop-blur-sm'
        }`}
    >
      {isActive && (
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl blur opacity-75"></div>
      )}
      <span className="relative">{label}</span>
    </button>
  );

  const SkillCategory = ({ title, skills, icon: Icon, gradient }: any) => (
    <div className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
      <div className="relative">
        <div className="flex items-center mb-4">
          <div className={`p-2 rounded-lg bg-gradient-to-br ${gradient} shadow-lg`}>
            <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </div>
          <h3 className="text-lg md:text-xl font-bold text-white ml-3">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill: any, index: any) => (
            <span
              key={index}
              className="px-3 py-1 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs md:text-sm font-medium border border-white/30 hover:bg-white/30 transition-all duration-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  const ProjectCard = ({ project, index }: any) => (
    <div className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden"
      onClick={() => window.open(project.link)}>
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
      <div className="absolute top-4 right-4">
        <Sparkles className="w-6 h-6 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="relative">
        <div className="flex items-center mb-4">
          <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} shadow-lg`}>
            <Star className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white ml-4">{project.title}</h3>
        </div>
        <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">{project.description}</p>

        <div className="mb-6">
          <h4 className="font-bold text-white mb-3 flex items-center">
            <Zap className="w-4 h-4 mr-2 text-yellow-400" />
            Key Features:
          </h4>
          <ul className="space-y-2">
            {project.features.map((feature: any, idx: any) => (
              <li key={idx} className="text-gray-300 text-xs md:text-sm flex items-start">
                <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-white/20 pt-4">
          <p className="text-xs md:text-sm text-gray-400">
            <span className="font-semibold text-white">Tech Stack:</span> {project.tech}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-black/20 z-50">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 transition-all duration-200 ease-out"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Header */}
      <header className="fixed top-1 left-0 right-0 bg-black/20 backdrop-blur-md border-b border-white/10 z-40">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="mb-4 sm:mb-0">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-400 via-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => scrollToSection('home')}>
                Subramanian
              </h1>
              <p className="text-base md:text-lg text-gray-300 font-medium">
                <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                  React Native Developer
                </span>
              </p>
            </div>

            <nav className="flex flex-wrap gap-2 md:gap-3">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'skills', label: 'Skills' },
                { id: 'projects', label: 'Projects' },
                { id: 'contact', label: 'Contact' }
              ].map(item => (
                <NavButton
                  key={item.id}
                  section={item.id}
                  label={item.label}
                  isActive={activeSection === item.id}
                  onClick={() => scrollToSection(item.id)}
                />
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative">
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center justify-center pt-60 md:pt-24 px-4 md:px-6">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
              {/* Left Content - Text Section */}
              <div className="flex-1 text-center lg:text-left space-y-4 md:space-y-6 order-2 lg:order-1">
                <div className="space-y-2">
                  <div className="text-sm md:text-base lg:text-lg text-cyan-300 font-medium tracking-wider uppercase">
                    Hello, I'm
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
                    Subramanian
                  </h1>
                  <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-300 font-light tracking-wide">
                    <span className="text-cyan-400">React Native</span> Developer
                  </p>
                </div>

                <div className="max-w-2xl mx-auto lg:mx-0">
                  <p className="text-sm md:text-base lg:text-lg text-gray-400 leading-relaxed font-light">
                    Passionate about creating seamless mobile experiences with
                    <span className="text-cyan-400 font-medium animate-pulse"> React Native</span>.
                    Building the future, one app at a time with innovative solutions and clean code.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6 md:pt-8 justify-center lg:justify-start">
                  
                  <a
                  href='/resume.pdf'
                  download="Subramanian_Resume.pdf"
                    // onClick={() => scrollToSection('projects')}
                    className="group relative px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full text-white font-semibold tracking-wide overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 text-sm md:text-base"
                  >
                    <span className="relative z-10">Download Resume</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </a>
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="group relative px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-semibold tracking-wide overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 text-sm md:text-base"
                  >
                    <span className="relative z-10">View My Work</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </button>

                  <button
                    onClick={() => scrollToSection('contact')}
                    className="group relative px-6 md:px-8 py-3 md:py-4 border-2 border-cyan-400/50 rounded-full text-cyan-400 font-semibold tracking-wide overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-cyan-400/10 hover:border-cyan-400 text-sm md:text-base"
                  >
                    <span className="relative z-10">Contact Me</span>
                    <div className="absolute inset-0 bg-cyan-400/20 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
                  </button>
                </div>

                <div className="flex gap-3 md:gap-4 pt-4 justify-center lg:justify-start">
                  {socialIcons.map((social, index) => (
                    <div
                      key={social.name}
                      className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center cursor-pointer hover:scale-110 hover:bg-white/20 transition-all duration-300"
                      onClick={() => window.open(social.link)}>
                      {social.icon}
                      {/* <div className="w-4 md:w-5 h-4 md:h-5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-sm">
                      </div> */}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Content - Image Section */}
              <div className="flex-1 flex items-center justify-center order-1 lg:order-2">
                <div className="relative group">
                  <div className="absolute inset-0 rounded-full border-2 md:border-4 border-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-spin scale-110" style={{ animation: 'spin 20s linear infinite' }}></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full blur-2xl md:blur-3xl scale-125 animate-pulse"></div>
                  <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 md:border-4 border-white/20 backdrop-blur-sm group-hover:scale-105 transition-all duration-500">
                    <Image
                      src={Img1}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block">
              <ChevronDown className="w-6 h-6 text-white/50" />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen py-16 md:py-20 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4 md:mb-6">
                About Me
              </h2>
              <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Self-motivated and passionate developer with 7 months of hands-on experience in building
                cross-platform mobile apps using React Native.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mr-3"></div>
                  Experience
                </h3>
                <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20">
                  <h4 className="font-bold text-white text-base md:text-lg">React Native Developer</h4>
                  <p className="text-purple-300 mb-4">Thinks Strive Solutions</p>
                  <ul className="text-gray-300 space-y-2 text-sm md:text-base">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Built mobile applications with MongoDB backend
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Integrated push notifications using Expo and Firebase
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Implemented AWS CRUD operations
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mr-3"></div>
                  Education
                </h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20">
                    <h4 className="font-bold text-white text-sm md:text-base">Bachelor's of Computer Applications</h4>
                    <p className="text-purple-300 text-sm md:text-base">Dr NGP Arts and Science College</p>
                    <p className="text-gray-400 text-xs md:text-sm">2021 - 2024 | 72%</p>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20">
                    <h4 className="font-bold text-white text-sm md:text-base">Higher Secondary School</h4>
                    <p className="text-cyan-300 text-sm md:text-base">Veeramamunivar Matric Hr Sec School</p>
                    <p className="text-gray-400 text-xs md:text-sm">2020 - 2021 | 77%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Strengths */}
            <div className="mt-8 md:mt-12 bg-white/10 backdrop-blur-md rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/20">
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-6 md:mb-8">
                Strengths
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {[
                  'Strong foundation in Object-Oriented Programming (OOP)',
                  'Fast learner, adapting to new tech stacks',
                  'Problem-solving mindset with debugging experience',
                  'Good team collaboration and communication skills'
                ].map((strength, index) => (
                  <div key={index} className="group flex items-center p-4 md:p-6 bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-xl md:rounded-2xl border border-white/20 hover:scale-105 transition-all duration-300">
                    <div className="w-3 h-3 md:w-4 md:h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mr-3 md:mr-4 group-hover:animate-pulse flex-shrink-0"></div>
                    <span className="text-white font-medium text-sm md:text-base">{strength}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen py-16 md:py-20 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 md:mb-6">
                Technical Skills
              </h2>
              <p className="text-base md:text-lg text-gray-300">A comprehensive overview of my technical expertise</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
              <SkillCategory title="Programming Languages" skills={skills.languages} icon={Code} gradient="from-blue-500 to-purple-600" />
              <SkillCategory title="Mobile Development" skills={skills.mobile} icon={Smartphone} gradient="from-green-500 to-teal-600" />
              <SkillCategory title="Java Technologies" skills={skills.java} icon={Code} gradient="from-orange-500 to-red-600" />
              <SkillCategory title="Web Technologies" skills={skills.web} icon={Globe} gradient="from-cyan-500 to-blue-600" />
              {/* <SkillCategory title="Cloud & Backend" skills={skills.cloud} icon={Cloud} gradient="from-purple-500 to-pink-600" /> */}
              <SkillCategory title="UI Libraries" skills={skills.ui} icon={Smartphone} gradient="from-indigo-500 to-purple-600" />
            </div>

            <div className="mt-8 md:mt-12 bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 flex items-center">
                <div className="p-2 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-600 shadow-lg mr-3">
                  <Database className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                Development Tools
              </h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {skills.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 md:px-5 md:py-3 bg-white/20 backdrop-blur-sm text-white rounded-full font-medium border border-white/30 hover:bg-white/30 hover:scale-105 transition-all duration-200 text-xs md:text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen py-16 md:py-20 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 md:mb-6">
                Projects
              </h2>
              <p className="text-base md:text-lg text-gray-300">Showcasing my mobile application development experience</p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-12">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen py-16 md:py-20 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 md:mb-6">
                Get In Touch
              </h2>
              <p className="text-base md:text-lg text-gray-300">Feel free to reach out for opportunities or collaborations</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 border border-white/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                <div className="space-y-6 md:space-y-8">
                  {[
                    {
                      icon: Mail,
                      title: 'Email',
                      info: 'Subrxmanian@gmail.com',
                      gradient: 'from-blue-500 to-purple-600',
                      fun: () => {
                        window.location.href = "mailto:subrxmanian@gmail.com?subject=Hello&body=Message";
                      },
                    },
                    {
                      icon: Phone,
                      title: 'Phone',
                      info: '9790583194',
                      gradient: 'from-green-500 to-teal-600',
                      fun: () => {
                        window.location.href = "tel:+919790583194";
                      },
                    },
                    {
                      icon: MapPin,
                      title: 'Location',
                      info: 'Tenkasi, Tamil Nadu',
                      gradient: 'from-purple-500 to-pink-600',
                      fun: () => {
                        window.open('https://www.google.com/maps?q=Tenkasi,+Tamil+Nadu', '_blank');
                      },
                    },
                  ].map((contact, index) => (
                    <div
                      key={index}
                      className="group flex items-center space-x-4 md:space-x-6 p-4 rounded-2xl hover:bg-white/10 transition-all duration-300"
                      onClick={contact.fun}
                    >
                      <div
                        className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${contact.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <contact.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-base md:text-lg">{contact.title}</h3>
                        <p className="text-gray-300 text-sm md:text-base">{contact.info}</p>
                      </div>
                    </div>
                  ))}
                </div>


                <div className="space-y-6 md:space-y-8">
                  {[
                    { icon: Github, title: 'GitHub', info: 'subrmanian.github', gradient: 'from-gray-700 to-gray-900', link: 'https://github.com/Subrxmanian' },
                    { icon: Globe, title: 'Portfolio', info: 'Subramanian.in', gradient: 'from-cyan-500 to-blue-600', link: 'https://learning-alpha-two.vercel.app/subramanian ' },
                    { icon: ExternalLink, title: 'Profile', info: 'subramanian.geeks.com', gradient: 'from-orange-500 to-red-600', link: 'https://www.geeksforgeeks.org/user/srianandhavel9w3n/' }
                  ].map((contact, index) => (
                    <div key={index} className="group flex items-center space-x-4 md:space-x-6 p-4 rounded-2xl hover:bg-white/10 transition-all duration-300" onClick={() => window.open(contact.link)}>
                      <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${contact.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <contact.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-base md:text-lg">{contact.title}</h3>
                        <p className="text-gray-300 text-sm md:text-base">{contact.info}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/20 text-center">
                <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base lg:text-lg">
                  I'm currently seeking opportunities in Java development to build scalable backend systems.
                </p>
                <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                  {[
                    { text: 'Software Developer', gradient: 'from-green-500 to-teal-600' },
                    { text: 'Java Development', gradient: 'from-blue-500 to-purple-600' },
                    { text: 'Data Enginer', gradient: 'from-purple-500 to-pink-600' }
                  ].map((tag, index) => (
                    <span key={index} className={`px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r ${tag.gradient} text-white rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-200 text-xs md:text-sm`}>
                      {tag.text}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-md border-t border-white/10 py-6 md:py-8 px-4 md:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 text-sm md:text-base">
            © Subramanian. Built with React and passion for great UX.
          </p>
          {/* <div className="mt-4 flex justify-center space-x-6">
            {['Privacy', 'Terms', 'Contact'].map((link) => (
              <a key={link} href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm md:text-base">
                {link}
              </a>
            ))}
          </div> */}
        </div>
      </footer>

      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-25%); }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-pulse { animation: pulse 4s ease-in-out infinite; }
        .animate-spin { animation: spin 20s linear infinite; }
        .animate-bounce { animation: bounce 2s infinite; }
        
        @media (max-width: 640px) {
          .animate-bounce { animation: none; }
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #06b6d4, #8b5cf6, #ec4899);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #0891b2, #7c3aed, #db2777);
        }
      `}</style>
    </div>
  );
}