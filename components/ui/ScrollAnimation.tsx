'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';

interface ScrollAnimationProps {
    children: React.ReactNode;
    animation?: 'fade-in-up' | 'slide-in-left' | 'slide-in-right';
    delay?: number;
    className?: string;
}

const ScrollAnimation = ({ children, animation = 'fade-in-up', delay = 0, className = '' }: ScrollAnimationProps) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const getAnimationClass = () => {
        switch (animation) {
            case 'fade-in-up':
                return inView ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-10';
            case 'slide-in-left':
                return inView ? 'animate-slide-in-left opacity-100 translate-x-0' : 'opacity-0 -translate-x-10';
            case 'slide-in-right':
                return inView ? 'animate-slide-in-right opacity-100 translate-x-0' : 'opacity-0 translate-x-10';
            default:
                return inView ? 'opacity-100' : 'opacity-0';
        }
    };

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-out ${getAnimationClass()} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

export default ScrollAnimation;
