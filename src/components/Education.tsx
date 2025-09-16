import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    institution: "PES University",
    degree: "Bachelor of Technology in Computer Science Engineering",
    period: "2019 - 2023",
    location: "Bangalore, India",
    cgpa: "8.02",
    highlights: [
      "Specialized in Data Structures and Algorithms",
      "Active member of coding club and technical societies",
      "Participated in multiple hackathons and coding competitions",
      "Completed projects in AI/ML and web development"
    ]
  },
  {
    institution: "Intermediate Education",
    degree: "Class 12th - Science Stream",
    period: "2017 - 2019",
    location: "India",
    cgpa: "85%",
    highlights: [
      "Mathematics, Physics, Chemistry focus",
      "Strong foundation in analytical thinking",
      "Participated in science exhibitions",
      "Leadership roles in student activities"
    ]
  }
];

export default function Education() {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="education" className="py-20 px-4">
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
              Education
            </h2>
            <p className="text-xl text-muted-foreground">
              Academic foundation that shaped my technical expertise
            </p>
          </motion.div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="card-elegant">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-foreground to-muted-foreground flex items-center justify-center">
                          <GraduationCap className="text-background" size={28} />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-foreground mb-2">
                              {edu.institution}
                            </h3>
                            <h4 className="text-lg font-semibold text-foreground mb-3">
                              {edu.degree}
                            </h4>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <Award className="text-foreground" size={20} />
                            <Badge variant="secondary" className="text-lg font-semibold">
                              {edu.cgpa}
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            {edu.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            {edu.location}
                          </div>
                        </div>

                        <div>
                          <h5 className="font-semibold mb-3 text-foreground">Highlights:</h5>
                          <ul className="space-y-2">
                            {edu.highlights.map((highlight, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                                <span className="text-muted-foreground">{highlight}</span>
                              </li>
                            ))}
                          </ul>
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