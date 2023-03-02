import React from "react";
import DIcon from "../assets/d-icon.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate()
  return (
    <ul className="list-none flex gap-3 items-center justify-between align-middle h-20 pl-20 pr-20">
      <div className="align-middle">
        <li onClick={()=>navigate("/")}>
          <img className="rounded-lg cursor-pointer" width="50" src={DIcon} />
        </li>
      </div>
      <div className="list-none flex gap-6 align-middle justify-end ">
        <li onClick={()=>navigate("/my-projects")} className=" hover:text-blue-900 font-bold self-center text-xl cursor-pointer transition-all  duration-150">
          Projects
        </li>
        <li onClick={()=>navigate("/about")} className=" hover:text-blue-900 font-bold self-center text-xl cursor-pointer transition-all duration-150">
          About
        </li>
      </div>
    </ul>
  );
}
