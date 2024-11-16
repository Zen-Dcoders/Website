// import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  function Submit(e) {
    e.preventDefault();

    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);

    // Show loading toast
    const toastId = toast.loading("Submitting your form...");

    fetch(
      "https://script.google.com/macros/s/AKfycbw6C01-DjC1vlDzXrwXHAHFJ4vocCx77MfTOB4OOpaVR8tAbbFFCy0ndyLcBNbd8K2Q/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        if (data.status === "success") {
          // Update toast to success
          toast.update(toastId, {
            render: "Form submitted successfully!",
            type: "success",
            isLoading: false,
            autoClose: 3000,
          });
          formEle.reset();
        } else {
          throw new Error(data.message || "Unexpected response");
        }
      })
      .catch((error) => {
        // Update toast to error
        toast.update(toastId, {
          render: "Error submitting form. Please try again.",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
        console.error("Form submission error:", error);
      });
  }

  return (
    <>
      <h1 className="saii text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-[#ffffff] mt-[10vmin] mb-[5vmin]">
        CONTACT US
      </h1>

      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 text-gray-800 mb-[5vmin]">
        {/* Left Section */}
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight text-[#ffffff] lg:text-5xl">
              Lets talk!
            </h2>
            <p className=" text-[#ccc]">ZenDcoders Innovation Meets Expertise</p>
          </div>
          <img
            src="https://res.cloudinary.com/dn2609yjq/image/upload/v1731736800/wanderease_logo_bbk1cc.png"
            alt="Contact illustration"
            className="mt-6 w-full h-auto md:h-full object-cover rounded-md"
          />
        </div>

        {/* Form Section */}
        <form noValidate className="form space-y-6" onSubmit={Submit}>
          {/* Full Name Field */}
          <div>
            <label htmlFor="name" className="text-sm text-[#ffffff] font-medium">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              name="Name"
              className="w-full p-3 rounded border border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              style={{
                background: "linear-gradient(to right, #000000, #2C3E50)",
                color: "white",
              }}
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="text-sm font-medium text-[#ccc]">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your Email"
              name="Email"
              className="w-full p-3 rounded border border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              style={{
                background: "linear-gradient(to right, #000000, #2C3E50)",
                color: "white",
              }}
            />
          </div>

          {/* Phone Number Field */}
          <div>
            <label htmlFor="name" className="text-sm text-[#ffffff] font-medium">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              placeholder="Subject"
              name="Subject"
              className="w-full p-3 rounded border border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              style={{
                background: "linear-gradient(to right, #000000, #2C3E50)",
                color: "white",
              }}
            />
          </div>



          {/* Phone Number Field */}
          <div>
            <label htmlFor="name" className="text-sm text-[#ffffff] font-medium">
              Mobile
            </label>
            <input
              id="mobile"
              type="text"
              placeholder="Mobile"
              name="Phone"
              className="w-full p-3 rounded border border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              style={{
                background: "linear-gradient(to right, #000000, #2C3E50)",
                color: "white",
              }}
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="text-sm font-medium text-[#ccc]">
              Message
            </label>
            <textarea
              id="message"
              rows="3"
              placeholder="Your Message"
              name="Message"
              className="w-full p-3 rounded border border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              style={{
                background: "linear-gradient(to right, #000000, #2C3E50)",
                color: "white",
              }}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-teal-600 text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </>
  );
};

export default Contact;
