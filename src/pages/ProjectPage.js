import React from "react";
import QQ from "../assets/qq.png";
import Jaunt from "../assets/jaunticon.jpg";
import Flex from "../assets/Screenshot_1.png";
import Task from "../assets/task.jpg";
import ReactLogo from "../assets/react.svg";
export default function ProjectPage() {
  return (
    <div>
      <h1 class="text-center mt-8 text-5xl font-bold">Projects</h1>
      <div class="flex flex-wrap justify-center text-center items-center gap-6 mt-20">
        <div class="h-250 min-h-[266px] transition-all duration-100 hover:scale-105 cursor-pointer p-3 w-64 rounded-md gap-4 bg-white flex flex-col justify-center items-center mt-10">
          <img src={Jaunt} width="120" class="rounded-full -mt-16 border-2 border-white-800/900" />
          <h1 class="text-black text-2xl font-bold">Jaunt</h1>
          <h1 class="text-black text-sm font-semibold">
            Fitness application for clients and trainers that generates custom
            workout and diet plans based on physical characteristics and fitness
            goals.
          </h1>
        </div>
        <div class="h-250 min-h-[266px] transition-all duration-100 hover:scale-105 cursor-pointer p-3 w-64 rounded-md gap-4 bg-white flex flex-col justify-center items-center mt-10">
          <img src={Flex} width="120" class="rounded-full -mt-16 border-2 border-white-800/900" />
          <h1 class="text-black text-2xl font-bold">Flex Bot</h1>
          <h1 class="text-black text-sm font-semibold">
            An efficient tool for instructors to manage student meetings and
            track progress using Slack and Notion Database.
          </h1>
        </div>
        <div class="h-250 min-h-[266px] transition-all duration-100 hover:scale-105 cursor-pointer p-3 w-64 rounded-md gap-4 bg-white flex flex-col justify-center items-center mt-10">
          <img src={QQ} width="120" class="rounded-full -mt-16 border-2 border-white-800/900" />
          <h1 class="text-black text-2xl font-bold">Question Queue Bot</h1>
          <h1 class="text-black text-sm font-semibold">
            A Slack bot designed to streamline the process of students seeking
            help from the Instructor Team.
          </h1>
        </div>
        <div class="h-250 min-h-[266px] transition-all duration-100 hover:scale-105 cursor-pointer p-3 w-64 rounded-md gap-4 bg-white flex flex-col justify-center items-center mt-10">
          <img src={Task} width="120" class="rounded-full -mt-16 border-2 border-white-800/900" />
          <h1 class="text-black text-2xl font-bold">Task Manager</h1>
          <h1 class="text-black text-xs font-semibold">
            A Slack bot that streamlines task management by enabling managers to
            assign tasks to employees using a simple Slack command. The bot
            integrates with Notion API to create and update tasks automatically,
            saving time and effort.
          </h1>
        </div>
        {/* <div class="h-250 transition-all duration-100 hover:scale-105 cursor-pointer p-3 w-52 rounded-lg gap-2 bg-blue-900 flex flex-col justify-center items-center">
          <img src={QQ} width="200" />
          <h1>Project Name</h1>
        </div> */}
      </div>
    </div>
  );
}
