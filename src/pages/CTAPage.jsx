import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CTAPage = () => {
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // CTA animation
      gsap.fromTo('.cta-content', 
        { opacity: 0, scale: 0.9 },
        { 
          opacity: 1, 
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 80%'
          }
        }
      );
    }, ctaRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900" ref={ctaRef}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="cta-content">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Legal Practice?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of legal professionals who've already discovered the power of AI-assisted legal research. 
            Start your free trial today and experience the future of legal work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all">
              Schedule Demo
            </button>
          </div>
          <p className="text-gray-400 text-sm mt-6">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTAPage;
