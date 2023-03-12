import React from "react";
import HeadShot from "../assets/headshot2.png";
import ContactModal from "../Components/ContactModal";
import { useState } from "react";
export default function HomePage() {
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleClose = () => {
    setShow(false);
    setSubmitted(false);
  };
  const handleShow = () => setShow(true);
  return (
    <div
      className="rounded-lg mt-36 md:mt-36 flex flex-col w-4/6 m-auto items-center gap-4 justify-center align-middle text-center min-w-[340px] cursor-default"
    >
    <title>Welcome!</title>
      <img alt="Dan Tulpa Headshot" width="320" className="shadow-md shadow-grey-500 drop-shadow-md rounded-full mb-8 -mt-28 md:-mt-24" src={HeadShot} />
      <div className="flex flex-col md:gap-8 gap-6 items-center">
        <h1 className="md:text-5xl text-3xl mb-2 text-shadow-md text-white shadow-gray-400 font-bold">Hey there! 👋 The name's Dan.</h1>
        <h1 className="md:text-3xl text-xl mb-2 text-shadow-md text-white shadow-gray-400 font-semibold">I provide end-to-end solutions for any web development project.</h1>
        <h1 className="md:text-2xl text-lg text-shadow-md text-white shadow-gray-400 font-semibold">Happy to have you here!</h1>
        <button
            onClick={handleShow}
            class="bg-[#08386b] w-fit pt-1 pb-1 pl-4 pr-4 text-white text-lg font-semibold rounded-lg transition-all duration-120 hover:scale-105"
          >
            Work with me!
          </button>
      </div>
      <ContactModal show={show} handleClose={handleClose} submitted={submitted} setSubmitted={setSubmitted}/>
    </div>
  );
}
