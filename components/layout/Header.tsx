'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, Menu, X, ChevronDown } from 'lucide-react';
import { products } from '@/app/data/products';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
    const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

    return (
        <header className="w-full">
            {/* Top Bar */}
            <div className="bg-[#003366] text-white py-2 text-sm relative z-50">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center relative">
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        <div className="flex items-center gap-2">
                            <Phone size={16} className="text-[#D2691E]" />
                            <span>+91 95586 28622</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail size={16} className="text-[#D2691E]" />
                            <span>aajnaenterprises064@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="bg-white shadow-md sticky top-0 z-40">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center py-0 h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center h-full py-1">
                            <img src="/images/logo.png" alt="Aajana enterprises" className="h-full w-auto object-contain rounded-lg" />
                            <span className="sr-only">AAJNA enterprises</span>
                        </Link>

                        {/* Desktop Menu */}
                        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700 h-full">
                            <Link href="/" className="hover:text-[#D2691E] transition-colors relative group h-full flex items-center px-1">
                                <span className="relative z-10 font-semibold">HOME</span>
                                <span className="absolute bottom-4 left-0 w-full h-0.5 bg-[#D2691E] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                            </Link>
                            <Link href="/about" className="hover:text-[#D2691E] transition-colors relative group h-full flex items-center px-1">
                                <span className="relative z-10 font-semibold">ABOUT</span>
                                <span className="absolute bottom-4 left-0 w-full h-0.5 bg-[#D2691E] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                            </Link>

                            <div className="relative group h-full flex items-center">
                                <button
                                    className="flex items-center gap-1 hover:text-[#D2691E] transition-colors h-full px-1 font-semibold"
                                    onMouseEnter={() => setIsProductDropdownOpen(true)}
                                    onMouseLeave={() => setIsProductDropdownOpen(false)}
                                >
                                    PRODUCTS <ChevronDown size={16} />
                                    <span className="absolute bottom-4 left-0 w-full h-0.5 bg-[#D2691E] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                                </button>
                                {/* Dropdown Menu */}
                                <div
                                    className={`absolute top-full left-0 w-60 bg-white shadow-xl border-t-4 border-[#D2691E] py-2 transition-all duration-200 transform origin-top ${isProductDropdownOpen ? 'opacity-100 visible scale-y-100' : 'opacity-0 invisible scale-y-95'}`}
                                    onMouseEnter={() => setIsProductDropdownOpen(true)}
                                    onMouseLeave={() => setIsProductDropdownOpen(false)}
                                >
                                    {products.map((product) => (
                                        <Link
                                            key={product.id}
                                            href={`/products/${product.slug}`}
                                            className="block px-4 py-3 hover:bg-gray-50 hover:text-[#D2691E] text-sm border-l-4 border-transparent hover:border-[#D2691E] transition-all font-medium"
                                        >
                                            {product.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <Link href="/contact" className="hover:text-[#D2691E] transition-colors relative group h-full flex items-center px-1">
                                <span className="relative z-10 font-semibold">CONTACT</span>
                                <span className="absolute bottom-4 left-0 w-full h-0.5 bg-[#D2691E] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                            </Link>
                        </nav>

                        {/* CTA Button */}
                        <div className="hidden md:block">
                            <Link
                                href="/contact"
                                className="bg-[#D2691E] text-white px-6 py-2.5 rounded hover:bg-[#b05515] transition-colors font-semibold shadow-sm"
                            >
                                GET A QUOTE
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-[#003366]"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-100 py-4 absolute w-full shadow-lg">
                        <div className="container mx-auto px-4 flex flex-col gap-4">
                            <Link
                                href="/"
                                className="text-gray-700 hover:text-[#D2691E] font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="/about"
                                className="text-gray-700 hover:text-[#D2691E] font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </Link>
                            <div className="flex flex-col gap-2">
                                <button
                                    className="text-gray-700 font-medium flex items-center justify-between w-full"
                                    onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                                >
                                    Products <ChevronDown size={18} className={`transition-transform duration-200 ${isMobileProductsOpen ? 'rotate-180' : ''}`} />
                                </button>
                                {isMobileProductsOpen && (
                                    <div className="pl-4 flex flex-col gap-2 border-l-2 border-gray-100 animate-slide-down">
                                        {products.map((product) => (
                                            <Link
                                                key={product.id}
                                                href={`/products/${product.slug}`}
                                                className="text-sm text-gray-600 hover:text-[#D2691E]"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {product.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <Link
                                href="/contact"
                                className="text-gray-700 hover:text-[#D2691E] font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </Link>
                            <Link
                                href="/contact"
                                className="bg-[#D2691E] text-white px-6 py-2.5 rounded text-center font-semibold"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                GET A QUOTE
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
