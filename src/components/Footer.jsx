import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            An E commerce web site is an online platform that facilates the
            buying and selling of products or services over internet.It serves
            as a virtual market place for those individuals
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5 ">COPMANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>{" "}
          </ul>
        </div>
        <div>
          <p className="text-xl mb-5 font-medium">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+94 713084265</li>
            <li>forever@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ forever.com - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
