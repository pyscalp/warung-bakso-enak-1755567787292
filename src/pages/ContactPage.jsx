import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

function ContactPage() {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-primary mb-12">
          Hubungi Kami
        </h1>

        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-10">
          Kami siap melayani Anda! Jangan ragu untuk menghubungi kami jika Anda memiliki
          pertanyaan, saran, atau ingin melakukan pemesanan.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Informasi Kontak</h2>
            <ul className="space-y-6 text-gray-700 text-lg">
              <li className="flex items-start">
                <MapPin size={28} className="mr-4 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold">Alamat Kami</h3>
                  <p>Jl. Kenyal No. 10, RT.05/RW.02, Kel. Gurih, Kec. Lezat, Kota Gurih, 12345, Indonesia</p>
                </div>
              </li>
              <li className="flex items-start">
                <Phone size={28} className="mr-4 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold">Telepon</h3>
                  <p>(021) 12345678</p>
                  <p>+62 812 3456 7890 (WhatsApp)</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail size={28} className="mr-4 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p>info@warungbaksoenak.com</p>
                  <p>reservasi@warungbaksoenak.com</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock size={28} className="mr-4 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold">Jam Operasional</h3>
                  <p>Setiap Hari: 10:00 - 22:00 WIB</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Kirim Pesan kepada Kami</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nama Lengkap</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Nama Anda"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="email@contoh.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">Subjek</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Pertanyaan atau Saran"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Pesan Anda</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Tulis pesan Anda di sini..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-primary hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition-colors duration-300"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>

        <section className="text-center bg-accent text-secondary p-10 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6">
            Temukan Kami di Peta!
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Kami menantikan kedatangan Anda untuk menikmati semangkuk bakso hangat
            dengan kuah gurih dan bakso kenyal yang legendaris.
          </p>
          {/* Placeholder for map, in a real app this would be an embedded map */}
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center text-gray-600 text-xl font-semibold">
            <MapPin size={48} className="mr-4" /> Lokasi Peta (Placeholder)
          </div>
          <a
            href="https://maps.google.com/?q=Jl.+Kenyal+No.+10,+Kota+Gurih"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-700 transition-colors duration-300 shadow-lg"
          >
            Lihat di Google Maps
          </a>
        </section>
      </div>
    </div>
  );
}

export default ContactPage;