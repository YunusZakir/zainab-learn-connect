import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, BookOpen, Calendar, MessageCircle, User } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about', icon: User },
    { name: 'Services', href: '#services', icon: BookOpen },
    { name: 'Testimonials', href: '#testimonials', icon: MessageCircle },
    { name: 'Book Session', href: '#booking', icon: Calendar },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gradient">Zainab Saifee</h1>
            <p className="text-xs text-muted-foreground">Mathematics Tutor</p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover-lift"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="btn-hero">
              Book Free Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden animate-slide-up">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md border-b border-border">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center space-x-2">
                  <item.icon size={18} />
                  <span>{item.name}</span>
                </div>
              </a>
            ))}
            <div className="pt-2">
              <Button className="btn-hero w-full">
                Book Free Consultation
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;