import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Award, BookOpen, Heart } from 'lucide-react';
import zainabProfile from '@/assets/zainab-profile.jpg';

const AboutSection = () => {
  const qualifications = [
    'Bachelor\'s Degree in Mathematics',
    'Certified Teaching Professional',
    'GCSE & A-Level Specialist',
    '5+ Years Teaching Experience'
  ];

  const subjects = [
    'Algebra & Geometry',
    'Calculus & Statistics', 
    'GCSE Mathematics',
    'A-Level Mathematics',
    'SAT/ACT Prep',
    'University Level Math'
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <Badge variant="secondary" className="mb-4">
              Professional Educator
            </Badge>
            
            <h2 className="section-heading mb-6">
              Meet Your Dedicated{' '}
              <span className="text-gradient">Mathematics Tutor</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm Zainab Saifee, a passionate mathematics educator with over 5 years of experience 
              helping students of all levels master mathematical concepts. My personalized approach 
              ensures every student receives the attention and support they need to succeed.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              I believe that every student can excel in mathematics with the right guidance, patience, 
              and teaching methods. My goal is not just to help you pass your exams, but to build 
              your confidence and love for mathematics that will serve you throughout your academic journey.
            </p>

            {/* Qualifications */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Award className="w-5 h-5 text-primary mr-2" />
                Qualifications & Experience
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {qualifications.map((qual) => (
                  <div key={qual} className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-success mr-2 flex-shrink-0" />
                    <span className="text-sm">{qual}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Subjects */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <BookOpen className="w-5 h-5 text-primary mr-2" />
                Subjects I Teach
              </h3>
              <div className="flex flex-wrap gap-2">
                {subjects.map((subject) => (
                  <Badge key={subject} variant="outline" className="hover-lift">
                    {subject}
                  </Badge>
                ))}
              </div>
            </div>

            <Button className="btn-accent">
              Schedule a Free Consultation
            </Button>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Main image */}
              <div className="relative z-10 hover-glow transition-all duration-500">
                <img
                  src={zainabProfile}
                  alt="Zainab Saifee - Mathematics Tutor"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-xl"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full animate-pulse-slow"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-full animate-float"></div>
              
              {/* Floating badges */}
              <div className="absolute top-8 -left-8 glass-card p-3 rounded-lg animate-float">
                <div className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-red-500" />
                  <span className="text-sm font-medium">Patient & Caring</span>
                </div>
              </div>
              
              <div className="absolute bottom-8 -right-8 glass-card p-3 rounded-lg animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Top Rated</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;