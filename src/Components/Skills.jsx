import React from "react";
import html from "../../public/skills/html.png"
import css from "../../public/skills/css.png"
import js from "../../public/skills/js.png"
import react from "../../public/skills/react.png"
import ts from "../../public/skills/ts.png"
import tailwind from "../../public/skills/tailwind.png"
import mui from "../../public/skills/mui.png"
import next from "../../public/skills/next.png"
import node from "../../public/skills/node.png"
import D3 from "../../public/skills/D3.png"
import JQ from "../../public/skills/Jquery.png"
import mysql from "../../public/skills/mysql.png"
import mongodb from "../../public/skills/mongodb.png"
import sqlserver from "../../public/skills/MS-SQLServer.png"
import git from "../../public/skills/git.png"
import AzureBoards from "../../public/skills/AzureBoards.png"
import Azure from "../../public/skills/Azure.png"
import PS from "../../public/skills/Photoshop.png"
import Illu from "../../public/skills/Illustrator.png"
import Figma from "../../public/skills/figma.png"
import WP from "../../public/skills/Wordpress.png"
import { SkillTab } from "./SkillTab";
import { Experiences } from "./Experiences";

const Skills = () => {
  return (
    <>
      
      <div
        name="Experience"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10"
      >
        <h1 className="text-xl font-bold mb-5 text-white/60">Tech Stack</h1>

        <SkillTab/>
    
        <h1 className=" text-xl font-bold mb-2 md:mt-3 text-white/60 ">Work Journey</h1>
       
        <Experiences/>
      </div>
    </>
  );
};

export default Skills;
