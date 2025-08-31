import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const faqs = [
    {
      question: "What subjects and levels do you teach?",
      answer: "I specialize in mathematics across all levels, including GCSE, A-Level, and university-level mathematics. This covers algebra, geometry, calculus, statistics, and exam preparation for SAT/ACT. I adapt my teaching to each student's specific curriculum and needs."
    },
    {
      question: "How do online sessions work?",
      answer: "Online sessions are conducted via video call using platforms like Zoom or Microsoft Teams. I use a digital whiteboard and screen sharing to make lessons interactive. Students can see everything clearly and participate actively, just like in-person sessions."
    },
    {
      question: "What is included in the free consultation?",
      answer: "The free 15-20 minute consultation allows us to discuss your learning goals, assess your current level, identify areas that need attention, and determine the best approach for your learning style. There's no commitment required."
    },
    {
      question: "How do I pay for sessions?",
      answer: "Sessions are £19.99 per hour and can be paid securely online through our booking system. I accept various payment methods including credit cards and PayPal. Payment is typically made after each session or you can purchase session packages."
    },
    {
      question: "What if I need to cancel or reschedule?",
      answer: "I understand that schedules can change. You can cancel or reschedule with at least 24 hours notice without any penalty. Last-minute cancellations may be subject to a fee, but I'm always flexible with genuine emergencies."
    },
    {
      question: "How do you track student progress?",
      answer: "I maintain detailed records of each student's progress, including areas of improvement, topics covered, and homework assignments. Regular progress reports are shared with students and parents to ensure everyone stays informed about the learning journey."
    },
    {
      question: "Do you provide homework and practice materials?",
      answer: "Yes! I provide customized homework assignments, practice problems, and additional resources tailored to each student's needs. All materials are designed to reinforce what we've learned and prepare for upcoming lessons or exams."
    },
    {
      question: "Can you help with exam preparation?",
      answer: "Absolutely! I have extensive experience helping students prepare for GCSE, A-Level, SAT, ACT, and other standardized mathematics exams. We'll focus on exam techniques, time management, and reviewing key concepts to boost confidence and performance."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <HelpCircle className="w-4 h-4 mr-2" />
            Common Questions
          </Badge>
          <h2 className="section-heading mb-6">
            Frequently Asked{' '}
            <span className="text-gradient">Questions</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about mathematics tutoring with Zainab Saifee
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 hover:border-primary/50 transition-colors duration-200"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pt-2">
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <div className="bg-muted/50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm here to help! Feel free to reach out for any additional information or to discuss your specific learning needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="btn-accent px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105">
                Contact Me Directly
              </button>
              <button className="text-primary hover:text-primary-dark transition-colors duration-200">
                Schedule Free Consultation →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;