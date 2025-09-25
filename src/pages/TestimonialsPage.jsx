import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TestimonialsPage = () => {
  const testimonialsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Testimonials animation
      gsap.fromTo('.testimonial-card', 
        { opacity: 0, x: -100, rotation: -2 },
        { 
          opacity: 1, 
          x: 0, 
          rotation: 0,
          duration: 1,
          stagger: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: testimonialsRef.current,
            start: 'top 80%'
          }
        }
      );
    }, testimonialsRef);

    return () => ctx.revert();
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Corporate Lawyer",
      content: "Legal Guide AI has revolutionized how I research cases. What used to take hours now takes minutes.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Small Business Owner",
      content: "As a non-lawyer, this tool helps me understand complex legal documents with ease. Absolutely invaluable!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Legal Student",
      content: "The AI explanations are so clear and comprehensive. It's like having a personal legal tutor available 24/7.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50" ref={testimonialsRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600">
            Real feedback from legal professionals who've transformed their practice
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPage;
