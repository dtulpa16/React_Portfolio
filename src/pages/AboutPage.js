import React from "react";
import ReactIcon from "../assets/react.svg";
import AboutPic from "../assets/about-me-pic.jpg";
import CSSIcon from "../assets/css3.svg";
import DjangoIcon from "../assets/django.svg";
import MySQL from "../assets/mysql.svg";
import MongoIcon from "../assets/mongodb.svg";
import HTMLIcon from "../assets/html.jpg";
import NodeIcon from "../assets/node.jpg";
import TailwindIcon from "../assets/TailwindIcon.jpg";
import PythonIcon from "../assets/PythonIcon.jpg";

export default function AboutPage() {
  return (
    <div class="flex flex-col items-center justify-center align-middle">
      <title>About</title>
      <h1 class="text-center mt-4 text-4xl font-bold ">About</h1>
      <div class="flex flex-row gap-10 flex-wrap w-3/4 m-auto mt-14 justify-center content-center">
        <div class="flex flex-col flex-wrap gap-8 bg-[#08386b] text-white align-middle justify-center items-center pt-12 pb-10 p-4 rounded-md w-[460px] min-w-[350px] max-w-[460px]">
          <img
            alt="Dan Tulpa Headshot"
            width="200"
            class="rounded-md"
            src={AboutPic}
          />
          <div class="flex flex-row flex-wrap gap-2 justify-center">
            <h1 class="text-md font-semibold">💻Web Developer.</h1>
            <h1 class="text-md font-semibold">⚓Navy Veteran.</h1>
            <h1 class="text-md font-semibold">🌳Nature Fanatic.</h1>
          </div>
        </div>
        <div class="flex flex-col gap-4 bg-[#08386b] text-white align-middle justify-center items-center pt-12 pb-10 p-4 rounded-md w-[460px] min-w-[350px] max-w-[460px] text-center">
          <h1 class="text-2xl font-semibold">Facts</h1>
          <h1 class="text-md">
            Wisconsin born software developer currently based in Loveland,
            Colorado. I work as a Full Stack Software Developer and Instructor.
          </h1>
          <h1 class="text-md">
            I'm passionate about anything and everything outdoors, fitness, and
            self-improvement.
          </h1>
          <h1 class="text-2xl font-semibold">Tools</h1>
          <div class="flex flex-row gap-4 flex-wrap pr-8 pl-8 align-middle items-center justify-center">
            <a target="_blank" rel="noreferrer" href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started">
              <img
                alt="ReactJS"
                src={ReactIcon}
                width="42"
                height="42"
                class="border-[1px] rounded-lg p-[3px] border-black  transition-all duration-100 hover:scale-105 cursor-pointer bg-white"
              />
            </a>
            <a target="_blank" rel="noreferrer" href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django">
              <img
                alt="Django REST Framework"
                src={DjangoIcon}
                width="42"
                height="42"
                class="border-[1px] rounded-lg p-[3px] border-black  transition-all duration-100 hover:scale-105 cursor-pointer bg-white"
              />
            </a>
            <a target="_blank" rel="noreferrer" href="https://nodejs.org/en/docs/">
              <img
                alt="NodeJS"
                src={NodeIcon}
                width="42"
                height="42"
                class="border-[1px] rounded-lg p-[3px] border-black transition-all duration-100 hover:scale-105 cursor-pointer bg-white"
              />
            </a>
            <a target="_blank" rel="noreferrer" href="https://developer.mozilla.org/en-US/docs/Glossary/Python">
              <img
                alt="Python"
                src={PythonIcon}
                width="42"
                height="42"
                class="border-[1px] rounded-lg p-[3px] border-black transition-all duration-100 hover:scale-105 cursor-pointer bg-white"
              />
            </a>
            <a target="_blank" rel="noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/HTML">
              <img
                alt="HTML5"
                src={HTMLIcon}
                width="42"
                height="42"
                class="h-[42px] border-[1px] rounded-lg p-[3px] border-black transition-all duration-100 hover:scale-105 cursor-pointer bg-white"
              />
            </a>
            <a target="_blank" rel="noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/CSS">
              <img
                alt="CSS 3"
                src={CSSIcon}
                width="42"
                height="42"
                class="h-[42px] border-[1px] rounded-lg p-[3px] border-black transition-all duration-100 hover:scale-105 cursor-pointer bg-white"
              />
            </a>
            <a target="_blank" rel="noreferrer" href="https://tailwindcss.com/">
              <img
                alt="TailwindCSS"
                src={TailwindIcon}
                width="42"
                height="42"
                class="h-[42px] border-[1px] rounded-lg p-[3px] border-black transition-all duration-100 hover:scale-105 cursor-pointer bg-white"
              />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.mongodb.com/">
              <img
                alt="MongoDB"
                src={MongoIcon}
                width="42"
                height="42"
                class="border-[1px] rounded-lg p-[3px] border-black transition-all duration-100 hover:scale-105 cursor-pointer bg-white"
              />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.mysql.com/">
              <img
                alt="MySQL"
                src={MySQL}
                width="42"
                height="42"
                class="border-[1px] rounded-lg p-[3px] border-black transition-all duration-100 hover:scale-105 cursor-pointer bg-white"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
