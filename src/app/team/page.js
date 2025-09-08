import Header from '../../components/Header';
import Footer from '../../components/Footer';


export default function Team() {
    return (
        <div className="bg-white min-h-screen flex flex-col">
            <Header />
            {/* Hero */}
            <div className="bg-gradient text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">Meet Our Team</h1>
                    <p className="mt-4 text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto">A diverse team of counselors and specialists committed to your journey abroad.</p>
                </div>
            </div>

            {/* Team Grid */}
            <section className="px-4 sm:px-6 lg:px-8 -mt-6 pb-12 flex justify-center items-center">
                <div className="grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {/* Member */}
                    <article className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition">
                        <div className="p-6 text-center flex flex-col items-center">
                            <div className="h-28 w-28 rounded-full overflow-hidden ring-4 ring-white shadow-md">
                                <img src="/images/MATIUR-RAHMAN-SAGOR.png" alt="Profile photo" className="h-full w-full object-cover" />
                            </div>
                            <h3 className="mt-4 text-base font-semibold text-gray-900">Matiur Rahman Sagor</h3>
                            <p className="text-sm text-blue-700">
                                Advisor of BOISHAKHI TRADE INTERNATION <br />
                                & <br />
                                Proprietor of SAGOR TOURS & TRAVELS
                            </p>
                        </div>
                        <div className="border-t border-gray-200 px-6 py-3 flex items-center justify-center gap-4 text-gray-500">
                            <a href="https://wa.me/+" target="_blank" aria-label="WhatsApp" className="hover:text-green-600">
                                <i className="fa-brands fa-whatsapp"></i>
                            </a>
                            <a href="#" aria-label="Facebook" className="hover:text-blue-600">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                        </div>
                    </article>
                    {/* Member */}
                    <article className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition">
                        <div className="p-6 text-center flex flex-col items-center">
                            <div className="h-28 w-28 rounded-full overflow-hidden ring-4 ring-white shadow-md">
                                <img src="/images/MIZANUR-RAHMAN-JAHID.png" alt="Profile photo" className="h-full w-full object-cover" />
                            </div>
                            <h3 className="mt-4 text-base font-semibold text-gray-900">Mizanur Rahman Jahid</h3>
                            <p className="text-sm text-blue-700">CEO & Founder of BOISHAKHI TRADE INTERNATIONAL</p>
                        </div>
                        <div className="border-t border-gray-200 px-6 py-3 flex items-center justify-center gap-4 text-gray-500">
                            <a href="https://wa.me/+8801789774070" target="_blank" aria-label="WhatsApp" className="hover:text-green-600">
                                <i className="fa-brands fa-whatsapp"></i>
                            </a>
                            <a href="tel:+60178658225" aria-label="Phone" className="hover:text-gray-800">
                                <i className="fa-solid fa-phone"></i>
                            </a>
                            <a href="https://www.facebook.com/share/16XLkx6vGd/?mibextid=wwXIfr" aria-label="Facebook" className="hover:text-blue-600">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                        </div>
                    </article>
                    {/* Member */}
                    <article className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition">
                        <div className="p-6 text-center flex flex-col items-center">
                            <div className="h-28 w-28 rounded-full overflow-hidden ring-4 ring-white shadow-md">
                                <img src="/images/Mahmudul-Hasan-Himon.png" alt="Profile photo" className="h-full w-full object-cover" />
                            </div>
                            <h3 className="mt-4 text-base font-semibold text-gray-900">Mahmudul Hasan Himon</h3>
                            <p className="text-sm text-blue-700">Chief Operating Officer</p>
                        </div>
                        <div className="border-t border-gray-200 px-6 py-3 flex items-center justify-center gap-4 text-gray-500">
                            <a href="https://wa.me/+60195223728" target="_blank" aria-label="WhatsApp" className="hover:text-green-600">
                                <i className="fa-brands fa-whatsapp"></i>
                            </a>
                            <a href="#" aria-label="Facebook" className="hover:text-blue-600">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                        </div>
                    </article>

                    {/* Member */}
                    <article className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition">
                        <div className="p-6 text-center flex flex-col items-center">
                            <div className="h-28 w-28 rounded-full overflow-hidden ring-4 ring-white shadow-md">
                                <img src="/images/BADRUL-HASAN-BABU.png" alt="Profile photo" className="h-full w-full object-cover" />
                            </div>
                            <h3 className="mt-4 text-base font-semibold text-gray-900">Badrul Hasan Babu</h3>
                            <p className="text-sm text-blue-700">Senior Executive Officer</p>
                        </div>
                        <div className="border-t border-gray-200 px-6 py-3 flex items-center justify-center gap-4 text-gray-500">
                            <a href="https://wa.me/+8801715740985" target="_blank" aria-label="WhatsApp" className="hover:text-green-600">
                                <i className="fa-brands fa-whatsapp"></i>
                            </a>
                            <a href="#" aria-label="Facebook" className="hover:text-blue-600">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                        </div>
                    </article>

                    {/* Member */}
                    <article className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition">
                        <div className="p-6 text-center flex flex-col items-center">
                            <div className="h-28 w-28 rounded-full overflow-hidden ring-4 ring-white shadow-md">
                                <img src="/images/KAMRUN-NAHAR-MUNNI.png" alt="Profile photo" className="h-full w-full object-cover" />
                            </div>
                            <h3 className="mt-4 text-base font-semibold text-gray-900">Kamrun Nahar Munni</h3>
                            <p className="text-sm text-blue-700">Counsellor</p>
                        </div>
                        <div className="border-t border-gray-200 px-6 py-3 flex items-center justify-center gap-4 text-gray-500">
                            <a href="https://wa.me/+8801837258235" target="_blank" aria-label="WhatsApp" className="hover:text-green-600">
                                <i className="fa-brands fa-whatsapp"></i>
                            </a>
                            <a href="#" aria-label="Facebook" className="hover:text-blue-600">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                        </div>
                    </article>
                </div>
            </section>

            <Footer />
        </div>
    );
}
