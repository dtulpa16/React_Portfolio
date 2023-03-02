import React from "react";
import QQ from "../assets/qq.png";
import Jaunt from "../assets/jaunticon.jpg";
import Flex from "../assets/Screenshot_1.png";
import Task from "../assets/task.jpg";
export default function ProjectPage() {
  return (
    <div>
    <h1 class="text-center mt-8 text-5xl font-bold">Projects</h1>
      <div class="flex flex-wrap justify-center items-center gap-6 mt-20">
        <div class="h-250 transition-all duration-100 hover:scale-105 cursor-pointer p-3 w-52 rounded-md gap-2 bg-blue-900 flex flex-col justify-center items-center">
          <img src={Jaunt} width="200" class="rounded-md" />
          <h1>Jaunt</h1>
        </div>
        <div class="h-250 transition-all duration-100 hover:scale-105 cursor-pointer p-3 w-52 rounded-md gap-2 bg-blue-900 flex flex-col justify-center items-center">
          <img src={Flex} width="200" class="rounded-md" />
          <h1>Flex Bot</h1>
        </div>
        <div class="h-250 transition-all duration-100 hover:scale-105 cursor-pointer p-3 w-52 rounded-md gap-2 bg-blue-900 flex flex-col justify-center items-center">
          <img src={QQ} width="200" class="rounded-md" />
          <h1>Question Queue Bot</h1>
        </div>
        <div class="h-250 transition-all duration-100 hover:scale-105 cursor-pointer p-3 w-52 rounded-md gap-2 bg-blue-900 flex flex-col justify-center items-center">
          <img src={Task} width="200" class="rounded-md" />
          <h1>Task Manager</h1>
        </div>
        {/* <div class="h-250 transition-all duration-100 hover:scale-105 cursor-pointer p-3 w-52 rounded-lg gap-2 bg-blue-900 flex flex-col justify-center items-center">
          <img src={QQ} width="200" />
          <h1>Project Name</h1>
        </div> */}
      </div>
    </div>
  );
}
