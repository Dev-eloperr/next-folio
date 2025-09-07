'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  baseDelay?: number;
  wordDelay?: number;
  duration?: number;
  as?: 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'p';
  highlightWords?: { [key: string]: string }; // word: className mapping
}

export default function AnimatedText({ 
  text, 
  className = '',
  baseDelay = 0,
  wordDelay = 150,
  duration = 600,
  as: Component = 'span',
  highlightWords = {}
}: AnimatedTextProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const words = text.split(' ');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
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
  }, []);

  return (
    <Component 
      ref={ref} 
      className={className}
      aria-label={text}
      role="text"
    >
      {words.map((word, index) => {
        const wordClass = highlightWords[word] || '';
        return (
          <span
            key={index}
            className={`inline-block transition-all ease-out overflow-hidden ${wordClass}`}
            style={{
              height: 'auto'
            }}
            aria-hidden="true"
          >
            <span
              className="inline-block"
              style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
                opacity: isVisible ? 1 : 0,
                transitionDuration: `${duration}ms`,
                transitionDelay: `${baseDelay + (index * wordDelay)}ms`
              }}
            >
              {word}
              {index < words.length - 1 && '\u00A0'}
            </span>
          </span>
        );
      })}
    </Component>
  );
}
