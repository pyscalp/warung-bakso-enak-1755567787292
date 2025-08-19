import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-secondary text-white p-8 mt-auto">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Warung Bakso Enak</h3>
          <p className="text-sm">
            Menyajikan bakso dengan kuah gurih dan bakso kenyal yang tak terlupakan.
            Nikmati kelezatan sejati di setiap mangkuknya!
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Informasi</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/tentang" className="hover:text-accent transition-colors duration-300">Tentang Kami</Link>
            </li>
            <li>
              <Link to="/layanan" className="hover:text-accent transition-colors duration-300">Layanan</Link>
            </li>
            <li>
              <Link to="/galeri" className="hover:text-accent transition-colors duration-300">Galeri</Link>
            </li>
            <li>
              <Link to="/kontak" className="hover:text-accent transition-colors duration-300">Kontak</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Hubungi Kami</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <MapPin size={20} className="mr-2" />
              Jl. Kenyal No. 10, Kota Gurih, Indonesia
            </li>
            <li className="flex items-center">
              <Phone size={20} className="mr-2" />
              (021) 12345678
            </li>
            <li className="flex items-center">
              <Mail size={20} className="mr-2" />
              info@warungbaksoenak.com
            </li>
            <li className="flex items-center">
              <Clock size={20} className="mr-2" />
              Buka Setiap Hari: 10:00 - 22:00
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white border-opacity-20 mt-8 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Warung Bakso Enak. Semua Hak Dilindungi.
      </div>
    </footer>
  );
}

export default Footer;