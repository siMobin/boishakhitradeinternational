"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-white shadow-md sticky top-0 z-50 max-w-[100vw]">
            {/* Top bar */}
            <div className="bg-primary text-white py-2 px-8 text-xs">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <p><i className="fa-solid fa-phone mr-1"></i> +8801789774070&nbsp;&nbsp;&nbsp;&nbsp;+60178658225</p>
                        <p className="hidden md:block">
                            <i className="fa-solid fa-envelope mr-1"></i>
                            <a href="mailto:info@boishakhitradeint.com" className="hover:text-gray-300">
                                info@boishakhitradeint.com
                            </a>
                        </p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <a href="https://www.tiktok.com/@boishakhi.trade.i?_t=ZS-8zaFmOJuk9o&_r=1" target="_blank" className="hover:text-gray-300"><i className="fa-brands fa-tiktok"></i></a>
                        <a href="https://www.facebook.com/share/16Wca9TeeA/?mibextid=wwXIfr" target="_blank" className="hover:text-gray-300"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://youtube.com/@rtbrvlogs2295?si=cI-bNgJQZQk8KgvA" target="_blank" className="hover:text-gray-300"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>

            {/* Main navigation */}
            <nav className="container mx-auto px-4 py-2">
                <div className="flex justify-between items-center lg:mx-24">
                    <div>
                        <Link href="/" className="flex items-center gap-2">
                            <img src="/images/icon.webp" alt="" className="h-8 lg:h-12" loading="lazy" />
                            <img src="/images/logo-xl.webp" alt="" className="h-8 lg:h-12 [clip-path:inset(2px)]" loading="lazy" />
                        </Link>
                    </div>
                    <div className="hidden lg:flex space-x-6 items-center font-medium">
                        <Link href="/universities" className="text-gray-700 hover:text-orange-500">Universities</Link>
                        <Link href="/services" className="text-gray-700 hover:text-orange-500">Services</Link>
                        <Link href="/#reviews" className="text-gray-700 hover:text-orange-500">Success Stories</Link>
                        <Link href="/student-essentials" className="text-gray-700 hover:text-orange-500">Student Essentials</Link>
                        <Link href="/aboutus" className="text-gray-700 hover:text-orange-500">About Us</Link>
                        <Link href="/team" className="text-gray-700 hover:text-orange-500">Our Team</Link>
                        <Link href="/applicationTrack" className="text-gray-700 hover:text-orange-500">Track Application</Link>
                    </div>
                    <div className=''>
                        <Link href="/contactUs" className="bg-[linear-gradient(90deg,_#002147_0%,_#003A7D_30%)] hover:bg-[linear-gradient(90deg,_#002147_0%,_#003A7D_100%)] text-white px-2 lg:px-4 py-2 rounded-lg text-sm lg:font-semibold hover:bg-blue-800">Contact Us</Link>
                    </div>
                    <div className="lg:hidden">
                        <button id="menu-btn" className="text-gray-700 focus:outline-none" onClick={toggleMobileMenu}>
                            <i className="fas fa-bars fa-lg"></i>
                        </button>
                    </div>
                </div>
            </nav>
            {/* Mobile Menu */}
            <div id="mobile-menu" className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:hidden`}>
                <Link href="/" className="block py-2 px-4 text-sm hover:bg-gray-100">Home</Link>
                <Link href="/universities" className="block py-2 px-4 text-sm hover:bg-gray-100">Universities</Link>
                <Link href="/services" className="block py-2 px-4 text-sm hover:bg-gray-100">Services</Link>
                <Link href="/#reviews" className="block py-2 px-4 text-sm hover:bg-gray-100">Success Stories</Link>
                <Link href="/student-essentials" className="block py-2 px-4 text-sm hover:bg-gray-100">Student Essentials</Link>
                <Link href="/aboutus" className="block py-2 px-4 text-sm hover:bg-gray-100">About Us</Link>
                <Link href="/team" className="block py-2 px-4 text-sm hover:bg-gray-100">Our Team</Link>
                <Link href="/contactUs" className="block py-2 px-4 text-sm hover:bg-gray-100">Contact Us</Link>
                <Link href="/applicationTrack" className="block py-2 px-4 text-sm hover:bg-gray-100">Track Application</Link>
            </div>
        </header>
    );
}
