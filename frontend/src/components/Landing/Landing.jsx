import React from 'react';
import { Code2, Users, BookOpen, ChevronDown, Github, Palette, Layout, Briefcase, Wand2, Play, Pause } from 'lucide-react';

function App() {
  const [isPlaying, setIsPlaying] = React.useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-pink-900/30 mix-blend-overlay animate-gradient"></div>
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover opacity-20"
          >
            <source src="https://cdn.coverr.co/videos/coverr-typing-on-computer-2401/1080p.mp4" type="video/mp4" />
          </video>
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="text-center">
            <div className="relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-75 animate-pulse"></div>
              <h1 className="relative text-6xl font-bold mb-6 gradient-text animate-title">
                Portfolio Generator
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in">
              Create stunning developer portfolios in minutes. Showcase your projects, skills, and experience with our modern portfolio generator.
            </p>
            <div className="flex justify-center gap-6">
              <a 
                href="#team"
                className="relative group border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-full flex items-center gap-2 transition-all animate-bounce-subtle overflow-hidden"
              >
                <div className="absolute inset-0 animate-shimmer"></div>
                <Users size={20} className="animate-bounce-subtle" />
                <span className="relative">Meet the Team</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-purple-600" />
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-gray-900/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 animate-rotate"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text animate-float">
            Powerful Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-xl transform hover:scale-105 transition-all duration-300 group animate-fade-up animate-pulse-border border border-purple-600/30">
              <div className="relative w-16 h-16 mb-6 mx-auto">
                <div className="absolute inset-0 bg-purple-600/20 rounded-full animate-ping"></div>
                <div className="relative bg-purple-600 rounded-full p-4 animate-rotate">
                  <Code2 size={32} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center group-hover:text-purple-400 transition-colors">No Coding Required</h3>
              <p className="text-gray-400 text-center">Generate professional portfolios without writing a single line of code.</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-xl transform hover:scale-105 transition-all duration-300 group animate-fade-up animate-pulse-border border border-purple-600/30" style={{ animationDelay: '0.2s' }}>
              <div className="relative w-16 h-16 mb-6 mx-auto">
                <div className="absolute inset-0 bg-purple-600/20 rounded-full animate-ping"></div>
                <div className="relative bg-purple-600 rounded-full p-4 animate-rotate">
                  <Palette size={32} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center group-hover:text-purple-400 transition-colors">Customizable Themes</h3>
              <p className="text-gray-400 text-center">Choose from a variety of professional themes or customize your own design.</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-xl transform hover:scale-105 transition-all duration-300 group animate-fade-up animate-pulse-border border border-purple-600/30" style={{ animationDelay: '0.4s' }}>
              <div className="relative w-16 h-16 mb-6 mx-auto">
                <div className="absolute inset-0 bg-purple-600/20 rounded-full animate-ping"></div>
                <div className="relative bg-purple-600 rounded-full p-4 animate-rotate">
                  <Layout size={32} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center group-hover:text-purple-400 transition-colors">Responsive Design</h3>
              <p className="text-gray-400 text-center">Your portfolio will look perfect on all devices and screen sizes.</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-xl transform hover:scale-105 transition-all duration-300 group animate-fade-up animate-pulse-border border border-purple-600/30" style={{ animationDelay: '0.6s' }}>
              <div className="relative w-16 h-16 mb-6 mx-auto">
                <div className="absolute inset-0 bg-purple-600/20 rounded-full animate-ping"></div>
                <div className="relative bg-purple-600 rounded-full p-4 animate-rotate">
                  <Briefcase size={32} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center group-hover:text-purple-400 transition-colors">Company Templates</h3>
              <p className="text-gray-400 text-center">Specialized templates designed for different company preferences and styles.</p>
            </div>
          </div>

          <div className="mt-20">
            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-lg rounded-2xl p-8 transform hover:scale-[1.02] transition-all duration-300 animate-scale">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 animate-slide-in">
                  <h3 className="text-2xl font-bold mb-4 gradient-text">AI-Powered Portfolio Generation</h3>
                  <p className="text-gray-300 mb-6">Our advanced AI analyzes your information and creates the perfect portfolio layout that best represents your skills and experience. Just input your details, and watch the magic happen!</p>
                  <div className="flex items-center gap-4 text-purple-400">
                    <Wand2 size={24} className="animate-pulse" />
                    <span>Intelligent Layout Selection</span>
                  </div>
                </div>
                <div className="flex-1 relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80" 
                    alt="AI Portfolio Generation"
                    className="relative rounded-lg shadow-2xl animate-float"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-900 relative">
        <div className="absolute inset-0 bg-circuit-pattern opacity-5 animate-rotate"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Sparsh Karna', reg: '23bds1172', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80' },
              { name: 'Lavanaya Malhotra', reg: '23bds1169', image: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?auto=format&fit=crop&q=80' },
              { name: 'Stuti', reg: '23bds1167', image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80' }
            ].map((member, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 text-center card-hover animate-fade-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="relative mb-4 group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover relative animate-float"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-purple-400">{member.reg}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Section */}
      <section className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-dots-pattern opacity-5 animate-rotate"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            Academic Details
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-xl card-hover animate-fade-up animate-pulse-border border border-purple-600/30">
              <BookOpen size={40} className="text-purple-600 mb-4 animate-bounce-subtle" />
              <h3 className="text-xl font-semibold mb-2">Subject</h3>
              <p className="text-gray-300">Web Programming</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-xl card-hover animate-fade-up animate-pulse-border border border-purple-600/30" style={{ animationDelay: '0.2s' }}>
              <Code2 size={40} className="text-purple-600 mb-4 animate-bounce-subtle" />
              <h3 className="text-xl font-semibold mb-2">Branch</h3>
              <p className="text-gray-300">BTech Computer Science</p>
              <p className="text-purple-400">(Data Science Specialization)</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-xl card-hover animate-fade-up animate-pulse-border border border-purple-600/30" style={{ animationDelay: '0.4s' }}>
              <Users size={40} className="text-purple-600 mb-4 animate-bounce-subtle" />
              <h3 className="text-xl font-semibold mb-2">Academic Year</h3>
              <p className="text-gray-300">2024-2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-4 mb-4">
            <a href="https://github.com" className="text-gray-400 hover:text-purple-600 transition-colors transform hover:scale-110">
              <Github size={24} className="animate-bounce-subtle" />
            </a>
          </div>
          <p className="text-gray-400">
            © 2024 Portfolio Generator. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;