"use client"
import * as React from "react";
import { useState } from "react";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Heroimage from "@/components/heroimage";

const birthYear = 2002;
const currentYear = new Date().getFullYear();
const age = currentYear - birthYear - 1;

// Character profile data
const characterProfile = {
  name: "Chejerla Sangeeth Reddy",
  nickname: "Mr.Perfect",
  characteristics: {
    gender: "male",
    age: age.toString(),
    birthday: "2nd December 2002",
    height: "176 cm (5'9)",
    hairColor: "Black",
    eyeColor: "Black",
    hobbies: ["Reading Books,","Browsing,", "Playing Video Games,","Sports" ]
  },
  education: {
    degree: "Bachelor's in Computer Science",
    university: "Narasaraopeta Engineering College",
    graduationYear: "2024",
    relevantCourses: [
      "Data Structures and Algorithms",
      "Software Engineering",
      "Database Management Systems",
      "Web Development",
      "Machine Learning"
    ]
  }
};

export default function CharacterProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col mt-8">
        <div className="flex flex-col items-center justify-center">
          <Heroimage />
        </div>
        <div>
          <div className="mt-12">
            <div className="flex justify-center">
              <Button
                variant="brand"
                size="lg"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-1"
              >
                <span>Show Profile</span>
                <CaretSortIcon className={`h-4 w-4 ${isOpen ? "transform rotate-180" : ""}`} />
              </Button>
            </div>
            {isOpen && (
              <div className="inline-flex animate-shine max-w-[500px] w-full items-center
             justify-center rounded-xl text-sm border border-white/10
              bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)]
               bg-[length:200%_100%] px-4 py-5 transition-colors">
                <div className="flex flex-col gap-2">
                  <div className=" mt-2 w-96 rounded-md shadow-lg  ring-1 ring-black ring-opacity-5">
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2">{characterProfile.name}</h3>
                     
                      <p className="text-sm mb-2"><strong>Nickname:</strong> {characterProfile.nickname}</p>
                      <div className="text-sm mb-2">
                        <strong>Characteristics</strong>
                        <ul className="list-disc pl-4">
                          {Object.entries(characterProfile.characteristics).map(([key, value]) => (
                            <li key={key}><strong>{key}:</strong> {value}</li>
                          ))}
                        </ul>
                        
                      </div>
                      <div className="text-sm mb-2">
                        <strong>Education</strong>
                        <ul className="list-disc pl-4">
                          <li><strong>Degree:</strong> {characterProfile.education.degree}</li>
                          <li><strong>University:</strong> {characterProfile.education.university}</li>
                          <li><strong>Graduation Year:</strong> {characterProfile.education.graduationYear}</li>
                          
                          <li>
                            <strong>Relevant Courses:</strong>
                            <ul className="list-disc pl-6">
                              {characterProfile.education.relevantCourses.map((course, index) => (
                                <li key={index}>{course}</li>
                              ))}
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
