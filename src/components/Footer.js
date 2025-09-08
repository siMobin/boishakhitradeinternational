"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
    const [isChatPopupOpen, setIsChatPopupOpen] = useState(false);

    const toggleChat = () => {
        setIsChatPopupOpen((prev) => !prev);
    };

    const closeForm = () => {
        setIsChatPopupOpen(false);
    };

    return (
        <footer className="bg-primary text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-14 pb-2">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand + blurb + socials */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <img src="/images/logo.png" alt="" className="h-16" />
                        </div>

                        <p className="text-orange-50 leading-relaxed">Your trusted partner for international education. We&apos;ve been helping students achieve their global education dreams for over a decade.</p>

                        <div className="flex items-center gap-6 text-gray-100">
                            <a href="https://youtube.com/@rtbrvlogs2295?si=cI-bNgJQZQk8KgvA" target="_blank" className="hover:text-white" aria-label="YouTube">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M23.5 6.2a3.1 3.1 0 0 0-2.2-2.2C19.2 3.5 12 3.5 12 3.5s-7.2 0-9.3.5A3.1 3.1 0 0 0 .5 6.2 32 32 0 0 0 0 12a32 32 0 0 0 .5 5.8 3.1 3.1 0 0 0 2.2 2.2c2.1.5 9.3.5 9.3.5s7.2 0 9.3-.5a3.1 3.1 0 0 0 2.2-2.2A32 32 0 0 0 24 12a32 32 0 0 0-.5-5.8zM9.8 15.5v-7l6 3.5-6 3.5z" />
                                </svg>
                            </a>
                            <a href="https://www.facebook.com/share/16Wca9TeeA/?mibextid=wwXIfr" target="_blank" className="hover:text-white" aria-label="Facebook">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.4V12h2.4V9.6c0-2.4 1.4-3.7 3.5-3.7 1 0 2 .2 2 .2v2.3h-1.1c-1.1 0-1.4.7-1.4 1.4V12h2.6l-.4 2.9h-2.2v7A10 10 0 0 0 22 12z" />
                                </svg>
                            </a>
                            <a href="#" className="hover:text-white" aria-label="Scholarships">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 10l-10-5-10 5 10 5 10-5z" />
                                    <path d="M6 12v5c0 .6 3.4 2 6 2s6-1.4 6-2v-5" />
                                </svg>
                            </a>
                            <a href="#" className="hover:text-white" aria-label="Resources">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                                    <path d="M4 4v15.5A2.5 2.5 0 0 1 6.5 22H20V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <nav aria-label="Services" className="space-y-5">
                        <h3 className="text-orange-500 text-2xl font-semibold">Services</h3>
                        <ul className="space-y-3 text--500">
                            <li><Link className="hover:text-orange-500" href="/services">University Selection</Link></li>
                            <li><Link className="hover:text-orange-500" href="/services">Application Support</Link></li>
                            <li><Link className="hover:text-orange-500" href="/services">Visa Assistance</Link></li>
                            <li><Link className="hover:text-orange-500" href="/services">Accommodation</Link></li>
                            <li><Link className="hover:text-orange-500" href="/services">Pre-Departure</Link></li>
                            <li><Link className="hover:text-orange-500" href="/services">Post-Arrival Support</Link></li>
                        </ul>
                    </nav>

                    {/* Bangladesh Office */}
                    <div className="space-y-5">
                        <h3 className="text-orange-500 text-2xl font-semibold">Bangladesh Office</h3>

                        <div className="space-y-3">
                            <div className="flex gap-3">
                                <svg className="w-5 h-5 mt-1 shrink-0 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                    <path d="M12 21s-7-5.5-7-10a7 7 0 1 1 14 0c0 4.5-7 10-7 10z" />
                                    <circle cx="12" cy="11" r="3" />
                                </svg>
                                <address className="not-italic leading-relaxed">
                                    50 DIT EXT. ROAD , ROOM NO #2, EASTERN VIEW BUILDING <br />
                                    ,NAYAPALTAN, Dhaka, Bangladesh
                                </address>
                            </div>

                            <div className="flex gap-3">
                                <svg className="w-5 h-5 mt-1 shrink-0 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.9v2a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6A2 2 0 0 1 4 1.1h2a2 2 0 0 1 2 1.7c.1 1 .3 1.9.6 2.8a2 2 0 0 1-.5 2.1L7 8.8a16 16 0 0 0 6.2 6.2l1.1-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.8.6a2 2 0 0 1 1.7 2z" /></svg>
                                <div className="space-y-1">
                                    <a className="hover:text-white" href="tel:+8801961656769">+880 1789-774070</a><br />
                                    <a className="hover:text-white" href="tel:+8801715740985">+8801715740985</a>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <svg className="w-5 h-5 mt-1 shrink-0 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                    <path d="M4 4h16a2 2 0 0 1 2 2v1l-10 6L2 7V6a2 2 0 0 1 2-2z" />
                                    <path d="M22 8l-10 6L2 8" />
                                    <path d="M2 8v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8" />
                                </svg>
                                <a className="hover:text-white break-all" href="mailto:enquiry@nhglobaleducation">btint.bd135@gmail.com</a>
                            </div>
                        </div>

                        <div>
                            <p className="text-orange-500 font-semibold">Office Hours</p>
                            <p className="text-gray-100">
                                Monday 9:00 AM - 5:00 PM <br />
                                Tuesday 9:00 AM - 5:00 PM <br />
                                Wednesday 9:00 AM - 5:00 PM <br />
                                Thursday 9:00 AM - 5:00 PM <br />
                                Friday <span className="text-red-500 font-semibold"> Closed </span> <br />
                                Saturday 9:00 AM - 5:00 PM <br />
                                Sunday 9:00 AM - 5:00 PM
                            </p>
                        </div>
                    </div>

                    {/* Malaysia Office */}
                    <div className="space-y-5">
                        <h3 className="text-orange-500 text-2xl font-semibold">Malaysia Office</h3>

                        <div className="space-y-3">
                            <div className="flex gap-3">
                                <svg className="w-5 h-5 mt-1 shrink-0 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                    <path d="M12 21s-7-5.5-7-10a7 7 0 1 1 14 0c0 4.5-7 10-7 10z" />
                                    <circle cx="12" cy="11" r="3" />
                                </svg>
                                <address className="not-italic leading-relaxed">Putra Court, 20-1, Jalan Ipoh Kecil, 10B, Chow Kit, Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur 50350, Malaysia</address>
                            </div>

                            <div className="flex gap-3">
                                <svg className="w-5 h-5 mt-1 shrink-0 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.9v2a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6A2 2 0 0 1 4 1.1h2a2 2 0 0 1 2 1.7c.1 1 .3 1.9.6 2.8a2 2 0 0 1-.5 2.1L7 8.8a16 16 0 0 0 6.2 6.2l1.1-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.8.6a2 2 0 0 1 1.7 2z" /></svg>
                                <div className="space-y-1">
                                    {/* <a className="hover:text-white" href="tel:+601161175133">+60 11-6117 5133</a><br /> */}
                                    <a className="hover:text-white" href="tel:+601161785257">+60178658225</a>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <svg className="w-5 h-5 mt-1 shrink-0 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                    <path d="M4 4h16a2 2 0 0 1 2 2v1l-10 6L2 7V6a2 2 0 0 1 2-2z" />
                                    <path d="M22 8l-10 6L2 8" />
                                    <path d="M2 8v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8" />
                                </svg>
                                <a className="hover:text-white break-all" href="mailto:enquiry@nhglobaleducation">btint.bd135@gmail.com</a>
                            </div>
                        </div>

                        <div>
                            <p className="text-orange-500 font-semibold">Office Hours</p>
                            <p className="text-gray-100">Monday 10:00 AM - 6:00 PM</p>
                            <p className="text-gray-100">Tuesday 10:00 AM - 6:00 PM</p>
                            <p className="text-gray-100">Wednesday 10:00 AM - 6:00 PM</p>
                            <p className="text-gray-100">Thursday 10:00 AM - 6:00 PM</p>
                            <p className="text-gray-100">Friday <span className="text-red-500 font-semibold">Closed</span></p>
                            <p className="text-gray-100">Saturday 10:00 AM - 6:00 PM</p>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="mt-12 border-t border-white/20"></div>

                {/* Bottom bar */}
                <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <p className="text-sm">&copy; 2025 <a href="https://github.com/siMobin" className="font-semibold text-white">OkuSoft</a>. All rights reserved.</p>
                    <div className="text-xs space-x-6">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>

            {/* Optional floating chat button */}
            <button id="mainChatBtn" onClick={toggleChat} aria-expanded={isChatPopupOpen} className="chat-btn fixed bottom-6 right-6 bg-orange-600 text-white shadow-md hover:bg-orange-500 focus:outline-none">
                <i id="mainBtnIcon" className={`fas ${isChatPopupOpen ? 'fa-times' : 'fa-comments'}`}></i>
            </button>

            {/* Popup container */}
            {isChatPopupOpen && (
                <div className="chat-popup right-6" id="myForm">
                    <div className="chat-buttons">
                        <button className="chat-btn" style={{ backgroundColor: '#10b981' }} onClick={() => window.open('https://wa.me/8801789774070', '_blank')}>
                            <i className="fas fa-comments text-white"></i>
                        </button>
                        <button className="chat-btn facebook" onClick={() => window.open('https://www.facebook.com/share/16Wca9TeeA/?mibextid=wwXIfr', '_blank')}>
                            <i className="fab fa-facebook-f"></i>
                        </button>
                        <button className="chat-btn youtube" onClick={() => window.open('https://youtube.com/@rtbrvlogs2295?si=cI-bNgJQZQk8KgvA', '_blank')}>
                            <i className="fab fa-youtube"></i>
                        </button>
                    </div>
                </div>
            )}

            <style jsx>{`
        .chat-popup {
          display: ${isChatPopupOpen ? 'block' : 'none'};
          position: fixed;
          bottom: 100px;
          z-index: 9999;
        }
      `}</style>
        </footer>
    );
}
