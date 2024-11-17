// import React from "react";
import logo from '../../../public/ZenDcoders_Logo_Dark.png'

const Footer = () => {
  return (
    <footer className="px-4 py-8 bg-gray-100 text-[#ffffff]" style={{ background: 'linear-gradient(to right, #000000, #2C3E50)' }}>
      <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
        <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
          <div className="flex items-center justify-center flex-shrink-0 h-12 rounded-full ">
          <div className="text-white text-2xl font-bold">
                    {/* <Link to="/"> */}
                        <img src={logo} alt="Company Logo" className="h-[60px] w-auto" />
                    {/* </Link> */}
                </div>
          </div>
          <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
            <li>
              {/* <a rel="noopener noreferrer" href="#"> */}
                Copyright &copy; 2024 ZenDcoders - All Rights Reserved.
              {/* </a> */}
            </li>
            <li>
              <a rel="noopener noreferrer" href="#">
                {/* Privacy */}
              </a>
            </li>
          </ul>
        </div>
        <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8 text-[#ffffff]">
          <li>
            <a rel="noopener noreferrer text-[#ffffff]" href="https://www.instagram.com/zendcoders/?next=%2F&hl=en">
              Instagram
            </a>
          </li>
          {/* <li>
            <a rel="noopener noreferrer text-[#ffffff]" href="#">
              Facebook
            </a>
          </li> */}
          <li>
            <a rel="noopener noreferrer text-[#ffffff]" href="https://linkedin.com/in/zendcoders-admin-a2948b339">
              Linkedin
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
