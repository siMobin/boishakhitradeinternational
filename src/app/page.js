"use client";

import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  useEffect(() => {
    // Dynamically import Swiper and its styles on the client only.
    const initSwiper = async () => {
      try {
        await import('swiper/css');
        await import('swiper/css/navigation');
        await import('swiper/css/bundle');

        const SwiperModule = await import('swiper');
        const Modules = await import('swiper/bundle');

        const Swiper = SwiperModule && (SwiperModule.default || SwiperModule);
        const { Navigation, Pagination, Autoplay, EffectFade } = Modules || {};

        if (Swiper && typeof Swiper.use === 'function') {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);
        }

        if (typeof window !== 'undefined' && Swiper) {
          // Initialize main slider if the element exists
          if (document.querySelector('.swiper-container')) {
            new Swiper('.swiper-container', {
              loop: true,
              effect: 'fade',
              pagination: {
                el: '.swiper-pagination',
                clickable: true,
              },
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
              autoplay: {
                delay: 3000,
              },
            });
          }

          // Initialize testimonials slider if markup exists
          if (document.querySelector('.swiper-container-testimonials')) {
            new Swiper('.swiper-container-testimonials', {
              loop: true,
              slidesPerView: 1,
              spaceBetween: 30,
              pagination: {
                el: '.swiper-pagination-testimonials',
                clickable: true,
              },
              autoplay: {
                delay: 3000,
              },
              breakpoints: {
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              },
            });
          }
        }
      } catch (e) {
        // Swiper failed to load or initialize; ignore to avoid runtime errors
        // console.warn('Swiper failed to load', e);
      }
    };

    initSwiper();
  }, []);

  return (
    <div className="bg-white">
      <Header />

      {/* Hero Section */}
      <div className='relative'>
        <section className="relative m-4 rounded-2xl overflow-hidden shadow-lg">
          <div className="swiper-container h-[30vh] lg:h-[calc(100vh-150px)]">
            <div className="swiper-wrapper">
              <div className="swiper-slide" style={{ backgroundImage: "url('https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
              <div className="swiper-slide" style={{ backgroundImage: "url('https://images.pexels.com/photos/1708912/pexels-photo-1708912.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
              <div className="swiper-slide" style={{ backgroundImage: "url('https://images.pexels.com/photos/8197544/pexels-photo-8197544.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
              <div className="swiper-slide" style={{ backgroundImage: "url('https://images.pexels.com/photos/7944130/pexels-photo-7944130.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
            </div>
            <div className="swiper-button-next z-9999"></div>
            <div className="swiper-button-prev z-9999"></div>
          </div>
        </section>
        <div className="swiper-pagination"></div>
        {/* The pagination */}
      </div>

      {/* Popular Study Destinations Section */}
      <section className="md:py-10 pt-4">
        <div className="container px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800">Popular Study Destinations</h2>
          <p className="text-center text-gray-600 mt-2 mb-12">Explore top destinations where thousands of students have built their futures.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:mx-24">
            <Link href="/universities" className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <img src="https://images.pexels.com/photos/3815533/pexels-photo-3815533.jpeg" loading="lazy" alt="Malaysia" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800">Malaysia</h3>
                <p className="text-gray-600 mt-2">Experience world-renowned education in the heart of history and innovation.</p>
              </div>
            </Link>
            <Link href="/universities" className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <img src="https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg" loading="lazy" alt="Australia" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800">Australia</h3>
                <p className="text-gray-600 mt-2">Study in one of the world&apos;s most liveable cities with stunning coastal views.</p>
              </div>
            </Link>
            <Link href="/universities" className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <img src="https://images.pexels.com/photos/1750754/pexels-photo-1750754.jpeg" loading="lazy" alt="Canada" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800">Canada</h3>
                <p className="text-gray-600 mt-2">Discover multicultural excellence in North America&apos;s education hub.</p>
              </div>
            </Link>
          </div>
        </div>

        <Link href="/universities" className="flex justify-center items-center mt-6 animate-shake-x scale-[0.75] lg:scale-100">
          <span className='flex items-center gap-2 border border-orange-300 bg-orange-200/60 px-4 py-2 rounded-full'>
            <p className=" font-base">Find More</p>
            <i className="fa-solid fa-arrow-right"></i></span>
        </Link>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800">Comprehensive Study Abroad Services</h2>
          <p className="text-center text-gray-600 mt-2 mb-12">From initial consultation to graduation day, we provide end-to-end support.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:mx-24">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <i className="fa-solid fa-file-lines text-4xl text-orange-600 mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Application Assistance</h3>
              <p className="text-gray-600">Complete guidance through university applications, document preparation, and submission.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <i className="fa-solid fa-graduation-cap text-4xl text-orange-600 mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Scholarship Guidance</h3>
              <p className="text-gray-600">Maximize your funding opportunities with our comprehensive scholarship support.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <i className="fa-solid fa-passport text-4xl text-orange-600 mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Visa Support</h3>
              <p className="text-gray-600">Expert assistance with visa applications, interviews, and documentation.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <i className="fa-solid fa-plane-departure text-4xl text-orange-600 mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Pre-Departure</h3>
              <p className="text-gray-600">Comprehensive preparation for your journey including travel and accommodation.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <i className="fa-solid fa-house-user text-4xl text-orange-600 mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Accommodation</h3>
              <p className="text-gray-600">Find the perfect place to call home with our network of verified accommodations.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <i className="fa-solid fa-headset text-4xl text-orange-600 mb-4"></i>
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock assistance throughout your study abroad journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-8 max-w-[100vw]" id="reviews">
        <h2 className="text-4xl font-bold text-center text-gray-800">Success Stories from Our Students</h2>
        <p className="text-center text-gray-600 mt-2 mb-12">Join thousands of successful students who have achieved their study abroad dreams.</p>

        <div className="pb-12 flex flex-wrap md:flex-nowrap justify-center gap-8 max-w-[100vw] md:mx-24">
          <div className="shadow-lg border border-gray-200/50 rounded-xl">
            <div className="bg-gray-100 p-8 rounded-lg">
              <p className="text-gray-600 italic">&quot;Boishakhiti Trade International made my dream of studying at Cambridge a reality. Their guidance through the application process was invaluable, and the visa support was exceptional.&quot;</p>
              <div className="flex items-center mt-6">
                <img src="https://ui-avatars.com/api/?name=Sarah+Chen&background=1E88E5&color=fff" alt="Sarah Chen" className="w-12 h-12 rounded-full" />
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800">Sarah Chen</h4>
                  <p className="text-sm text-gray-500">Computer Science, University of Cambridge</p>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-lg border border-gray-200/50 rounded-xl">
            <div className="bg-gray-100 p-8 rounded-lg">
              <p className="text-gray-600 italic">&quot;The scholarship guidance helped me secure $50,000 in funding. I couldn&apos;t have navigated the complex process without their expert team.&quot;</p>
              <div className="flex items-center mt-6">
                <img src="https://ui-avatars.com/api/?name=Marcus+Johnson&background=1E88E5&color=fff" alt="Marcus Johnson" className="w-12 h-12 rounded-full" />
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800">Marcus Johnson</h4>
                  <p className="text-sm text-gray-500">Medicine, University of Melbourne</p>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-lg border border-gray-200/50 rounded-xl">
            <div className="bg-gray-100 p-8 rounded-lg">
              <p className="text-gray-600 italic">&quot;From application to accommodation, every step was handled professionally. Now I&apos;m thriving in Toronto and building my career in data analytics.&quot;</p>
              <div className="flex items-center mt-6">
                <img src="https://ui-avatars.com/api/?name=Priya+Sharma&background=1E88E5&color=fff" alt="Priya Sharma" className="w-12 h-12 rounded-full" />
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800">Priya Sharma</h4>
                  <p className="text-sm text-gray-500">Business Analytics, University of Toronto</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
