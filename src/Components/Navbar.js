import React from "react";
import DIcon from "../assets/d-icon.png";

export default function Navbar() {
  return (
    <ul className="list-none flex gap-3 items-center justify-between align-middle h-20 pl-12 pr-12">
      <div className="align-middle">
        <li>
          <img className="rounded-lg" width="42" src={DIcon} />
        </li>
      </div>
      <div className="list-none flex gap-3 align-middle justify-end ">
        <li className=" hover:text-blue-900 font-bold self-center text-xl cursor-pointer transition-all duration-150">
          About
        </li>
        <li className=" hover:text-blue-900 font-bold self-center text-xl cursor-pointer transition-all  duration-150">
          Projects
        </li>
      </div>
    </ul>
  );
}
