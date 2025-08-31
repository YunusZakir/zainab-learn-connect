import React from 'react';
import Navigation from '@/components/ui/navigation';
import HeroSection from '@/components/ui/hero-section';
import AboutSection from '@/components/ui/about-section';
import TestimonialsSection from '@/components/ui/testimonials-section';
import BookingSection from '@/components/ui/booking-section';
import FAQSection from '@/components/ui/faq-section';
import Footer from '@/components/ui/footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <TestimonialsSection />
      <BookingSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
