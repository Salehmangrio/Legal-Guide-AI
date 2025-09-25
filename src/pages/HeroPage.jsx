import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { 
  ArrowRight, 
  CheckCircle, 
  Shield, 
  Zap, 
  ChevronDown, 
  Scale,
  Brain,
  Sparkles,
  Clock,
  Users,
  Play
} from 'lucide-react';

const HeroPage = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations with enhanced timing
      gsap.fromTo('.hero-title', 
        { opacity: 0, y: 100, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1.4, ease: 'power3.out' }
      );
      
      gsap.fromTo('.hero-subtitle', 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.2, ease: 'power3.out' }
      );
      
      gsap.fromTo('.hero-buttons', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.4, ease: 'power3.out' }
      );

      gsap.fromTo('.hero-stats', 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.6, ease: 'power3.out' }
      );

      gsap.fromTo('.hero-image', 
        { opacity: 0, scale: 0.8, rotation: -5 },
        { opacity: 1, scale: 1, rotation: 0, duration: 1.6, delay: 0.3, ease: 'power3.out' }
      );

      // Enhanced floating animations with different speeds
      gsap.to('.floating-slow', {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut'
      });

      gsap.to('.floating-fast', {
        y: -25,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut'
      });

      // Particle animation
      gsap.to('.particle', {
        y: -100,
        opacity: 0,
        duration: 4,
        repeat: -1,
        stagger: 0.5,
        ease: 'power2.out'
      });

      // Background gradient animation
      gsap.to('.bg-animated', {
        backgroundPosition: '200% center',
        duration: 8,
        repeat: -1,
        ease: 'none'
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Navigation */}

      {/* Animated Background */}
      <div className="absolute inset-0 bg-animated bg-gradient-to-br from-slate-50 via-blue-50 via-purple-50 to-indigo-100" style={{backgroundSize: '400% 400%'}}></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 bg-blue-400/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: '100%',
              animationDelay: `${i * 0.8}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center" ref={heroRef}>
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center bg-blue-50 border border-blue-200 rounded-full px-4 py-2 text-blue-700 text-sm font-medium">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Powered by Advanced AI Technology
                </div>
                
                <h1 className="hero-title text-5xl lg:text-7xl xl:text-8xl font-bold text-gray-900 leading-[1.1]">
                  Your AI-Powered
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800"> Legal Assistant</span>
                </h1>
                
                <p className="hero-subtitle text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                  Get instant legal insights, document analysis, and expert guidance powered by advanced AI. 
                  Navigate complex legal matters with confidence and precision.
                </p>
              </div>

              <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/cta" className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center space-x-3">
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/features" className="group border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-full text-lg font-semibold hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all flex items-center justify-center space-x-3">
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </Link>
              </div>

              {/* Stats */}
              <div className="hero-stats grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-gray-900">50K+</div>
                  <div className="text-sm text-gray-600">Cases Analyzed</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-gray-900">99%</div>
                  <div className="text-sm text-gray-600">Accuracy Rate</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600">Available</div>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Main Hero Image */}
              <div className="hero-image floating-slow relative">
                <div className="bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 rounded-3xl p-8 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-white rounded-2xl p-6 space-y-6">
                    {/* Browser Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="text-xs text-gray-500 font-mono">legalguide.ai</div>
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <Brain className="w-5 h-5 text-blue-600" />
                        <div className="h-3 bg-gray-300 rounded flex-1 animate-pulse"></div>
                      </div>
                      <div className="h-3 bg-blue-200 rounded animate-pulse"></div>
                      <div className="h-3 bg-gray-200 rounded animate-pulse w-4/5"></div>
                      <div className="h-3 bg-gray-200 rounded animate-pulse w-3/5"></div>
                      
                      {/* Success Message */}
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200">
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-6 h-6 text-green-600" />
                          <div>
                            <div className="text-sm font-semibold text-green-800">Analysis Complete</div>
                            <div className="text-xs text-green-600">Legal document processed successfully</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl floating-fast border border-gray-100">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl floating-slow border border-gray-100">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>

              <div className="absolute top-1/2 -right-12 bg-white rounded-2xl p-3 shadow-lg floating-fast border border-gray-100">
                <Clock className="w-6 h-6 text-indigo-600" />
              </div>

              <div className="absolute bottom-1/4 -left-8 bg-white rounded-2xl p-3 shadow-lg floating-slow border border-gray-100">
                <Users className="w-6 h-6 text-emerald-600" />
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-3xl -z-10 transform scale-110"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <div className="text-sm text-gray-500 mb-2">Scroll to explore</div>
          <ChevronDown className="w-6 h-6 text-gray-400 mx-auto animate-bounce" />
        </div>
      </section>
    </div>
  );
};

export default HeroPage;
