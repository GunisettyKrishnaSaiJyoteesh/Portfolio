
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, BookOpen, Briefcase, Blocks, Award } from "lucide-react";

const Resume = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-brand-100 dark:from-brand-950 dark:to-brand-900/50 transition-colors duration-300">
      <Navbar />
      
      <main className="container max-w-4xl mx-auto py-20 px-4 md:px-6">
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-950 dark:text-white">Resume</h1>
          <p className="text-lg text-brand-800/70 dark:text-brand-300/70 mb-6">
            A summary of my education, work experience, skills, and achievements.
          </p>
        </div>

        {/* Education Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="text-brand-500" />
            <h2 className="text-2xl font-bold text-brand-950 dark:text-white">Education</h2>
          </div>
          
          <Card className="mb-6 border-l-4 border-l-brand-500">
            <CardHeader>
              <CardTitle className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">Master of Data Science</h3>
                  <p className="text-brand-600 dark:text-brand-400 text-sm mt-1">University Name</p>
                </div>
                <span className="text-sm text-brand-500">2020 - 2022</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Relevant coursework: Data Analysis, Machine Learning, Statistical Computing, Big Data Systems, Data Visualization
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-brand-500">
            <CardHeader>
              <CardTitle className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">Bachelor of Computer Science</h3>
                  <p className="text-brand-600 dark:text-brand-400 text-sm mt-1">University Name</p>
                </div>
                <span className="text-sm text-brand-500">2016 - 2020</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Relevant coursework: Programming Fundamentals, Data Structures & Algorithms, Database Systems, Software Engineering
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Experience Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="text-brand-500" />
            <h2 className="text-2xl font-bold text-brand-950 dark:text-white">Experience</h2>
          </div>
          
          <Card className="mb-6 border-l-4 border-l-brand-500">
            <CardHeader>
              <CardTitle className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">Data Analyst</h3>
                  <p className="text-brand-600 dark:text-brand-400 text-sm mt-1">Company Name</p>
                </div>
                <span className="text-sm text-brand-500">2022 - Present</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Analyzed large datasets to identify trends and patterns</li>
                <li>Built interactive dashboards for real-time data monitoring</li>
                <li>Collaborated with cross-functional teams to develop data-driven solutions</li>
                <li>Implemented machine learning models for predictive analytics</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-brand-500">
            <CardHeader>
              <CardTitle className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">Data Science Intern</h3>
                  <p className="text-brand-600 dark:text-brand-400 text-sm mt-1">Company Name</p>
                </div>
                <span className="text-sm text-brand-500">2021 - 2022</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Assisted in data collection, cleaning, and preprocessing</li>
                <li>Developed ETL pipelines for data integration</li>
                <li>Created visualizations to communicate findings to stakeholders</li>
                <li>Conducted exploratory data analysis to identify insights</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Blocks className="text-brand-500" />
            <h2 className="text-2xl font-bold text-brand-950 dark:text-white">Skills</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold">Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Python (Pandas, NumPy, Scikit-learn)</li>
                  <li>R (dplyr, ggplot2)</li>
                  <li>SQL & Database Management</li>
                  <li>Big Data Technologies (Hadoop, Spark)</li>
                  <li>Data Visualization (Tableau, Power BI)</li>
                  <li>Version Control (Git)</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold">Soft Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Problem Solving</li>
                  <li>Critical Thinking</li>
                  <li>Team Collaboration</li>
                  <li>Communication</li>
                  <li>Project Management</li>
                  <li>Time Management</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Certifications Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Award className="text-brand-500" />
            <h2 className="text-2xl font-bold text-brand-950 dark:text-white">Certifications</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>Data Science Professional</span>
                  <span className="text-sm text-brand-500">2023</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">IBM</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>Machine Learning Specialization</span>
                  <span className="text-sm text-brand-500">2022</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Stanford Online / Coursera</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>Big Data Analytics</span>
                  <span className="text-sm text-brand-500">2021</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Microsoft</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>SQL Advanced Certification</span>
                  <span className="text-sm text-brand-500">2020</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Oracle</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resume;
