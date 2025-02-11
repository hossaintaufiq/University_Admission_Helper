import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* About Section */}
          <div>
            <h2 className="text-lg font-semibold text-white">Neptune Software Solutions</h2>
            <p className="mt-2 text-sm text-gray-400">
              Crafting reliable tech solutions since 2022.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-white font-semibold">Quick Links</h3>
            <a href="./" className="hover:text-white">Home</a>
            <a href="./about" className="hover:text-white">About Us</a>
            <a href="./contact" className="hover:text-white">Contact</a>
            {/* <a href="#" className="hover:text-white">Careers</a> */}
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-semibold">Follow Us</h3>
            <div className="flex space-x-4 mt-3">
              <a href="https://www.facebook.com/mdhossainahmmed.taufiq/" className="text-gray-400 hover:text-white" target="blank" >
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.instagram.com/hossain_ahmmed_taufiq/" className="text-gray-400 hover:text-white" target="blank">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com/in/hossain-ahmmed-129b29253/" className="text-gray-400 hover:text-white" target="blank">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 my-6" />

        {/* Bottom Section */}
        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Neptune Software Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
