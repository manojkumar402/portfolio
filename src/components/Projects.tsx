import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Trophy, Users, TrendingUp, Terminal, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: "IEEE Hackathon Winner",
    subtitle: "Crisis Response Application",
    icon: Trophy,
    metrics: "400+ Active Users",
    description: "Built a comprehensive crisis response application that helps communities coordinate during emergencies.",
    details: [
      "Real-time communication system for emergency responders",
      "Geolocation-based resource mapping and allocation",
      "Multi-platform support (Web, Mobile)",
      "Integration with emergency services APIs",
      "User role management and access control"
    ],
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Google Maps API"],
    achievements: "Won 1st place among 100+ teams, recognized for innovation and social impact"
  },
  {
    title: "ML Wildfire Detection Research",
    subtitle: "Research Paper Publication",
    icon: TrendingUp,
    metrics: "92% Accuracy",
    description: "Research project on machine learning-based wildfire detection system using satellite imagery and weather data.",
    details: [
      "Computer vision model for satellite image analysis",
      "Multi-parameter weather data integration",
      "Real-time prediction algorithms",
      "Published research findings in academic journal",
      "Collaboration with environmental research teams"
    ],
    technologies: ["Python", "TensorFlow", "OpenCV", "Pandas", "Scikit-learn"],
    achievements: "Achieved 92% accuracy in wildfire prediction, contributing to environmental safety research"
  },
  {
    title: "CLI Automation Framework",
    subtitle: "Testing Infrastructure",
    icon: Terminal,
    metrics: "5x Efficiency Boost",
    description: "Comprehensive command-line automation framework that streamlines testing processes for development teams.",
    details: [
      "Automated test suite execution across multiple environments",
      "Custom command set for common development tasks",
      "Integration with CI/CD pipelines",
      "Parallel test execution capabilities",
      "Detailed reporting and analytics dashboard"
    ],
    technologies: ["Python", "Bash", "Docker", "Jenkins", "Pytest"],
    achievements: "Reduced testing time from hours to minutes, adopted by multiple development teams"
  },
  {
    title: "DAC Scholarship Achievement",
    subtitle: "Academic Excellence",
    icon: Users,
    metrics: "6 Semesters",
    description: "Recipient of Design Automation Conference (DAC) scholarship for outstanding academic performance.",
    details: [
      "Maintained exceptional academic performance throughout B.Tech",
      "Active participation in research and development projects",
      "Leadership roles in technical clubs and societies",
      "Mentoring junior students in programming and development",
      "Contributing to open-source projects and community initiatives"
    ],
    technologies: ["Academic Excellence", "Leadership", "Mentoring", "Research"],
    achievements: "Recognized for consistent academic excellence and contribution to the computer science community"
  }
];

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Projects & Achievements
            </h2>
            <p className="text-xl text-muted-foreground">
              Highlighting impactful projects and recognitions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              const isExpanded = expandedProject === index;
              
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="card-elegant h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 rounded-lg bg-foreground/10 flex-shrink-0">
                          <IconComponent className="text-foreground" size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                          <p className="text-foreground font-medium mb-2">{project.subtitle}</p>
                          <Badge variant="secondary" className="text-xs">
                            {project.metrics}
                          </Badge>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      <motion.div
                        initial={false}
                        animate={{ height: isExpanded ? "auto" : 0 }}
                        className="overflow-hidden"
                      >
                        {isExpanded && (
                          <div className="space-y-4 mb-4">
                            <div>
                              <h4 className="font-semibold mb-2 text-foreground">Key Features:</h4>
                              <ul className="space-y-1">
                                {project.details.map((detail, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm">
                                    <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                                    <span className="text-muted-foreground">{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2 text-foreground">Impact:</h4>
                              <p className="text-sm text-muted-foreground">{project.achievements}</p>
                            </div>
                          </div>
                        )}
                      </motion.div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2 text-foreground">Technologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setExpandedProject(isExpanded ? null : index)}
                          className="w-full"
                        >
                          {isExpanded ? (
                            <>
                              Show Less <ChevronUp className="ml-2" size={16} />
                            </>
                          ) : (
                            <>
                              Learn More <ChevronDown className="ml-2" size={16} />
                            </>
                          )}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}