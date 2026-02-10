'use client';

import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

interface CounterProps {
    end: number;
    suffix?: string;
    label: string;
}

const Counter = ({ end, suffix = '', label }: CounterProps) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <div ref={ref} className="text-center p-4 bg-gray-50 rounded hover:bg-white hover:shadow-md transition-shadow">
            <h4 className="text-3xl font-bold text-[#003366]">
                {inView ? <CountUp end={end} duration={2.5} suffix={suffix} /> : '0' + suffix}
            </h4>
            <p className="text-gray-500 text-xs font-semibold uppercase mt-1">{label}</p>
        </div>
    );
};

export default Counter;
