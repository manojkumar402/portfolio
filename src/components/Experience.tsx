import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building } from 'lucide-react';

const experiences = [
  {
    company: "Microchip Technology",
    position: "Software Development Engineer I",
    period: "2023 - Present",
    location: "Bangalore, India",
    type: "Full-time",
    achievements: [
      "Built reusable React component library, reducing development time by 30%",
      "Migrated 50+ legacy components to Single Page Application, improving load times by 40%",
      "Implemented GoJS board support rendering, enhancing user interaction by 20%",
      "Integrated GraphQL APIs with React & Flask backend, reducing page load times by 25%"
    ],
    technologies: ["React", "TypeScript", "GraphQL", "Flask", "GoJS", "Redux"]
  },
  {
    company: "Microchip Technology",
    position: "Software Development Intern",
    period: "Jan 2023 - May 2023",
    location: "Bangalore, India",
    type: "Internship",
    achievements: [
      "Implemented JWT authentication system for secure user sessions",
      "Developed XML generator in Python for automated configuration management",
      "Created automated PR workflows improving team productivity",
      "Collaborated with senior developers on React component optimization"
    ],
    technologies: ["Python", "JWT", "XML", "React", "Git", "CI/CD"]
  }
];

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Experience
            </h2>
            <p className="text-xl text-muted-foreground">
              My professional journey in software development
            </p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="card-elegant">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <Building className="text-foreground" size={20} />
                          <h3 className="text-2xl font-bold text-foreground">
                            {exp.company}
                          </h3>
                          <Badge variant="secondary">{exp.type}</Badge>
                        </div>
                        
                        <h4 className="text-xl font-semibold text-foreground mb-4">
                          {exp.position}
                        </h4>
                        
                        <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            {exp.location}
                          </div>
                        </div>

                        <div className="mb-6">
                          <h5 className="font-semibold mb-3 text-foreground">Key Achievements:</h5>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                                <span className="text-muted-foreground">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h5 className="font-semibold mb-3 text-foreground">Technologies:</h5>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}