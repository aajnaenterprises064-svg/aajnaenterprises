import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { products } from '@/app/data/products';

interface ProductShowcaseProps {
    limit?: number;
}

const ProductShowcase = ({ limit }: ProductShowcaseProps) => {
    const displayedProducts = limit ? products.slice(0, limit) : products;

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h3 className="text-[#D2691E] font-bold uppercase tracking-wider mb-2 text-base md:text-lg">Our Products</h3>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[#003366] mb-4">Comprehensive Metal Solutions</h2>
                    <div className="w-24 h-1 bg-[#D2691E] mx-auto rounded"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {displayedProducts.map((product) => (
                        <Link
                            key={product.id}
                            href={`/products/${product.slug}`}
                            className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
                        >
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-[#003366]/80 group-hover:opacity-90 transition-opacity duration-300 opacity-0 flex items-center justify-center">
                                    <span className="text-white font-bold text-lg flex items-center gap-2 border-b-2 border-[#D2691E] pb-1">View Details <ArrowRight size={20} /></span>
                                </div>
                            </div>
                            <div className="p-6 text-center border-b-4 border-transparent group-hover:border-[#D2691E] transition-colors flex-grow flex items-center justify-center bg-white relative z-10">
                                <h4 className="font-bold text-[#003366] text-lg group-hover:text-[#D2691E] transition-colors">{product.name}</h4>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <Link
                        href="/products"
                        className="inline-block bg-[#003366] text-white px-10 py-4 rounded shadow-lg font-bold hover:bg-[#D2691E] transition-all transform hover:scale-105"
                    >
                        VIEW FULL CATALOG
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
