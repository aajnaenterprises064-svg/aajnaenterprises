import React from 'react';
import Link from 'next/link';

const CTASection = () => {
    return (
        <section className="py-24 bg-[#D2691E] relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Ready to Build With Us?</h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    Contact us today for a custom quote or to discuss your specific requirements. We are ready to deliver excellence.
                </p>
                <Link
                    href="/contact"
                    className="inline-block bg-white text-[#D2691E] px-10 py-4 rounded font-bold hover:bg-[#003366] hover:text-white transition-all duration-300 shadow-lg"
                >
                    REQUEST A QUOTE
                </Link>
            </div>
        </section>
    );
};

export default CTASection;
