import { motion } from 'framer-motion';
import { Heart, Code } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <span>Built with</span>
            <Heart className="text-red-500" size={16} fill="currentColor" />
            <span>and</span>
            <Code className="text-foreground" size={16} />
            <span>by Manoj Kumar K</span>
          </div>
          
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <span>React</span>
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>Tailwind CSS</span>
            <span>•</span>
            <span>Framer Motion</span>
          </div>
          
          <p className="text-muted-foreground text-sm">
            © {currentYear} Manoj Kumar K. All rights reserved.
          </p>
          
          <div className="pt-4">
            <motion.div
              className="w-16 h-0.5 bg-gradient-to-r from-foreground to-muted-foreground mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>
      </div>
    </footer>
  );
}