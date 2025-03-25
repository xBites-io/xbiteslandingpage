
import React from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CTAButtonProps extends ButtonProps {
  gradient?: boolean;
  pulse?: boolean;
}

const CTAButton = React.forwardRef<HTMLButtonElement, CTAButtonProps>(
  ({ className, children, gradient = false, pulse = false, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "rounded-full font-medium transition-all relative overflow-hidden px-6 py-6 h-auto text-base", 
          gradient && "bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:translate-y-[-2px]",
          pulse && "animate-pulse-soft",
          className
        )}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

CTAButton.displayName = "CTAButton";

export default CTAButton;
