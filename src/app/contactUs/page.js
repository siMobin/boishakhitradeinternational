"use client";

import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


const STORAGE_KEY = "sa_contact_last";

export default function ContactUs() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        destination: "",
        message: "",
        consent: false,
    });
    const [errors, setErrors] = useState({});
    const [msgCount, setMsgCount] = useState(0);
    const [isSending, setIsSending] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        // Load saved data from localStorage
        try {
            const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
            if (saved) {
                setFormData(saved);
                setMsgCount(saved.message?.length || 0);
            }
        } catch (error) {
            console.error("Failed to load saved contact data:", error);
        }
    }, []);

    const displayToast = (message) => {
        setToastMessage(message);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 1800);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));

        if (name === "message") {
            setMsgCount(value.length);
        }
        // Clear error for the field being edited
        setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    };

    const validateForm = () => {
        let newErrors = {};
        let isValid = true;

        if (!formData.firstName.trim()) {
            newErrors.firstName = "Please enter your first name";
            isValid = false;
        }
        if (!formData.lastName.trim()) {
            newErrors.lastName = "Please enter your last name";
            isValid = false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
            newErrors.email = "Please enter a valid email";
            isValid = false;
        }
        if (!formData.message.trim()) {
            newErrors.message = "Please enter a message";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }

        setIsSending(true);

        // Save to localStorage
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

        // Simulate API call
        await new Promise((res) => setTimeout(res, 900));

        setIsSending(false);
        displayToast("Thanks! Your message has been sent.");

        // Optional: clear message only
        setFormData((prevData) => ({ ...prevData, message: "", consent: false }));
        setMsgCount(0);
    };

    const handleCopy = async (textToCopy) => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            displayToast("Copied to clipboard");
        } catch {
            displayToast("Copy not available");
        }
    };

    return (
        <div className="bg-white min-h-screen flex flex-col">
            <Header />

            {/* Banner */}
            <div className="bg-gradient text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">Contact Us</h1>
                    <p className="mt-4 text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto">Ready to start your study-abroad journey? Get in touch with our expert counselors today.</p>
                </div>
            </div>

            {/* Content */}
            <main className="flex-1">
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 pb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Form */}
                        <div className="lg:col-span-2 bg-white border border-gray-200 rounded-2xl shadow-xl p-6">
                            <h2 className="text-2xl text-center font-bold text-blue-600">Send Us a Message</h2>

                            <form onSubmit={handleSubmit} className="mt-5 space-y-4" noValidate>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                                        <input id="firstName" name="firstName" type="text" required placeholder="Enter your first name" value={formData.firstName} onChange={handleChange} className="mt-1 w-full h-11 rounded-lg border border-orange-300 px-3 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-500" />
                                        {errors.firstName && <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                                        <input id="lastName" name="lastName" type="text" required placeholder="Enter your last name" value={formData.lastName} onChange={handleChange} className="mt-1 w-full h-11 rounded-lg border border-orange-300 px-3 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-500" />
                                        {errors.lastName && <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>}
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                    <input id="email" name="email" type="email" required placeholder="Enter your email" value={formData.email} onChange={handleChange} className="mt-1 w-full h-11 rounded-lg border border-orange-300 px-3 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-500" />
                                    {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                                    <input id="phone" name="phone" type="tel" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} className="mt-1 w-full h-11 rounded-lg border border-orange-300 px-3 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-500" />
                                </div>

                                <div>
                                    <label htmlFor="destination" className="block text-sm font-medium text-gray-700">Preferred Destination</label>
                                    <input list="destinations" id="destination" name="destination" placeholder="e.g., Malaysia, Australia, Canada" value={formData.destination} onChange={handleChange} className="mt-1 w-full h-11 rounded-lg border border-orange-300 px-3 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-500" />
                                    <datalist id="destinations">
                                        <option>Malaysia</option>
                                        <option>Australia</option>
                                        <option>Canada</option>
                                        <option>Germany</option>
                                        <option>United Kingdom</option>
                                        <option>United States</option>
                                        <option>Netherlands</option>
                                    </datalist>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea id="message" name="message" rows="5" maxLength="800" required placeholder="Tell us about your study abroad goals and any questions you have..." value={formData.message} onChange={handleChange} className="mt-1 w-full rounded-lg border border-orange-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-500"></textarea>
                                    <div className="mt-1 flex items-center justify-between">
                                        {errors.message && <p className="text-xs text-red-600">{errors.message}</p>}
                                        <span className="text-xs text-gray-500 ml-auto"><span id="msgCount">{msgCount}</span>/800</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <input id="consent" name="consent" type="checkbox" checked={formData.consent} onChange={handleChange} className="h-4 w-4 rounded border-orange-300 text-blue-600 focus:ring-blue-500" />
                                    <label htmlFor="consent" className="text-sm text-gray-700">
                                        I agree to the
                                        <a href="#" className="text-blue-600 underline">Privacy Policy</a>
                                    </label>
                                </div>

                                <div className="flex items-center gap-3 pt-1">
                                    <button id="sendBtn" type="submit" disabled={isSending} className="inline-flex items-center justify-center gap-2 px-5 h-11 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 shadow">
                                        {isSending ? (
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                        ) : (
                                            <i className="fa-solid fa-paper-plane fa-rotate-270"></i>
                                        )}
                                        <span>{isSending ? "Sending..." : "Send Message"}</span>
                                    </button>
                                    <a href="https://wa.me/601161175133" target="_blank" className="inline-flex items-center gap-2 px-4 h-11 rounded-lg border border-green-200 text-green-700 hover:bg-green-50">
                                        <i className="fa-brands fa-whatsapp"></i>
                                        WhatsApp
                                    </a>
                                </div>
                            </form>
                        </div>

                        {/* Contact details */}
                        <aside className="space-y-4">
                            {/* Offices */}
                            <div className="rounded-2xl border border-gray-200 bg-white p-5">
                                <div className="flex items-start gap-3">
                                    <i className="fa-solid fa-location-dot text-2xl text-blue-600"></i>
                                    <div>
                                        <p className="font-semibold text-gray-900">Bangladesh Office</p>
                                        <address className="not-italic leading-relaxed">
                                            Darus-Salam Arcade, 6th Floor (5th lift) <br />
                                            14 Purana Paltan, Dhaka 1000, Bangladesh
                                        </address>
                                    </div>
                                </div>
                                <div className="mt-4 flex items-start gap-3">
                                    <i className="fa-solid fa-location-dot text-2xl text-blue-600"></i>
                                    <div>
                                        <p className="font-semibold text-gray-900">Malaysia Office</p>
                                        <address className="not-italic leading-relaxed">Putra Court, 20-1, Jalan Ipoh Kecil, 10B, Chow Kit, Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur 50350, Malaysia</address>
                                    </div>
                                </div>
                            </div>

                            {/* Phones */}
                            <div className="rounded-2xl border border-gray-200 bg-white p-5">
                                <div className="flex items-start gap-3">
                                    <i className="fa-solid fa-phone text-2xl text-blue-600"></i>
                                    <div className="w-full">
                                        <p className="font-semibold text-gray-900">Phone</p>
                                        <ul className="mt-1 text-sm text-gray-700 space-y-1">
                                            <li className="flex items-center justify-between">
                                                <a className="hover:underline" href="tel:+8801961656769">+880 1961-656769 (Bangladesh)</a>
                                                <button type="button" className="text-xs text-blue-600 hover:underline copy" onClick={() => handleCopy("+8801961656769")}>Copy</button>
                                            </li>
                                            <li className="flex items-center justify-between">
                                                <a className="hover:underline" href="tel:+8801618660577">+880 1618-660577</a>
                                                <button type="button" className="text-xs text-blue-600 hover:underline copy" onClick={() => handleCopy("+8801618660577")}>Copy</button>
                                            </li>
                                            <li className="flex items-center justify-between">
                                                <a className="hover:underline" href="tel:+601161175133">+60 11-6117 5133 (Malaysia)</a>
                                                <button type="button" className="text-xs text-blue-600 hover:underline copy" onClick={() => handleCopy("+601161175133")}>Copy</button>
                                            </li>
                                            <li className="flex items-center justify-between">
                                                <a className="hover:underline" href="tel:+601161785257">+60 11-6178 5257</a>
                                                <button type="button" className="text-xs text-blue-600 hover:underline copy" onClick={() => handleCopy("+601161785257")}>Copy</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="rounded-2xl border border-gray-200 bg-white p-5">
                                <div className="flex items-start gap-3">
                                    <i className="fa-solid fa-envelope text-2xl text-blue-600"></i>
                                    <div className="w-full">
                                        <p className="font-semibold text-gray-900">Email</p>
                                        <div className="mt-1 flex items-center justify-between text-sm text-gray-700">
                                            <a className="hover:underline break-all" href="mailto:info.boishakhitradeint@gmail.com">info.boishakhitradeint@gmail.com</a>
                                            <button type="button" className="text-xs text-blue-600 hover:underline copy" onClick={() => handleCopy("info.boishakhitradeint@gmail.com")}>Copy</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </section>
            </main>

            {/* Toast */}
            {showToast && (
                <div className="pointer-events-none fixed inset-x-0 bottom-6 flex justify-center px-4">
                    <div className="pointer-events-auto rounded-lg bg-gray-900 text-white px-4 py-2 shadow-lg text-sm">{toastMessage}</div>
                </div>
            )}

            <Footer />
        </div>
    );
}
