import React from "react";
import profile from "/Profile.jpg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SiIndeed } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { ReactTyped, Typed } from "react-typed";
import Flower from "../../public/Flower.png";
import GoldenBg from "../../public/GoldenBg.jpg";
import Resume from "../../public/Prajakta_CV.pdf";

function About() {
  return (
    <>
      <div
        name="About"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
        // style={{ backgroundImage: `url(${GoldenBg})` }}
      >
        <div className="flex flex-col p-1 lg:flex-row justify-between space-y-6 lg:space-y-0">
          <div className="md:w-full md:order-2 lg:w-full lg:order-1 mt-4  space-y-2 order-2  xl:mt-0">
            <div className="flex flex-row">
              <span className=" animate__animated animate__bounceIn  text-white">
                Welcome to my portfolio{" "}
              </span>
              {/* <img className="h-[50px] w-[50px] " src={Flower}></img> */}
            </div>
            <div className="flex space-x-3 text-xl md:text-xl">
              <h1 className="animate__animated animate__bounceIn text-white ">
                Hello, I am{" "}
              </h1>
              {/* <span className='text-green-900 font-bold mt-2'> Developer</span> */}
              <ReactTyped
                className=" md:text-lg lg:text-2xl text-orange-100 font-bold animate-pulse"
                strings={["Front-End Coder", "React Developer","UI Developer"]}
                typeSpeed={40}
                backSpeed={60}
                loop={true}
              />
            </div>
            <p className="text-justify mt-4 text-sm text-white md:text-md ">
            <p className="text-justify">I have solid foundation in front-end technologies like HTML5, CSS3, JavaScript, and frameworks such as React and Next JS. I have extensive experience creating responsive, user-friendly, and visually appealing web interfaces using CSS Frameworks like Material UI and Tailwind CSS. My expertise also includes integrating third-party APIs, and deploying web applications on Azure or AWS.</p>
            <br />
<p className="text-justify">I focus on maintaining code quality, and adhering to best practices, ensuring that your digital presence stands out and performs exceptionally. Whether you need a sleek website, a robust web application, or tailored UI components, I am here to bring your ideas to life and provide top-notch front-end solutions that align with your business goals.</p>           </p>
            
            {/* social media icons  */}
            <div className=" flex justify-between">
              <div className="space-y-2">
                <h1 className="font-bold  text-white text-sm md:text-lg lg:text-xl">you can find me on</h1>
                <ul className="flex space-x-5">
                <li>
                  <a href="https://github.com/itsprajaktaapte" target="_blank" rel="">
                      <FaGithub className="text-white text-xl cursor-pointer" />
                  </a>
                </li>

                  <li>
                    <a href="https://www.linkedin.com/in/prajakta-apte-621237b8/" target="_blank" rel="">
                       <FaLinkedin className=" text-white text-xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://profile.indeed.com/?hl=en_NZ&co=NZ&from=gnav-jobseeker-profile--profile-one-frontend" target="_blank" rel="">
                      <SiIndeed className=" text-white text-xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-2 ">
               
                <h1 className="font-bold text-white text-sm md:text-lg lg:text-xl ">Download my Resume </h1>
                <button>  <a
                  href={Resume}
                  download="Prajakta_CV.pdf"
                  className="p-1 text-sm  bg-white/60 rounded-md text-black transition-colors duration-300 ease-in-out shadow-lg"
                >
                  Resume
                </a> </button>
              </div>
            </div>
          </div>

          <div className="md:w-full md:order-1 lg:w-full lg:order2 order-1  ">
            <img
              src={profile}
              className=" lg:w-[350px] lg:mt-12 xl:mt-15 md:w-[450px] md:mx-auto mx-auto border-yellow-600 border-4 border-white rounded-full w-[250px] "
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
