import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Brain, Shield, Clock, BookOpen, Zap, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FeaturesPage = () => {
  const featuresRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Features animation on scroll
      gsap.fromTo('.feature-card', 
        { opacity: 0, y: 80, scale: 0.9 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: featuresRef.current,
            start: 'top 80%'
          }
        }
      );
    }, featuresRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Legal Analysis",
      description: "Advanced AI algorithms analyze complex legal documents and provide instant insights and recommendations."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Confidential",
      description: "Bank-level encryption ensures your sensitive legal information remains completely secure and private."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Availability",
      description: "Get legal guidance anytime, anywhere. Our AI assistant is always ready to help with your legal questions."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Comprehensive Database",
      description: "Access to millions of legal cases, statutes, and regulations from multiple jurisdictions worldwide."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Results",
      description: "Get immediate answers to legal questions that would traditionally take hours of research to find."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Expert Validated",
      description: "All AI responses are validated by legal experts to ensure accuracy and reliability."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white" ref={featuresRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Legal Professionals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our AI-powered platform transforms the way you handle legal research, 
            document analysis, and case preparation.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="text-blue-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesPage;
