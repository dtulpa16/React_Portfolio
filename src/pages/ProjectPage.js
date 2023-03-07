import React from "react";
import QQ from "../assets/qq.png";
import Jaunt from "../assets/jaunticon.jpg";
import Flex from "../assets/Screenshot_1.png";
import Task from "../assets/task.jpg";
import ReactLogo from "../assets/react.svg";
import MuiIcon from "../assets/mui.jpg";
import CSSIcon from "../assets/css3.svg";
import DjangoIcon from "../assets/django.svg";
import MySQL from "../assets/mysql.svg";
import SeleniumIcon from "../assets/selenium-logo-.jpg";
import ExpressIcon from "../assets/expressjs.jpg";
import SlackIcon from "../assets/slack-logo.svg";
import NotionIcon from "../assets/notion.svg";
import MongoIcon from "../assets/mongodb.svg";
import AWSIcon from "../assets/aws.svg";
import OpenAiIcon from "../assets/openai.svg";
import PostmanIcon from "../assets/postman.svg"
import NgrokIcon from "../assets/Ngrok.jpg"
import BootstrapIcon from "../assets/bootstrap.svg"

export default function ProjectPage() {
  return (
    <div class="w-[97%] m-auto ">
    <title>Projects</title>
      <h1 class="text-center mt-4 text-4xl font-bold">Projects</h1>
      <div class="flex flex-wrap justify-center text-center items-center gap-6 mt-14">
      <a href="http://ec2-34-204-82-92.compute-1.amazonaws.com">
        <div class=" cursor-pointer h-250 min-h-[266px] transition-all duration-10 p-3 text-white w-72 shadow-md shadow-slate-800 drop-shadow-sm  rounded-sm gap-4 bg-[#08386b] flex flex-col justify-center items-center mt-10 border-[1.5px] border-black">
          <img alt="" src={Jaunt} width="120" class="rounded-full -mt-16 border-[1.5px] border-black shadow-sm shadow-slate-800 drop-shadow-sm " />
          <h1 class=" text-2xl font-bold mt-2">Jaunt</h1>
          <h1 class="text-sm min-h-[100px]">
            Fitness application for clients and trainers that generates custom
            workout and diet plans based on physical characteristics and fitness
            goals.
          </h1>
          <h1 class="text-xl font-bold">Tools</h1>
          <div class="flex flex-row gap-1 flex-wrap pr-2 pl-2 align-middle items-center justify-center">
            <img alt="" src={ReactLogo} width="42" height="42" class="border-[1px] rounded-lg p-[3px] border-black  transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
            <img alt="" src={MuiIcon} width="42" height="42" class="border-[1px] rounded-lg p-[3px] border-black  transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
            <img alt="" src={CSSIcon} width="42" height="42" class="border-[1px] rounded-lg p-[3px] border-black transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
            <img alt="" src={DjangoIcon} width="42" height="42" class="border-[1px] rounded-lg p-[3px] border-black transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
            <img alt="" src={MySQL} width="42" height="42" class="border-[1px] rounded-lg p-[3px] border-black transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
            <img alt="" src={SeleniumIcon} width="42" height="42" class="border-[1px] rounded-lg p-[3px] border-black transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
            <img alt="" src={AWSIcon} width="42" class="h-[42px] object-contain border-[1px] rounded-lg p-[3px] border-black transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
            <img alt="" src={BootstrapIcon} width="42" height="42" class="border-[1px] rounded-lg p-[3px] border-black transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
          </div>
        </div>
      </a>
        <div class="h-250 min-h-[266px] transition-all duration-10 cursor-default  p-3 text-white w-72 shadow-md shadow-slate-800 drop-shadow-sm rounded-sm gap-4 bg-[#08386b] flex flex-col justify-center items-center mt-10 border-[1.5px] border-black">
          <img alt="" src={Flex} width="120" class="rounded-full -mt-16 border-[1px] border-black-800/900  shadow-sm shadow-slate-300 drop-shadow-sm" />
          <h1 class="text-2xl font-bold mt-2">Flex Bot</h1>
          <h1 class="text-sm min-h-[100px]">
            An efficient tool for instructors to manage student meetings and
            track progress using Slack and Notion Database.
          </h1>
          <h1 class="text-xl font-bold">Tools</h1>
          <div class="flex flex-row gap-1 flex-wrap pr-2 pl-2 align-middle items-center justify-center">
            <img alt="" src={ExpressIcon} width="42" height="42" class="border-[1px] rounded-lg p-[3px] border-black  transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
            <img alt="" src={SlackIcon} width="42" height="42" class="border-[1px] rounded-lg p-[3px] border-black  transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
            <img alt="" src={NotionIcon} width="42" height="42" class=" border-[1px] rounded-lg p-[3px] border-black transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
            <img alt="" src={OpenAiIcon} width="42" height="42" class="h-[42px] border-[1px] rounded-lg p-[3px] border-black transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
            <img alt="" src={MongoIcon} width="42" height="42" class="border-[1px] rounded-lg p-[3px] border-black transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
            <img alt="" src={NgrokIcon} width="42" height="42" class="border-[1px] rounded-lg p-[3px] border-black transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
            <img alt="" src={PostmanIcon} width="42" height="42" class="border-[1px] rounded-lg p-[3px] border-black transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
          </div>
        </div>
        <div class="h-250 min-h-[266px] transition-all duration-10 cursor-default  p-3 text-white w-72 rounded-sm gap-4 shadow-md shadow-slate-800 drop-shadow-sm  bg-[#08386b] flex flex-col justify-center items-center mt-10 border-[1.5px] border-black">
          <img alt="" src={QQ} width="120" class="rounded-full -mt-16 border-[1px] border-black-800/900  shadow-sm shadow-slate-300 drop-shadow-sm" />
          <h1 class="text-2xl font-bold mt-2">Question Queue Bot</h1>
          <h1 class="text-sm min-h-[100px]">
            A Slack bot designed to streamline the process of students seeking
            help from the Instructor Team.
          </h1>
          <h1 class="text-xl font-bold">Tools</h1>
          <div class="flex flex-row gap-1 flex-wrap pr-2 pl-2 align-middle items-center justify-center">
            <img alt="" src={ExpressIcon} width="42" height="42" class="border-[1px] rounded-lg p-[3px] border-black  transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
            <img alt="" src={SlackIcon} width="42" height="42" class="border-[1px] rounded-lg p-[3px] border-black  transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
            <img alt="" src={NotionIcon} width="42" height="42" class="border-[1px] rounded-lg p-[3px] border-black transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
            <img alt="" src={OpenAiIcon} width="42" height="42" class="h-[42px] border-[1px] rounded-lg p-[3px] border-black transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
            <img alt="" src={MongoIcon} width="42" height="42" class="border-[1px] rounded-lg p-[3px] border-black transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
            <img alt="" src={NgrokIcon} width="42" height="42" class="border-[1px] rounded-lg p-[3px] border-black transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
            <img alt="" src={PostmanIcon} width="42" height="42" class="border-[1px] rounded-lg p-[3px] border-black transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
          </div>
        </div>
        <div class="h-250 min-h-[266px] transition-all duration-10 cursor-default  p-3 text-white w-72 rounded-sm gap-4 shadow-md shadow-slate-800 drop-shadow-sm  bg-[#08386b] flex flex-col justify-center items-center mt-10 border-[1.5px] border-black">
          <img alt="" src={Task} width="120" class="rounded-full -mt-16 border-[1px] border-black-800/900  shadow-sm shadow-slate-300 drop-shadow-sm" />
          <h1 class="text-2xl font-bold mt-2">Task Manager</h1>
          
          <h1 class="text-sm min-h-[100px]">
            A Slack bot that streamlines task management. The bot
            integrates with Notion API to create and update tasks automatically,
            saving time and effort.
          </h1>
      
          <h1 class="text-xl font-bold">Tools</h1>
          <div class="flex flex-row gap-1 flex-wrap pr-2 pl-2 align-middle items-center justify-center">
            <img alt="" src={ExpressIcon} width="42" height="42" class="border-[1px] rounded-lg p-[3px] border-black  transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
            <img alt="" src={SlackIcon} width="42" height="42" class="border-[1px] rounded-lg p-[3px] border-black  transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
            <img alt="" src={NotionIcon} width="42" height="42"class="border-[1px] rounded-lg p-[3px] border-black transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
            <img alt="" src={OpenAiIcon} width="42" height="42" class="h-[42px] border-[1px] rounded-lg p-[3px] border-black transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
            <img alt="" src={MongoIcon} width="42" height="42" class="border-[1px] rounded-lg p-[3px] border-black transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
            <img alt="" src={NgrokIcon} width="42" height="42" class="border-[1px] rounded-lg p-[3px] border-black transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
            <img alt="" src={PostmanIcon} width="42" height="42" class="border-[1px] rounded-lg p-[3px] border-black transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
          </div>
        </div>
        {/* <div class="h-250 transition-all duration-100 hover:scale-105 cursor-pointer p-3 w-52 rounded-lg gap-2 bg-blue-900 flex flex-col justify-center items-center">
          <img alt="" src={QQ} width="200" />
          <h1>Project Name</h1>
        </div> */}
      </div>
    </div>
  );
}
