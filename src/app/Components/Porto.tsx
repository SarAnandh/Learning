import React, { useState } from 'react';
import { Mail, Phone, Github, Globe, MapPin, ExternalLink, Code, Smartphone, Cloud, Database, Star, Zap, Sparkles } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');

  const skills = {
    languages: ['Java', 'JavaScript', 'TypeScript (basic)'],
    mobile: ['React Native', 'Expo'],
    java: ['Core Java', 'JDBC', 'Servlet (learning)'],
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
      tech: 'React Native, AWS S3, Laravel API, Firebase, Expo Notifications',
      gradient: 'from-purple-500 to-pink-500'
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
      gradient: 'from-cyan-500 to-blue-500'
    }
  ];

  const NavButton = ({ section, label, isActive, onClick }) => (
    <button
      onClick={onClick}
      className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
        isActive 
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

  const SkillCategory = ({ title, skills, icon: Icon, gradient }) => (
    <div className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
      <div className="relative">
        <div className="flex items-center mb-4">
          <div className={`p-2 rounded-lg bg-gradient-to-br ${gradient} shadow-lg`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white ml-3">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/30 hover:bg-white/30 transition-all duration-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  const ProjectCard = ({ project, index }) => (
    <div className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
      <div className="absolute top-4 right-4">
        <Sparkles className="w-6 h-6 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="relative">
        <div className="flex items-center mb-4">
          <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} shadow-lg`}>
            <Star className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white ml-4">{project.title}</h3>
        </div>
        <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
        
        <div className="mb-6">
          <h4 className="font-bold text-white mb-3 flex items-center">
            <Zap className="w-4 h-4 mr-2 text-yellow-400" />
            Key Features:
          </h4>
          <ul className="space-y-2">
            {project.features.map((feature, idx) => (
              <li key={idx} className="text-gray-300 text-sm flex items-start">
                <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="border-t border-white/20 pt-4">
          <p className="text-sm text-gray-400">
            <span className="font-semibold text-white">Tech Stack:</span> {project.tech}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="relative bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-6 lg:mb-0">
              <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Subramanian
              </h1>
              <p className="text-xl text-gray-300 font-medium mt-2">
                <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                  React Native Developer
                </span>
              </p>
            </div>
            
            <nav className="flex flex-wrap gap-3">
              <NavButton
                section="about"
                label="About"
                isActive={activeSection === 'about'}
                onClick={() => setActiveSection('about')}
              />
              <NavButton
                section="skills"
                label="Skills"
                isActive={activeSection === 'skills'}
                onClick={() => setActiveSection('skills')}
              />
              <NavButton
                section="projects"
                label="Projects"
                isActive={activeSection === 'projects'}
                onClick={() => setActiveSection('projects')}
              />
              <NavButton
                section="contact"
                label="Contact"
                isActive={activeSection === 'contact'}
                onClick={() => setActiveSection('contact')}
              />
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative max-w-7xl mx-auto px-6 py-12">
        {/* About Section */}
        {activeSection === 'about' && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-12">
                <div className="flex-1">
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
                    About Me
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    Self-motivated and passionate developer with 7 months of hands-on experience in building 
                    cross-platform mobile apps using React Native. Skilled in integrating push notifications, 
                    AWS-based CRUD operations, and backend APIs. Currently seeking a transition into Java 
                    development roles to build scalable backend systems and enterprise-level applications.
                  </p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                        <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mr-3"></div>
                        Experience
                      </h3>
                      <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                        <h4 className="font-bold text-white text-lg">React Native Developer</h4>
                        <p className="text-purple-300 mb-4">Thinks Strive Solutions</p>
                        <ul className="text-gray-300 space-y-2">
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-2 mr-3"></div>
                            Built mobile applications with MongoDB backend
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-2 mr-3"></div>
                            Integrated push notifications using Expo and Firebase
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-2 mr-3"></div>
                            Implemented AWS CRUD operations
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-2 mr-3"></div>
                            Ensured responsive UI with TouchableOpacity and Flexbox
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                        <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mr-3"></div>
                        Education
                      </h3>
                      <div className="space-y-4">
                        <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                          <h4 className="font-bold text-white">Bachelor's of Computer Applications</h4>
                          <p className="text-purple-300">Dr NGP Arts and Science College</p>
                          <p className="text-gray-400 text-sm">2021 - 2024 | 72%</p>
                        </div>
                        <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                          <h4 className="font-bold text-white">Higher Secondary School</h4>
                          <p className="text-cyan-300">Veeramamunivar Matric Hr Sec School</p>
                          <p className="text-gray-400 text-sm">2020 - 2021 | 77%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Strengths */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/20">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-8">
                Strengths
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="group flex items-center p-6 bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-2xl border border-white/20 hover:scale-105 transition-all duration-300">
                  <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mr-4 group-hover:animate-pulse"></div>
                  <span className="text-white font-medium">Strong foundation in Object-Oriented Programming (OOP)</span>
                </div>
                <div className="group flex items-center p-6 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl border border-white/20 hover:scale-105 transition-all duration-300">
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full mr-4 group-hover:animate-pulse"></div>
                  <span className="text-white font-medium">Fast learner, adapting to new tech stacks</span>
                </div>
                <div className="group flex items-center p-6 bg-gradient-to-br from-purple-600/20 to-violet-600/20 backdrop-blur-sm rounded-2xl border border-white/20 hover:scale-105 transition-all duration-300">
                  <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-violet-500 rounded-full mr-4 group-hover:animate-pulse"></div>
                  <span className="text-white font-medium">Problem-solving mindset with debugging experience</span>
                </div>
                <div className="group flex items-center p-6 bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-2xl border border-white/20 hover:scale-105 transition-all duration-300">
                  <div className="w-4 h-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mr-4 group-hover:animate-pulse"></div>
                  <span className="text-white font-medium">Good team collaboration and communication skills</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && (
          <div className="space-y-12 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Technical Skills
              </h2>
              <p className="text-gray-300 text-lg">A comprehensive overview of my technical expertise</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <SkillCategory title="Programming Languages" skills={skills.languages} icon={Code} gradient="from-blue-500 to-purple-600" />
              <SkillCategory title="Mobile Development" skills={skills.mobile} icon={Smartphone} gradient="from-green-500 to-teal-600" />
              <SkillCategory title="Java Technologies" skills={skills.java} icon={Code} gradient="from-orange-500 to-red-600" />
              <SkillCategory title="Web Technologies" skills={skills.web} icon={Globe} gradient="from-cyan-500 to-blue-600" />
              <SkillCategory title="Cloud & Backend" skills={skills.cloud} icon={Cloud} gradient="from-purple-500 to-pink-600" />
              <SkillCategory title="UI Libraries" skills={skills.ui} icon={Smartphone} gradient="from-indigo-500 to-purple-600" />
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="p-2 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-600 shadow-lg mr-3">
                  <Database className="w-6 h-6 text-white" />
                </div>
                Development Tools
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-5 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full font-medium border border-white/30 hover:bg-white/30 hover:scale-105 transition-all duration-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <div className="space-y-12 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Projects
              </h2>
              <p className="text-gray-300 text-lg">Showcasing my mobile application development experience</p>
            </div>
            
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <div className="space-y-12 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Get In Touch
              </h2>
              <p className="text-gray-300 text-lg">Feel free to reach out for opportunities or collaborations</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="group flex items-center space-x-6 p-4 rounded-2xl hover:bg-white/10 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg">Email</h3>
                      <p className="text-gray-300">Subrxmanian@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="group flex items-center space-x-6 p-4 rounded-2xl hover:bg-white/10 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg">Phone</h3>
                      <p className="text-gray-300">9790583194</p>
                    </div>
                  </div>
                  
                  <div className="group flex items-center space-x-6 p-4 rounded-2xl hover:bg-white/10 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg">Location</h3>
                      <p className="text-gray-300">Tenkasi, Tamil Nadu</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div className="group flex items-center space-x-6 p-4 rounded-2xl hover:bg-white/10 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Github className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg">GitHub</h3>
                      <p className="text-gray-300">subrmanian.github</p>
                    </div>
                  </div>
                  
                  <div className="group flex items-center space-x-6 p-4 rounded-2xl hover:bg-white/10 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg">Portfolio</h3>
                      <p className="text-gray-300">Subramanian.in</p>
                    </div>
                  </div>
                  
                  <div className="group flex items-center space-x-6 p-4 rounded-2xl hover:bg-white/10 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <ExternalLink className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg">Profile</h3>
                      <p className="text-gray-300">subramanian.geeks.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-white/20 text-center">
                <p className="text-gray-300 mb-6 text-lg">
                  I'm currently seeking opportunities in Java development to build scalable backend systems.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <span className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-200">
                    Open to Work
                  </span>
                  <span className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-200">
                    Java Development
                  </span>
                  <span className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-200">
                    Backend Systems
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}