import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Clock, Star } from 'lucide-react';

const Footer = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'zainy_rajodwala03@yahoo.com',
      href: 'mailto:zainy_rajodwala03@yahoo.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '07459347731',
      href: 'tel:+447459347731'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: '52 Collingwood Gardens Broughton, MK10 7FP United Kingdom',
      href: null
    },
    {
      icon: Clock,
      label: 'Hours',
      value: 'Mon-Fri: 9AM-8PM',
      href: null
    }
  ];

  const quickLinks = [
    { name: 'About Me', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Book Session', href: '#booking' },
    { name: 'FAQ', href: '#faq' }
  ];

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <h3 className="text-2xl font-bold text-gradient">Zainab Saifee</h3>
              <Badge variant="secondary" className="text-xs">
                <Star className="w-3 h-3 mr-1" />
                5.0 Rating
              </Badge>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              Experienced mathematics tutor dedicated to helping students excel through 
              personalized learning, proven teaching methods, and unwavering support. 
              Transform your mathematical journey today.
            </p>
            <Button className="btn-hero">
              Book Your Free Consultation
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Get In Touch</h4>
            <ul className="space-y-4">
              {contactInfo.map((contact) => (
                <li key={contact.label} className="flex items-start space-x-3">
                  <contact.icon className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-muted-foreground">{contact.label}</div>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className="text-sm text-foreground hover:text-primary transition-colors duration-200"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <div className="text-sm text-foreground">{contact.value}</div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 Zainab Saifee Mathematics Tutoring. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-200">
                Terms of Service
              </a>
              <div className="flex items-center space-x-1">
                <span>Made with</span>
                <span className="text-red-500">♥</span>
                <span>for students</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;