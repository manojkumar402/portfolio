import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const codeSnippets = [
  'const developer = "Manoj";',
  'let experience = "2+ years";',
  'var skills = ["React", "TS"];',
  'console.log("Hello World");',
  'type User = { name: string; };',
  'interface Props { children: React.ReactNode; }',
  'const [state, setState] = useState();',
  'export default Portfolio;',
  'import React from "react";',
  'npm install typescript',
  'git commit -m "feat: new component"',
  'const handleClick = () => {}',
  'async function fetchData() {}',
  '<div className="container">',
  'return <Component />;',
];

export default function FloatingCode() {
  const [snippets, setSnippets] = useState<Array<{
    id: number;
    text: string;
    x: number;
    y: number;
    size: number;
    duration: number;
  }>>([]);

  useEffect(() => {
    const generateSnippets = () => {
      const newSnippets = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 0.6 + 0.4, // 0.4 to 1
        duration: Math.random() * 10 + 15, // 15 to 25 seconds
      }));
      setSnippets(newSnippets);
    };

    generateSnippets();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {snippets.map((snippet) => (
        <motion.div
          key={snippet.id}
          className="absolute font-mono text-foreground/10 select-none"
          style={{
            left: `${snippet.x}%`,
            top: `${snippet.y}%`,
            fontSize: `${snippet.size}rem`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: snippet.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {snippet.text}
        </motion.div>
      ))}
    </div>
  );
}