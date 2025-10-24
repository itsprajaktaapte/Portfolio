import React from 'react';

export const Experiences = () => {
  return (
    <>
    
      <div className="relative flex justify-center flex-wrap items-center h-auto mx-auto p-4 ">
        
      
        <div className="absolute w-1 bg-gray-300 h-full left-1/2 transform -translate-x-1/2 hidden md:block"></div>

        <div className="absolute flex flex-col flex-wrap items-center justify-between h-full left-1/2 transform -translate-x-1/2 hidden md:flex">
          {/* Adjust height according to your number of experiences */}
          <div className="w-3 h-3 rounded-full bg-white"></div>
          <div className="w-3 h-3 rounded-full bg-white"></div>
          <div className="w-3 h-3 rounded-full bg-white"></div>
          <div className="w-3 h-3 rounded-full bg-white"></div>
          <div className="w-3 h-3 rounded-full bg-white"></div>
        </div>

      
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">

         
          <div className="md:w-1/2 flex flex-col flex-wrap items-end gap-10">
            <div className="w-full max-w-[250px] h-[100px] text-white/60 text-xs hover:scale-110 relative">
              <section className="p-4">
                <ul>
                  <li className="bg-black text-orange-100 p-1 rounded-md text-center">July 2013 - Dec 2014</li>
                  <li className="text-orange-500 font-bold">Graduate Programmer - Xecom IT</li>
                  <li className="text-white/60"><span className="text-yellow-600 font-bold">Skills</span> - HTML, CSS, Static Websites, WireFraming, DNS, Hosting</li>
                </ul>
              </section>
            </div>

            <div className="w-full max-w-[250px] h-[100px] text-white/60 text-xs hover:scale-110 relative">
              <section className="p-4">
                <ul>
                  <li className="bg-black text-orange-100 p-1 rounded-md text-center">Jan 2015 - July 2016</li>
                  <li className="text-orange-500 font-bold">Web Development Engineer - VXL</li>
                  <li className="text-white/60"><span className="text-yellow-600 font-bold">Skills</span> - HTML, CSS, JavaScript, jQuery, Bootstrap, Media Queries</li>
                </ul>
              </section>
            </div>

          <div className="w-full max-w-[250px] h-[100px] text-white/60 text-xs hover:scale-110 relative">
              <section className="p-4">
                <ul>
                  <li className="bg-black text-orange-100 p-1 rounded-md text-center">Dec 2021 - April 2023</li>
                  <li className="text-orange-500 font-bold">Web Developer - Wipro Limited</li>
                  <li className="text-white/60"><span className="text-yellow-600 font-bold">Skills</span> - React JS, React Hooks, REST API, State Management, Material UI, JS(ES6+)</li>
                </ul>
              </section>
            </div> 
          </div>

        
          <div className="md:w-1/2 flex flex-col flex-wrap items-start gap-10">
           
            <div className="w-full max-w-[250px] h-[100px] text-white/60 text-xs hover:scale-110 relative">
              <section className="p-4">
                <ul>
                  <li className="bg-black text-orange-100 p-1 rounded-md text-center">Sept 2023 - Oct 2023</li>
                  <li className="text-orange-500 font-bold">UI Developer - 1SecondInsight Ltd</li>
                  <li className="text-white/60"><span className="text-yellow-600 font-bold">Skills</span> - D3 JS, JavaScript, Figma Design, Tailwind CSS</li>
                </ul>
              </section>
            </div>

            <div className="w-full max-w-[250px] h-[100px] text-white/60 text-xs hover:scale-110 relative">
              <section className="p-4">
                <ul>
                  <li className="bg-black text-orange-100 p-1 rounded-md text-center">Feb 2024 - April 2025</li>
                  <li className="text-orange-500 font-bold">Software Developer - MVP Studio</li>
                  <li className="text-white/60"><span className="text-yellow-600 font-bold">Skills</span> - React JS, Next JS, Framer Motion, Three JS, C#, ASP.NET CORE</li>
                </ul>
              </section>
            </div>
              <div className="w-full max-w-[250px] h-[100px] text-white/60 text-xs hover:scale-110 relative">
              <section className="p-4">
                <ul>
                  <li className="bg-black text-orange-100 p-1 rounded-md text-center">May 2025 - July 2025</li>
                  <li className="text-orange-500 font-bold">Software Developer - AvaTech</li>
                  <li className="text-white/60"><span className="text-yellow-600 font-bold">Skills</span> - Microsoft Power Pages, Power Automate, Power BI, Dataverse, Custom Connector</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
