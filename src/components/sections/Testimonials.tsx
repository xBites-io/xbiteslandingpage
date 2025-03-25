
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "XBites has revolutionized our hiring process. Nader conducts preliminary interviews that save us hours each week, allowing us to focus only on the most promising candidates.",
    author: "Emily Chen",
    role: "Sales Director",
    company: "Coastal Properties Group",
    rating: 5
  },
  {
    id: 2,
    content: "The knowledge assistant Malek has become indispensable for our team. New agents can access instant answers to complex real estate questions, accelerating their learning curve and boosting confidence.",
    author: "Marcus Johnson",
    role: "Team Lead",
    company: "Urban Realty Partners",
    rating: 5
  },
  {
    id: 3,
    content: "I was skeptical about AI, but XBites proved its value in the first month. Our team's productivity has increased by 35% since implementation, and the quality of our new hires has significantly improved.",
    author: "Sophia Rodriguez",
    role: "Broker Owner",
    company: "Elevate Real Estate",
    rating: 5
  }
];

const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <div 
      className={cn(
        "absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out p-1",
        isActive ? "opacity-100 z-10 translate-x-0" : "opacity-0 z-0 translate-x-8"
      )}
    >
      <div className="bg-white rounded-xl shadow-subtle p-8 h-full">
        {/* Stars */}
        <div className="flex mb-4">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          ))}
        </div>
        
        <blockquote className="text-lg mb-6">"{testimonial.content}"</blockquote>
        
        <div className="flex items-center mt-auto">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
            {testimonial.author.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="ml-4">
            <div className="font-medium">{testimonial.author}</div>
            <div className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 inline-block">
            Success Stories
          </span>
          <h2 className="heading-lg mb-6">What Our Clients Say</h2>
          <p className="subheading">
            Real estate professionals are transforming their businesses with XBites.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative h-[320px] md:h-[280px]">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={testimonial.id} 
                testimonial={testimonial} 
                isActive={index === activeIndex} 
              />
            ))}
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all",
                  index === activeIndex ? "bg-primary scale-125" : "bg-primary/30"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="flex justify-center mt-6 gap-4">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <a href="#" className="text-primary font-medium hover:underline flex items-center justify-center">
            <span>Read all case studies</span>
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
