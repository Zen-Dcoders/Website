// import React from "react";
import { motion } from "framer-motion";

const Expertise = () => {
  return (
    <>
      <motion.div
        className="slide2 flex flex-col md:flex-row items-center justify-center py-12 px-6 md:px-20 md:pl-[25vmin] md:p-[15vmin] mb-[5vmin]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Left Side Content */}
        <motion.div className="inner-slide3 w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="head-font1 text-2xl md:text-4xl font-extrabold text-[#ffffff] mb-8">
            Empowering Digital Transformation Through Innovative <br /> Web & Mobile Solutions
          </h1>
          
          {/* Slide3 Content */}
          <div className="slide3-part1 space-y-8">
            {["Multi-Product Expertise", "Collaborative & Skilled Team", "Continuous Enhancement"].map((title, index) => (
              <motion.div
                className="slide3-1 flex flex-col md:flex-row items-center justify-start"
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div
                  className="bubble1 text-white rounded-full w-[40px] h-[38px] flex items-center justify-center mr-4"
                  style={{ border: `1px solid ${["lime", "yellow", "orange"][index]}` }}
                >
                  <p className="bb1 text-xl">{index + 1}</p>
                </div>
                <div>
                  <p className="prod text-xl text-teal-300 font-semibold">{title}</p>
                  <p className="iit text-sm text-[#ffffff]">
                    {[
                      "We develop and manage a diverse portfolio of web and mobile applications, tailored to meet specific industry needs and user demands.",
                      "Our cross-functional teams of developers, designers, and strategists work seamlessly together, ensuring each product is impactful and user-centric.",
                      "Through regular updates and agile methodologies, we adapt to changing markets, enhancing each product’s value and longevity."
                    ][index]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img
            src="https://res.cloudinary.com/dx97khgxd/image/upload/v1730371985/page3_qhhxbb.png"
            alt="Zendcoders"
            className="image3 max-w-full h-auto"
          />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Expertise;
