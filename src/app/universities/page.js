"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Universities() {
    const [universitiesData, setUniversitiesData] = useState([]);
    const [query, setQuery] = useState("");
    const [country, setCountry] = useState("all");
    const [filteredUniversities, setFilteredUniversities] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const universitiesPerPage = 12;
    const router = useRouter();

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
        setCurrentPage(1); // Reset to first page on filter change
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
        setCurrentPage(1); // Reset to first page on search
    };

    // Pagination logic
    const indexOfLastUniversity = currentPage * universitiesPerPage;
    const indexOfFirstUniversity = indexOfLastUniversity - universitiesPerPage;
    const currentUniversities = filteredUniversities.slice(indexOfFirstUniversity, indexOfLastUniversity);
    const totalPages = Math.ceil(filteredUniversities.length / universitiesPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const generatePageNumbers = () => {
        const pageNumbers = [];
        const maxPageButtons = 3; // Show 5 page numbers at a time

        if (totalPages <= maxPageButtons) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            let startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
            let endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

            if (endPage - startPage + 1 < maxPageButtons) {
                startPage = Math.max(1, endPage - maxPageButtons + 1);
            }

            if (startPage > 1) {
                pageNumbers.push(1);
                if (startPage > 2) {
                    pageNumbers.push("...");
                }
            }

            for (let i = startPage; i <= endPage; i++) {
                pageNumbers.push(i);
            }

            if (endPage < totalPages) {
                if (endPage < totalPages - 1) {
                    pageNumbers.push("...");
                }
                pageNumbers.push(totalPages);
            }
        }
        return pageNumbers;
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
                            <option value="Australia">Australia</option>
                            <option value="New Zealand">New Zealand</option>
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
                        {currentUniversities.length > 0 ? (
                            currentUniversities.map((uni, index) => (
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

                    {/* Pagination Controls */}
                    {totalPages > 1 && (
                        <div className="flex justify-center items-center mt-8 space-x-2">

                            <button
                                onClick={() => paginate(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="px-2 py-1 aspect-[3/1] border border-orange-200 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <i className="fa-solid fa-circle-chevron-left text-xl"></i>
                            </button>
                            {generatePageNumbers().map((pageNumber, index) => (
                                pageNumber === "..." ? (
                                    <span key={index} className="px-4 py-2 text-sm font-medium text-gray-700">...</span>
                                ) : (
                                    <button
                                        key={index}
                                        onClick={() => paginate(pageNumber)}
                                        className={`px-2 py-1 aspect-[3/1] border border-orange-200 rounded-md text-sm font-medium ${currentPage === pageNumber ? 'bg-orange-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                                    >
                                        {pageNumber}
                                    </button>
                                )
                            ))}
                            <button
                                onClick={() => paginate(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="px-2 py-1 aspect-[3/1] border border-orange-200 rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <i className="fa-solid fa-circle-chevron-right "></i>
                            </button>

                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
