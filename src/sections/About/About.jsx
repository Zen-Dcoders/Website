import wanderease from '../../assets/wanderease.png'
const About = () =>{
    return(
        <>
            <div className="slide2 flex flex-col items-center py-8 px-4 lg:px-16 space-y-6 md:p-[15vmin] mb-[5vmin]">
                <div className="siv text-center">
                    <h1 className="saii text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-[#ffffff] mb-[5vmin]">
                    CERTIFIED AND REGISTERED IN
                    </h1>
                    <div className="bbss flex justify-center items-center mt-4 bg-white border-4 border-yellow-500 rounded-md p-4">
                    <img
                        src="https://res.cloudinary.com/dx97khgxd/image/upload/v1730381375/msme_hpmnu4.png"
                        alt="msmc"
                        className="immm w-32 md:w-40 lg:w-48 object-contain"
                    />
                    </div>
                </div>
            </div>

            <div className="slide2 flex flex-col items-center py-8 px-4 lg:px-16 space-y-6 md:p-[15vmin] mb-[5vmin]">
                <div className="siv text-center">
                    <h1 className="saii text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-[#ffffff] mb-[5vmin]">
                    OUR CLIENTS & PARTNERS
                    </h1>
                    <div className="bbss flex justify-center items-center mt-4 bg-white border-4 border-yellow-500 rounded-md p-4">
                    <img
                        src={wanderease}
                        alt="msmc"
                        className="immm w-32 md:w-40 lg:w-48 object-contain"
                    />
                    </div>
                </div>
            </div>


        </>
    );
}

export default About;