
import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-white section-padding">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-brand-800/70 mb-4">
              Hello! I'm John, a passionate web developer with a keen eye for design and a love for creating 
              intuitive, dynamic user experiences. My journey in web development started in 2018, and I've been
              building digital experiences ever since.
            </p>
            
            <p className="text-brand-800/70 mb-4">
              I focus on creating clean, efficient code and powerful web applications. I believe in the power of
              technology to solve real-world problems and enhance people's lives through thoughtful design
              and development.
            </p>
            
            <p className="text-brand-800/70 mb-4">
              When I'm not coding, you can find me hiking in the mountains, experimenting with new recipes in the 
              kitchen, or diving into a good book. I believe in continuous learning and am always exploring new
              technologies and approaches.
            </p>
            
            <h3 className="text-xl font-semibold mb-2 mt-6">Education</h3>
            <p className="text-brand-800/70 mb-1">
              <span className="font-medium">BS in Computer Science</span> - University of Technology
            </p>
            <p className="text-brand-800/70 mb-4">2016 - 2020</p>
          </div>
          
          <div className="bg-gradient-to-br from-brand-500/10 to-brand-700/20 p-8 rounded-lg">
            <div className="aspect-square rounded-lg bg-gradient-to-tr from-brand-200 to-brand-500 flex items-center justify-center shadow-lg">
              <span className="text-white text-9xl font-extrabold opacity-30">JD</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
