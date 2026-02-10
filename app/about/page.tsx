import React from 'react';
import Link from 'next/link';
import QualityAssurance from '@/components/sections/QualityAssurance';

export default function AboutPage() {
    return (
        <>
            {/* Page Header */}
            <div className="bg-[#003366] py-20 text-center text-white relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-30 pointer-events-none"
                    style={{ backgroundImage: "url('/images/products/pipes and rods.jpeg')" }}
                ></div>
                <div className="absolute inset-0 bg-[#001f3f]/80 pointer-events-none"></div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 animate-fade-in-up">About Us</h1>
                <p className="text-lg text-gray-300 relative z-10 animate-slide-up">Our Story, Vision, and Values</p>
            </div>

            {/* Main Content */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        <div className="w-full md:w-1/2">
                            <div className="relative rounded-lg overflow-hidden shadow-2xl group">
                                <img
                                    src="/images/products/pipe and tube.jpeg"
                                    alt="About Aajna Enterprise"
                                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-[#D2691E]/10 group-hover:bg-transparent transition-colors"></div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <img src="/images/plate.jpeg" className="rounded-lg shadow-md w-full h-40 object-cover" alt="Facility 1" />
                                <img src="/images/sheet plate.jpeg" className="rounded-lg shadow-md w-full h-40 object-cover" alt="Facility 2" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <h3 className="text-[#D2691E] font-bold uppercase tracking-wider mb-2 text-sm">Our Journey</h3>
                            <h2 className="text-3xl font-bold text-[#003366] mb-6">A Legacy of Excellence in Metal Manufacturing</h2>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Aajana Enterprise was founded with a clear mission: to deliver high-quality metal products that empower industries. Over the years, we have established ourselves as a premier manufacturer and supplier of stainless steel pipes, tubes, sheets, plates, and fittings.
                            </p>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Our growth has been driven by our commitment to customer satisfaction, innovation, and strict adherence to quality standards. We serve a diverse range of industries including Oil & Gas, Petrochemicals, Pharmaceuticals, Construction, and more.
                            </p>

                            <h3 className="text-[#003366] font-bold text-xl mb-4">Why Choose Us?</h3>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-[#D2691E] rounded-full"></span>
                                    <span className="text-gray-700">ISO 9001:2015 Certified Organization</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-[#D2691E] rounded-full"></span>
                                    <span className="text-gray-700">State-of-the-art manufacturing facilities</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-[#D2691E] rounded-full"></span>
                                    <span className="text-gray-700">Wide range of product inventory</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-[#D2691E] rounded-full"></span>
                                    <span className="text-gray-700">Timely delivery and competitive pricing</span>
                                </li>
                            </ul>

                            <Link
                                href="/contact"
                                className="bg-[#D2691E] text-white px-8 py-3 rounded font-bold hover:bg-[#b05515] transition-colors shadow-md inline-block"
                            >
                                CONTACT US
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quality Section Reuse */}
            <QualityAssurance />
        </>
    );
}
