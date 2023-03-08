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
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
export default function ProjectPage() {
  return (
    <div class="w-[97%] m-auto ">
    <title>Projects</title>
      <h1 class="text-center mt-4 text-4xl font-bold">Projects</h1>
      <div class="flex flex-wrap justify-center text-center gap-x-6 items-center gap-y-10 mt-14">
      <a target="_blank" rel="noreferrer" href="http://ec2-34-204-82-92.compute-1.amazonaws.com">
        <div class=" cursor-pointer h-250 min-h-[266px] transition-all duration-10 p-3 text-black w-72 shadow-md shadow-gray-500 drop-shadow-sm  rounded-lg gap-4 bg-white flex flex-col justify-center items-center mt-10 border-[1.5px] border-black">
          <img alt="" src={Jaunt} width="120" class="rounded-full -mt-16  shadow-smdrop-shadow- p-1 bg-white" />
          <h1 class="text-2xl font-bold">Jaunt</h1>
          <div class="text-sm min-h-[100px] flex items-center justify-center">
            <h2>
              Fitness application for clients and trainers that generates custom
              workout and diet plans based on physical characteristics and fitness
              goals.
            </h2>
          </div>
          <h1 class="text-xl font-bold">Tools</h1>
          <div class="flex flex-row gap-1 flex-wrap pr-2 pl-2 align-middle items-center justify-center">
            <Tippy content="ReactJS">
              <a target="_blank" rel="noreferrer" href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started">
                <img alt="ReactJS" src={ReactLogo} width="42" height="42" class="border-[1px] rounded-lg p-[3px] border-black  transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
              </a>
            </Tippy>
            <Tippy content="MaterialUI">
              <a target="_blank" rel="noreferrer" href="https://mui.com/">
                <img alt="MaterialUI" src={MuiIcon} width="42" height="42" class="border-[1px] rounded-lg p-[3px] border-black  transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
              </a>
            </Tippy>
            <Tippy content="CSS 3">
              <a target="_blank" rel="noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                <img alt="CSS 3" src={CSSIcon} width="42" height="42" class="border-[1px] rounded-lg p-[3px] border-black transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
              </a>
            </Tippy>
            <Tippy content="Django">
              <a target="_blank" rel="noreferrer" href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django">
                <img alt="Django Rest Framework" src={DjangoIcon} width="42" height="42" class="border-[1px] rounded-lg p-[3px] border-black transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
              </a>
            </Tippy>
            <Tippy content="MySQL">
              <a target="_blank" rel="noreferrer" href="https://www.mysql.com/">
                <img alt="MySQL" src={MySQL} width="42" height="42" class="border-[1px] rounded-lg p-[3px] border-black transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
              </a>
            </Tippy>
            <Tippy content="Selenium">
              <a target="_blank" rel="noreferrer" href="https://github.com/SeleniumHQ/selenium">
                <img alt="Selenium Web Scraper" src={SeleniumIcon} width="42" height="42" class="border-[1px] rounded-lg p-[3px] border-black transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
              </a>
            </Tippy>
            <Tippy content="AWS">
              <a target="_blank" rel="noreferrer" href="https://aws.amazon.com/">
                <img alt="Amazon Web Services" src={AWSIcon} width="42" class="h-[42px] object-contain border-[1px] rounded-lg p-[3px] border-black transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
              </a>
            </Tippy>
            <Tippy content="Bootstrap">
              <a target="_blank" rel="noreferrer" href="https://getbootstrap.com/">
                <img alt="Bootstrap" src={BootstrapIcon} width="42" height="42" class="border-[1px] rounded-lg p-[3px] border-black transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
              </a>
            </Tippy>
          </div>
        </div>
      </a>
        <div class="h-250 min-h-[266px] transition-all duration-10 cursor-default  p-3  text-black w-72 shadow-md shadow-slate-800 drop-shadow-sm  rounded-lg gap-4 bg-white flex flex-col justify-center items-center mt-10 border-[1.5px] border-black">
          <img alt="" src={Flex} width="120" class="rounded-full -mt-16  shadow-smdrop-shadow- p-1 bg-white" />
          <h1 class="text-2xl font-bold">Flex Bot</h1>
          <div class="text-sm min-h-[100px] flex items-center justify-center">
            <h2>
              An efficient tool for instructors to manage student meetings and
              track progress using Slack and Notion Database.
            </h2>
          </div>
          <h1 class="text-xl font-bold">Tools</h1>
          <div class="flex flex-row gap-1 flex-wrap pr-2 pl-2 align-middle items-center justify-center">
            <Tippy content="ExpressJS">
              <a target="_blank" rel="noreferrer" href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs">
                <img alt="ExressJS" src={ExpressIcon} width="42" height="42" class="border-[1px] rounded-lg p-[3px] border-black  transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
              </a>
            </Tippy>
            <Tippy content="Slack API">
              <a target="_blank" rel="noreferrer" href="https://api.slack.com/apis">
                <img alt="Slack API" src={SlackIcon} width="42" height="42" class="border-[1px] rounded-lg p-[3px] border-black  transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
              </a>
            </Tippy>
            <Tippy content="Notion API">
              <a target="_blank" rel="noreferrer" href="https://developers.notion.com/">
                <img alt="Notion API" src={NotionIcon} width="42" height="42" class=" border-[1px] rounded-lg p-[3px] border-black transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
              </a>
            </Tippy>
            <Tippy content="OpenAI API">
              <a target="_blank" rel="noreferrer" href="https://platform.openai.com/">
                <img alt="OpenAI API" src={OpenAiIcon} width="42" height="42" class="h-[42px] border-[1px] rounded-lg p-[3px] border-black transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
              </a>
            </Tippy>
            <Tippy content="MongoDB">
              <a target="_blank" rel="noreferrer" href="https://www.mongodb.com/docs/atlas/">
                <img alt="MongoDB" src={MongoIcon} width="42" height="42" class="border-[1px] rounded-lg p-[3px] border-black transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
              </a>
            </Tippy>
            <Tippy content="Ngrok">
              <a target="_blank" rel="noreferrer" href="https://ngrok.com/docs">
                <img alt="NGrok HTTP Tunneling" src={NgrokIcon} width="42" height="42" class="border-[1px] rounded-lg p-[3px] border-black transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
              </a>
            </Tippy>
            <Tippy content="Postman">
              <a target="_blank" rel="noreferrer" href="https://www.postman.com/">
                <img alt="Postman" src={PostmanIcon} width="42" height="42" class="border-[1px] rounded-lg p-[3px] border-black transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
              </a>
            </Tippy>
          </div>
        </div>
        <div class="h-250 min-h-[266px] transition-all duration-10 cursor-default  p-3  text-black w-72 shadow-md shadow-slate-800 drop-shadow-sm  rounded-lg gap-4 bg-white flex flex-col justify-center items-center mt-10 border-[1.5px] border-black">
          <img alt="" src={QQ} width="120" class="rounded-full -mt-16  shadow-smdrop-shadow- p-1 bg-white" />
          <h1 class="text-2xl font-bold">Question Queue Bot</h1>
          <div class="text-sm min-h-[100px] flex items-center justify-center">
            <h2>
              A Slack bot designed to streamline the process of students seeking
              help from the Instructor Team.
            </h2>
          </div>
          <h1 class="text-xl font-bold">Tools</h1>
          <div class="flex flex-row gap-1 flex-wrap pr-2 pl-2 align-middle items-center justify-center">
          <Tippy content="ExpressJS">
              <a target="_blank" rel="noreferrer" href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs">
                <img alt="ExressJS" src={ExpressIcon} width="42" height="42" class="border-[1px] rounded-lg p-[3px] border-black  transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
              </a>
            </Tippy>
            <Tippy content="Slack API">
              <a target="_blank" rel="noreferrer" href="https://api.slack.com/apis">
                <img alt="Slack API" src={SlackIcon} width="42" height="42" class="border-[1px] rounded-lg p-[3px] border-black  transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
              </a>
            </Tippy>
            <Tippy content="Notion API">
              <a target="_blank" rel="noreferrer" href="https://developers.notion.com/">
                <img alt="Notion API" src={NotionIcon} width="42" height="42" class=" border-[1px] rounded-lg p-[3px] border-black transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
              </a>
            </Tippy>
            <Tippy content="OpenAI API">
              <a target="_blank" rel="noreferrer" href="https://platform.openai.com/">
                <img alt="OpenAI API" src={OpenAiIcon} width="42" height="42" class="h-[42px] border-[1px] rounded-lg p-[3px] border-black transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
              </a>
            </Tippy>
            <Tippy content="MongoDB">
              <a target="_blank" rel="noreferrer" href="https://www.mongodb.com/docs/atlas/">
                <img alt="MongoDB" src={MongoIcon} width="42" height="42" class="border-[1px] rounded-lg p-[3px] border-black transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
              </a>
            </Tippy>
            <Tippy content="Ngrok">
              <a target="_blank" rel="noreferrer" href="https://ngrok.com/docs">
                <img alt="NGrok HTTP Tunneling" src={NgrokIcon} width="42" height="42" class="border-[1px] rounded-lg p-[3px] border-black transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
              </a>
            </Tippy>
            <Tippy content="Postman">
              <a target="_blank" rel="noreferrer" href="https://www.postman.com/">
                <img alt="Postman" src={PostmanIcon} width="42" height="42" class="border-[1px] rounded-lg p-[3px] border-black transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
              </a>
            </Tippy>
          </div>
        </div>
        <div class="h-250 min-h-[266px] transition-all duration-10 cursor-default  p-3  text-black w-72 shadow-md shadow-slate-800 drop-shadow-sm  rounded-lg gap-4 bg-white flex flex-col justify-center items-center mt-10 border-[1.5px] border-black">
          <img alt="" src={Task} width="120" class="rounded-full -mt-16  shadow-smdrop-shadow- p-1 bg-white" />
          <h1 class="text-2xl font-bold">Task Manager</h1>
          <div class="text-sm min-h-[100px] flex items-center justify-center">
            <h2>
              A Slack bot that streamlines task management. The bot
              integrates with Notion API to create and update tasks automatically,
              saving time and effort.
            </h2>
          </div>
          <h1 class="text-xl font-bold">Tools</h1>
          <div class="flex flex-row gap-1 flex-wrap pr-2 pl-2 align-middle items-center justify-center">
          <Tippy content="ExpressJS">
              <a target="_blank" rel="noreferrer" href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs">
                <img alt="ExressJS" src={ExpressIcon} width="42" height="42" class="border-[1px] rounded-lg p-[3px] border-black  transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
              </a>
            </Tippy>
            <Tippy content="Slack API">
              <a target="_blank" rel="noreferrer" href="https://api.slack.com/apis">
                <img alt="Slack API" src={SlackIcon} width="42" height="42" class="border-[1px] rounded-lg p-[3px] border-black  transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
              </a>
            </Tippy>
            <Tippy content="Notion API">
              <a target="_blank" rel="noreferrer" href="https://developers.notion.com/">
                <img alt="Notion API" src={NotionIcon} width="42" height="42" class=" border-[1px] rounded-lg p-[3px] border-black transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
              </a>
            </Tippy>
            <Tippy content="OpenAI API">
              <a target="_blank" rel="noreferrer" href="https://platform.openai.com/">
                <img alt="OpenAI API" src={OpenAiIcon} width="42" height="42" class="h-[42px] border-[1px] rounded-lg p-[3px] border-black transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
              </a>
            </Tippy>
            <Tippy content="Ngrok">
              <a target="_blank" rel="noreferrer" href="https://ngrok.com/docs">
                <img alt="NGrok HTTP Tunneling" src={NgrokIcon} width="42" height="42" class="border-[1px] rounded-lg p-[3px] border-black transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
              </a>
            </Tippy>
            <Tippy content="Postman">
              <a target="_blank" rel="noreferrer" href="https://www.postman.com/">
                <img alt="Postman" src={PostmanIcon} width="42" height="42" class="border-[1px] rounded-lg p-[3px] border-black transition-all duration-100 hover:scale-105 cursor-pointer bg-white"/>
              </a>
            </Tippy>
          </div>
        </div>
      </div>
    </div>
  );
}
