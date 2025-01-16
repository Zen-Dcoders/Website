import { motion } from 'framer-motion';

const Events = () => {
  return (
    <>
      <div className="slide2 flex flex-col items-center py-8 px-4 md:pl-[25vmin] md:p-[15vmin]">
        <div className="ssss text-center space-y-4">
          {/* Title and Description with animations */}
          <motion.h1
            className="head-font1 text-3xl md:text-4xl text-[#3EA99F] font-bold"
            initial={{ opacity: 0, y: -50 }} // Starts above
            animate={{ opacity: 1, y: 0 }} // Ends in normal position
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Workshops and Contests
          </motion.h1>

          <motion.p
            className="para6 text-xl text-[#ffffff]"
            initial={{ opacity: 0, y: 50 }} // Starts below
            animate={{ opacity: 1, y: 0 }} // Ends in normal position
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            Certifications and Prizes
          </motion.p>

          <div className="cardss grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {/* Card 1 with animation */}
            <motion.div
              className="card11 flex flex-col items-center rounded-lg shadow-lg p-4 space-y-4"
              style={{ border: '1px solid gold' }}
              initial={{ opacity: 0, scale: 0.8 }} // Starts smaller and transparent
              animate={{ opacity: 1, scale: 1 }} // Ends in normal size
              whileHover={{ scale: 1.05 }} // Hover effect for scaling
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            >
              <motion.img
                src="https://res.cloudinary.com/dx97khgxd/image/upload/v1730371983/page61_xvlszt.png"
                alt="Zendcoders"
                className="img11 w-24 h-24 md:w-32 md:h-32"
                whileHover={{ scale: 1.1 }} // Zoom effect on hover
                transition={{ duration: 0.3 }}
              />
              <h5 className="head-font1 ss mm text-xl text-[#ffffff] font-semibold">
                Prizes
              </h5>
              <p className="para5 text-center text-[#ccc]">
                Compete in our contests and win attractive prizes for your talent.
              </p>
            </motion.div>

            {/* Card 2 with animation */}
            <motion.div
              className="card11 flex flex-col items-center rounded-lg shadow-lg p-4 space-y-4"
              style={{ border: '1px solid gold' }}
              initial={{ opacity: 0, scale: 0.8 }} // Starts smaller and transparent
              animate={{ opacity: 1, scale: 1 }} // Ends in normal size
              whileHover={{ scale: 1.05 }} // Hover effect for scaling
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
            >
              <motion.img
                src="https://res.cloudinary.com/dx97khgxd/image/upload/v1730371983/page62_a7aj59.png"
                alt="Zendcoders"
                className="img11 w-24 h-24 md:w-32 md:h-32"
                whileHover={{ scale: 1.1 }} // Zoom effect on hover
                transition={{ duration: 0.3 }}
              />
              <h5 className="head-font1 ss mm text-xl text-[#ffffff] font-semibold">
                Certificate
              </h5>
              <p className="para5 text-center text-[#ccc]">
                Earn valuable industry certifications to enhance your skillset.
              </p>
            </motion.div>

            {/* Card 3 with animation */}
            <motion.div
              className="card11 flex flex-col items-center rounded-lg shadow-lg p-4 space-y-4"
              style={{ border: '1px solid gold' }}
              initial={{ opacity: 0, scale: 0.8 }} // Starts smaller and transparent
              animate={{ opacity: 1, scale: 1 }} // Ends in normal size
              whileHover={{ scale: 1.05 }} // Hover effect for scaling
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
            >
              <motion.img
                src="https://res.cloudinary.com/dx97khgxd/image/upload/v1730371983/page63_jho8mv.png"
                alt="Zendcoders"
                className="img11 w-24 h-24 md:w-32 md:h-32"
                whileHover={{ scale: 1.1 }} // Zoom effect on hover
                transition={{ duration: 0.3 }}
              />
              <h5 className="head-font1 ss mm text-xl text-[#ffffff] font-semibold">
                Opportunity
              </h5>
              <p className="para5 text-center text-[#ccc]">
                Connect with fellow developers and industry professionals.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
