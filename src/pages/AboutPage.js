import React from "react";
import AboutPic from "../assets/about-me-pic.jpg";
export default function AboutPage() {
  return (
    <div class="flex flex-row gap-8 flex-wrap w-3/4 m-auto">
      <div class="flex flex-col gap-6 bg-[#08386b] text-white align-middle justify-center items-center pt-12 pb-10 p-4 rounded-md max-w-[460px]">
        <img width="200" class="rounded-md" src={AboutPic} />
        <div class="flex flex-row flex-wrap gap-2">
          <h1 class="text-md font-semibold">💻Web Developer.</h1>
          <h1 class="text-md font-semibold">⚓Navy Veteran.</h1>
          <h1 class="text-md font-semibold">🌳Nature Fanatic.</h1>
        </div>
      </div>
      <div class="flex flex-col gap-6 bg-[#08386b] text-white align-middle justify-center items-center pt-12 pb-10 p-4 rounded-md max-w-[460px] text-center">
        <h1 class="text-2xl font-semibold">Facts</h1>
        <h1 class="text-md">
          Wisconsin born software developer currently based in Loveland,
          Colorado. I work as a Full Stack Software Developer & Instructor
        </h1>
        <h1 class="text-md">
          I'm passionate about anything & everything outdoors, fitness, and self-improvement
        </h1>
      </div>
    </div>
  );
}
