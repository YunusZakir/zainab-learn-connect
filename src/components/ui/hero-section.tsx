import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Users, GraduationCap, Clock } from 'lucide-react';
import heroMath from '@/assets/hero-math.jpg';

const HeroSection = () => {
  const stats = [
    { icon: Users, value: '100+', label: 'Students Helped' },
    { icon: Star, value: '5.0', label: 'Average Rating' },
    { icon: GraduationCap, value: '95%', label: 'Success Rate' },
    { icon: Clock, value: '500+', label: 'Hours Taught' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroMath} 
          alt="Mathematics background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/40 to-accent/20"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-secondary/10 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-32 right-10 w-18 h-18 bg-primary/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          {/* Badge */}
          <div className="animate-fade-in">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
              ⭐ Top-Rated Mathematics Tutor
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="section-heading mb-6 animate-slide-up">
            Master Mathematics with{' '}
            <span className="text-gradient">Zainab Saifee</span>
          </h1>

          {/* Subtitle */}
          <p className="section-subtitle mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Experienced mathematics tutor helping students excel with personalized learning, 
            proven methods, and dedicated support. From basic concepts to advanced topics.
          </p>

          {/* Pricing */}
          <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
              <span className="text-2xl font-bold text-primary">£19.99</span>
              <span className="text-muted-foreground">/hour</span>
              <span className="text-xs bg-success/10 text-success px-2 py-1 rounded-full">Best Value</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="btn-hero text-lg px-8 py-3">
              Book Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="hover-lift">
              View My Profile
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="glass-card p-6 rounded-lg hover-lift"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <div className="flex flex-col items-center">
                  <stat.icon className="w-8 h-8 text-primary mb-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse-slow"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;