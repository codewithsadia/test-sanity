import React from 'react';
import image from '../pulic/image.png';
import imageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';

interface AboutProps {
  image: any;
  src:string 
  alt:string
}

const About: React.FC<AboutProps> = ({ image }) => {
  const builder = imageUrlBuilder({
    projectId: '8flt191u', // Replace with your Sanity project ID
    dataset: 'production', // Replace with your Sanity dataset
  });

  function urlFor(source: any) {
    return builder.image(source);
  }

  return (
    <div id="about" className="container mx-auto px-10 py-16  text-pink-600">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl text-center font-bold text-black mb-6">
        About Me!
      </h2>

      {/* Image Section */}
      <div className="flex justify-center mb-6">
        <Image
          src={image} // Use the Sanity image URL
          alt="Sadia Imran"
          width={200}
          height={200}
          className="rounded-full border-4 border-pink-600 shadow-lg"
        />
      </div>

      {/* About Text */}
      <p className="text-gray-500 text-center leading-relaxed mb-8">
        Hi, I am <span className="font-bold text-black">Sadia Imran</span>, a
        frontend web developer, social media marketer, Shopify store specialist,
        content writer, and graphic designer with over 2 years of experience. I
        specialize in crafting visually appealing websites, building responsive
        layouts, and ensuring seamless user experiences across all devices.
        With expertise in various frontend frameworks and design tools, I
        deliver high-quality, dynamic, and interactive web pages. I'm also
        well-versed in e-commerce platforms like Shopify, where I help clients
        create and manage their online stores effectively.
      </p>

      {/* Button */}
      <div className="flex justify-center">
        <button className="bg-pink-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-pink-700 transition duration-300">
          View My Work
        </button>
      </div>
    </div>
  );
};

export default About;
