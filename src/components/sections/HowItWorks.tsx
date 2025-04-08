
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { UserPlus, Cog, Zap } from 'lucide-react';

const Step = ({ number, title, description, icon: Icon, isLast = false }) => {
  const stepRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (stepRef.current) {
      observer.observe(stepRef.current);
    }
    
    return () => {
      if (stepRef.current) {
        observer.unobserve(stepRef.current);
      }
    };
  }, []);
  
  return (
    <div ref={stepRef} className="relative animate-on-scroll" style={{ transitionDelay: `${number * 150}ms` }}>
      <div className="flex flex-col md:flex-row items-start gap-6">
        <div className="flex-shrink-0">
          <div className="w-14 h-14 rounded-full bg-white shadow-subtle flex items-center justify-center z-10 relative">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          
          {!isLast && (
            <div className="hidden md:block w-0.5 h-28 bg-border absolute left-7 top-14 ml-px"></div>
          )}
        </div>
        
        <div className="md:pt-3">
          <div className="font-display text-xl font-semibold mb-2">
            <span className="text-primary mr-2">Step {number}</span>
            {title}
          </div>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const handleSetupClick = () => {
    window.open("https://xbites-talk-to-your-data-frontend.vercel.app/", "_blank");
  };

  return (
    <section id="how-it-works" className="section-padding bg-secondary/80">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 inline-block">
            Simple Process
          </span>
          <h2 className="heading-lg mb-6">How xBites Works</h2>
          <p className="subheading">
            Get your AI real estate crew up and running in three easy steps.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-12 md:space-y-12 relative">
            <Step 
              number={1}
              title="Sign up & integrate AI agents"
              description="Create your account and integrate our AI agents with your existing real estate software in minutes. No technical expertise required."
              icon={UserPlus}
            />
            
            <Step 
              number={2}
              title="Configure Nader & Malek for your sales process"
              description="Customize the AI agents to understand your specific real estate sales process, team structure, and client communication style."
              icon={Cog}
            />
            
            <Step 
              number={3}
              title="Automate hiring & empower sales teams"
              description="Watch as Nader automates your hiring process and Malek empowers your team with instant knowledge support, saving time and boosting sales."
              icon={Zap}
              isLast={true}
            />
          </div>
          
          <div className="mt-16 text-center">
            <button 
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-white px-8 py-3 font-medium shadow-subtle transition-all hover:shadow-elevation hover:bg-primary/90" 
              onClick={handleSetupClick}
            >
              <span>Start Your Setup</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
