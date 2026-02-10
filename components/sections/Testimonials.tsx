'use client';

import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    {
        text: "Aajna Enterprise has been our go-to supplier for SS pipes for over 5 years. Their quality and consistency are unmatched in the market.",
        author: "Rajesh Kumar",
        role: "Project Manager, BuildTech India",
        image: null // Placeholder
    },
    {
        text: "We ordered custom fittings for a critical refinery project. The precision and timely delivery were impressive. Highly recommended!",
        author: "Amit Patel",
        role: "Procurement Head, Petrochem Solutions",
        image: null
    },
    {
        text: "Excellent service and competitive pricing. The team at Aajna is very professional and understands industrial requirements perfectly.",
        author: "Suresh Reddy",
        role: "Director, Reddy Infrastructure",
        image: null
    }
];

const Testimonials = () => {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((curr) => (curr + 1) % testimonials.length);
    const prev = () => setCurrent((curr) => (curr - 1 + testimonials.length) % testimonials.length);

    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-20 bg-white text-[#003366] overflow-hidden relative">
            {/* Decorative */}
            <div className="absolute top-0 left-0 text-[#003366]/5 transform -translate-x-1/4 -translate-y-1/4 z-0">
                <Quote size={400} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h3 className="text-[#D2691E] font-bold uppercase tracking-wider mb-2 text-base md:text-lg">Testimonials</h3>
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-4">What Our Clients Say</h2>
                    <div className="w-24 h-1 bg-[#D2691E] mx-auto rounded"></div>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Slider Content */}
                    <div className="overflow-hidden min-h-[300px] flex items-center justify-center">
                        {testimonials.map((item, index) => (
                            <div
                                key={index}
                                className={`transition-all duration-700 absolute w-full text-center px-4 md:px-12 ${index === current ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-full scale-95 pointer-events-none'}`}
                                style={{ transform: `translateX(${(index - current) * 100}%)` }}
                            >
                                <Quote size={48} className="text-[#D2691E] mx-auto mb-8 opacity-80" />
                                <p className="text-xl md:text-2xl font-light italic mb-8 leading-relaxed text-gray-700">"{item.text}"</p>
                                <div>
                                    <h4 className="text-lg font-bold text-[#003366]">{item.author}</h4>
                                    <p className="text-[#D2691E] text-sm">{item.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Controls */}
                    <button
                        onClick={prev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-100 p-2 rounded-full hover:bg-[#D2691E] hover:text-white text-[#003366] transition-colors shadow-md"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-100 p-2 rounded-full hover:bg-[#D2691E] hover:text-white text-[#003366] transition-colors shadow-md"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrent(idx)}
                                className={`w-3 h-3 rounded-full transition-all ${idx === current ? 'bg-[#D2691E] w-8' : 'bg-gray-300'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
