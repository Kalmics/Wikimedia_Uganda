import { Link } from 'react-router-dom';
import { Globe, Mail, Twitter, Facebook, Youtube, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Globe className="h-8 w-8" />
              <div>
                <h3 className="font-bold text-lg">Wikimedia Community User Group Uganda</h3>
                <p className="text-sm text-primary-foreground/80">Expanding Free Knowledge Across Uganda</p>
              </div>
            </div>
            <p className="text-primary-foreground/90 mb-4 max-w-md">
              We are a passionate community of volunteers dedicated to promoting free knowledge 
              and supporting Wikimedia projects in Uganda and across East Africa.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="text-primary-foreground/80 hover:text-white transition-colors">Our Projects</Link></li>
              <li><Link to="/events" className="text-primary-foreground/80 hover:text-white transition-colors">Events</Link></li>
              <li><Link to="/get-involved" className="text-primary-foreground/80 hover:text-white transition-colors">Get Involved</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/80 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Stay Updated</h4>
            <p className="text-primary-foreground/80 mb-4">Get the latest news and updates from our community.</p>
            <div className="space-y-3">
              <Input 
                placeholder="Enter your email" 
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="secondary" className="w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-primary-foreground/80">
            <Mail className="h-4 w-4" />
            <span>wikimedia.uganda@example.com</span>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/policies" className="text-primary-foreground/80 hover:text-white transition-colors">
              Policies
            </Link>
            <a href="https://wikimediafoundation.org" className="text-primary-foreground/80 hover:text-white transition-colors">
              Wikimedia Foundation
            </a>
            <a href="https://commons.wikimedia.org" className="text-primary-foreground/80 hover:text-white transition-colors">
              Wikimedia Commons
            </a>
          </div>
        </div>

        <div className="text-center mt-6 text-primary-foreground/60 text-sm">
          © 2024 Wikimedia Community User Group Uganda. Content available under Creative Commons Attribution-ShareAlike License.
        </div>
      </div>
    </footer>
  );
};

export default Footer;