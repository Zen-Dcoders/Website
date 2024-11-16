const Expertise = () =>{
    return(
        <>
            <div className="slide2 flex flex-col md:flex-row items-center justify-center py-12 px-6 md:px-20 md:pl-[25vmin] md:p-[15vmin]  mb-[5vmin]">
            {/* Left Side Content */}
            <div className="inner-slide3 w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                <h1 className="head-font1 text-2xl md:text-4xl font-extrabold text-[#ffffff] mb-8">
                    Empowering Digital Transformation Through Innovative <br /> Web & Mobile Solutions
                </h1>
                
                {/* Slide3 Content */}
                <div className="slide3-part1 space-y-8">
                    <div className="slide3-1 flex flex-col md:flex-row items-center justify-start">
                        <div className="bubble1 text-white rounded-full w-[40px] h-[38px] flex items-center justify-center mr-4" style={{border:'1px solid lime'}} >
                            <p className="bb1 text-xl">1</p>
                        </div>
                        <div>
                            <p className="prod text-xl text-teal-300 font-semibold">Multi-Product Expertise</p>
                            <p className="iit text-sm  text-[#ffffff]">We develop and manage a diverse portfolio of web and mobile applications, tailored to meet specific industry needs and user demands.</p>
                        </div>
                    </div>
                    
                    <div className="slide3-1 flex flex-col md:flex-row items-center justify-start">
                        <div className="bubble1  text-white rounded-full w-[40px] h-[38px] flex items-center justify-center mr-4" style={{border:'1px solid yellow'}}>
                            <p className="bb1 text-xl">2</p>
                        </div>
                        <div>
                            <p className="prod text-xl text-teal-300 font-semibold">Collaborative & Skilled Team</p>
                            <p className="iit text-sm text-[#ffffff] ">Our cross-functional teams of developers, designers, and strategists work seamlessly together, ensuring each product is impactful and user-centric.</p>
                        </div>
                    </div>
                    
                    <div className="slide3-1 flex flex-col md:flex-row items-center justify-start">
                        <div className="bubble1 text-white rounded-full w-[40px] h-[38px] flex items-center justify-center mr-4" style={{border:'1px solid orange'}}>
                            <p className="bb1 text-xl">3</p>
                        </div>
                        <div>
                            <p className="prod text-xl text-teal-300 font-semibold">Continuous Enhancement</p>
                            <p className="iit text-sm text-[#ffffff]">Through regular updates and agile methodologies, we adapt to changing markets, enhancing each product’s value and longevity.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side Image */}
            <div className="w-full md:w-1/2 flex justify-center">
                <img src="https://res.cloudinary.com/dx97khgxd/image/upload/v1730371985/page3_qhhxbb.png" alt="Zendcoders" className="image3 max-w-full h-auto" />
            </div>
            </div>

        </>
    );
}

export default Expertise;