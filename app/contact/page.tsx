import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
    return (
        <>
            {/* Page Header */}
            <div className="bg-[#003366] py-20 text-center text-white relative overflow-hidden">
                {/* Background texture helper */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-30 pointer-events-none"
                    style={{ backgroundImage: "url('/images/ss ring.jpeg')" }}
                ></div>
                <div className="absolute inset-0 bg-[#001f3f]/80 pointer-events-none"></div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 animate-fade-in-up">Contact Us</h1>
                <p className="text-lg text-gray-300 relative z-10 animate-slide-up">We are here to assist you</p>
            </div>

            <section className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-3xl font-bold text-[#003366] mb-8">Get In Touch</h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Have a query or need a quote? Reach out to us via phone, email, or visit our office. Our team is ready to provide you with the best solutions for your metal product needs.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#D2691E]/10 rounded-full flex items-center justify-center text-[#D2691E] shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="font-bold text-[#003366] text-lg">Main Office (Head Office)</h4>
                                            <p className="text-gray-600">Shop no. 3, Madhaji Building, 3rd Khetwadi Lane, 260, Sardar Vallabhbhai Patel Rd, Mumbai, Maharashtra 400004</p>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#003366] text-lg">Branch Office</h4>
                                            <p className="text-gray-600">PLOT NO. 701 B DUKAN - 2, GIDC UMBERGAON, UMBERGAON, UMBERGAON, Valsad, Gujarat, 396170</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#D2691E]/10 rounded-full flex items-center justify-center text-[#D2691E] shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#003366] text-lg">Phone Numbers</h4>
                                        <p className="text-gray-600">+91 98983 65674</p>
                                        <p className="text-gray-600">+91 96494 23692</p>
                                        <p className="text-gray-600">+91 95586 28622</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#D2691E]/10 rounded-full flex items-center justify-center text-[#D2691E] shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#003366] text-lg">Email Address</h4>
                                        <p className="text-gray-600">
                                            <a href="mailto:aajnaenterprises064@gmail.com" className="hover:text-[#D2691E] transition-colors">aajnaenterprises064@gmail.com</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#D2691E]/10 rounded-full flex items-center justify-center text-[#D2691E] shrink-0">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#003366] text-lg">Working Hours</h4>
                                        <p className="text-gray-600">Mon - Sat: 9:00 AM - 6:00 PM</p>
                                        <p className="text-gray-600">Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold text-[#003366] mb-6">Send a Message</h3>
                            <form className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                                        <input type="text" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#D2691E]" placeholder="John Doe" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                                        <input type="tel" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#D2691E]" placeholder="+91 9876543210" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                                    <input type="email" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#D2691E]" placeholder="john@example.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Subject</label>
                                    <input type="text" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#D2691E]" placeholder="Inquiry about Pipes" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                                    <textarea rows={5} className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#D2691E]" placeholder="Your message here..."></textarea>
                                </div>
                                <button type="submit" className="w-full bg-[#D2691E] text-white font-bold py-3 rounded hover:bg-[#b05515] transition-colors shadow-md">
                                    SEND MESSAGE
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Maps */}
            <div className="container mx-auto px-4 mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-[#003366]">Head Office - Mumbai</h3>
                        <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden shadow-md">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.4007107594566!2d72.82033849999999!3d18.9579026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce11690ad9f9%3A0xf227ae739458db8e!2sMETAL%20TECH%20ENGINEERS!5e0!3m2!1sen!2sin!4v1770725924357!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-[#003366]">Branch Office - Umbergaon</h3>
                        <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden shadow-md">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.9933760094764!2d72.7749003!3d20.1760013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be72ba6cc71dacf%3A0x4f3a48ac1b4ebea9!2sBlue%20Dart%20Express%20Limited!5e0!3m2!1sen!2sin!4v1770725972179!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
