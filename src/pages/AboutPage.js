import React from "react";
import ReactIcon from "../assets/react.svg"
import AboutPic from "../assets/about-me-pic.jpg";
import CSSIcon from "../assets/css3.svg";
import DjangoIcon from "../assets/django.svg";
import MySQL from "../assets/mysql.svg";
import MongoIcon from "../assets/mongodb.svg";
import HTMLIcon from "../assets/html.jpg"
import NodeIcon from "../assets/node.jpg"
import TailwindIcon from "../assets/TailwindIcon.jpg"
import PythonIcon from "../assets/PythonIcon.jpg"

export default function AboutPage() {
  return (
    <div class="flex flex-row gap-8 flex-wrap w-3/4 m-auto">
      <div class="flex flex-col gap-6 bg-[#08386b] text-white align-middle justify-center items-center pt-12 pb-10 p-4 rounded-md min-w-[460px]">
        <img width="200" class="rounded-md" src={AboutPic} />
        <div class="flex flex-row flex-wrap gap-2">
          <h1 class="text-md font-semibold">💻Web Developer.</h1>
          <h1 class="text-md font-semibold">⚓Navy Veteran.</h1>
          <h1 class="text-md font-semibold">🌳Nature Fanatic.</h1>
        </div>
      </div>
      <div class="flex flex-col gap-4 bg-[#08386b] text-white align-middle justify-center items-center pt-12 pb-10 p-4 rounded-md max-w-[460px] text-center">
        <h1 class="text-2xl font-semibold">Facts</h1>
        <h1 class="text-md">
          Wisconsin born software developer currently based in Loveland,
          Colorado. I work as a Full Stack Software Developer & Instructor
        </h1>
        <h1 class="text-md">
          I'm passionate about anything & everything outdoors, fitness, and self-improvement
        </h1>
        <h1 class="text-2xl font-semibold">Tools</h1>
        <div class="flex flex-row gap-4 flex-wrap pr-2 pl-2 align-middle items-center justify-center">
            <img src={ReactIcon} width="42" height="42" class="border-[1px] rounded-lg p-[3px] border-black  transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
            <img src={DjangoIcon} width="42" height="42" class="border-[1px] rounded-lg p-[3px] border-black  transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
            <img src={NodeIcon} width="42" height="42" class="border-[1px] rounded-lg p-[3px] border-black transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
            <img src={PythonIcon} width="42" height="42" class="border-[1px] rounded-lg p-[3px] border-black transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
            <img src={HTMLIcon} width="42" height="42"class="h-[42px] border-[1px] rounded-lg p-[3px] border-black transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
            <img src={CSSIcon} width="42" height="42" class="h-[42px] border-[1px] rounded-lg p-[3px] border-black transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
            <img src={TailwindIcon} width="42" height="42" class="h-[42px] border-[1px] rounded-lg p-[3px] border-black transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
            <img src={MongoIcon} width="42" height="42" class="border-[1px] rounded-lg p-[3px] border-black transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
            <img src={MySQL} width="42" height="42" class="border-[1px] rounded-lg p-[3px] border-black transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
          </div>
      </div>
    </div>
  );
}
