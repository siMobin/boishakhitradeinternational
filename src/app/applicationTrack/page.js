"use client";

import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


const STORAGE_KEY = "sa_application_recents";

export default function ApplicationTrack() {
    const [searchMode, setSearchMode] = useState("passport"); // 'passport', 'appId', 'email'
    const [trackInput, setTrackInput] = useState("");
    const [recentSearches, setRecentSearches] = useState([]);
    const [loading, setLoading] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const [result, setResult] = useState(null);
    const [notifyEmail, setNotifyEmail] = useState("");
    const [notifyMsg, setNotifyMsg] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        // Load recent searches from localStorage
        try {
            const savedRecents = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
            setRecentSearches(savedRecents);
        } catch (error) {
            console.error("Failed to load recent searches:", error);
        }
    }, []);

    const handleSearchModeChange = (mode) => {
        setSearchMode(mode);
        setTrackInput(""); // Clear input when mode changes
        setResult(null);
        setNotFound(false);
    };

    const handleInputChange = (e) => {
        setTrackInput(e.target.value);
    };

    const handleClearRecents = () => {
        localStorage.removeItem(STORAGE_KEY);
        setRecentSearches([]);
    };

    const addRecentSearch = (term) => {
        setRecentSearches((prevRecents) => {
            const newRecents = [term, ...prevRecents.filter((item) => item !== term)].slice(0, 5); // Keep last 5
            localStorage.setItem(STORAGE_KEY, JSON.stringify(newRecents));
            return newRecents;
        });
    };

    const displayToast = (message) => {
        setToastMessage(message);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 1800);
    };

    const handleTrackSubmit = async (e) => {
        e.preventDefault();
        if (!trackInput.trim()) return;

        setLoading(true);
        setNotFound(false);
        setResult(null);
        addRecentSearch(trackInput);

        // Simulate API call
        await new Promise((res) => setTimeout(res, 1500));

        // Mock data for demonstration
        const mockResults = {
            "AB123456": {
                uniName: "City University Malaysia",
                programLine: "Bachelor of Computer Science",
                status: "Processing",
                appId: "APP-001-2025",
                applicant: "John Doe",
                countryLine: "Malaysia",
                submittedOn: "2025-01-15",
                updatedOn: "2025-02-20",
                counselorLine: "Jane Smith",
                timeline: [
                    { step: "Submitted", date: "2025-01-15", completed: true },
                    { step: "Documents Reviewed", date: "2025-01-20", completed: true },
                    { step: "University Application", date: "2025-01-25", completed: true },
                    { step: "Interview Scheduled", date: "2025-02-01", completed: false },
                    { step: "Offer Letter", date: null, completed: false },
                    { step: "Visa Application", date: null, completed: false },
                    { step: "Approved", date: null, completed: false },
                ],
                nextTips: [
                    "Prepare for your interview with your counselor.",
                    "Ensure all academic documents are certified.",
                    "Start researching accommodation options.",
                ],
            },
            "APP-001-2025": {
                uniName: "City University Malaysia",
                programLine: "Bachelor of Computer Science",
                status: "Processing",
                appId: "APP-001-2025",
                applicant: "John Doe",
                countryLine: "Malaysia",
                submittedOn: "2025-01-15",
                updatedOn: "2025-02-20",
                counselorLine: "Jane Smith",
                timeline: [
                    { step: "Submitted", date: "2025-01-15", completed: true },
                    { step: "Documents Reviewed", date: "2025-01-20", completed: true },
                    { step: "University Application", date: "2025-01-25", completed: true },
                    { step: "Interview Scheduled", date: "2025-02-01", completed: false },
                    { step: "Offer Letter", date: null, completed: false },
                    { step: "Visa Application", date: null, completed: false },
                    { step: "Approved", date: null, completed: false },
                ],
                nextTips: [
                    "Prepare for your interview with your counselor.",
                    "Ensure all academic documents are certified.",
                    "Start researching accommodation options.",
                ],
            },
            "john.doe@example.com": {
                uniName: "City University Malaysia",
                programLine: "Bachelor of Computer Science",
                status: "Processing",
                appId: "APP-001-2025",
                applicant: "John Doe",
                countryLine: "Malaysia",
                submittedOn: "2025-01-15",
                updatedOn: "2025-02-20",
                counselorLine: "Jane Smith",
                timeline: [
                    { step: "Submitted", date: "2025-01-15", completed: true },
                    { step: "Documents Reviewed", date: "2025-01-20", completed: true },
                    { step: "University Application", date: "2025-01-25", completed: true },
                    { step: "Interview Scheduled", date: "2025-02-01", completed: false },
                    { step: "Offer Letter", date: null, completed: false },
                    { step: "Visa Application", date: null, completed: false },
                    { step: "Approved", date: null, completed: false },
                ],
                nextTips: [
                    "Prepare for your interview with your counselor.",
                    "Ensure all academic documents are certified.",
                    "Start researching accommodation options.",
                ],
            },
        };

        const foundResult = mockResults[trackInput.toUpperCase()] || mockResults[trackInput.toLowerCase()];

        if (foundResult) {
            setResult(foundResult);
        } else {
            setNotFound(true);
        }
        setLoading(false);
    };

    const handleCopyId = async () => {
        if (result?.appId) {
            try {
                await navigator.clipboard.writeText(result.appId);
                displayToast("Application ID copied!");
            } catch (err) {
                displayToast("Failed to copy ID.");
            }
        }
    };

    const handleNotifySubmit = async (e) => {
        e.preventDefault();
        if (!notifyEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(notifyEmail)) {
            displayToast("Please enter a valid email.");
            return;
        }
        // Simulate subscription
        await new Promise((res) => setTimeout(res, 500));
        setNotifyMsg(true);
        displayToast("Subscribed for updates!");
        setTimeout(() => setNotifyMsg(false), 2000);
    };

    const renderTimeline = () => {
        if (!result || !result.timeline) return null;
        const completedSteps = result.timeline.filter(step => step.completed).length;
        const totalSteps = result.timeline.length;
        const progressPct = totalSteps > 0 ? Math.round((completedSteps / totalSteps) * 100) : 0;

        return (
            <>
                <div className="flex items-center justify-between gap-2">
                    {result.timeline.map((item, index) => (
                        <div key={index} className="flex flex-col items-center flex-1">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${item.completed ? 'bg-blue-600' : 'bg-gray-300'}`}>
                                {item.completed ? <i className="fas fa-check text-sm"></i> : <span className="text-sm">{index + 1}</span>}
                            </div>
                            <p className={`mt-1 text-xs text-center ${item.completed ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>{item.step}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-2 text-xs text-gray-500 flex justify-between">
                    <span>Progress</span>
                    <span id="progressPct">{progressPct}%</span>
                </div>
            </>
        );
    };

    const getInputPlaceholder = () => {
        switch (searchMode) {
            case "passport":
                return "Enter Passport Number (e.g., AB123456)";
            case "appId":
                return "Enter Application ID (e.g., APP-001-2025)";
            case "email":
                return "Enter Email (e.g., john.doe@example.com)";
            default:
                return "Enter search term";
        }
    };

    const getInputIcon = () => {
        switch (searchMode) {
            case "passport":
                return (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="2" width="18" height="20" rx="2"></rect>
                        <path d="M8 2v20M16 2v20M3 8h18M3 16h18"></path>
                    </svg>
                );
            case "appId":
                return (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"></path>
                    </svg>
                );
            case "email":
                return (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <div className="bg-white min-h-screen flex flex-col">
            <Header />

            {/* Banner */}
            <div className="bg-gradient text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">Application Status Tracker</h1>
                    <p className="mt-4 text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto">Check the status of your university application.</p>
                </div>
            </div>

            {/* Search Card */}
            <section className="max-w-3xl w-full lg:w-6xl mx-auto px-0 lg:px-8 -mt-8">
                <div className="bg-white border border-gray-200 rounded-lg lg:rounded-2xl shadow-xl p-5 sm:p-6">
                    <div className="flex items-center gap-2">
                        <svg className="w-6 h-6 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="7"></circle>
                            <path d="M21 21l-4.3-4.3"></path>
                        </svg>
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">Track Your Application</h2>
                    </div>

                    {/* Mode tabs */}
                    <div className="mt-4">
                        <div className="inline-flex rounded-lg bg-gray-100 p-1" role="tablist" aria-label="Search mode">
                            <button
                                className={`tab-btn px-3 sm:px-4 py-2 rounded-md text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 ${searchMode === "passport" ? "bg-white shadow" : ""}`}
                                onClick={() => handleSearchModeChange("passport")}
                                aria-selected={searchMode === "passport"}
                            >
                                Passport No
                            </button>
                            <button
                                className={`tab-btn px-3 sm:px-4 py-2 rounded-md text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 ${searchMode === "appId" ? "bg-white shadow" : ""}`}
                                onClick={() => handleSearchModeChange("appId")}
                                aria-selected={searchMode === "appId"}
                            >
                                Application ID
                            </button>
                            <button
                                className={`tab-btn px-3 sm:px-4 py-2 rounded-md text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 ${searchMode === "email" ? "bg-white shadow" : ""}`}
                                onClick={() => handleSearchModeChange("email")}
                                aria-selected={searchMode === "email"}
                            >
                                Email
                            </button>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleTrackSubmit} className="mt-4 space-y-3">
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" aria-hidden="true">
                                {getInputIcon()}
                            </span>
                            <input
                                id="trackInput"
                                type="text"
                                placeholder={getInputPlaceholder()}
                                value={trackInput}
                                onChange={handleInputChange}
                                className="w-full h-12 pl-10 pr-32 rounded-lg border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-500"
                                aria-describedby="helpText"
                                autoComplete="off"
                            />
                            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
                                <button type="button" id="pasteBtn" className="px-3 py-1.5 rounded-md text-sm text-gray-700 border border-gray-200 hover:bg-gray-50" onClick={async () => {
                                    try {
                                        const text = await navigator.clipboard.readText();
                                        setTrackInput(text);
                                    } catch (err) {
                                        displayToast("Failed to paste.");
                                    }
                                }}>Paste</button>
                                <button type="submit" className="px-4 py-2 rounded-md bg-orange-600 text-white text-sm font-medium hover:bg-blue-700 shadow">Search</button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500">
                            <p id="helpText">We respect your privacy. Your search stays on this device.</p>
                            <button type="button" id="clearBtn" className="text-blue-600 hover:underline" onClick={() => setTrackInput("")}>Clear</button>
                        </div>
                    </form>

                    {/* Recent searches */}
                    <div className="mt-4">
                        <div className="flex items-center justify-between">
                            <p className="text-xs font-medium text-gray-700 uppercase tracking-wide">Recent searches</p>
                            <button id="clearRecents" className="text-xs text-gray-500 hover:text-gray-700" onClick={handleClearRecents}>Clear</button>
                        </div>
                        <div id="recentChips" className="mt-2 flex flex-wrap gap-2">
                            {recentSearches.map((term, index) => (
                                <span key={index} className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700 cursor-pointer" onClick={() => setTrackInput(term)}>
                                    {term}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Loading */}
            {loading && (
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center text-gray-600">
                    <div className="inline-flex items-center gap-3">
                        <svg className="w-6 h-6 animate-spin text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" className="opacity-20"></circle>
                            <path d="M12 2a10 10 0 0 1 10 10" className="opacity-80"></path>
                        </svg>
                        Searching…
                    </div>
                </div>
            )}

            {/* Not Found */}
            {notFound && (
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 sm:p-5">
                        <p className="text-amber-800 font-medium">No application found.</p>
                        <ul className="mt-2 text-amber-800 text-sm list-disc pl-5 space-y-1">
                            <li>Check for typos (e.g., AB123456)</li>
                            <li>Try another method: Application ID or Email</li>
                            <li>Contact support: <a className="underline" href="mailto:support@studentabroad.example">support@studentabroad.example</a></li>
                        </ul>
                    </div>
                </div>
            )}

            {/* Result */}
            {result && (
                <main className="flex-1">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        {/* Summary card */}
                        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5 sm:p-6">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                <div>
                                    <h3 id="uniName" className="text-xl sm:text-2xl font-semibold text-gray-900">{result.uniName}</h3>
                                    <p id="programLine" className="text-gray-600 mt-1">{result.programLine}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span id="statusBadge" className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800"> {result.status} </span>
                                    <button id="copyIdBtn" className="px-3 py-1.5 rounded-md border text-sm text-gray-700 hover:bg-gray-50" title="Copy Application ID" onClick={handleCopyId}>Copy ID</button>
                                    <button id="printBtn" className="px-3 py-1.5 rounded-md border text-sm text-gray-700 hover:bg-gray-50" onClick={() => window.print()}>Print</button>
                                    <button id="downloadBtn" className="px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm hover:bg-blue-700">Download receipt</button>
                                </div>
                            </div>

                            {/* Timeline */}
                            <div className="mt-6">
                                {renderTimeline()}
                            </div>

                            {/* Info grid */}
                            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div className="p-4 rounded-lg bg-gray-50">
                                    <p className="text-xs uppercase tracking-wide text-gray-500">Application ID</p>
                                    <p id="appId" className="text-sm font-medium text-gray-900">{result.appId}</p>
                                </div>
                                <div className="p-4 rounded-lg bg-gray-50">
                                    <p className="text-xs uppercase tracking-wide text-gray-500">Applicant</p>
                                    <p id="applicant" className="text-sm font-medium text-gray-900">{result.applicant}</p>
                                </div>
                                <div className="p-4 rounded-lg bg-gray-50">
                                    <p className="text-xs uppercase tracking-wide text-gray-500">Country</p>
                                    <p id="countryLine" className="text-sm font-medium text-gray-900">{result.countryLine}</p>
                                </div>
                                <div className="p-4 rounded-lg bg-gray-50">
                                    <p className="text-xs uppercase tracking-wide text-gray-500">Submitted on</p>
                                    <p id="submittedOn" className="text-sm font-medium text-gray-900">{result.submittedOn}</p>
                                </div>
                                <div className="p-4 rounded-lg bg-gray-50">
                                    <p className="text-xs uppercase tracking-wide text-gray-500">Last update</p>
                                    <p id="updatedOn" className="text-sm font-medium text-gray-900">{result.updatedOn}</p>
                                </div>
                                <div className="p-4 rounded-lg bg-gray-50">
                                    <p className="text-xs uppercase tracking-wide text-gray-500">Counselor</p>
                                    <p id="counselorLine" className="text-sm font-medium text-gray-900">{result.counselorLine}</p>
                                </div>
                            </div>

                            {/* Subscribe */}
                            <div className="mt-6 border-t pt-5">
                                <form onSubmit={handleNotifySubmit} className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                                    <label htmlFor="notifyEmail" className="text-sm text-gray-700">Get email updates:</label>
                                    <input
                                        id="notifyEmail"
                                        type="email"
                                        placeholder="your@email.com"
                                        value={notifyEmail}
                                        onChange={(e) => setNotifyEmail(e.target.value)}
                                        className="h-11 w-full sm:w-80 rounded-lg border border-orange-300 px-3 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-500"
                                    />
                                    <button type="submit" className="h-11 px-4 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700">Subscribe</button>
                                    {notifyMsg && <span className="text-sm text-green-700">Subscribed!</span>}
                                </form>
                            </div>
                        </div>

                        {/* Tips */}
                        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="rounded-xl border border-gray-200 p-5">
                                <h4 className="font-semibold text-gray-900">What’s next?</h4>
                                <ul className="mt-2 text-sm text-gray-600 list-disc pl-5 space-y-1">
                                    {result.nextTips.map((tip, index) => (
                                        <li key={index}>{tip}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="rounded-xl border border-gray-200 p-5">
                                <h4 className="font-semibold text-gray-900">Documents checklist</h4>
                                <ul className="mt-2 text-sm text-gray-600 list-disc pl-5 space-y-1">
                                    <li>Passport bio-page</li>
                                    <li>Academic transcripts</li>
                                    <li>English test score (IELTS/TOEFL)</li>
                                    <li>Bank statement for visa (if applicable)</li>
                                </ul>
                            </div>
                            <div className="rounded-xl border border-gray-200 p-5">
                                <h4 className="font-semibold text-gray-900">Need help?</h4>
                                <p className="mt-2 text-sm text-gray-600">Email <a className="text-blue-600 underline" href="mailto:support@studentabroad.example">support@studentabroad.example</a> or WhatsApp <a className="text-blue-600 underline" href="tel:+601161175133">+60 11-6117 5133</a></p>
                            </div>
                        </div>

                        {/* FAQ */}
                        <div className="mt-8">
                            <h4 className="text-lg font-semibold text-gray-900">FAQ</h4>
                            <div className="mt-3 space-y-3">
                                <details className="group rounded-lg border border-gray-200 p-4">
                                    <summary className="flex cursor-pointer items-center justify-between">
                                        <span className="font-medium text-gray-900">How long does review take?</span>
                                        <span className="transition group-open:rotate-180">
                                            <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                                        </span>
                                    </summary>
                                    <p className="mt-2 text-sm text-gray-600">Typically 2–6 weeks depending on the university and intake.</p>
                                </details>
                                <details className="group rounded-lg border border-gray-200 p-4">
                                    <summary className="flex cursor-pointer items-center justify-between">
                                        <span className="font-medium text-gray-900">My status hasn’t changed.</span>
                                        <span className="transition group-open:rotate-180">
                                            <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                                        </span>
                                    </summary>
                                    <p className="mt-2 text-sm text-gray-600">Subscribe to email updates above or contact your counselor if it’s been more than 2 weeks.</p>
                                </details>
                            </div>
                        </div>
                    </div>
                </main>
            )}

            {/* Toast */}
            {showToast && (
                <div className="pointer-events-none fixed inset-x-0 bottom-6 flex justify-center px-4">
                    <div className="pointer-events-auto rounded-lg bg-gray-900 text-white px-4 py-2 shadow-lg text-sm">{toastMessage}</div>
                </div>
            )}
            <br />
            <br />
            <Footer />
        </div>
    );
}
