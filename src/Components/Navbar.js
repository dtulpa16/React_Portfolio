import React, { useState } from "react";
import DIcon from "../assets/d-icon.png";
import { useNavigate } from "react-router-dom";
import ContactModal from "./ContactModal";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleClose = () => {
    setShow(false);
    setSubmitted(false);
  };
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  return (
    <div>
      <ul className="list-none flex gap-3 items-center md:justify-between justify-between align-middle h-20 md:h-24 w-3/4 mx-auto flex-row flex-wrap min-w-[340px] ">
        <div className="align-middle">
          <li onClick={() => navigate("/")}>
            <img alt="D Icon" className="rounded-lg cursor-pointer md:w-[55px] w-[35px]"  src={DIcon} />
          </li>
        </div>
        <div className="list-none flex md:gap-6 gap-3 align-middle justify-end ">
          <li
            onClick={() => navigate("/my-projects")}
            className=" hover:text-[#08386b] font-bold self-center md:text-xl text-base cursor-pointer transition-all  duration-150"
          >
            <h1>Projects</h1>
          </li>
          <li
            onClick={() => navigate("/about")}
            className=" hover:text-[#08386b] font-bold self-center md:text-xl text-base cursor-pointer transition-all duration-150"
          >
            <h1>About</h1>
          </li>
          <li
            onClick={handleShow}
            className=" hover:text-[#08386b] font-bold self-center md:text-xl text-base cursor-pointer transition-all duration-150"
          >
            <h1>Contact</h1>
          </li>
        </div>
      </ul>
      <ContactModal show={show} handleClose={handleClose} submitted={submitted} setSubmitted={setSubmitted}/>
    </div>
  );
}
