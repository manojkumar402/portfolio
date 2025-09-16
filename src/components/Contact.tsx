import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Linkedin, Github, Send, MapPin } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
    <section id="contact" className="py-20 px-4 bg-muted/30">
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
              Let's Connect
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to collaborate on your next project? Let's discuss how we can work together 
              to build something amazing.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <Card className="card-elegant">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or just say hello!"
                        rows={5}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full glow-effect bg-foreground text-background hover:bg-foreground/90">
                      <Send className="mr-2" size={18} />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-8">
              <Card className="card-elegant">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
                  <div className="space-y-6">
                    <motion.a
                      href="mailto:manojkumark3890@gmail.com"
                      className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="p-3 rounded-lg bg-foreground/10">
                        <Mail className="text-foreground" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold">Email</h4>
                        <p className="text-muted-foreground">manojkumark3890@gmail.com</p>
                      </div>
                    </motion.a>

                    <motion.a
                      href="https://linkedin.com/in/manoj-kumar-katabatthina"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="p-3 rounded-lg bg-foreground/5">
                        <Linkedin className="text-muted-foreground" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold">LinkedIn</h4>
                        <p className="text-muted-foreground">Professional Network</p>
                      </div>
                    </motion.a>

                    <motion.a
                      href="https://github.com/manojkumark3890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="p-3 rounded-lg bg-foreground/10">
                        <Github className="text-foreground" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold">GitHub</h4>
                        <p className="text-muted-foreground">Code Repository</p>
                      </div>
                    </motion.a>

                    <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                      <div className="p-3 rounded-lg bg-foreground/5">
                        <MapPin className="text-muted-foreground" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold">Location</h4>
                        <p className="text-muted-foreground">Bangalore, India</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-elegant">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4">Open to opportunities</h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    I'm currently open to new opportunities and interesting projects. 
                    Whether you're looking for a frontend developer, full-stack engineer, 
                    or want to collaborate on something exciting, I'd love to hear from you!
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Available for new projects
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