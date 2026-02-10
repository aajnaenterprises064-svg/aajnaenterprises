'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const slides = [
    {
        image: '/images/products/pipe and tube.jpeg',
        title: 'ISO 9001:2015 Certified',
        subtitle: 'Quality You Can Trust',
        description: 'We are a premier manufacturer and supplier of stainless steel pipes, tubes, sheets, plates, and fittings. Delivering excellence in every product.',
    },
    {
        image: '/images/products/SS seamless and erw pipe.jpeg',
        title: 'Premium SS Seamless Pipes',
        subtitle: 'Engineered for Durability',
        description: 'Our seamless pipes are designed to withstand high pressure and extreme conditions, ensuring reliability for your critical projects.',
    },
    {
        image: '/images/products/sheet plate.jpeg',
        title: 'Wide Range of Sheets & Plates',
        subtitle: 'Versatile Solutions',
        description: 'From decorative sheets to industrial plates, we offer a comprehensive range of stainless steel flat products.',
    },
    {
        image: '/images/products/pipes and rods.jpeg',
        title: 'Global Supply Network',
        subtitle: 'Reliable Distribution',
        description: 'Ensuring consistent supply chain and timely delivery of high-grade metal solutions across the globe.',
    }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section className="relative h-[700px] w-full bg-gray-900 text-white overflow-hidden group">
            {/* Background Slides */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                >
                    {/* Image container with scale animation */}
                    <div
                        className={`absolute inset-0 bg-cover bg-center transition-transform duration-[5000ms] ease-linear ${index === currentSlide ? 'scale-110' : 'scale-100'}`}
                        style={{ backgroundImage: `url('${slide.image}')` }}
                    >
                        <div className="absolute inset-0 bg-black/50"></div>
                    </div>
                </div>
            ))}

            {/* Content */}
            <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-start pt-10">
                {slides.map((slide, index) => (
                    index === currentSlide && (
                        <div key={index} className="animate-fade-in-up">
                            <h2 className="text-[#D2691E] font-bold tracking-wider mb-3 text-lg md:text-xl uppercase animate-slide-down">
                                {slide.title}
                            </h2>
                            <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight max-w-4xl shadow-sm drop-shadow-lg">
                                <span className="text-white block">{slide.subtitle}</span>
                            </h1>
                            <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-2xl leading-relaxed drop-shadow-md">
                                {slide.description}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/products"
                                    className="bg-[#D2691E] border-2 border-[#D2691E] text-white px-10 py-4 rounded font-bold hover:bg-transparent hover:text-[#D2691E] transition-all duration-300 text-center shadow-lg hover:shadow-xl uppercase tracking-wide"
                                >
                                    Explore Products
                                </Link>
                                <Link
                                    href="/contact"
                                    className="border-2 border-white text-white px-10 py-4 rounded font-bold hover:bg-white hover:text-[#003366] transition-all duration-300 text-center uppercase tracking-wide"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    )
                ))}
            </div>

            {/* Navigation Controls */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 p-3 rounded-full hover:bg-[#D2691E] text-white transition-all opacity-0 group-hover:opacity-100"
            >
                <ChevronLeft size={32} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 p-3 rounded-full hover:bg-[#D2691E] text-white transition-all opacity-0 group-hover:opacity-100"
            >
                <ChevronRight size={32} />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-[#D2691E] w-8' : 'bg-white/50 hover:bg-white'}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
