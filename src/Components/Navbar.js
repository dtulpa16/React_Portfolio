import React from "react";
import DIcon from "../assets/d-icon.png";

export default function Navbar() {
  return (
    <div class="">
      <ul class="list-none flex gap-3 justify-between align-middle pt-6">
        <div class="align-middle">
          <li>
            <img class="rounded-lg" width="42" src={DIcon} />
          </li>
        </div>
        <div class="list-none flex gap-3 align-middle justify-end ">
          <li class=" hover:text-blue-900 font-bold self-center text-xl cursor-pointer transition-all duration-150">
            About
          </li>
          <li class=" hover:text-blue-900 font-bold self-center text-xl cursor-pointer transition-all  duration-150">
            Projects
          </li>
        </div>
      </ul>
    </div>
  );
}
