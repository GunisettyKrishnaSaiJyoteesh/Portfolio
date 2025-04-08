
import React from "react";
import { Progress } from "@/components/ui/progress";
import { Layers, Code, Server, Database, PaintBucket, LineChart } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="h-6 w-6 text-brand-500" />,
      skills: [
        { name: "HTML/CSS", proficiency: 90 },
        { name: "JavaScript", proficiency: 85 },
        { name: "React", proficiency: 80 },
        { name: "TypeScript", proficiency: 75 },
      ],
    },
    {
      title: "Backend Development",
      icon: <Server className="h-6 w-6 text-brand-500" />,
      skills: [
        { name: "Node.js", proficiency: 75 },
        { name: "Express", proficiency: 70 },
        { name: "Python", proficiency: 65 },
        { name: "RESTful APIs", proficiency: 80 },
      ],
    },
    {
      title: "Database Management",
      icon: <Database className="h-6 w-6 text-brand-500" />,
      skills: [
        { name: "MongoDB", proficiency: 75 },
        { name: "SQL", proficiency: 70 },
        { name: "Firebase", proficiency: 80 },
      ],
    },
    {
      title: "Design & UI/UX",
      icon: <PaintBucket className="h-6 w-6 text-brand-500" />,
      skills: [
        { name: "Responsive Design", proficiency: 85 },
        { name: "Tailwind CSS", proficiency: 80 },
        { name: "Figma", proficiency: 75 },
      ],
    },
    {
      title: "Other Skills",
      icon: <Layers className="h-6 w-6 text-brand-500" />,
      skills: [
        { name: "Git & GitHub", proficiency: 85 },
        { name: "Agile/Scrum", proficiency: 75 },
        { name: "Testing", proficiency: 70 },
      ],
    },
    {
      title: "Data Visualization",
      icon: <LineChart className="h-6 w-6 text-brand-500" />,
      skills: [
        { name: "D3.js", proficiency: 65 },
        { name: "Chart.js", proficiency: 75 },
        { name: "Recharts", proficiency: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="bg-white dark:bg-brand-950 section-padding transition-colors duration-300">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-title text-brand-950 dark:text-white">My Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-panel p-6 animate-fade-in opacity-0" style={{ animationDelay: `${0.1 * index}s` }}>
              <div className="flex items-center gap-2 mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold text-brand-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-brand-800 dark:text-brand-300">
                        {skill.name}
                      </span>
                      <span className="text-xs font-medium text-brand-600 dark:text-brand-400">
                        {skill.proficiency}%
                      </span>
                    </div>
                    <Progress 
                      value={skill.proficiency} 
                      className="h-2 bg-brand-100 dark:bg-brand-800/40"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
