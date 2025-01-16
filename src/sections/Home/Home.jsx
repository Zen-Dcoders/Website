// import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <>
      <div className="text-white flex items-center justify-center md:p-[15vmin] mt-[15vmin] md:mt-[0vmin] mb-[5vmin]">
        <motion.div
          className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Text Section */}
          <motion.div className="md:w-1/2 max-w-xl mx-auto">
            <h1 className="text-5xl md:text-5xl font-bold leading-tight teko">
              <span className="head-font text-teal-300">Zen</span>Dcoders
            </h1>
            <h2 className="text-4xl md:text-4xl font-bold leading-tight teko mt-[5px]">
              <Typewriter
                options={{
                  strings: ["Innovation Meets Expertise"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
            <p className="text-lg md:text-xl mt-4 mb-6 max-w-md mx-auto akaya-kanadaka-regular">
              We craft digital experiences that engage, inspire, and drive results.
            </p>
          </motion.div>

          {/* Image Section */}
          <motion.div className="md:w-[50%] mt-8 md:mt-0">
            <img
              src="https://res.cloudinary.com/dx97khgxd/image/upload/v1730421583/page1_tjzuxg.png"
              alt="zendcoders"
              className="sar mx-auto md:max-w-none w-[80%]"
            />
          </motion.div>
        </motion.div>
      </div>

      <div className="text-white flex items-center justify-center md:p-[15vmin] pt-[20vmin] mb-[5vmin]">
        <motion.div
          className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center text-center"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Image Section */}
          <motion.div className="md:w-[50%] mt-8 md:mt-0" initial={{ x: -100 }} whileInView={{ x: 0 }} transition={{ duration: 1 }}>
            <img
              src="https://res.cloudinary.com/dx97khgxd/image/upload/v1730364179/page2_bf5qbn.png"
              alt="zendcoders"
              className="sar mx-auto md:max-w-none w-[80%]"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div className="md:w-[90%] w-[70%] mx-auto" initial={{ x: 100 }} whileInView={{ x: 0 }} transition={{ duration: 1 }}>
            <h1 className="text-[7vmin] md:text-[40px] font-bold leading-tight pridi-bold">
              <span className="head-font text-teal-300">Join Our Crew of Innovators</span>
            </h1>
            <h2 className="text-[4vmin] md:text-[1.5vw] font-bold leading-tight kode-mono-bold mt-[15px]">
              <Typewriter
                options={{
                  strings: ["Building Digital Excellence Together."],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
            <p className="text-[3vw] md:text-[1.2vw] mt-4 mb-6 d mx-auto rancho-regular text-[#C0C0C0]">
              Explore opportunities to join our dynamic crew and co-create innovative solutions that shape the digital landscape.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
