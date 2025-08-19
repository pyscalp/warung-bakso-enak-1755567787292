import React from 'react';
import { Image, Camera } from 'lucide-react';

function GalleryPage() {
  const galleryImages = [
    { src: "/images/gallery_bakso_1.svg", alt: "Bakso Komplit Lezat" },
    { src: "/images/gallery_bakso_2.svg", alt: "Bakso Urat Kenyal" },
    { src: "/images/gallery_warung_1.svg", alt: "Suasana Warung Nyaman" },
    { src: "/images/gallery_customer_1.svg", alt: "Pelanggan Senang Menikmati Bakso" },
    { src: "/images/gallery_bakso_3.svg", alt: "Bakso Telur Puyuh" },
    { src: "/images/gallery_warung_2.svg", alt: "Eksterior Warung Bakso Enak" },
    { src: "/images/gallery_bakso_4.svg", alt: "Mie Ayam Bakso Menggoda" },
    { src: "/images/gallery_customer_2.svg", alt: "Keluarga Menikmati Bakso" },
    { src: "/images/gallery_takeaway.svg", alt: "Pesanan Bakso Take Away" },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-primary mb-12">
          Galeri Warung Bakso Enak
        </h1>

        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-10">
          Lihatlah lebih dekat kelezatan bakso kami, suasana warung yang nyaman,
          dan momen-momen kebahagiaan pelanggan kami. Setiap gambar menceritakan
          kisah tentang kuah gurih dan bakso kenyal yang kami sajikan.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg group transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover object-center transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-center text-lg font-semibold px-4">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>

        <section className="text-center bg-secondary text-white p-10 rounded-lg shadow-lg mt-16">
          <h2 className="text-3xl font-bold mb-6">
            Abadikan Momen Anda!
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Kami senang melihat Anda menikmati bakso kami! Jangan ragu untuk berbagi
            foto pengalaman Anda di Warung Bakso Enak di media sosial.
            Tag kami dan gunakan hashtag #BaksoEnakJuara!
          </p>
          <div className="flex justify-center items-center text-accent">
            <Camera size={48} className="mr-4" />
            <span className="text-4xl font-extrabold">#BaksoEnakJuara</span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default GalleryPage;