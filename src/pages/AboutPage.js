import React from "react";
import AboutPic from "../assets/about-me-pic.jpg";
export default function AboutPage() {

  return (
    <div class="flex flex-row gap-8 flex-wrap w-3/4 m-auto">
      <div class="flex flex-col gap-6 bg-[#08386b] text-white align-middle justify-center items-center pt-12 pb-10 p-4 rounded-md">
        <img width="200" class="rounded-sm" src={AboutPic} />
        <div class="flex flex-row flex-wrap gap-2">
          <h1 class="text-md font-semibold">💻 Web Developer</h1>
          <h1 class="text-md font-semibold">⚓ Navy Veteran</h1>
          <h1 class="text-md font-semibold">🌳 Nature Fanatic</h1>
        </div>
      </div>
      <div>World</div>
    </div>
  );
}
