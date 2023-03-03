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
    <div>
      <h1 class="text-center mt-4 text-5xl font-bold">Projects</h1>
      <div class="w-[97%] m-auto flex flex-wrap justify-center text-center items-center gap-6 mt-14">
        <div class="h-250 min-h-[266px] transition-all duration-10 cursor-default  p-3 text-black w-72 rounded-sm gap-4 bg-white flex flex-col justify-center items-center mt-10 border-[1.5px] border-black">
          <img src={Jaunt} width="120" class="rounded-full -mt-16 border-[1.5px] border-black" />
          <h1 class=" text-2xl font-bold mt-2">Jaunt</h1>
          <h1 class="text-sm font-semibold min-h-[100px]">
            Fitness application for clients and trainers that generates custom
            workout and diet plans based on physical characteristics and fitness
            goals.
          </h1>
          <h1 class="text-xl font-bold">Tools</h1>
          <div class="flex flex-row gap-1 flex-wrap pr-10 pl-10 align-middle items-center justify-center">
            <img src={ReactLogo} width="40" class="border-2 rounded-lg p-[1px] border-black  transition-all duration-100 hover:scale-105 cursor-pointer"/>
            <img src={MuiIcon} width="40" class="border-2 rounded-lg p-[1px] border-black  transition-all duration-100 hover:scale-105 cursor-pointer"/>
            <img src={CSSIcon} width="40"class="border-2 rounded-lg p-[1px] border-black transition-all duration-100 hover:scale-105 cursor-pointer"/>
            <img src={DjangoIcon} width="40" class="border-2 rounded-lg p-[1px] border-black transition-all duration-100 hover:scale-105 cursor-pointer"/>
            <img src={MySQL} width="40" class="border-2 rounded-lg p-[1px] border-black transition-all duration-100 hover:scale-105 cursor-pointer"/>
            <img src={SeleniumIcon} width="40" class="border-2 rounded-lg p-[1px] border-black transition-all duration-100 hover:scale-105 cursor-pointer"/>
            <img src={AWSIcon} width="40" class="border-2 rounded-lg p-[1px] border-black transition-all duration-100 hover:scale-105 cursor-pointer"/>
            <img src={BootstrapIcon} width="40" class="border-2 rounded-lg p-[1px] border-black transition-all duration-100 hover:scale-105 cursor-pointer"/>
          </div>
        </div>
        <div class="h-250 min-h-[266px] transition-all duration-10 cursor-default  p-3 text-black w-72 rounded-sm gap-4 bg-white flex flex-col justify-center items-center mt-10 border-[1.5px] border-black">
          <img src={Flex} width="120" class="rounded-full -mt-16 border-[1px] border-black-800/900" />
          <h1 class="text-2xl font-bold mt-2">Flex Bot</h1>
          <h1 class="text-sm font-semibold min-h-[100px]">
            An efficient tool for instructors to manage student meetings and
            track progress using Slack and Notion Database.
          </h1>
          <h1 class="text-xl font-bold">Tools</h1>
          <div class="flex flex-row gap-1 flex-wrap pr-10 pl-10 align-middle items-center justify-center">
            <img src={ExpressIcon} width="40" class="border-2 rounded-lg p-[1px] border-black  transition-all duration-100 hover:scale-105 cursor-pointer"/>
            <img src={SlackIcon} width="40" class="border-2 rounded-lg p-[1px] border-black  transition-all duration-100 hover:scale-105 cursor-pointer"/>
            <img src={NotionIcon} width="40" class=" border-2 rounded-lg p-[1px] border-black transition-all duration-100 hover:scale-105 cursor-pointer"/>
            <img src={OpenAiIcon} width="40" height="40" class="h-[40px] border-2 rounded-lg p-[1px] border-black transition-all duration-100 hover:scale-105 cursor-pointer"/>
            <img src={MongoIcon} width="40" class="border-2 rounded-lg p-[1px] border-black transition-all duration-100 hover:scale-105 cursor-pointer"/>
            <img src={NgrokIcon} width="40" class="border-2 rounded-lg p-[1px] border-black transition-all duration-100 hover:scale-105 cursor-pointer"/>
            <img src={PostmanIcon} width="40" class="border-2 rounded-lg p-[1px] border-black transition-all duration-100 hover:scale-105 cursor-pointer"/>
          </div>
        </div>
        <div class="h-250 min-h-[266px] transition-all duration-10 cursor-default  p-3 text-black w-72 rounded-sm gap-4 bg-white flex flex-col justify-center items-center mt-10 border-[1.5px] border-black">
          <img src={QQ} width="120" class="rounded-full -mt-16 border-[1px] border-black-800/900" />
          <h1 class="text-2xl font-bold mt-2">Question Queue Bot</h1>
          <h1 class="text-sm font-semibold min-h-[100px]">
            A Slack bot designed to streamline the process of students seeking
            help from the Instructor Team.
          </h1>
          <h1 class="text-xl font-bold">Tools</h1>
          <div class="flex flex-row gap-1 flex-wrap pr-10 pl-10 align-middle items-center justify-center">
            <img src={ExpressIcon} width="40" class="border-2 rounded-lg p-[1px] border-black  transition-all duration-100 hover:scale-105 cursor-pointer"/>
            <img src={SlackIcon} width="40" class="border-2 rounded-lg p-[1px] border-black  transition-all duration-100 hover:scale-105 cursor-pointer"/>
            <img src={NotionIcon} width="40"class="border-2 rounded-lg p-[1px] border-black transition-all duration-100 hover:scale-105 cursor-pointer"/>
            <img src={OpenAiIcon} width="40" class="h-[40px] border-2 rounded-lg p-[1px] border-black transition-all duration-100 hover:scale-105 cursor-pointer"/>
            <img src={MongoIcon} width="40" class="border-2 rounded-lg p-[1px] border-black transition-all duration-100 hover:scale-105 cursor-pointer"/>
            <img src={NgrokIcon} width="40" class="border-2 rounded-lg p-[1px] border-black transition-all duration-100 hover:scale-105 cursor-pointer"/>
            <img src={PostmanIcon} width="40" class="border-2 rounded-lg p-[1px] border-black transition-all duration-100 hover:scale-105 cursor-pointer"/>
          </div>
        </div>
        <div class="h-250 min-h-[266px] transition-all duration-10 cursor-default  p-3 text-black w-72 rounded-sm gap-4 bg-white flex flex-col justify-center items-center mt-10 border-[1.5px] border-black">


          <img src={Task} width="120" class="rounded-full -mt-16 border-[1px] border-black-800/900" />
          <h1 class="text-2xl font-bold mt-2">Task Manager</h1>
          <h1 class="text-xs font-semibold min-h-[100px]">
            A Slack bot that streamlines task management by enabling managers to
            assign tasks to employees using a simple Slack command. The bot
            integrates with Notion API to create and update tasks automatically,
            saving time and effort.
          </h1>
          <h1 class="text-xl font-bold">Tools</h1>
          <div class="flex flex-row gap-1 flex-wrap pr-10 pl-10 align-middle items-center justify-center">
            <img src={ExpressIcon} width="40" class="border-2 rounded-lg p-[1px] border-black  transition-all duration-100 hover:scale-105 cursor-pointer"/>
            <img src={SlackIcon} width="40" class="border-2 rounded-lg p-[1px] border-black  transition-all duration-100 hover:scale-105 cursor-pointer"/>
            <img src={NotionIcon} width="40"class="border-2 rounded-lg p-[1px] border-black transition-all duration-100 hover:scale-105 cursor-pointer"/>
            <img src={OpenAiIcon} width="40" class="h-[40px] border-2 rounded-lg p-[1px] border-black transition-all duration-100 hover:scale-105 cursor-pointer"/>
            <img src={MongoIcon} width="40" class="border-2 rounded-lg p-[1px] border-black transition-all duration-100 hover:scale-105 cursor-pointer"/>
            <img src={NgrokIcon} width="40" class="border-2 rounded-lg p-[1px] border-black transition-all duration-100 hover:scale-105 cursor-pointer"/>
            <img src={PostmanIcon} width="40" class="border-2 rounded-lg p-[1px] border-black transition-all duration-100 hover:scale-105 cursor-pointer"/>
          </div>
        </div>
        {/* <div class="h-250 transition-all duration-100 hover:scale-105 cursor-pointer p-3 w-52 rounded-lg gap-2 bg-blue-900 flex flex-col justify-center items-center">
          <img src={QQ} width="200" />
          <h1>Project Name</h1>
        </div> */}
      </div>
    </div>
  );
}
