import React from 'react';
import Link from 'next/link';
import Counter from '@/components/ui/Counter';
import ScrollAnimation from '@/components/ui/ScrollAnimation';

const AboutSummary = () => {
    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Image Side */}
                    <div className="w-full md:w-1/2 relative group">
                        <div className="relative rounded-lg overflow-hidden shadow-2xl z-10">
                            <img
                                src="/images/products/pipes and rods.jpeg"
                                alt="Aajana Enterprise Factory"
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#D2691E] z-0 rounded-lg opacity-20 transform rotate-12 group-hover:rotate-6 transition-transform"></div>
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#003366] z-0 rounded-lg opacity-20 transform -rotate-12 group-hover:-rotate-6 transition-transform"></div>
                    </div>

                    {/* Text Side */}
                    <div className="w-full md:w-1/2">
                        <ScrollAnimation animation="slide-in-right">
                            <h3 className="text-[#D2691E] font-bold uppercase tracking-wider mb-2 text-base md:text-lg">Who We Are</h3>
                            <h2 className="text-3xl md:text-5xl font-extrabold text-[#003366] mb-6 leading-tight">
                                Leading Manufacturer of <br /><span className="text-[#D2691E]">Quality Metal Products</span>
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                                Established with a vision to provide world-class metal solutions, Aajna Enterprise has grown into a trusted name in the industry. We specialize in manufacturing and supplying a wide range of stainless steel products, capitalizing on our state-of-the-art infrastructure and skilled workforce.
                            </p>
                            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                                Our commitment to quality is unwavering. We adhere to strict ISO 9001:2015 standards to ensure that every product we deliver meets the highest global benchmarks. Whether you need pipes, tubes, sheets, or custom fittings, we have the expertise to fulfill your requirements.
                            </p>

                            <div className="grid grid-cols-3 gap-4 mb-8">
                                <Counter end={15} suffix="+" label="Years Exp." />
                                <Counter end={500} suffix="+" label="Projects" />
                                <Counter end={100} suffix="%" label="Satisfaction" />
                            </div>

                            <Link
                                href="/about"
                                className="inline-block bg-[#003366] text-white px-8 py-3 rounded font-bold hover:bg-[#D2691E] transition-colors shadow-lg"
                            >
                                KNOW MORE
                            </Link>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSummary;
