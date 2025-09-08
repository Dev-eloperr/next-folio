'use client';

import { useEffect, useRef, useState } from 'react';

type AnimationType = 'fade' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scale' | 'scaleX' | 'scaleY' | 'rotateY';

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  duration?: number;
  threshold?: number;
  animationType?: AnimationType;
  distance?: number;
}

const getAnimationStyles = (animationType: AnimationType, distance: number, isVisible: boolean) => {
  const baseStyles = {
    transition: 'all ease-out',
    opacity: animationType === 'fade' ? (isVisible ? 1 : 0) : (isVisible ? 1 : 0)
  };

  switch (animationType) {
    case 'fade':
      return {
        ...baseStyles,
        transform: 'none'
      };
    case 'slideUp':
      return {
        ...baseStyles,
        transform: isVisible ? 'translateY(0)' : `translateY(${distance}px)`
      };
    case 'slideDown':
      return {
        ...baseStyles,
        transform: isVisible ? 'translateY(0)' : `translateY(-${distance}px)`
      };
    case 'slideLeft':
      return {
        ...baseStyles,
        transform: isVisible ? 'translateX(0)' : `translateX(${distance}px)`
      };
    case 'slideRight':
      return {
        ...baseStyles,
        transform: isVisible ? 'translateX(0)' : `translateX(-${distance}px)`
      };
    case 'scale':
      return {
        ...baseStyles,
        transform: isVisible ? 'scale(1)' : 'scale(0.8)',
        transformOrigin: 'center'
      };
    case 'scaleX':
      return {
        ...baseStyles,
        transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left'
      };
    case 'scaleY':
      return {
        ...baseStyles,
        transform: isVisible ? 'scaleY(1)' : 'scaleY(0)',
        transformOrigin: 'bottom'
      };
    case 'rotateY':
      return {
        ...baseStyles,
        transform: isVisible ? 'rotateY(0)' : 'rotateY(90deg)',
        transformOrigin: 'center'
      };
    default:
      return baseStyles;
  }
};

export default function AnimatedSection({ 
  children, 
  delay = 0, 
  className = '',
  duration = 800,
  threshold = 0.1,
  animationType = 'slideUp',
  distance = 50
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const animationStyles = getAnimationStyles(animationType, distance, isVisible);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...animationStyles,
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
}
