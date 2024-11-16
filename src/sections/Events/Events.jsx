const Events = () =>{
    return(
        <>
            <div className="slide2 flex flex-col items-center py-8 px-4 md:pl-[25vmin] md:p-[15vmin]">
  <div className="ssss text-center space-y-4">
    <h1 className="head-font1 text-3xl md:text-4xl text-[#3EA99F] font-bold">Workshops and Contests</h1>
    <p className="para6 text-xl  text-[#ffffff] ">Certifications and Prizes</p>
    <div className="cardss grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      <div className="card11 flex flex-col items-center  rounded-lg shadow-lg p-4 space-y-4" style={{border:'1px solid gold'}} >
        <img
          src="https://res.cloudinary.com/dx97khgxd/image/upload/v1730371983/page61_xvlszt.png"
          alt="Zendcoders"
          className="img11 w-24 h-24 md:w-32 md:h-32"
        />
        <h5 className="head-font1 ss mm text-xl text-[#ffffff] font-semibold"  >Prizes</h5>
        <p className="para5 text-center text-[#ccc]">
          Compete in our contests and win attractive prizes for your talent.
        </p>
      </div>
      <div className="card11 flex flex-col items-center  rounded-lg shadow-lg p-4 space-y-4" style={{border:'1px solid gold'}} >
        <img
          src="https://res.cloudinary.com/dx97khgxd/image/upload/v1730371983/page62_a7aj59.png"
          alt="Zendcoders"
          className="img11 w-24 h-24 md:w-32 md:h-32"
        />
        <h5 className="head-font1 ss mm text-xl   text-[#ffffff] font-semibold">Certificate</h5>
        <p className="para5 text-center  text-[#ccc]">
          Earn valuable industry certifications to enhance your skillset.
        </p>
      </div>
      <div className="card11 flex flex-col items-center  rounded-lg shadow-lg p-4 space-y-4" style={{border:'1px solid gold'}} >
        <img
          src="https://res.cloudinary.com/dx97khgxd/image/upload/v1730371983/page63_jho8mv.png"
          alt="Zendcoders"
          className="img11 w-24 h-24 md:w-32 md:h-32"
        />
        <h5 className="head-font1 ss mm text-xl  text-[#ffffff] font-semibold">Opportunity</h5>
        <p className="para5 text-center  text-[#ccc]">
          Connect with fellow developers and industry professionals.
        </p>
      </div>
    </div>
  </div>
</div>


        </>
    );
}

export default Events;