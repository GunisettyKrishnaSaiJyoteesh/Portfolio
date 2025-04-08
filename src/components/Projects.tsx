
import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform with React, Node.js, and MongoDB. Features include product management, cart functionality, and secure checkout.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      liveLink: "#",
      repoLink: "#",
    },
    {
      title: "Task Management App",
      description:
        "A productivity application for managing tasks with drag-and-drop functionality, user authentication, and data visualization.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1000",
      tags: ["React", "Firebase", "Tailwind CSS"],
      liveLink: "#",
      repoLink: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "A weather dashboard that displays current weather conditions and forecasts based on user location or search queries.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000",
      tags: ["JavaScript", "API Integration", "CSS3"],
      liveLink: "#",
      repoLink: "#",
    },
  ];

  return (
    <section id="projects" className="bg-brand-50 section-padding">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-title">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-brand-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-brand-700/80 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-brand-100 text-brand-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.liveLink}
                    className="text-sm flex items-center gap-1 text-brand-600 hover:text-brand-700"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.repoLink}
                    className="text-sm flex items-center gap-1 text-brand-600 hover:text-brand-700"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button className="bg-brand-500 hover:bg-brand-600 text-white">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
