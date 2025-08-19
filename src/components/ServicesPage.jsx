// src/pages/ServicesPage.jsx
import React from 'react';
import Card from '../components/Card';
import { ShoppingCart, Package, Truck } from 'lucide-react';

function ServicesPage() {
  const menuItems = [
    {
      title: "Bakso Komplit",
      description: "Perpaduan bakso halus, urat, dan tahu bakso dengan kuah gurih.",
      image: "/images/bakso_komplit.svg"
    },
    {
      title: "Bakso Mercon",
      description: "Bagi pecinta pedas! Bakso isi cabai dengan kuah yang membakar semangat.",
      image: "/images/bakso_mercon.svg"
    },
    {
      title: "Mie Ayam Bakso",
      description: "Kombinasi sempurna mie ayam lezat dengan bakso kenyal kami.",
      image: "/images/mie_ayam_bakso.svg"
    },
    {
      title: "Bakso Iga",
      description: "Bakso dengan tambahan iga sapi empuk yang kaya rasa.",
      image: "/images/bakso_iga.svg"
    },
    {
      title: "Es Teler",
      description: "Penutup segar dengan buah-buahan tropis dan santan creamy.",
      image: "/images/es_teler.svg"
    },
    {
      title: "Aneka Minuman",
      description: "Berbagai pilihan minuman dingin dan hangat untuk menemani bakso Anda.",
      image: "/images/minuman_dingin.svg"
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-primary mb-12">
          Layanan & Menu Kami
        </h1>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            Pilihan Cara Menikmati Bakso Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105">
              <img src="/images/dine_in_large.svg" alt="Makan di Tempat" className="h-32 w-32 mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Makan di Tempat (Dine-In)</h3>
              <p className="text-gray-600 leading-relaxed">
                Nikmati suasana hangat dan nyaman di warung kami. Cocok untuk makan siang bersama keluarga,
                teman, atau sekadar melepas penat setelah seharian beraktivitas.
                Rasakan kelezatan kuah gurih dan bakso kenyal langsung dari dapur kami.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105">
              <img src="/images/takeaway_large.svg" alt="Bawa Pulang" className="h-32 w-32 mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Bawa Pulang (Take Away)</h3>
              <p className="text-gray-600 leading-relaxed">
                Tidak sempat makan di tempat? Jangan khawatir! Anda bisa membawa pulang
                bakso favorit Anda dalam kemasan praktis. Kelezatan kuah gurih dan bakso kenyal
                tetap terjaga hingga tiba di rumah Anda.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            Menu Unggulan Warung Bakso Enak
          </h2>
          <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-10">
            Kami menyajikan berbagai varian bakso dan hidangan pelengkap yang siap memanjakan lidah Anda.
            Setiap hidangan dibuat dengan bahan-bahan pilihan dan penuh cinta.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                description={item.description}
                imageSrc={item.image}
                altText={item.title}
              />
            ))}
          </div>
        </section>

        <section className="text-center bg-accent text-secondary p-10 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6">
            Pesan Sekarang!
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Siap menikmati kelezatan bakso kami? Kunjungi warung kami atau hubungi kami untuk pemesanan take away!
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="tel:+622112345678" className="inline-flex items-center bg-secondary text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors duration-300 shadow-md">
              <Phone size={20} className="mr-2" /> Telepon Kami
            </a>
            <a href="/kontak" className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-700 transition-colors duration-300 shadow-md">
              <ShoppingCart size={20} className="mr-2" /> Pesan Online (Segera!)
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ServicesPage;