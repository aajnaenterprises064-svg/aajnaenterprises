import React from 'react';
import ProductShowcase from '@/components/sections/ProductShowcase';
import Link from 'next/link';

export default function ProductsPage() {
    return (
        <>
            <div className="bg-[#003366] py-20 text-center text-white relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-30 pointer-events-none"
                    style={{ backgroundImage: "url('/images/sheet plate.jpeg')" }}
                ></div>
                <div className="absolute inset-0 bg-[#001f3f]/80 pointer-events-none"></div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 animate-fade-in-up">Our Products</h1>
                <p className="text-lg text-gray-300 relative z-10 animate-slide-up">Explore our wide range of high-quality metal solutions</p>
            </div>

            <ProductShowcase />

            <section className="py-16 bg-white text-center">
                <div className="container mx-auto px-4">
                    <h3 className="text-2xl font-bold text-[#003366] mb-4">Don't see what you're looking for?</h3>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        We also specialize in custom manufacturing tailored to your specific requirements. Contact our engineering team for custom orders.
                    </p>
                    <Link href="/contact" className="inline-block border-2 border-[#D2691E] text-[#D2691E] px-8 py-3 rounded font-bold hover:bg-[#D2691E] hover:text-white transition-colors">
                        REQUEST CUSTOM QUOTE
                    </Link>
                </div>
            </section>
        </>
    );
}
