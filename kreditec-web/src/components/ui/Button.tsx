import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 active:scale-95';
    
    const variants = {
      primary: 'bg-[var(--color-accent)] text-white hover:bg-green-600 shadow-md hover:shadow-lg',
      secondary: 'bg-[var(--color-brand)] text-white hover:bg-[#001f0d] shadow-md hover:shadow-lg',
      outline: 'border-2 border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white',
      ghost: 'text-gray-600 hover:text-[var(--color-brand)] hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-6 py-2.5 text-base',
      lg: 'px-8 py-3.5 text-lg'
    };

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    return <button ref={ref} className={classes} {...props} />;
  }
);

Button.displayName = 'Button';
