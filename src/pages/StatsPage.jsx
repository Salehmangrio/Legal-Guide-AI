import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StatsPage = () => {
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stats counter animation
      gsap.fromTo('.stat-number', 
        { textContent: 0 },
        { 
          textContent: (i, target) => target.getAttribute('data-value'),
          duration: 2,
          ease: 'power2.out',
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%'
          }
        }
      );
    }, statsRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { number: "50000", label: "Legal Cases Analyzed", suffix: "+" },
    { number: "99", label: "Accuracy Rate", suffix: "%" },
    { number: "24", label: "Hours Available", suffix: "/7" },
    { number: "150", label: "Countries Supported", suffix: "+" }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600" ref={statsRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Trusted by Legal Professionals Worldwide
          </h2>
          <p className="text-xl text-blue-100">
            Join thousands of lawyers, firms, and legal departments who rely on our AI
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold text-white mb-2">
                <span className="stat-number" data-value={stat.number}>0</span>
                <span>{stat.suffix}</span>
              </div>
              <p className="text-blue-100 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsPage;
