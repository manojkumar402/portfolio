import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Lightbulb } from 'lucide-react';

export default function About() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Detail-oriented Software Development Engineer with 2+ years of experience 
              in building scalable web applications, specializing in React, TypeScript, 
              Node.js, and database systems.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div variants={itemVariants}>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-foreground/10">
                    <Code className="text-foreground" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Frontend Excellence</h3>
                    <p className="text-muted-foreground">
                      Specialized in React ecosystem with deep expertise in TypeScript, 
                      Redux, and modern frontend architectures.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-foreground/5">
                    <Database className="text-muted-foreground" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Full-Stack Capabilities</h3>
                    <p className="text-muted-foreground">
                      Proficient in backend technologies including Node.js, Spring Boot, 
                      and various database systems (SQL, DynamoDB, Neo4j).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-foreground/10">
                    <Lightbulb className="text-foreground" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Problem Solver</h3>
                    <p className="text-muted-foreground">
                      Passionate about algorithms, data structures, and creating 
                      efficient solutions that improve user experience.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="card-elegant">
                <CardContent className="p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-foreground to-muted-foreground flex items-center justify-center">
                    <span className="text-4xl font-bold text-background">MK</span>
                  </div>
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-semibold">Professional Highlights</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Experience:</span>
                        <span className="font-medium">2+ Years</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Focus:</span>
                        <span className="font-medium">Frontend Development</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Education:</span>
                        <span className="font-medium">B.Tech CSE (8.02 CGPA)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Location:</span>
                        <span className="font-medium">Bangalore, India</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}