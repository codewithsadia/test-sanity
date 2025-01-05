import React from 'react';
import { FaRegEnvelope } from "react-icons/fa6";
import { BsFillTelephoneForwardFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div id="contact" className="flex items-center justify-center pt-32 px-6 container mx-auto">
      <div className="grid md:grid-cols-2 gap-10 w-full max-w-4xl">
        {/* Left Section */}
        <div className="space-y-8">
          <h2 className="text-black text-4xl md:text-5xl font-bold">Get in touch!</h2>
          <p className="text-gray-700 text-[16px] md:text-[18px] pt-2 leading-relaxed">
            Drop me a line, give me a call, or send me a message by submitting the form.
          </p>
          <div className="flex items-center gap-2 text-gray-800" data-aos="zoom-in-up">
            <FaRegEnvelope size={25} />
            <span>sadiaimranmalik24@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 text-gray-800">
            <BsFillTelephoneForwardFill size={30} />
            <span>(021) 000-9999</span>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="space-y-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-gray-800 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="h-[40px] bg-transparent border-b-2 border-gray-400 focus:border-accent focus:outline-none text-gray-800"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-gray-800 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="h-[40px] bg-transparent border-b-2 border-gray-400 focus:border-accent focus:outline-none text-gray-800"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-gray-800 font-medium">
              Message
            </label>
            <textarea
              id="message"
              className="h-[100px] bg-transparent border-b-2 border-gray-400 focus:border-accent focus:outline-none text-gray-800"
              placeholder="Write your message"
            ></textarea>
          </div>
          <button className="bg-slate-200 text-black px-4 py-2 rounded-md shadow-md hover:bg-accent-dark transition">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
