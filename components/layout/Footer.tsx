import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#003366] text-gray-300 pt-20 pb-10 relative overflow-hidden">
            {/* Background Texture/Image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
                style={{ backgroundImage: "url('/images/pipe and tube.jpeg')" }}
            ></div>
            <div className="absolute inset-0 bg-[#001f3f]/90 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Column 1: Company Info */}
                    <div>
                        <div className="mb-6 bg-white/10 p-2 rounded w-fit">
                            <img src="/images/logo.png" alt="Aajana enterprises" className="h-16 w-auto object-contain mix-blend-screen" />
                        </div>
                        <p className="mb-6 text-sm leading-relaxed text-gray-400">
                            We are a leading manufacturer and supplier of high-quality metal products, dedicated to excellence and customer satisfaction.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link href="/" className="hover:text-[#D2691E] transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-[#D2691E] transition-colors">About Us</Link></li>
                            <li><Link href="/products" className="hover:text-[#D2691E] transition-colors">Our Products</Link></li>
                            <li><Link href="/contact" className="hover:text-[#D2691E] transition-colors">Contact Us</Link></li>
                            <li><Link href="/privacy-policy" className="hover:text-[#D2691E] transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex gap-3 items-start">
                                <MapPin className="text-[#D2691E] shrink-0 mt-1" size={18} />
                                <span className="text-sm">Shop no. 3, Madhaji Building, 3rd Khetwadi Lane, 260, Sardar Vallabhbhai Patel Rd, Mumbai, Maharashtra 400004</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Phone className="text-[#D2691E] shrink-0" size={18} />
                                <div className="flex flex-col">
                                    <span className="text-sm">+91 98983 65674</span>
                                    <span className="text-sm">+91 95586 28622</span>
                                </div>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Mail className="text-[#D2691E] shrink-0" size={18} />
                                <Link href="mailto:aajnaenterprises064@gmail.com" className="text-sm hover:text-white">aajnaenterprises064@gmail.com</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Newsletter</h4>
                        <p className="mb-4 text-sm">Subscribe to our newsletter for latest updates and offers.</p>
                        <form className="flex flex-col gap-2">
                            <input
                                type="email"
                                placeholder="Your Email Address"
                                className="bg-white/10 border border-white/20 rounded px-4 py-2 text-sm focus:outline-none focus:border-[#D2691E] text-white placeholder-gray-400"
                            />
                            <button
                                type="submit"
                                className="bg-[#D2691E] text-white px-4 py-2 rounded hover:bg-[#b05515] transition-colors text-sm font-semibold"
                            >
                                SUBSCRIBE
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Aajna enterprises. All Rights Reserved.</p>
                    <div className="mt-4 md:mt-0 flex gap-4">
                        <Link href="/terms" className="hover:text-white">Terms & Conditions</Link>
                        <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
