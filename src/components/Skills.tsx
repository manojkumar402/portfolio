import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

const skillCategories = [
  {
    category: "Languages",
    skills: [
      { name: "TypeScript", level: 90, preview: "interface User { name: string; }" },
      { name: "JavaScript", level: 90, preview: "const app = () => { return <div />; }" },
      { name: "Java", level: 80, preview: "public class Main { public static void main() }" },
      { name: "Python", level: 75, preview: "def fibonacci(n): return n if n <= 1 else..." },
      { name: "Scala", level: 70, preview: "val numbers = List(1, 2, 3).map(_ * 2)" },
      { name: "C", level: 65, preview: "int main() { printf(\"Hello World\"); }" }
    ]
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "React", level: 95, preview: "const [state, setState] = useState();" },
      { name: "Redux", level: 85, preview: "const store = configureStore({ reducer })" },
      { name: "Node.js", level: 80, preview: "app.get('/api', (req, res) => {})" },
      { name: "Express.js", level: 80, preview: "app.use(express.json());" },
      { name: "Spring Boot", level: 75, preview: "@RestController @RequestMapping(\"/api\")" },
      { name: "GraphQL", level: 70, preview: "query { user { name email } }" }
    ]
  },
  {
    category: "Databases & Tools",
    skills: [
      { name: "SQL", level: 85, preview: "SELECT * FROM users WHERE active = true" },
      { name: "DynamoDB", level: 80, preview: "dynamodb.putItem({ TableName, Item })" },
      { name: "Neo4j", level: 70, preview: "MATCH (u:User)-[:FOLLOWS]->(f:User)" },
      { name: "AWS", level: 80, preview: "aws s3 cp file.txt s3://bucket/" },
      { name: "Docker", level: 75, preview: "FROM node:18-alpine WORKDIR /app" },
      { name: "Jenkins", level: 70, preview: "pipeline { stages { stage('Build') } }" }
    ]
  }
];

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section id="skills" className="py-20 px-4">
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
              Technical Skills
            </h2>
            <p className="text-xl text-muted-foreground">
              Technologies I work with to build amazing digital experiences
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div key={categoryIndex} variants={itemVariants}>
                <Card className="card-elegant h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-6 text-center gradient-text">
                      {category.category}
                    </h3>
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          className="relative"
                          onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                          onMouseLeave={() => setHoveredSkill(null)}
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium text-sm">{skill.name}</span>
                            <Badge variant="secondary" className="text-xs">
                              {skill.level}%
                            </Badge>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-foreground to-muted-foreground rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: skillIndex * 0.1 }}
                              viewport={{ once: true }}
                            />
                          </div>
                          
                          {/* {hoveredSkill === `${categoryIndex}-${skillIndex}` && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="absolute top-full left-0 right-0 mt-2 p-3 bg-card border border-border rounded-lg shadow-lg z-10"
                            >
                              <code className="text-xs font-mono text-muted-foreground break-all">
                                {skill.preview}
                              </code>
                            </motion.div>
                          )} */}
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* <motion.div 
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground">
              Hover over skills to see code snippets! Always learning and exploring new technologies.
            </p>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
}