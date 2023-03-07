import React, { useState } from "react";
import DIcon from "../assets/d-icon.png";
import { useNavigate } from "react-router-dom";
import GifModal from "./GifModal";

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
      <ul className="list-none flex gap-3 items-center justify-between align-middle h-20 w-3/4 mx-auto flex-row flex-wrap min-w-[340px]">
        <div className="align-middle">
          <li onClick={() => navigate("/")}>
            <img className="rounded-lg cursor-pointer" width="50" src={DIcon} />
          </li>
        </div>
        <div className="list-none flex gap-6 align-middle justify-end ">
          <li
            onClick={() => navigate("/my-projects")}
            className=" hover:text-[#08386b] font-bold self-center text-xl cursor-pointer transition-all  duration-150"
          >
            Projects
          </li>
          <li
            onClick={() => navigate("/about")}
            className=" hover:text-[#08386b] font-bold self-center text-xl cursor-pointer transition-all duration-150"
          >
            About
          </li>
          <li
            onClick={handleShow}
            className=" hover:text-[#08386b] font-bold self-center text-xl cursor-pointer transition-all duration-150"
          >
            Contact
          </li>
        </div>
      </ul>
      <GifModal show={show} handleClose={handleClose} submitted={submitted} setSubmitted={setSubmitted}/>
    </div>
  );
}
