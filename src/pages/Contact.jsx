import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-20">
        <img src={assets.contact_img} className="w-full max-w-[480px]" alt="" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl to-gray-600">Our Store</p>
          <p className="text-gray-500 ">
            Keenagahena, Dalkada, Bombuwala <br /> Sri Lanka
          </p>
          <p className="text-gray-500">
            Tel : (+94) 713084265 <br /> forever@gmail.com
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Careers at Forever
          </p>
          <p className="text-gray-500 ">
            Learn more about our team and job openings
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transction-all duration-500 ">
            Explore Jobs
          </button>{" "}
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  );
};

export default Contact;
