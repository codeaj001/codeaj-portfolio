
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen animated-bg pt-20">
      <div className="container mx-auto px-4">
        <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 neon-text-primary">Contact Me</h2>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="text-primary" />
              <a href="mailto:your.email@example.com" className="text-white hover:text-primary transition-colors">
                your.email@example.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-primary" />
              <a href="tel:+1234567890" className="text-white hover:text-primary transition-colors">
                +1 (234) 567-890
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-primary" />
              <span className="text-white">Your Location</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
