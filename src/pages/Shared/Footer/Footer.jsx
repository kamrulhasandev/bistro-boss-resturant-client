import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, } from "react-icons/fa";


const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-200 py-4">
      <div className="container mx-auto">
        <div className="md:flex  justify-around text-center items-center">
          <div className="flex flex-col">
            <h5 className="text-gray-600 font-semibold">Contact Us</h5>
            <p>123 ABS Street, Uni 21, Bangladesh</p>
            <p>+88 123456789</p>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>
          <div className="flex flex-col">
            <h5 className="text-gray-600 font-semibold">Follow Us</h5>
            <p>Join us on social media</p>
            <div className="flex gap-4 justify-center">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>
        </div>
        <p className="text-center text-gray-600 mt-4">Copyright © CulinaryCloud. All rights reserved.</p>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
