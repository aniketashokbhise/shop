import { RiFacebookCircleFill, RiInstagramFill } from "@remixicon/react";

function Footer(){
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      {/* Newsletter */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-white">
                Subscribe to our Newsletter
              </h2>
              <p className="text-gray-400 mt-2">
                Get updates about new products and special offers.
              </p>
            </div>

            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full md:w-80 px-4 py-3 rounded-l-lg text-white outline-none border-2"
              />

              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-r-lg text-white font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              ShopEase
            </h2>

            <p className="text-gray-400">
              Your one-stop destination for shopping.
              Discover quality products at the best prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Products
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Customer Service
            </h3>

            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white">
                  FAQs
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Shipping Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Return Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Contact Info
            </h3>

            <p className="mb-2">
              📍 Ahmednagar, Maharashtra
            </p>

            <p className="mb-2">
              📞 +91 9876543210
            </p>

            <p>
              ✉ support@shopease.com
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition"
              >
                
              </a>

              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 transition"
              >

              </a>

              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-sky-500 transition"
              >
              </a>

              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition"
              >
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-5 text-center">
          <p className="text-gray-400">
            © 2026 ShopEase. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;