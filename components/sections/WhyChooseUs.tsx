import React from 'react';
import { ShieldCheck, TrendingUp, Users, Clock, Award, PenTool } from 'lucide-react';

const reasons = [
    {
        icon: <ShieldCheck size={40} />,
        title: 'Quality Assurance',
        description: 'We adhere to strict ISO 9001:2015 standards, ensuring premium quality in every product.'
    },
    {
        icon: <Users size={40} />,
        title: 'Expert Team',
        description: 'Our skilled workforce and experienced engineers deliver excellence in manufacturing.'
    },
    {
        icon: <Clock size={40} />,
        title: 'Timely Delivery',
        description: 'We understand the value of time and ensure your orders are delivered on schedule.'
    },
    {
        icon: <TrendingUp size={40} />,
        title: 'Competitive Pricing',
        description: 'Get the best market rates without compromising on product quality.'
    },
    {
        icon: <Award size={40} />,
        title: 'Certified Products',
        description: 'All our products undergo rigorous testing and are certified for industrial use.'
    },
    {
        icon: <PenTool size={40} />,
        title: 'Custom Solutions',
        description: 'We provide tailored manufacturing solutions to meet your specific project needs.'
    }
];

const WhyChooseUs = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h3 className="text-[#D2691E] font-bold uppercase tracking-wider mb-2 text-base md:text-lg">Why Choose Us</h3>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[#003366] mb-4">The Aajna Advantage</h2>
                    <div className="w-24 h-1 bg-[#D2691E] mx-auto rounded"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="group p-8 border-2 border-gray-100 rounded-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gray-50 hover:bg-white hover:border-[#D2691E]"
                        >
                            <div className="mb-6 text-[#003366] group-hover:text-[#D2691E] transition-colors bg-white group-hover:bg-[#003366]/5 w-20 h-20 flex items-center justify-center rounded-full shadow-sm group-hover:shadow-none mx-auto lg:mx-0">
                                {reason.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#003366] mb-3 text-center lg:text-left">{reason.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-center lg:text-left">
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
