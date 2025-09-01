import Header from '../../components/Header';
import Footer from '../../components/Footer';


export default function StudentEssentials() {
    return (
        <div className="bg-white">
            <Header />
            <div className="h-full min-h-screen w-full pt-12 p-4">
                <div className="grid gap-14 md:grid-cols-3 md:gap-8 md:mx-24">
                    {/* Student Health Cover */}
                    <div className="rounded-xl bg-white p-8 text-center shadow-xl flex flex-col items-center justify-center border-[#002147]/10">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-400 shadow-lg mb-4">
                            <i className="fas fa-user-shield fa-2x text-white"></i>
                        </div>
                        <h1 className="text-darken mb-3 text-xl font-semibold">Student Health Cover</h1>
                        <p className="px-4 text-gray-500">Your choice, your health cover, your peace of mind abroad.</p>
                    </div>
                    {/* Money Transfer */}
                    <div className="rounded-xl bg-white p-8 text-center shadow-xl flex flex-col items-center justify-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-500 shadow-lg mb-4">
                            <i className="fa-solid fa-money-bill-transfer fa-2x text-white"></i>
                        </div>
                        <h1 className="text-darken mb-3 text-xl font-semibold">Money Transfer</h1>
                        <p className="px-4 text-gray-500">Safe, secure and fast payments to your institutions.</p>
                    </div>
                    {/* Accommodation */}
                    <div className="rounded-xl bg-white p-8 text-center shadow-xl flex flex-col items-center justify-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sky-500 shadow-lg mb-4">
                            <i className="fas fa-home fa-2x text-white"></i>
                        </div>
                        <h1 className="text-darken mb-3 text-xl font-semibold">Accommodation</h1>
                        <p className="px-4 text-gray-500">Safe, secure and comfortable accommodation options for students.</p>
                    </div>

                    {/* Guardianship */}
                    <div className="rounded-xl bg-white p-8 text-center shadow-xl flex flex-col items-center justify-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sky-500 shadow-lg mb-4">
                            <i className="fas fa-home fa-2x text-white"></i>
                        </div>
                        <h1 className="text-darken mb-3 text-xl font-semibold">Guardianship</h1>
                        <p className="px-4 text-gray-500">Safe, secure and fast Payments to your institutions.</p>
                    </div>

                    {/* SIM cards */}
                    <div className="rounded-xl bg-white p-8 text-center shadow-xl flex flex-col items-center justify-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sky-500 shadow-lg mb-4">
                            <i className="fa-solid fa-sim-card fa-2x text-white"></i>
                        </div>
                        <h1 className="text-darken mb-3 text-xl font-semibold">SIM cards</h1>
                        <p className="px-4 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. At eligendi alias ab eveniet, distinctio reprehenderit ipsum!</p>
                    </div>

                    {/* SIM cards */}
                    <div className="rounded-xl bg-white p-8 text-center shadow-xl flex flex-col items-center justify-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sky-500 shadow-lg mb-4">
                            <i className="fa-solid fa-sim-card fa-2x text-white"></i>
                        </div>
                        <h1 className="text-darken mb-3 text-xl font-semibold">Lorem, ipsum</h1>
                        <p className="px-4 text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, officia?</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
