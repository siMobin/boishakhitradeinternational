"use client";

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


export default function Services() {
    const [activeTab, setActiveTab] = useState("consultation");

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    const servicesData = [
        {
            id: "consultation",
            title: "Free Educational Consultation",
            image: "https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg",
            description: "Our team provides expert advice without any consultation fees to help you choose the best course and university based on your academic background, interests, and future aspirations. We work closely with you to identify programs that align with your career goals, offering tailored solutions.",
        },
        {
            id: "opportunities",
            title: "Global Study Opportunities",
            image: "https://images.pexels.com/photos/7944130/pexels-photo-7944130.jpeg",
            description: "We provide opportunities for students to study in various countries, including Malaysia, China, Russia, and European countries, helping them gain international exposure and a world-class education.",
        },
        {
            id: "visa",
            title: "Visa Assistance",
            image: "https://images.pexels.com/photos/7235892/pexels-photo-7235892.jpeg",
            description: "We guide students through the entire visa application process, ensuring all documents are correctly prepared and submitted on time to maximize the chances of a successful outcome.",
        },
        {
            id: "ticketing",
            title: "Air Ticketing Service",
            image: "https://images.pexels.com/photos/5147224/pexels-photo-5147224.jpeg",
            description: "We assist students in booking affordable and convenient flights to their study destination, making the travel process smooth and hassle-free.",
        },
        {
            id: "accommodation",
            title: "Accommodation & Travel Coordination",
            image: "https://images.pexels.com/photos/8300820/pexels-photo-8300820.jpeg",
            description: "We help students find suitable accommodation near their university and coordinate their travel arrangements to ensure a comfortable and safe journey.",
        },
        {
            id: "scholarship",
            title: "Scholarship & Financial Aid Guidance",
            image: "https://images.pexels.com/photos/8441811/pexels-photo-8441811.jpeg",
            description: "We provide information and guidance on various scholarship and financial aid options available to international students, helping them to manage their educational expenses.",
        },
        {
            id: "pickup",
            title: "Airport Pickup & Welcome Service",
            image: "https://images.unsplash.com/photo-1721714119484-356780185ff9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "We arrange for students to be picked up from the airport upon arrival and provide a warm welcome to help them settle into their new environment.",
        },
    ];

    return (
        <div className="bg-white">
            <Header />

            <main className="bg-gray-50 py-16">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl font-bold text-center text-gray-800 mb-12 w-full">Our Services</h1>
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="w-full md:w-1/3">
                            <ul className="space-y-2">
                                {servicesData.map((service) => (
                                    <li
                                        key={service.id}
                                        className={`tab-item p-4 rounded-lg cursor-pointer ${activeTab === service.id ? "bg-primary text-white" : "hover:bg-primary/10"}`}
                                        onClick={() => handleTabClick(service.id)}
                                    >
                                        {service.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full md:w-2/3">
                            {servicesData.map((service) => (
                                <div key={service.id} id={service.id} className={`tab-content ${activeTab === service.id ? "" : "hidden"}`}>
                                    <img src={service.image} loading="lazy" alt={service.title} className="rounded-lg mb-4 shadow h-[40vh] md:h-[60vh] w-full object-cover" />
                                    <h2 className="text-2xl font-semibold text-gray-700 mb-2">{service.title}</h2>
                                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
