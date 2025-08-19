import React from 'react';
import HeroSection from '../components/HeroSection';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

function HomePage() {
  const featuredItems = [
    {
      title: "Bakso Original",
      description: "Bakso daging sapi asli dengan kuah kaldu gurih yang khas.",
      image: "/images/bakso_original.svg"
    },
    {
      title: "Bakso Urat Spesial",
      description: "Bakso urat kenyal dengan tekstur yang memanjakan lidah.",
      image: "/images/bakso_urat.svg"
    },
    {
      title: "Bakso Telur Puyuh",
      description: "Bakso lezat berisi telur puyuh, favorit keluarga.",
      image: "/images/bakso_telur.svg"
    }
  ];

  return (
    <div className="bg-gray-50">
      <HeroSection />

      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Mengapa Memilih Warung Bakso Enak?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Kami berkomitmen menyajikan bakso terbaik dengan resep turun-temurun.
            Setiap mangkuk adalah perpaduan sempurna antara kuah gurih yang kaya rasa
            dan bakso kenyal yang dibuat dari daging pilihan.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img src="/images/fresh_ingredients.svg" alt="Bahan Segar" className="h-20 w-20 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Bahan Segar Pilihan</h3>
              <p className="text-gray-600">
                Kami hanya menggunakan daging sapi segar dan bahan-bahan alami terbaik.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img src="/images/secret_recipe.svg" alt="Resep Rahasia" className="h-20 w-20 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Resep Rahasia Keluarga</h3>
              <p className="text-gray-600">
                Kuah gurih kami dibuat dengan resep rahasia yang telah diwariskan turun-temurun.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img src="/images/hygiene.svg" alt="Kebersihan Terjamin" className="h-20 w-20 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Kebersihan Terjamin</h3>
              <p className="text-gray-600">
                Proses pengolahan dan penyajian kami selalu menjaga standar kebersihan tertinggi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
            Menu Unggulan Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredItems.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                description={item.description}
                imageSrc={item.image}
                altText={item.title}
              />
            ))}
          </div>
          <div className="mt-12">
            <Link
              to="/layanan"
              className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-600 transition-colors duration-300 shadow-lg"
            >
              Lihat Semua Menu
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Pengalaman Makan yang Nyaman
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Nikmati bakso favorit Anda di tempat kami yang nyaman dan bersih,
            atau bawa pulang untuk dinikmati bersama keluarga di rumah.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
            <div className="text-center">
              <img src="/images/dine_in.svg" alt="Makan di Tempat" className="h-32 w-32 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Makan di Tempat</h3>
              <p className="text-gray-600">Suasana hangat dan ramah.</p>
            </div>
            <div className="text-center">
              <img src="/images/takeaway_box.svg" alt="Bawa Pulang" className="h-32 w-32 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Bawa Pulang</h3>
              <p className="text-gray-600">Praktis dan siap dinikmati.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;