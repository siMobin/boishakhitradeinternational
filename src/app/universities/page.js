"use client";

import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';


const universitiesData = [
    {
        name: "City University Malaysia",
        country: "Malaysia",
        location: "Kuala Lumpur, Malaysia",
        image: "https://www.educationmalaysia.in/university/city-header-1738999884-1_1741435376.webp",
        disciplines: ["Business", "Engineering"],
        learnMoreLink: "https://city.edu.my/",
        applyLink: "https://city.edu.my/apply-now/",
    },
    {
        name: "University of Malaya",
        country: "Malaysia",
        location: "Kuala Lumpur, Malaysia",
        image: "https://theacademicinsights.com/wp-content/uploads/2020/07/imej_5ccfe917a8b765ccfef83b7420-740x357.jpg",
        disciplines: ["Economics", "Public Health"],
        learnMoreLink: "https://study.um.edu.my/",
        applyLink: "https://study.um.edu.my/how-to-apply-bachelor-rsquo-s-degree",
    },
    {
        name: "Universiti Putra Malaysia",
        country: "Malaysia",
        location: "Seri Kembangan, Malaysia",
        image: "https://studymalaysiainfo.com/wp-content/uploads/2024/04/University-Putra-Malaysia-UPM.jpg",
        disciplines: ["Economics", "Public Health"],
        learnMoreLink: "https://upm.edu.my/",
        applyLink: "https://upm.edu.my/admission/how_to_apply-14945",
    },
    {
        name: "Multimedia Multimedia University",
        country: "Malaysia",
        location: "Kuala Lumpur, Malaysia",
        image: "https://www.easyuni.com/media/institution/cover_image/2025/02/12/thumbs/MMU_cover.webp.1150x500_q85.webp",
        disciplines: ["Economics", "Public Health"],
        learnMoreLink: "https://www.mmu.edu.my/intake/",
        applyLink: "https://www.unitar.my/admissions/",
    },
    {
        name: "Technical University of Munich",
        country: "Germany",
        location: "Munich, Germany",
        image: "https://images.shiksha.com/mediadata/images/1533559592phpsYF8Oy_g.jpg",
        disciplines: ["Computer Science", "Mechanical Eng"],
        learnMoreLink: "https://www.tum.de/en/",
        applyLink: "https://www.tum.de/en/",
    },
    {
        name: "Stanford University",
        country: "United States",
        location: "California, United States",
        image: "https://www.collegeright.com/wp-content/uploads/2011/08/intro_about-800x532-1.jpg",
        disciplines: ["AI", "Biotech"],
        learnMoreLink: "https://www.stanford.edu/",
        applyLink: "https://www.stanford.edu/academics/",
    },
    {
        name: "University of Oxford",
        country: "United Kingdom",
        location: "Oxford, United Kingdom",
        image: "https://ichef.bbci.co.uk/news/1024/cpsprodpb/2c03/live/64d39070-8596-11ef-addc-5556603eb4c1.jpg.webp",
        disciplines: ["Humanities", "Law"],
        learnMoreLink: "https://oxfordmagictours.com/",
        applyLink: "https://oxfordmagictours.com/contact/",
    },
    {
        name: "University of Toronto",
        country: "Canada",
        location: "Toronto, Canada",
        image: "https://www.narcity.com/media-library/university-of-toronto-buildings-at-st-george-campus.jpg?id=57013828&width=1245&height=700&quality=85&coordinates=0%2C0%2C0%2C0",
        disciplines: ["Medicine", "Data Science"],
        learnMoreLink: "https://www.utoronto.ca/",
        applyLink: "https://www.utoronto.ca/current-students",
    },
    {
        name: "Delft University of Technology",
        country: "Netherlands",
        location: "Delft, Netherlands",
        image: "https://www.greenroofs.com/wp-content/uploads/2018/09/delftlibrary1.jpg",
        disciplines: ["Aerospace", "Architecture"],
        learnMoreLink: "https://www.kth.se/en/studies/",
        applyLink: "https://www.kth.se/en/studies/",
    },
    {
        name: "University Kuala Lumpur (UniKL)",
        country: "Malaysia",
        location: "Kuala Lumpur, Malaysia",
        image: "https://www.easyuni.com/media/institution/cover_image/2025/02/12/thumbs/UNIVERSITI-KUALA-LUMPUR-UNIKL_cover.webp.1150x500_q85.webp",
        disciplines: ["Technology", "Engineering"],
        learnMoreLink: "#",
        applyLink: "#",
    },
    {
        name: "Universiti Tun Abdul Razak (UNIRAZAK)",
        country: "Malaysia",
        location: "Kuala Lumpur, Malaysia",
        image: "https://www.etawau.com/edu/UniversitiesPrivate/UNIRAZAK/Images/UniRazak_02b730.jpg",
        disciplines: ["Business", "Accounting"],
        learnMoreLink: "#",
        applyLink: "#",
    },
    {
        name: "University of Cyberjaya",
        country: "Malaysia",
        location: "Cyberjaya, Malaysia",
        image: "https://en.your-uni.com/assets/images/university/31/Cyberjaya-University-Malaysia-Campus.webp",
        disciplines: ["Medical", "Health Sciences"],
        learnMoreLink: "#",
        applyLink: "#",
    },
    {
        name: "Alfa University College",
        country: "Malaysia",
        location: "Subang Jaya, Malaysia",
        image: "https://creativeconsultancy.com.bd/wp-content/uploads/2024/09/alfanewbuilding-1024x704.jpg",
        disciplines: ["Design", "Architecture"],
        learnMoreLink: "#",
        applyLink: "#",
    },
    {
        name: "Binary University",
        country: "Malaysia",
        location: "Puchong, Malaysia",
        image: "https://binary.edu.my/wp-content/uploads/2022/04/Campus-2.jpg",
        disciplines: ["Management", "IT"],
        learnMoreLink: "#",
        applyLink: "#",
    },
    {
        name: "Lincoln University College",
        country: "Malaysia",
        location: "Petaling Jaya, Malaysia",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Kelana_Jaya_campus.jpg/375px-Kelana_Jaya_campus.jpg",
        disciplines: ["Medicine", "Dentistry"],
        learnMoreLink: "#",
        applyLink: "#",
    },
    {
        name: "Universiti Tenaga Nasional (UNITEN)",
        country: "Malaysia",
        location: "Kajang, Malaysia",
        image: "https://cdn.prod.website-files.com/641ae14b3ffc4f10f12ecaff/6774fcdc04adcde0bf54df57_UNITEN.jpg",
        disciplines: ["Engineering", "Computer Science"],
        learnMoreLink: "#",
        applyLink: "#",
    },
    {
        name: "Genovasi University College",
        country: "Malaysia",
        location: "Petaling Jaya, Malaysia",
        image: "https://edutrust.info/public/galleries/1700605090_20210507_171206.jpg",
        disciplines: ["Innovation", "Entrepreneurship"],
        learnMoreLink: "#",
        applyLink: "#",
    },
    {
        name: "University of Malaya Wales",
        country: "Malaysia",
        location: "Kuala Lumpur, Malaysia",
        image: "https://university.tuitionjob.com/custom/picture/246/uni_58c9f148740f9.jpg",
        disciplines: ["Business", "Computer Science"],
        learnMoreLink: "#",
        applyLink: "#",
    },
    {
        name: "Asia e University",
        country: "Malaysia",
        location: "Subang Jaya, Malaysia",
        image: "https://media.licdn.com/dms/image/v2/D5622AQHK1K0Iz8MGhg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1722624223880?e=2147483647&v=beta&t=t3bngN2HSS5igxX8z0iMLJHwUolkE_dGt5b_PQ4s_bk",
        disciplines: ["Online Learning", "Postgraduate"],
        learnMoreLink: "#",
        applyLink: "#",
    },
    {
        name: "Kolej SPACE",
        country: "Malaysia",
        location: "Johor Bahru, Malaysia",
        image: "https://www.thinkconfluence.com/uploads/images/220103105303.jpg",
        disciplines: ["Professional", "Continuing Education"],
        learnMoreLink: "#",
        applyLink: "#",
    },
    {
        name: "International College of Management and Sports (ICMS)",
        country: "Malaysia",
        location: "Kuala Lumpur, Malaysia",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/ICMS_campus.jpg/500px-ICMS_campus.jpg",
        disciplines: ["Sports Science", "Management"],
        learnMoreLink: "#",
        applyLink: "#",
    },
    {
        name: "Universiti Tunku Abdul Rahman (UTAR)",
        country: "Malaysia",
        location: "Kampar, Malaysia",
        image: "https://www.easyuni.com/media/institution/cover_image/2025/02/12/thumbs/utar_cover.webp.1150x500_q85.webp",
        disciplines: ["Business", "Engineering"],
        learnMoreLink: "#",
        applyLink: "#",
    },
    {
        name: "Universiti Kebangsaan Malaysia (UKM)",
        country: "Malaysia",
        location: "Bangi, Malaysia",
        image: "https://www.ukm.my/studyukm/wp-content/uploads/2020/11/UKM-VIEW.jpg",
        disciplines: ["Social Sciences", "Medicine"],
        learnMoreLink: "#",
        applyLink: "#",
    },
    {
        name: "Universiti Sains Malaysia (USM)",
        country: "Malaysia",
        location: "Penang, Malaysia",
        image: "https://images.shiksha.com/mediadata/images/1408442689phpYZsKgU_205x160.jpg",
        disciplines: ["Science", "Engineering"],
        learnMoreLink: "#",
        applyLink: "#",
    },
    {
        name: "Universiti Teknologi Malaysia (UTM)",
        country: "Malaysia",
        location: "Johor Bahru, Malaysia",
        image: "https://applyuni.com/storage/featured_images/01J73T6V354H2PDXH05T3NJCB7.jpg",
        disciplines: ["Engineering", "Technology"],
        learnMoreLink: "#",
        applyLink: "#",
    },
    {
        name: "Universiti Teknologi PETRONAS (UTP)",
        country: "Malaysia",
        location: "Seri Iskandar, Malaysia",
        image: "https://studyfans.com/_next/image?url=https%3A%2F%2Fbackend.studyfans.com%2Fstorage%2Fmedia%2FUniversities%2Fmain_image%2F2732%2F1n9a5KpCHQZd8SpJcRbnfSwn2vGv4RfExUQD5QeN.jpeg&w=1080&q=75",
        disciplines: ["Engineering", "Technology"],
        learnMoreLink: "#",
        applyLink: "#",
    },
    {
        name: "Taylor's University",
        country: "Malaysia",
        location: "Subang Jaya, Malaysia",
        image: "https://www.easyuni.com/media/institution/cover_image/2025/02/12/thumbs/taylorsu.web.webp.1150x500_q85.webp",
        disciplines: ["Hospitality", "Business"],
        learnMoreLink: "#",
        applyLink: "#",
    },
    {
        name: "Sunway University",
        country: "Malaysia",
        location: "Subang Jaya, Malaysia",
        image: "https://www.easyuni.com/media/institution/cover_image/2025/02/12/thumbs/Sunway-University-Photo-1.webp.1150x500_q85.webp",
        disciplines: ["Business", "Medical"],
        learnMoreLink: "#",
        applyLink: "#",
    },
    {
        name: "UCSI University",
        country: "Malaysia",
        location: "Kuala Lumpur, Malaysia",
        image: "https://www.easyuni.com/media/institution/cover_image/2025/02/12/thumbs/ucsi_cover_.webp.1150x500_q85.webp",
        disciplines: ["Music", "Hospitality"],
        learnMoreLink: "#",
        applyLink: "#",
    },
    {
        name: "Asia Pacific University of Technology & Innovation (APU)",
        country: "Malaysia",
        location: "Kuala Lumpur, Malaysia",
        image: "https://www.easyuni.com/media/institution/cover_image/2025/02/12/thumbs/apu_cover.webp.1150x500_q85.webp",
        disciplines: ["Technology", "Innovation"],
        learnMoreLink: "#",
        applyLink: "#",
    },
    {
        name: "Universiti Utara Malaysia (UUM)",
        country: "Malaysia",
        location: "Sintok, Malaysia",
        image: "https://ueceducation.co.id/wp-content/uploads/2024/05/UUM-scaled.jpg",
        disciplines: ["Management", "Business"],
        learnMoreLink: "#",
        applyLink: "#",
    },
    {
        name: "International Islamic University Malaysia (IIUM)",
        country: "Malaysia",
        location: "Gombak, Malaysia",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Iiumcampus.jpg/500px-Iiumcampus.jpg",
        disciplines: ["Islamic Studies", "Human Sciences"],
        learnMoreLink: "#",
        applyLink: "#",
    },
    {
        name: "Universiti Teknologi MARA (UiTM)",
        country: "Malaysia",
        location: "Shah Alam, Malaysia",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Universiti_Teknologi_MARA_%28UiTM%29.jpg/1200px-Universiti_Teknologi_MARA_%28UiTM%29.jpg?20190821084817",
        disciplines: ["Business", "Technology"],
        learnMoreLink: "#",
        applyLink: "#",
    },
    {
        name: "Universiti Malaysia Pahang Al-Sultan Abdullah (UMPSA)",
        country: "Malaysia",
        location: "Kuantan, Malaysia",
        image: "https://www.asiaeducationreview.com/uploaded_images/newstransfer/93wm3Z.1.jpg",
        disciplines: ["Engineering", "Technology"],
        learnMoreLink: "#",
        applyLink: "#",
    },
    {
        name: "Management and Science University (MSU)",
        country: "Malaysia",
        location: "Shah Alam, Malaysia",
        image: "https://future-mbbs.com/wp-content/uploads/2025/06/1-1.png.webp",
        disciplines: ["Management", "Health Science"],
        learnMoreLink: "#",
        applyLink: "#",
    },
    {
        name: "SEGi University",
        country: "Malaysia",
        location: "Kota Damansara, Malaysia",
        image: "https://theedgemalaysia.com/_next/image?url=https%3A%2F%2Fassets.theedgemarkets.com%2Fsegi_0.jpg&w=1920&q=75",
        disciplines: ["Business", "Education"],
        learnMoreLink: "#",
        applyLink: "#",
    },
];

export default function Universities() {
    const [query, setQuery] = useState("");
    const [country, setCountry] = useState("all");
    const [filteredUniversities, setFilteredUniversities] = useState(universitiesData);

    useEffect(() => {
        filterUniversities();
    }, [query, country]);

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
                <div className="max-w-5xl w-[50%] mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
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
                                            <a href={uni.learnMoreLink} className="button primary">Learn More</a>
                                            <a href={uni.applyLink} className="button secondary">Apply</a>
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
