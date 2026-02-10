import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { products } from '@/app/data/products';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import WhyChooseUs from '@/components/sections/WhyChooseUs';

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }));
}

export default async function ProductPage({ params }: PageProps) {
    const { slug } = await params;
    const product = products.find((p) => p.slug === slug);

    if (!product) {
        notFound();
    }

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <div className="bg-[#003366] py-16 text-center text-white relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none"
                    style={{ backgroundImage: `url('${product.image}')` }}
                ></div>
                <div className="absolute inset-0 bg-[#001f3f]/80 pointer-events-none"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <Link href="/products" className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors font-medium">
                        <ArrowLeft size={18} className="mr-2" /> Back to Products
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">{product.name}</h1>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {/* Image Section */}
                        <div className="md:h-auto relative">
                            <div className="relative w-full h-[300px] md:h-full min-h-[300px]">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            <h2 className="text-3xl font-bold text-[#003366] mb-6">Product Overview</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                {product.description}
                            </p>

                            {product.features && (
                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold text-[#003366] mb-4">Key Features</h3>
                                    <ul className="space-y-3">
                                        {product.features.map((feature, index) => (
                                            <li key={index} className="flex items-start text-gray-700">
                                                <CheckCircle className="text-[#D2691E] mt-1 mr-3 flex-shrink-0" size={20} />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div className="mt-auto">
                                <Link
                                    href="/contact"
                                    className="inline-block w-full sm:w-auto text-center bg-[#D2691E] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#b55a19] transition-all transform hover:-translate-y-1 shadow-md hover:shadow-lg"
                                >
                                    GET A QUOTE
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <section className="py-16 bg-[#003366] text-white text-center mt-12">
                <div className="container mx-auto px-4">
                    <h3 className="text-3xl font-bold mb-4">Ready to Order?</h3>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Contact our sales team today for pricing and availability. We offer custom manufacturing to meet your exact specifications.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/contact" className="bg-white text-[#003366] px-8 py-3 rounded font-bold hover:bg-gray-100 transition-colors">
                            CONTACT US
                        </Link>
                        <a href="tel:+919876543210" className="border-2 border-white text-white px-8 py-3 rounded font-bold hover:bg-white/10 transition-colors">
                            CALL NOW
                        </a>
                    </div>
                </div>
            </section>

            <WhyChooseUs />
        </div>
    );
}
