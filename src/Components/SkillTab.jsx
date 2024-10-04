import React, { useState } from "react";
import html from "../../public/skills/html.png"
import css from "../../public/skills/css.png"
import js from "../../public/skills/js.png"
import react from "../../public/skills/react.png"
import ts from "../../public/skills/ts.png"
import tailwind from "../../public/skills/tailwind.png"
import Bootstrap from "../../public/skills/Bootstrap.png"
import SemanticUI from "../../public/skills/SemanticUI.png"
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

export const SkillTab = () => {
  const [currentTab, setCurrentTab] = useState();

  const tabs = [
    {
      id: 1,
      title: "Front-End Skills",
      Image: [html,css,js,ts,JQ,react,next,D3,node],
    },
    {
      id: 2,
      title: "CSS Frameworks",
      Image: [tailwind,mui,SemanticUI,Bootstrap],
    },
    {
      id: 3,
      title: "Databases",
      Image: [mysql, mongodb,sqlserver],
    },
    {
      id: 4,
      title: "Version Control & Cloud Server",
      Image:[git,Azure,AzureBoards],
    },
    {
      id: 5,
      title: "Design Tools",
      Image:[PS,Figma,Illu],
    },
   

  ];

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };
  return (
    <>
      <div className="">
        <div className="flex justify-center items-center flex-wrap space-x-0 space-y-0 gap-3">
          {tabs.map((tab, i) => 
              <button
              className="bg-gradient-to-r from-yellow-500 via-orange-500 to-orange-900 cursor-pointer text-sm p-3 text-black bg-orange-200 rounded-lg hover:scale-110" 
              onMouseEnter={handleTabClick}
              key={i}
              id={tab.id}
              disabled={currentTab === `${tab.id}`}
            >
              {tab.title}
            </button>
          )}
        </div>
        <div className="text-white">
          {tabs.map((tab , i) => 
            <div key={i}>
              {currentTab === `${tab.id}` && 
                  <div className="mt-5 flex flex-wrap p-3 text-black justify-center"> 
                   {tab.Image.map( (imageSrc, index) => (
                    <div className="p-4">
                     <img src={imageSrc} 
                     alt={`${tab.title} - ${index}`}
                     className="w-[25px] h-[25px] sm:w-[70px] sm:h-[70px] bg-pink-50 p-1" />
                   </div>

                   ))}
                    

                 </div>
              }
            </div>
          )}
        </div>
      </div>
    </>
  );
};
