import React from "react";
import HeadShot from "../assets/headshot2.png";
export default function HomePage() {
  return (
    <div
      className="rounded-lg mt-36 md:mt-36 flex flex-col w-4/6 m-auto items-center gap-4 justify-center align-middle text-center min-w-[340px] cursor-default"
    >
    <title>Welcome!</title>
      <img alt="Dan Tulpa Headshot" width="320" className="shadow-md shadow-grey-500 drop-shadow-md rounded-full mb-8 -mt-28 md:-mt-24" src={HeadShot} />
      <div className="flex flex-col md:gap-8 gap-6">
        <h1 className="md:text-6xl text-3xl mb-2 text-shadow-md text-white shadow-gray-400 font-bold">Hey there! 👋 The name's Dan.</h1>
        <h1 className="md:text-3xl text-xl mb-2 text-shadow-md text-white shadow-gray-400 font-semibold">I provide end-to-end solutions for any web development project.</h1>
        <h1 className="md:text-2xl text-lg mb-12 text-shadow-md text-white shadow-gray-400 font-semibold">Happy to have you here!</h1>
      </div>
    </div>
  );
}
