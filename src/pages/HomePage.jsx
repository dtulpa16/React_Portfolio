import React from "react";
import HeadShot from "../assets/headshot.jpg";
export default function HomePage() {
  return (
    <div
      className=" rounded-lg mt-28 flex flex-col w-4/6 m-auto items-center gap-4 justify-center align-middle text-center min-w-[340px]"
    >
    <title>Welcome!</title>

      <img width="275" className=" border-gray-50 border border-solid rounded-full mb-3 -mt-24" src={HeadShot} />
      <h1 className="text-4xl font-bold mb-2">Howdy! 👋 The name's Dan.</h1>
      <h2 className="text-2xl font-bold mb-2">I provide end-to-end solutions for any web development project.</h2>
      <h3 className="text-xl font-bold mb-12">Happy to have you here!</h3>
    </div>
  );
}
