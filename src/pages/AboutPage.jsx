import React from 'react';
import { Users, Star, Heart } from 'lucide-react';

function AboutPage() {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-primary mb-12">
          Tentang Warung Bakso Enak
        </h1>

        <section className="mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img src="/images/warung_interior.svg" alt="Interior Warung Bakso Enak" className="rounded-lg shadow-lg w-full h-auto object-cover" />
            </div>
            <div className="md:w-1/2 text-gray-700">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">Kisah Kami</h2>
              <p className="mb-4 leading-relaxed">
                Warung Bakso Enak bermula dari kecintaan kami terhadap kuliner bakso tradisional.
                Didirikan pada tahun 20XX, kami memulai perjalanan dengan satu tujuan:
                menyajikan bakso dengan cita rasa otentik yang mampu menghadirkan kenangan
                masa kecil dan kehangatan keluarga. Resep kuah gurih dan bakso kenyal kami
                adalah warisan turun-temurun yang telah disempurnakan selama bertahun-tahun.
              </p>
              <p className="leading-relaxed">
                Setiap mangkuk bakso yang kami sajikan adalah hasil dari dedikasi,
                pemilihan bahan baku terbaik, dan proses pembuatan yang higienis.
                Kami percaya bahwa kelezatan sejati berasal dari hati, dan itulah
                yang kami tuangkan dalam setiap hidangan kami.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            Visi & Misi Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center text-primary mb-3">
                <Star size={32} className="mr-3" />
                <h3 className="text-2xl font-bold">Visi</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Menjadi warung bakso pilihan utama yang dikenal akan kelezatan kuah gurih
                dan bakso kenyalnya, serta memberikan pengalaman kuliner yang tak terlupakan
                bagi setiap pelanggan.
              </p>
            </div>
            <div>
              <div className="flex items-center text-primary mb-3">
                <Heart size={32} className="mr-3" />
                <h3 className="text-2xl font-bold">Misi</h3>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed">
                <li>Menyajikan bakso berkualitas tinggi dengan bahan-bahan segar dan resep otentik.</li>
                <li>Menciptakan suasana warung yang nyaman, bersih, dan ramah bagi semua pengunjung.</li>
                <li>Terus berinovasi dalam menu untuk memenuhi selera pelanggan yang beragam.</li>
                <li>Menjaga standar kebersihan dan pelayanan prima di setiap aspek operasional.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="text-center bg-secondary text-white p-10 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6">
            Bergabunglah dengan Keluarga Bakso Enak!
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Kami bangga menjadi bagian dari komunitas dan selalu berusaha memberikan yang terbaik.
            Datang dan rasakan sendiri kelezatan bakso kami yang telah memikat banyak hati.
          </p>
          <div className="flex justify-center items-center text-accent">
            <Users size={48} className="mr-4" />
            <span className="text-4xl font-extrabold">Ribuan Pelanggan Puas!</span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;