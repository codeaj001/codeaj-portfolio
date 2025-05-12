import { Mail, Phone, MapPin, Terminal, Send } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_email: 'codeaj001@gmail.com',
        message: formData.message,
      };

      await emailjs.send(
        'default_service', // You'll need to replace this with your EmailJS service ID
        'template_lx1rvjn', // You'll need to replace this with your EmailJS template ID
        templateParams,
        'RreUhqIChv1-YAfh3' // You'll need to replace this with your EmailJS public key
      );

      toast({
        title: "Success!",
        description: "Your message has been sent successfully!",
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen animated-bg cyber-grid pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4 neon-text-primary">Contact Code AJ</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Interested in web3 security, blockchain development, or collaboration? Reach out!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="glass cyber-border p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Terminal size={24} className="text-primary" />
              <h3 className="text-xl font-bold terminal-text">Send Message</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm text-gray-300">
                  <div className="flex items-center gap-1 mb-1">
                    <span className="text-xs terminal-text">// your.name</span>
                  </div>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md bg-white/5 border border-primary/20 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Enter your name"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm text-gray-300">
                  <div className="flex items-center gap-1 mb-1">
                    <span className="text-xs terminal-text">// your.email</span>
                  </div>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md bg-white/5 border border-primary/20 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Enter your email"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm text-gray-300">
                  <div className="flex items-center gap-1 mb-1">
                    <span className="text-xs terminal-text">// your.message</span>
                  </div>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-md bg-white/5 border border-primary/20 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full py-3 rounded-md overflow-hidden disabled:opacity-50"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent animate-data-flow"></div>
                <div className="relative bg-[#0A0F1A]/80 flex items-center justify-center gap-2 py-3 rounded-md group-hover:bg-transparent transition-colors duration-300">
                  <Send size={18} />
                  <span>{isLoading ? "Sending..." : "Send Message"}</span>
                </div>
              </button>
            </form>
          </div>
          
          <div className="space-y-6">
            <div className="glass cyber-border p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="text-primary" />
                <h3 className="text-lg font-medium">Email</h3>
              </div>
              <div className="pl-9">
                <a href="mailto:codeaj001@gmail.com" className="text-gray-300 hover:text-primary transition-colors block">
                  codeaj001@gmail.com
                </a>
                <p className="text-xs terminal-text mt-1">// Direct line for security inquiries</p>
              </div>
            </div>
            
            <div className="glass cyber-border p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="text-secondary" />
                <h3 className="text-lg font-medium">Phone</h3>
              </div>
              <div className="pl-9">
                <a href="tel:+1234567890" className="text-gray-300 hover:text-secondary transition-colors block">
                  +1 (234) 567-890
                </a>
                <p className="text-xs terminal-text mt-1">// Available weekdays 9am-5pm</p>
              </div>
            </div>
            
            <div className="glass cyber-border p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-accent" />
                <h3 className="text-lg font-medium">Location</h3>
              </div>
              <div className="pl-9">
                <p className="text-gray-300">San Francisco, CA</p>
                <p className="text-xs terminal-text mt-1">// Remote work available</p>
              </div>
            </div>
            
            <div className="relative h-[200px] mt-8 overflow-hidden rounded-xl border border-primary/30">
              <img 
                src="/uploads/0dd6e14d-98c4-4e6d-9dfc-7b70646d23fc.png" 
                alt="Code AJ" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent flex items-end">
                <div className="p-6 w-full">
                  <p className="text-xs terminal-text mb-1">// Let's build something amazing together</p>
                  <h3 className="text-lg font-medium">Code AJ</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
