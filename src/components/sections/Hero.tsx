
import React, { useEffect, useRef } from 'react';
import CTAButton from '../ui/CTAButton';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const backgroundAnimation = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const {
        clientX,
        clientY
      } = e;
      if (!backgroundAnimation.current) return;
      const xPos = (clientX / window.innerWidth - 0.5) * 20;
      const yPos = (clientY / window.innerHeight - 0.5) * 20;
      backgroundAnimation.current.style.transform = `translate(${xPos}px, ${yPos}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  const handleCTAClick = () => {
    window.open("https://calendly.com/khodier-mahmoud/30min", "_blank");
  };
  
  return <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div ref={backgroundAnimation} className="absolute w-[800px] h-[800px] rounded-full bg-primary/5 -top-[400px] -right-[400px] transition-transform duration-1000 ease-out" />
        <div className="absolute w-[600px] h-[600px] rounded-full bg-primary/5 -bottom-[300px] -left-[300px]" />
        <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-transparent to-background/80 z-10" />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block animate-fade-in">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 inline-block">
              AI-Powered Real Estate Automation
            </span>
          </div>
          
          <h1 className="heading-xl mb-6 animate-slide-up">
            Boost Real Estate Sales <br className="hidden md:block" />
            <span className="text-primary">with Your AI Crew</span>
          </h1>
          
          <p className="subheading mb-8 max-w-2xl mx-auto animate-slide-up" style={{
          animationDelay: '0.1s'
        }}>
            xBites provides a complete, end-to-end platform with AI agents that automate repetitive sales tasks, optimizing efficiency and enabling teams to focus on closing deals.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{
          animationDelay: '0.2s'
        }}>
            <CTAButton gradient size="lg" className="w-full sm:w-auto" onClick={handleCTAClick}>
              Book a Demo <ArrowRight className="ml-2 h-4 w-4" />
            </CTAButton>
            <CTAButton variant="outline" size="lg" className="w-full sm:w-auto" onClick={handleCTAClick}>
              Try for Free
            </CTAButton>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground animate-fade-in" style={{
          animationDelay: '0.3s'
        }}>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Backed by</span>
              <img src="/lovable-uploads/06508cb8-c1d6-478f-8b53-9e2fd99181b4.png" alt="Antler" className="h-8 ml-2" onError={e => {
              const target = e.target as HTMLImageElement;
              console.error('Antler logo failed to load');
              target.onerror = null;
              target.src = '/placeholder.svg';
            }} />
            </div>
          </div>
        </div>
        
        <div className="mt-16 relative max-w-5xl mx-auto animate-scale-in" style={{
        animationDelay: '0.4s'
      }}>
          <div className="glass-panel rounded-xl overflow-hidden shadow-elevation">
            <div className="bg-gradient-to-b from-black/5 to-transparent px-1 pt-1">
              <div className="bg-secondary rounded-t-lg py-2 px-4 flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-muted-foreground/30"></div>
                <div className="w-3 h-3 rounded-full bg-muted-foreground/30"></div>
                <div className="w-3 h-3 rounded-full bg-muted-foreground/30"></div>
                <div className="ml-4 h-6 w-1/2 bg-muted-foreground/10 rounded"></div>
              </div>
            </div>
            <div className="aspect-video bg-gradient-to-b from-white to-secondary/30 flex items-center justify-center">
              <img 
                alt="Dashboard Preview" 
                className="w-full h-auto object-contain" 
                onError={e => {
                  const target = e.target as HTMLImageElement;
                  console.error('Dashboard screenshot failed to load');
                  target.onerror = null;
                  target.src = '/placeholder.svg';
                }} 
                src="/lovable-uploads/babd5b49-3bb3-4042-9b63-a5e4336b5906.png" 
              />
            </div>
          </div>
          
          {/* Abstract Elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/10 animate-float"></div>
          <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-accent/10 animate-float" style={{
          animationDelay: '1s'
        }}></div>
        </div>
      </div>
    </section>;
};

export default Hero;
