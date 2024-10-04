import React, { useState } from "react";
import { BsArrowUpRight, BsBootstrap, BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import EmbarkWater from "../../public/EmbarkWater.png";
import KalyanDiose from "../../public/KalyanDiose.png";
import Zylem from "../../public/Zylem.png";
import ReactFoodOrder from "../../public/FoodOrderApp.png";
import MusicSystem from "../../public/MusicSystem.png";
import ReceipeFinderApp from "../../public/ReceipeFinderApp.png";
import { FaExternalLinkAlt } from "react-icons/fa";

import WorkSliderBtns from "./WorkSliderBtns";
import { Link } from "react-scroll";

function Work() {
  const projects = [
    {
      num: "01",
      category: " Food Order App",
      title: "FoodOrderAPP",
      description:
        "An online food ordering application allows users to browse local restaurants, explore menus, and place orders for delivery or pickup with ease. This application is built using React JS for dynamic front-end rendering and state management, React-Bootstrap for responsive and styled UI components, and Context API for centralized state management across components. The app leverages a mock backend API for fetching food data, simulating a real-world scenario with various food categories, items, and prices",
      stack: [
        { name: "React JS" },
        { name: "Mock API" },
        { name: "Context API" },
        { name: "BootStrap" }
      ],
      image: ReactFoodOrder,
      link: "https://github.com/itsprajaktaapte/ReactFoodOrderApp.git",
    },

    {
      num: "02",
      category: "Sales Information Management System",
      title: "Zylem",
      description:
        "Zylem streamlines all secondary sales operations with a smooth and easy automation process. I have developed this website using HTML5, CSS3, JavaScript, jQuery for dynamic functionality, and Bootstrap for responsive design classes. I focused on a mobile-first approach, integrated smooth animations, and used Illustrator for custom images. Additionally, I implemented exciting JavaScript features to enhance interactivity and create a visually engaging user experience",
      stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" },{name:"Bootstrap"}],
      image: Zylem,
      link: "https://www.zylem.co.in/",
    },
    {
      num: "03",
      category: "Kalyan Diose",
      title: "Kalyan Diose",
      description: "Diose of Kalyan is a Catholic diocese,which are under the authority of a bishop. I have constructed this website using WordPress themes and plugins to create a highly functional and visually appealing design. I further enhanced the user experience by integrating jQuery sliders directly within WordPress, adding dynamic and interactive elements to various sections of the site. Leveraging WordPress’s flexibility, I utilized plugins to extend functionality, ensuring smooth navigation and a responsive layout.",
      stack: [{ name: "WordPress" }],
      image: KalyanDiose,
      link: "https://kalyandiocese.com/",
    },
    {
      num: "04",
      category: "MusicSystem",
      title: "MusicSystem",
      description:
        "The application is a sleek and interactive music streaming platform that allows users to search for their favorite tracks, artists, and albums using the Spotify API. It provides users with real-time data such as song details, album artwork, and artist information, all styled beautifully using Tailwind CSS to maintain a modern and responsive user interface",
      stack: [
        { name: "HTML5" },
        { name: "CSS3" },
        { name: "JavaScript" },
        { name: "Spotify API" },
        { name: "Tailwind CSS" }
      ],
      image: MusicSystem,
      link: "https://github.com/itsprajaktaapte/Music-Player.git",
    },
    {
      num: "05",
      category: "Embark Water",
      title: "Embark Water",
      description: "Embark Water is a company that provides a wide range of instruments for the water treatment industry.I have developed this website using HTML5 and CSS3 for structuring and styling, integrated jQuery slider libraries for interactive elements, utilized Bootstrap for responsive layout classes, and enhanced the visual design by editing images in Photoshop",
      stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" },{name:"Boostrap"}],
      image: EmbarkWater,
      link: "https://embarkwater.com/",
    },
    {
      num: "06",
      category: "ReceipeFinderApp",
      title: "ReceipeFinderApp",
      description:
        "Developed a dynamic web application allowing users to search for food recipes based on ingredients using JavaScript, Implemented responsive design using Tailwind CSS and integrated with the Spoonacular API for real-time recipe data.",
      stack: [
        { name: "HTML5" },
        { name: "CSS3" },
        { name: "JavaScript" },
        { name: "Spoonacular API" },
        { name: "Tailwind CSS" }
      ],
      image: ReceipeFinderApp,
      link: "https://github.com/itsprajaktaapte/Recipe-Finder-Application.git",
    },
  ];

  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex]);
  };

  return (
    <>
      <div
        name="Work"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <h1 className="text-xl font-bold  text-white/60">Projects</h1>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="min-h-[50vh] flex flex-col justify-center py-2 xl:px-0"
        >
          <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row xl:gap-[30px]">
              <div
                className="w-full xl:w-[50%] xl:h-[460px] flex flex-col 
           xl:justify-between order-2 xl:order-none text-white"
              >
              <div className="flex flex-col gap-[10px] h-[50%] mt-4">
                   {/* outer div holding project info */}
                
                {/* <div className="text-5xl text-white leading-none font-extrabold text-transparent text-outline">
                  {project.num}
                </div> */}
          
                <h2
                  className="text-[14px] font-bold leading-none text-white group-hover:text-accent 
             transition-all duration-500 capitalize"
                >
                  {project.category}
                </h2>
                {/* {project description} */}
                <p className="text-white/60">{project.description}</p>
                {/* {stack} */}
                <ul className="flex gap-4 mt-0"> 
                  {project.stack.map((item, index) => {
                    return (
                      <li key={index} className="text-white/60 text-white">
                        {item.name}
                        {item !== project.stack.length - 1 && ","}
                      </li>
                    );
                  })}
                </ul>
                <div className="border border-white/20"></div>
                <div className="flex items-center gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white cursor-pointer"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>

                </div> 
              </div>

              <div className="w-full xl:w-[50%] text-white">
                <Swiper
                  spaceBetween={30}
                  slidesPreView={1}
                  className="h-[290px] xl:p-7 xl:h-[435px] lg:h-[670px] md:h-[490px]"
                  onSlideChange={handleSlideChange}
                >
                  {projects.map((project, index) => {
                    return (
                      <SwiperSlide key={index} className="w-full ">
                        <div className="h-[400px] relative group flex justify-center items-center">
                          <div className="absolute bottom-0 top-0 w-full h-full bg-black/10 z-10"></div>
                          <div className="relative w-full h-full">
                            <img
                              src={project.image}
                              fill
                              className="object-cover"
                              alt=""
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                  <WorkSliderBtns className="lg:mt-16"
                    containerStyles="flex gap-2 absolute right-0 bottom-0
                 xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify:none md:bottom-0"
                    btnStyles=" bg-orange-400 hover:bg-orange-400 text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                  />
                </Swiper>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
}

export default Work;
