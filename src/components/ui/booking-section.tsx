import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Video, MapPin, Zap, CheckCircle } from 'lucide-react';

const BookingSection = () => {
  const [selectedFormat, setSelectedFormat] = useState('online');

  const sessionFormats = [
    {
      id: 'online',
      title: 'Online Sessions',
      icon: Video,
      description: 'Learn from anywhere with interactive online sessions',
      popular: true
    },
    {
      id: 'inperson',
      title: 'In-Person Sessions',
      icon: MapPin,
      description: 'Face-to-face learning in a comfortable environment'
    }
  ];

  const timeSlots = [
    { time: '9:00 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '2:00 PM', available: false },
    { time: '4:00 PM', available: true },
    { time: '6:00 PM', available: true },
    { time: '8:00 PM', available: true }
  ];

  const benefits = [
    'Free initial consultation call',
    'Personalized learning plan',
    'Flexible scheduling',
    'Progress tracking',
    'Homework & practice materials',
    'Exam preparation support'
  ];

  return (
    <section id="booking" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Easy Booking
          </Badge>
          <h2 className="section-heading mb-6">
            Book Your{' '}
            <span className="text-gradient">Learning Session</span>
          </h2>
          <p className="section-subtitle">
            Choose your preferred format and schedule your personalized mathematics session
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Session Format Selection */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-primary" />
                  Choose Your Session Format
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {sessionFormats.map((format) => (
                  <div
                    key={format.id}
                    className={`relative p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 hover-lift ${
                      selectedFormat === format.id
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                    onClick={() => setSelectedFormat(format.id)}
                  >
                    {format.popular && (
                      <Badge className="absolute -top-2 -right-2 bg-accent">
                        Most Popular
                      </Badge>
                    )}
                    <div className="flex items-start space-x-3">
                      <format.icon className={`w-6 h-6 mt-1 ${
                        selectedFormat === format.id ? 'text-primary' : 'text-muted-foreground'
                      }`} />
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{format.title}</h3>
                        <p className="text-sm text-muted-foreground">{format.description}</p>
                      </div>
                      <div className={`w-4 h-4 rounded-full border-2 ${
                        selectedFormat === format.id
                          ? 'border-primary bg-primary'
                          : 'border-muted-foreground'
                      }`}>
                        {selectedFormat === format.id && (
                          <div className="w-full h-full rounded-full bg-white scale-50"></div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Mock Calendar Interface */}
                <div className="mt-8">
                  <h3 className="font-semibold mb-4 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-primary" />
                    Select Available Time Slot
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    {timeSlots.map((slot) => (
                      <Button
                        key={slot.time}
                        variant={slot.available ? "outline" : "secondary"}
                        disabled={!slot.available}
                        className={`justify-center ${slot.available ? 'hover-lift' : 'opacity-50'}`}
                      >
                        {slot.time}
                      </Button>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    * Times shown in your local timezone
                  </p>
                </div>

                {/* Booking CTA */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button className="btn-hero flex-1">
                    Book Free Consultation
                  </Button>
                  <Button variant="outline" className="hover-lift">
                    Schedule Paid Session - £19.99
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Benefits & Pricing */}
          <div className="space-y-6">
            {/* Pricing Card */}
            <Card className="border-primary/20">
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">
                  <span className="text-3xl font-bold text-primary">£19.99</span>
                  <span className="text-muted-foreground">/hour</span>
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Professional mathematics tutoring
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
                <Button className="btn-secondary w-full mt-6">
                  Start Free Consultation
                </Button>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Need Help Choosing?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Not sure which option is right for you? Let's chat!
                </p>
                <Button variant="outline" size="sm" className="hover-lift">
                  Contact Me Directly
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <CheckCircle className="w-4 h-4 text-success" />
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center space-x-1">
              <CheckCircle className="w-4 h-4 text-success" />
              <span>Flexible Cancellation</span>
            </div>
            <div className="flex items-center space-x-1">
              <CheckCircle className="w-4 h-4 text-success" />
              <span>Money-Back Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;