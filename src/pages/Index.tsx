
import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ProductShowcase from '@/components/sections/ProductShowcase';
import Metrics from '@/components/sections/Metrics';
import HowItWorks from '@/components/sections/HowItWorks';

const Index = () => {
  useEffect(() => {
    // Animation on scroll effect
    const observerOptions = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.1
    };

    const animationObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          animationObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      animationObserver.observe(el);
    });

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        animationObserver.unobserve(el);
      });
    };
  }, []);

  const handleCTAClick = () => {
    window.open("https://calendly.com/khodier-mahmoud/30min", "_blank");
  };

  const handleTryForFreeClick = () => {
    window.open("https://xbites-talk-to-your-data-frontend.vercel.app/", "_blank");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <ProductShowcase />
        <Metrics />
        <HowItWorks />
        
        {/* Final CTA Section */}
        <section className="py-20 bg-primary/5 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="heading-lg mb-6">Ready to Transform Your Real Estate Business?</h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                Join leading brokerage firms leveraging xBites to streamline sales and maximize performance.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                  className="w-full sm:w-auto px-8 py-3 bg-primary text-white rounded-full font-medium transition-all hover:bg-primary/90 hover:shadow-lg"
                  onClick={handleCTAClick}
                >
                  Book a Demo
                </button>
                <button 
                  className="w-full sm:w-auto px-8 py-3 bg-white text-foreground rounded-full font-medium transition-all hover:bg-secondary hover:shadow-lg"
                  onClick={handleTryForFreeClick}
                >
                  Try for Free
                </button>
              </div>
            </div>
          </div>
          
          {/* Background Decoration */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-primary/5 -bottom-[250px] -right-[100px]"></div>
          <div className="absolute w-[300px] h-[300px] rounded-full bg-primary/5 top-[100px] -left-[150px]"></div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
