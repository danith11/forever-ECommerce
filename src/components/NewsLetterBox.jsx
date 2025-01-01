import React from "react";

const NewsLetterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Suscribe now & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        An E commerce web site is an online platform that facilates the buying
        and selling of products or services over internet.It serves as a virtual
        market place for those individuals
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          type="email"
          className="w-full sm:flex-1 outline-none"
          required
          placeholder="Enter your email"
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4"
        >
          SUBSRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
