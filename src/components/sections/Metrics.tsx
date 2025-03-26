
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Clock, Users, MessagesSquare } from 'lucide-react';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const Counter: React.FC<CounterProps> = ({ 
  end, 
  duration = 2000,
  suffix = "",
  prefix = ""
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    const start = 0;
    const increment = Math.ceil(end / (duration / 16));
    const startTime = performance.now();
    
    const updateCount = () => {
      const elapsedTime = performance.now() - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      countRef.current = Math.min(Math.floor(progress * (end - start) + start), end);
      setCount(countRef.current);
      
      if (countRef.current < end) {
        requestAnimationFrame(updateCount);
      }
    };
    
    requestAnimationFrame(updateCount);
  }, [end, duration, isVisible]);

  return (
    <div ref={ref} className="font-display font-bold text-4xl md:text-5xl">
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
};

const MetricCard = ({ 
  icon: Icon, 
  value, 
  label, 
  suffix = "", 
  prefix = "", 
  highlight = false 
}) => {
  return (
    <div className={cn(
      "relative p-8 rounded-xl bg-white shadow-subtle transition-all duration-300 hover:shadow-elevation",
      highlight && "border-2 border-primary/20"
    )}>
      <div className="flex items-center mb-5">
        <div className={cn(
          "w-12 h-12 rounded-full flex items-center justify-center", 
          highlight ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
        )}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
      
      <Counter end={value} prefix={prefix} suffix={suffix} />
      
      <p className="text-muted-foreground mt-2">{label}</p>
      
      {highlight && (
        <div className="absolute top-3 right-3 px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
          Premium
        </div>
      )}
    </div>
  );
};

const Metrics = () => {
  const handleGetStartedClick = () => {
    window.open("https://calendly.com/khodier-mahmoud/30min", "_blank");
  };

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 inline-block">
            Proven Results
          </span>
          <h2 className="heading-lg mb-6">Transforming Real Estate Teams</h2>
          <p className="subheading">
            xBites is delivering measurable results for real estate professionals across the country.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <MetricCard 
            icon={Users}
            value={2000}
            prefix="+"
            label="Brokers"
          />
          
          <MetricCard 
            icon={MessagesSquare}
            value={100000}
            label="AI Interactions Monthly"
            highlight={true}
          />
          
          <MetricCard 
            icon={Clock}
            value={3500}
            label="Hours Saved Per Week"
          />
        </div>
        
        <div className="mt-20 max-w-3xl mx-auto bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-10 text-center">
          <h3 className="heading-md mb-6">Ready to experience these results?</h3>
          <p className="text-lg mb-8">
            Join leading brokerage firms leveraging xBites to streamline sales and maximize performance.
          </p>
          <button 
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 font-medium shadow-subtle transition-all hover:shadow-elevation"
            onClick={handleGetStartedClick}
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
