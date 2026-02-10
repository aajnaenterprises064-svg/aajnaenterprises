import React from 'react';
import { Award, ShieldCheck, ThumbsUp, Users } from 'lucide-react';

const QualityAssurance = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <div className="w-full lg:w-1/2">
                        <h3 className="text-[#D2691E] font-bold uppercase tracking-wider mb-2 text-base md:text-lg">Our Commitment</h3>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#003366] mb-6">ISO 9001:2015 Certified Quality</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                            Quality is at the heart of everything we do. At Aajana Enterprise, we follow stringent quality control measures to ensure that every product meets international standards.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex items-start gap-3">
                                <Award className="text-[#D2691E] shrink-0" size={32} />
                                <div>
                                    <h4 className="font-bold mb-1">Certified Quality</h4>
                                    <p className="text-sm text-gray-400">International standards compliant</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <ShieldCheck className="text-[#D2691E] shrink-0" size={32} />
                                <div>
                                    <h4 className="font-bold mb-1">Durability</h4>
                                    <p className="text-sm text-gray-400">Long-lasting materials</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <ThumbsUp className="text-[#D2691E] shrink-0" size={32} />
                                <div>
                                    <h4 className="font-bold mb-1">Reliability</h4>
                                    <p className="text-sm text-gray-400">Trusted by 500+ clients</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Users className="text-[#D2691E] shrink-0" size={32} />
                                <div>
                                    <h4 className="font-bold mb-1">Expert Team</h4>
                                    <p className="text-sm text-gray-400">Skilled workforce</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <img
                            src="/images/WhatsApp Image 2025-12-06 at 21.36.38 (1).jpeg"
                            alt="Quality Testing"
                            className="rounded-lg shadow-2xl border-4 border-[#D2691E]/20"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QualityAssurance;
