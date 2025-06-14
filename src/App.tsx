import React, { useState } from 'react';
import { MapPin } from 'lucide-react'; // ⬅️ Add this to your imports
import { SiTiktok, SiTelegram } from 'react-icons/si';
import {
  Facebook,
  Instagram,
  MessageCircle,
  Share2,
  Heart,
  ExternalLink,
} from 'lucide-react';

const socialLinks = [
  {
    name: 'Facebook',
    icon: Facebook,
    url: 'https://www.facebook.com/share/15r9HQPQ33/?mibextid=wwXIfr',
    color: 'from-blue-600 to-blue-700',
    hoverColor: 'hover:from-blue-700 hover:to-blue-800',
  },
  {
    name: 'TikTok',
    icon: SiTiktok,
    url: 'https://www.tiktok.com/@misk.perfume46?_t=ZM-8x5ftevlT9B,&_r=1',
    color: 'from-black to-gray-800',
    hoverColor: 'hover:from-gray-900 hover:to-black',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://www.instagram.com/musk_perfume810?igsh=MWw2cWt5djY1c2pyZQ==&utm_source=ig_contact_invite',
    color: 'from-pink-500 via-red-500 to-yellow-500',
    hoverColor: 'hover:from-pink-600 hover:via-red-600 hover:to-yellow-600',
  },
  {
    name: 'Telegram',
    icon: SiTelegram,
    url: 'https://t.me/muskperfume810',
    color: 'from-sky-500 to-sky-700',
    hoverColor: 'hover:from-sky-600 hover:to-sky-800',
  },
  {
    name: 'WhatsApp',
    icon: MessageCircle,
    url: 'https://wa.me/1234567890',
    color: 'from-green-500 to-green-600',
    hoverColor: 'hover:from-green-600 hover:to-green-700',
  },
  {
    name: 'Location',
    icon: MapPin,
    url: 'https://maps.apple.com/place?map=hybrid&address=Ring+Road%2C+Bole%2C+Ethiopia&coordinate=8.980271%2C38.774301&name=My+Location',
    color: 'from-indigo-500 to-indigo-700',
    hoverColor: 'hover:from-indigo-600 hover:to-indigo-800',
  },
];

function App() {
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const handleShare = async (link: typeof socialLinks[0]) => {
    try {
      await navigator.clipboard.writeText(link.url);
      setCopiedLink(link.name);
      setTimeout(() => setCopiedLink(null), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  return (
    <div className="min-h-screen ">
      <div className="relative pt-16 pb-12">
  {/* Gradient + Blur Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-3xl"></div>

  {/* Content */}
  <div className="relative max-w-4xl mx-auto px-6 text-center">
    <img
      src="/images/logo.JPG"
      alt="Logo"
      className="mx-auto mb-6 w-32 h-auto object-contain rounded-xl shadow-md"
    />
    <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 mb-8 shadow-lg border border-white/20">
      <Heart className="w-5 h-5 text-red-500" />
      <span className="text-sm font-medium text-gray-700">Connect with us</span>
    </div>

    <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6 leading-tight">
      Let's Stay Connected
    </h1>

    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
      Join our community across all platforms and never miss an update. Follow us for the latest news, insights, and behind-the-scenes content.
    </p>

    <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <span>Currently online</span>
      </div>
      <div className="flex items-center gap-2">
        <Share2 className="w-4 h-4" />
        <span>Share with friends</span>
      </div>
    </div>
  </div>
</div>




      {/* Social Media Cards */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8">
          {socialLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${link.color} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`}
                ></div>

                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className="flex flex-col items-center space-y-4">
                    <div
                      className={`p-4 rounded-xl bg-gradient-to-r ${link.color} ${link.hoverColor} transition-all duration-300 group-hover:scale-110 shadow-lg`}
                    >
                      <link.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">
                      {link.name}
                    </h3>

                    <div className="flex gap-2 w-full z-10">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(link.url, '_blank');
                        }}
                        className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Visit
                      </button>

                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleShare(link);
                        }}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-lg transition-colors duration-200 relative"
                      >
                        <Share2 className="w-4 h-4" />
                        {copiedLink === link.name && (
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                            Copied!
                          </div>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center">
          <p className="text-gray-600 mb-4">
            Thank you for connecting with us! We're excited to share our journey with you.
          </p>
          <div className="flex justify-center items-center gap-2 text-sm text-gray-500">
            <Heart className="w-4 h-4 text-red-500" />
            <span>Made with love for our community</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
