
import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-white dark:bg-brand-900 section-padding transition-colors duration-300">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-title text-brand-950 dark:text-white">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="glass-panel p-6 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
            <p className="text-brand-800/70 dark:text-brand-300/70 mb-4">
            I’m a passionate and detail-oriented Data Science enthusiast with a keen eye for patterns, insights, and possibilities hidden within data. With a strong foundation in statistics, machine learning, and data visualization, I aim to turn complex datasets into actionable solutions that drive intelligent decision-making.
            </p>
            
            <p className="text-brand-800/70 dark:text-brand-300/70 mb-4">
            Beyond data analytics, I bring expertise in Robotic Process Automation (RPA), where I design and deploy automated workflows to eliminate repetitive tasks and boost operational efficiency. My experience spans tools and technologies like Python, R, Power BI, UiPath, and SQL, and I enjoy building end-to-end solutions—from data collection and preprocessing to model deployment and automation.
            </p>
            
            <p className="text-brand-800/70 dark:text-brand-300/70 mb-4">
            Currently, I’m exploring the intersection of AI, automation, and real-world problem solving, and constantly looking for new challenges to grow and innovate. Welcome to my portfolio—where ideas meet data and automation.
            </p>
            
            <h3 className="text-xl font-semibold mb-2 mt-6 text-brand-950 dark:text-white">Education</h3>
            <p className="text-brand-800/70 dark:text-brand-300/70 mb-1">
              <span className="font-medium">B.Tech in Computer Science</span> - ANITS
            </p>
            <p className="text-brand-800/70 dark:text-brand-300/70 mb-4">2022 - 2026</p>
          </div>
          
          <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
            <div className="aspect-square rounded-lg bg-gradient-to-tr from-brand-200 to-brand-500 dark:from-brand-600 dark:to-brand-800 flex items-center justify-center shadow-lg animate-float glow">
              <img
                src="/Image.jpg"
                alt="Profile"
                className="w-3/4 h-3/4 object-contain opacity-90 rounded-full"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
