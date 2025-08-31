import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Mercy",
      initial: "M",
      rating: 5,
      text: "Zainab is absolutely amazing, she is so patient and takes her time to explain methods. I can already see a big improvement in my daughters math skills just after 4 lessons with Zainab. I highly recommend her.",
      relationship: "Parent"
    },
    {
      name: "Cleopatra", 
      initial: "C",
      rating: 5,
      text: "I cannot recommend Zainab enough! Since my son started to access her Maths sessions his grade in this subject area has consistently improved. The feedback I get from my son regarding his sessions are quite positive-he describes her as patient, helpful and knowledgeable in content.",
      relationship: "Parent",
      featured: true
    },
    {
      name: "Sarah M.",
      initial: "S", 
      rating: 5,
      text: "Zainab helped me go from struggling with algebra to actually enjoying mathematics! Her teaching style is clear and she makes complex concepts easy to understand.",
      relationship: "Student"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Success Stories
          </Badge>
          <h2 className="section-heading mb-6">
            What My Students & Parents{' '}
            <span className="text-gradient">Are Saying</span>
          </h2>
          <p className="section-subtitle">
            Real feedback from students and parents who've experienced transformative learning
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className={`group hover-lift ${testimonial.featured ? 'lg:scale-105 border-primary/20 shadow-lg' : ''} relative overflow-hidden`}
            >
              {testimonial.featured && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary"></div>
              )}
              
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary/20" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {testimonial.initial}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.relationship}</div>
                    </div>
                  </div>
                  
                  {testimonial.featured && (
                    <Badge variant="secondary" className="text-xs">
                      Featured Review
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ready to join these success stories?
          </p>
          <div className="inline-flex items-center space-x-2 text-sm text-muted-foreground">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="font-semibold">5.0/5</span>
            <span>•</span>
            <span>100+ Happy Students</span>
            <span>•</span>
            <span>95% Success Rate</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;