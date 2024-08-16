import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
        <div className="text-center md:text-left mb-4 md:mb-0 ml-4">
          <h2 className="text-lg font-semibold mb-2">Company Name</h2>
          <p className="text-sm mb-2">
            1234 Street Address, City, State, 56789
          </p>
          <p className="text-sm mb-2">
            © 2024 Company Name. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-4 mb-4 md:mb-0 mr-4">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaLinkedinIn size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
