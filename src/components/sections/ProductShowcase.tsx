
import React from 'react';
import { cn } from '@/lib/utils';
import CTAButton from '../ui/CTAButton';
import { ArrowRight, Users, Brain } from 'lucide-react';

const ProductCard = ({ 
  title, 
  description, 
  icon: Icon,
  color = "bg-primary/10",
  iconColor = "text-primary",
  isReversed = false,
  features = []
}) => {
  const handleSignUpClick = () => {
    window.open("https://calendly.com/khodier-mahmoud/30min", "_blank");
  };

  return (
    <div className={cn(
      "relative rounded-2xl overflow-hidden bg-white shadow-subtle transition-all duration-300 hover:shadow-elevation",
      "flex flex-col lg:flex-row"
    )}>
      <div className={cn(
        "flex-1 p-8 md:p-10 order-2",
        isReversed ? "lg:order-1" : "lg:order-2"
      )}>
        <h3 className="heading-md mb-4">{title}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <CTAButton variant="outline" className="mt-2" onClick={handleSignUpClick}>
          Sign up <ArrowRight className="ml-2 h-4 w-4" />
        </CTAButton>
      </div>
      
      <div className={cn(
        "lg:w-2/5 p-8 md:p-10 flex items-center justify-center",
        color,
        isReversed ? "lg:order-2" : "lg:order-1"
      )}>
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-subtle">
            <Icon className={cn("w-8 h-8", iconColor)} />
          </div>
          <div className="mt-6 text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg py-3 px-6 shadow-subtle">
              <div className="font-display font-bold text-xl">{title.split(' ')[0]}</div>
            </div>
          </div>
          
          {/* Abstract Elements */}
          <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-white/20 animate-float"></div>
          <div className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full bg-white/20 animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </div>
  );
};

const ProductShowcase = () => {
  return (
    <section id="product" className="section-padding bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 inline-block">
            Meet Your AI Crew
          </span>
          <h2 className="heading-lg mb-6">AI Agents Designed for Real Estate Success</h2>
          <p className="subheading">
            Our specialized AI agents streamline your real estate operations, saving you time and increasing efficiency.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">
          <ProductCard 
            title="Malek - AI Knowledge Assistant"
            description="Provide your real estate team with instant access to critical information and answers to boost sales performance."
            icon={Brain}
            color="bg-accent/10"
            iconColor="text-accent"
            features={[
              "24/7 AI sales expert that empowers teams to sell like top performers",
              "Instant answers to complex real estate questions in seconds",
              "Seamless accessibility via chat, email, and WhatsApp",
              "Smart automation for booking units, scheduling calls, and more"
            ]}
          />
          
          <ProductCard 
            title="Nader - AI Interviewer"
            description="Streamline your hiring process with an AI that pre-screens candidates and identifies top talent for your real estate team."
            icon={Users}
            color="bg-primary/10"
            iconColor="text-primary"
            isReversed={true}
            features={[
              "Live, adaptive AI interviews in English & Arabic",
              "Instant candidate evaluation with AI-powered insights",
              "Cheat detection & smart scheduling for efficiency",
              "One-click interview management, reducing hiring time by up to 70%"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
