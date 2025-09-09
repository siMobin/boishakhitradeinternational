"use client";

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Universities() {
    const [universitiesData, setUniversitiesData] = useState([]);
    const [query, setQuery] = useState("");
    const [country, setCountry] = useState("all");
    const [filteredUniversities, setFilteredUniversities] = useState([]);

    useEffect(() => {
        fetch('/data/universities-list.json')
            .then((response) => response.json())
            .then((data) => {
                setUniversitiesData(data);
                setFilteredUniversities(data);
            });
    }, []);

    useEffect(() => {
        filterUniversities();
    }, [query, country, universitiesData]);

    const filterUniversities = () => {
        let tempUniversities = universitiesData;

        if (country !== "all") {
            tempUniversities = tempUniversities.filter((uni) => uni.country === country);
        }

        if (query) {
            tempUniversities = tempUniversities.filter(
                (uni) =>
                    uni.name.toLowerCase().includes(query.toLowerCase()) ||
                    uni.location.toLowerCase().includes(query.toLowerCase()) ||
                    uni.disciplines.some((disc) => disc.toLowerCase().includes(query.toLowerCase()))
            );
        }

        setFilteredUniversities(tempUniversities);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        filterUniversities();
    };

    return (
        <div className="bg-white min-h-screen flex flex-col">
            <Header />

            {/* Banner */}
            <div className="bg-gradient text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">World-Top Universities</h1>
                    <p className="mt-4 text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto">Discover top-ranked universities worldwide and find your perfect academic destination.</p>
                </div>
            </div>

            {/* Search Bar */}
            <section className="w-full">
                <div className="max-w-5xl w-full lg:w-[50%] mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
                    <form onSubmit={handleSearchSubmit} className="bg-white rounded-xl shadow-lg p-3 sm:p-4 flex flex-col md:flex-row gap-3 items-stretch">
                        {/* Search input */}
                        <div className="relative flex-1">
                            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="11" cy="11" r="7"></circle>
                                <path d="M21 21l-4.3-4.3"></path>
                            </svg>
                            <input
                                id="query"
                                type="text"
                                placeholder="Search universities..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="w-full h-12 pl-10 pr-4 rounded-lg border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-500"
                            />
                        </div>

                        {/* Country filter */}
                        <select
                            id="country"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            className="h-12 w-full md:w-48 rounded-lg border border-orange-300 px-3 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-500 bg-white"
                        >
                            <option value="all">All Countries</option>
                            <option value="Malaysia">Malaysia</option>
                            <option value="Germany">Germany</option>
                            <option value="United States">United States</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="Canada">Canada</option>
                            <option value="Netherlands">Netherlands</option>
                        </select>

                        {/* Submit */}
                        <button type="submit" className="button primary">Search</button>
                    </form>
                </div>
            </section>

            {/* Cards */}
            <main className="flex-1">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <div id="cardsGrid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:mx-24">
                        {filteredUniversities.length > 0 ? (
                            filteredUniversities.map((uni, index) => (
                                <article key={index} className="uni-card rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-lg transition">
                                    <div className="h-44 w-full overflow-hidden">
                                        <img className="w-full h-full object-cover" loading="lazy" src={uni.image} alt={`${uni.name} campus`} />
                                    </div>
                                    <div className="p-5">
                                        <h3 className="text-lg font-semibold text-gray-900">{uni.name}</h3>
                                        <p className="mt-1 text-sm text-gray-600 flex items-center gap-2">
                                            <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M12 21s-7-5.5-7-10a7 7 0 1 1 14 0c0 4.5-7 10-7 10z" />
                                                <circle cx="12" cy="11" r="3" />
                                            </svg>
                                            {uni.location}
                                        </p>
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {uni.disciplines.map((discipline, discIndex) => (
                                                <span key={discIndex} className={`px-2.5 py-1 rounded-full text-xs font-medium ${discipline === "Business" ? "bg-blue-50 text-blue-700" :
                                                    discipline === "Engineering" ? "bg-green-50 text-green-700" :
                                                        discipline === "Economics" ? "bg-orange-50 text-orange-700" :
                                                            discipline === "Public Health" ? "bg-cyan-50 text-cyan-700" :
                                                                discipline === "Computer Science" ? "bg-purple-50 text-purple-700" :
                                                                    discipline === "Mechanical Eng" ? "bg-amber-50 text-amber-700" :
                                                                        discipline === "AI" ? "bg-blue-50 text-blue-700" :
                                                                            discipline === "Biotech" ? "bg-pink-50 text-pink-700" :
                                                                                discipline === "Humanities" ? "bg-emerald-50 text-emerald-700" :
                                                                                    discipline === "Law" ? "bg-indigo-50 text-indigo-700" :
                                                                                        discipline === "Medicine" ? "bg-rose-50 text-rose-700" :
                                                                                            discipline === "Data Science" ? "bg-sky-50 text-sky-700" :
                                                                                                discipline === "Aerospace" ? "bg-lime-50 text-lime-700" :
                                                                                                    discipline === "Architecture" ? "bg-fuchsia-50 text-fuchsia-700" :
                                                                                                        discipline === "Technology" ? "bg-blue-50 text-blue-700" :
                                                                                                            discipline === "Accounting" ? "bg-orange-50 text-orange-700" :
                                                                                                                discipline === "Medical" ? "bg-purple-50 text-purple-700" :
                                                                                                                    discipline === "Health Sciences" ? "bg-rose-50 text-rose-700" :
                                                                                                                        discipline === "Design" ? "bg-amber-50 text-amber-700" :
                                                                                                                            discipline === "IT" ? "bg-sky-50 text-sky-700" :
                                                                                                                                discipline === "Dentistry" ? "bg-emerald-50 text-emerald-700" :
                                                                                                                                    discipline === "Innovation" ? "bg-blue-50 text-blue-700" :
                                                                                                                                        discipline === "Online Learning" ? "bg-blue-50 text-blue-700" :
                                                                                                                                            discipline === "Postgraduate" ? "bg-green-50 text-green-700" :
                                                                                                                                                discipline === "Professional" ? "bg-blue-50 text-blue-700" :
                                                                                                                                                    discipline === "Continuing Education" ? "bg-orange-50 text-orange-700" :
                                                                                                                                                        discipline === "Social Sciences" ? "bg-blue-50 text-blue-700" :
                                                                                                                                                            discipline === "Science" ? "bg-blue-50 text-blue-700" :
                                                                                                                                                                discipline === "Hospitality" ? "bg-blue-50 text-blue-700" :
                                                                                                                                                                    discipline === "Music" ? "bg-blue-50 text-blue-700" :
                                                                                                                                                                        "bg-gray-100 text-gray-800"
                                                    }`}>
                                                    {discipline}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="mt-5 flex gap-3">
                                            <a href={uni.learnMoreLink} className="button primary" target='_blank'>Learn More</a>
                                            <a href={uni.applyLink} className="button secondary" target='_blank'>Apply</a>
                                        </div>
                                    </div>
                                </article>
                            ))
                        ) : (
                            <div id="noResults" className="text-center text-gray-600 py-12 col-span-full">No universities match your search.</div>
                        )}
                    </div>
                </div>
            </main>

            {/* Optional floating chat button */}
            <button className="fixed bottom-6 right-6 hidden sm:inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8z" />
                </svg>
                <span className="sr-only">Chat</span>
            </button>
            <Footer />
        </div>
    );
}
