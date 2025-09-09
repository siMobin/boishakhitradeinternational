import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
    title: "About Us",
    description: "Learn more about Boishakhi Trade International",
};

export default function AboutUs() {
    return (
        <div className="bg-white">
            <Header />

            {/* Banner */}
            <div className="bg-gradient text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
                    <h1 className="text-4xl font-bold text-white">About Boishakhi Trade International</h1>
                    <p className="mt-4 text-lg text-white">We empower aspiring students with comprehensive guidance and personalized support to access global educational opportunities.</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <img src="https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg" alt="" className="rounded-lg shadow-lg lg:h-[80vh] h-[50vh] w-full object-cover" loading="lazy" />

                <section className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 lg:mx-24">
                    <div className="rounded-lg border border-gray-200 p-6">
                        <h2 className="text-2xl font-bold">Our Mission</h2>
                        <p className="mt-4 text-gray-600">To empower aspiring students with comprehensive guidance, personalized support, and expert counseling, facilitating their seamless access to global educational opportunities. We are dedicated to nurturing academic aspirations, fostering cultural exchange, and shaping future leaders through international education.</p>
                    </div>
                    <div className="rounded-lg border border-gray-200 p-6">
                        <h2 className="text-2xl font-bold">Our Vision</h2>
                        <p className="mt-4 text-gray-600">To become a global leader in educational consultancy, recognized for our commitment to excellence, innovative solutions, and unwavering support for students. We aim to create a world where education transcends boundaries, empowering individuals to make a positive impact on their communities and global society.</p>
                    </div>
                    <div className="rounded-lg border border-gray-200 p-6">
                        <h2 className="text-2xl font-bold">Our Values</h2>
                        <p className="mt-4 text-gray-600">We prioritize students with a personalized approach, uphold integrity, celebrate inclusivity, drive innovation, foster a global perspective, and engage in social responsibility. These values guide our mission to empower students on their educational journey.</p>
                    </div>
                </section>

                <section className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 lg:mx-24">
                    <div className="rounded-lg bg-gray-100 p-6 text-center">
                        <h3 className="text-4xl font-bold">100+</h3>
                        <p className="mt-2 text-gray-600">Applications Supported</p>
                    </div>
                    <div className="rounded-lg bg-gray-100 p-6 text-center">
                        <h3 className="text-4xl font-bold">30+</h3>
                        <p className="mt-2 text-gray-600">Partner Universities</p>
                    </div>
                    <div className="rounded-lg bg-gray-100 p-6 text-center">
                        <h3 className="text-4xl font-bold">5</h3>
                        <p className="mt-2 text-gray-600">Expert Advisors</p>
                    </div>
                </section>

                <div className="mt-12 lg:mx-24 shadow-lg p-4 border border-gray-200 rounded-lg">
                    <h2 className="text-2xl font-bold">Our Story</h2>
                    <p className="mt-4 text-gray-600">Founded by <strong>Mizanur Rahman Jahid</strong> who is the proprietor of <strong>Boishakhi Trade International</strong> & studies at the University Kuala Lumpur. Today, we help many students every year connect with the right opportunities, fostering academic aspirations and cultural exchange.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
