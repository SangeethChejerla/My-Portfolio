"use client";
import Heroimage from "@/components/heroimage";
import { TextGenerateEffect } from "@/components/ui/text-generated-effect";
import { TypeAnimation } from "react-type-animation";
import Balancer from 'react-wrap-balancer'
import Link from "next/link";
import Terminal from "@/components/terminal";


export default function Home(){
 
    const words = `I'm a self-taught developer, fueled by curiosity and a love of code. YouTube tutorials were my classroom, GitHub repositories my textbooks. I'm here to showcase what I've learned and what I'm building next!`;
    return (
        <>
        <div>
            <div className="flex flex-col justify-center items-center mb-20">
              <div className="mb-8">
            <Heroimage/>
            </div>

            <h1 className="dark:text-white mb-2 text-4xl sm:text-5xl 
           font-extrabold">
            <span className="">
              Hello, I&apos;m{" "}
            </span>
            </h1>
            <br></br>
            <h1 className="text-4xl sm:text-5xl font-extrabold">
      <TypeAnimation
        sequence={[
          "Sangeeth Reddy",
          3000,
          "Fullstack <Developer/>",
          1000,
          " AI Enthusiast",
          1000,
          "A Giga Chad",
          1000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="gradient-text"
      />
    </h1>
         
          </div>
          <div className="mx-auto">
          <Balancer >
        <TextGenerateEffect words={words} />
        </Balancer>
        </div>
        </div>

        <div className="flex justify-center mt-10">
  <Link
    href="/contact"
    className="px-6  py-3 flex justify-center items-center
    w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-500 hover:to-blue-600 text-white transition duration-300 ease-in-out"
  >
    Hire Me
  </Link>
  <Link
    href="/"
    className="px-1 flex justify-center items-center py-1 w-full sm:w-fit rounded-full hover:bg-slate-800 text-white hover:text-gray-900 transition duration-300 ease-in-out"
  >
    <span className="block bg-[#121212] hover:bg-slate-800 hover:text-white rounded-full px-5 py-2">
      Download CV
    </span>
  </Link>


</div>

<div className="mt-16 flex flex-col justify-center items-center">
    <h1 className="text-6xl font-semibold mb-8">Developed with:</h1>
    <Terminal />
  </div>
</>
    )
}




 
