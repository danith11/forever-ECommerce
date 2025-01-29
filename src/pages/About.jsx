import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";


const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px] "
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            {" "}
            An E commerce web site is an online platform that facilates the
            buying and selling of products or services over internet.It serves
            as a virtual market place for those individuals
          </p>
          <p>
            {" "}
            An E commerce web site is an online platform that facilates the
            buying and selling of products or services over internet.It serves
            as a virtual market place for those individuals
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            {" "}
            An E commerce web site is an online platform that facilates the
            buying and selling of products or services over internet.It serves
            as a virtual market place for those individuals
          </p>
        </div>
      </div>
      <div className="text-xl py-4  ">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 sm:px-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            {" "}
            An E commerce web site is an online platform that facilates the
            buying and selling of products or services over internet.It serves
            as a virtual market place for those individuals
          </p>
        </div>
        <div className="border px-10 md:px-16 sm:px-20 flex flex-col gap-5">
          <b>Convinence:</b>
          <p className="text-gray-600">
            {" "}
            An E commerce web site is an online platform that facilates the
            buying and selling of products or services over internet.It serves
            as a virtual market place for those individuals
          </p>
        </div>
        <div className="border px-10 md:px-16 sm:px-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            {" "}
            An E commerce web site is an online platform that facilates the
            buying and selling of products or services over internet.It serves
            as a virtual market place for those individuals
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
