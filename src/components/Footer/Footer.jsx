import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-between items-center py-14 px-4 md:px-24 bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        {/* Contact Information Section */}
        <div className="footer-contact flex flex-col items-start mb-8 md:mb-0">
          <Link to="/" className="text-3xl font-bold tracking-wider mb-4">
            <span className="text-red-500">Book</span>Finder
          </Link>

          {/* Email Contact */}
          <p className="flex items-center mb-2 text-gray-200 cursor-pointer">
            <FaEnvelope className="mr-2" /> support@bookfinder.com
          </p>

          {/* Phone Contact */}
          <p className="flex items-center mb-3 text-gray-200">
            <FaPhone className="mr-2" /> +123 456 7890
          </p>

          {/* LinkedIn & GitHub */}
          <div className="footer-social flex space-x-4">
            <a
              href="https://www.linkedin.com/in/rutuja-khade-0b1b47222/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 cursor-pointer"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/rutujakhade11/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 cursor-pointer"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>

        {/* Company Section */}
        <section className="footer-company-info mb-4 md:mb-0">
          <div id="company-section" className="mb-2">
            <h3 className="font-semibold text-2xl">Company</h3>
            <div className="w-[310px] h-1 bg-yellow-400 my-3 rounded-full"></div>
          </div>

          <ul className="flex flex-col md:flex-row gap-4 md:gap-14">
            <div>
              <li>
                <Link
                  to="/about"
                  className="cursor-pointer text-gray-200 hover:text-purple-500 transition-all"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="cursor-pointer text-gray-200 hover:text-purple-500 transition-all"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="cursor-pointer text-gray-200 hover:text-purple-500 transition-all"
                >
                  FAQ
                </Link>
              </li>
            </div>

            <div>
              <li>
                <Link
                  to="#"
                  className="cursor-pointer text-gray-200 hover:text-purple-500 transition-all"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="cursor-pointer text-gray-200 hover:text-purple-500 transition-all"
                >
                  Terms and Conditions
                </Link>
              </li>
            </div>
          </ul>
        </section>

        {/* Products Section */}
        <section className="footer-products">
          <div id="product-section" className="mb-2">
            <h3 className="font-semibold text-2xl">Products</h3>
            <div className="w-[310px] h-1 bg-yellow-400 my-3 rounded-full"></div>
          </div>

          <ul className="flex flex-col md:flex-row gap-4 md:gap-14">
            <div>
              <li>
                <a
                  href="#"
                  className="cursor-pointer text-gray-200 hover:text-purple-500 transition-all"
                >
                  BookLibrary
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="cursor-pointer text-gray-200 hover:text-purple-500 transition-all"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="cursor-pointer text-gray-200 hover:text-purple-500 transition-all"
                >
                  Blog
                </a>
              </li>
            </div>

            <div>
              <li>
                <a
                  href="#"
                  className="cursor-pointer text-gray-200 hover:text-purple-500 transition-all"
                >
                  Become an affiliate
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="cursor-pointer text-gray-200 hover:text-purple-500 transition-all"
                >
                  Help
                </a>
              </li>
            </div>
          </ul>
        </section>
      </div>

      {/* Footer Bottom */}
      <div id="copyrights" className="text-center mt-8 md:-mb-8">
        <h3 className="text-gray-200">
          © Copyrights. All Rights Reserved | Made by {" "}
          <a
            href="https://github.com/rutujakhade11/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:text-purple-500 transition-all"
          >
            Rutuja Khade
          </a>
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
