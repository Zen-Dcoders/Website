
const Team = () => {
    return (
      <>
          <div className="slide2 flex flex-col lg:flex-row lg:space-x-6  md:px-20 md:p-[15vmin]  mb-[5vmin]">
            <div className="flex-1 flex items-center justify-center">
                <img 
                src="https://res.cloudinary.com/dx97khgxd/image/upload/v1730371983/page4_tcko3n.png" 
                alt="zendcoders" 
                className="image4 max-w-full h-auto rounded-lg border-gradient p-[2px]" 
                />
            </div>

            <div className="slide4-part1 flex-1 p-4 rounded-lg border-gradient text-center p-10 " >
                <h1 className="head-font1 text-2xl text-teal-300 font-bold">Our Collaborative Team</h1>
                <h2 className="head-font1 ss text-[#ffffff] text-xl">Bridging Interns and Industry Experts</h2>

                <div className="slide4-p1-inner grid gap-4 mt-6 lg:grid-cols-2 text-justify " >
                <div className="inner-4 kk1 p-4 rounded-lg border-gradient" style={{border:'1px solid transparent',  borderImage: 'linear-gradient(45deg, teal, #fff0ff) 1',
    borderWidth: '1px'}}>
                    <h3 className="head3 text-lg font-semibold text-center text-[#E1AD01] mb-3">Real-World Experience</h3>
                    <p className="para3 text-sm text-justify text-[#ccc]">
                    We immerse college interns in hands-on projects, building critical skills and 
                    industry knowledge through real-world application.
                    </p>
                </div>

                <div className="inner-4 kk2 p-4 rounded-lg border-gradient" style={{border:'1px solid transparent',  borderImage: 'linear-gradient(45deg, teal, #fff0ff) 1',
    borderWidth: '1px'}}>
                    <h3 className="head3 text-lg font-semibold text-center text-[#E1AD01] mb-3">Expert Mentorship</h3>
                    <p className="para3 text-sm text-justify text-[#ccc]">
                    Our experienced professionals guide interns, sharing best practices and valuable 
                    insights for career growth.
                    </p>
                </div>

                <div className="inner-4 kk3 p-4 lg:col-span-2 rounded-lg border-gradient" style={{border:'1px solid transparent',  borderImage: 'linear-gradient(45deg, teal, #fff0ff) 1',
    borderWidth: '1px'}}>
                    <h3 className="head3 text-lg font-semibold text-center text-[#E1AD01] mb-3">Team-Oriented Culture</h3>
                    <p className="para3 text-sm text-justify text-[#ccc]">
                    By fostering a collaborative environment, interns work closely with seasoned 
                    developers, promoting teamwork and mutual learning.
                    </p>
                </div>
                </div>
            </div>
        </div>


        <div className="slide2 flex flex-col lg:flex-row lg:space-x-8 items-center  justify-center md:pl-[30vmin] md:p-[15vmin]  mb-[5vmin]">
            <div className="slide5 flex-1 flex flex-col items-center text-center lg:items-start lg:text-left space-y-6">
                <h1 className="head-font1 ss text-[#ffffff] text-xl md:text-2xl lg:text-3xl font-bold">
                Join Our Dynamic Team and Kickstart Your Career
                </h1>
                <div className="inner-s5 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 lg:grid-cols-2">
                <div className="iir flex flex-col items-center text-center space-y-2  rounded-lg shadow-md p-4 lg:p-6">
                    <img src="https://res.cloudinary.com/dx97khgxd/image/upload/v1730380899/i1_ets1ns.png" alt="logo" className="ii1 w-12 h-12 lg:w-16 lg:h-16" />
                    <h2 className="slide5-head3 text-lg font-semibold text-[#ffffff]">Teamwork</h2>
                    <p className="para5 text-sm md:text-base text-[#ccc]">
                    Collaborate with talented individuals and learn from each other.
                    </p>
                </div>
                <div className="iir flex flex-col items-center text-center space-y-2  rounded-lg shadow-md p-4 lg:p-6">
                    <img src="https://res.cloudinary.com/dx97khgxd/image/upload/v1730380898/i2_sblzhp.png" alt="logo" className="ii1 w-12 h-12 lg:w-16 lg:h-16" />
                    <h2 className="slide5-head3 text-lg font-semibold text-[#ffffff]">Innovation</h2>
                    <p className="para5 text-sm md:text-base text-[#ccc]">
                    Contribute to groundbreaking projects and push the boundaries of technology.
                    </p>
                </div>
                <div className="iir flex flex-col items-center text-center space-y-2  rounded-lg shadow-md p-4 lg:p-6">
                    <img src="https://res.cloudinary.com/dx97khgxd/image/upload/v1730380897/i3_vo3xxf.png" alt="logo" className="ii1 w-12 h-12 lg:w-16 lg:h-16" />
                    <h2 className="slide5-head3 text-lg font-semibold text-[#ffffff]">Growth</h2>
                    <p className="para5 text-sm md:text-base text-[#ccc]">
                    Develop valuable skills and gain experience that will set you apart.
                    </p>
                </div>
                <div className="iir flex flex-col items-center text-center space-y-2  rounded-lg shadow-md p-4 lg:p-6">
                    <img src="https://res.cloudinary.com/dx97khgxd/image/upload/v1730380897/i4_xz5uc2.png" alt="logo" className="ii1 w-12 h-12 lg:w-16 lg:h-16" />
                    <h2 className="slide5-head3 text-lg font-semibold text-[#ffffff]">Opportunity</h2>
                    <p className="para5 text-sm md:text-base text-[#ccc]">
                    Gain valuable experience and build your network for future career success.
                    </p>
                </div>
                </div>
            </div>

            <div className="flex-1 mt-8 lg:mt-0 md:mr-[10vmin]">
                <img 
                src="https://res.cloudinary.com/dx97khgxd/image/upload/v1730371986/page5_slejux.png" 
                alt="Zendcoders" 
                className="image5 w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg"
                />
            </div>
        </div>


      </>
    );
  };
  
  export default Team;
  