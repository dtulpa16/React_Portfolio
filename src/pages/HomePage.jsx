import React from "react";
import HeadShot from "../assets/headshot.jpg";
export default function HomePage() {
  return (
    <div
      className="bg-blue-900 rounded-lg  mt-24 flex flex-col w-4/6 m-auto items-center gap-4"
    >
      <img width="275" className="rounded-full mb-3 -mt-24" src={HeadShot} />
      <h1 className="text-2xl font-bold mb-2">Howdy! 👋 The name's Dan</h1>
      <h2 className="text-xl font-bold mb-2">I provide end-to-end solutions for any web development project.</h2>
      <h3 className="text-l font-bold mb-12">Happy to have you here!</h3>
    </div>
  );
}
