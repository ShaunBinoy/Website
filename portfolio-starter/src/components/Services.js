import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "MERN Stack Developer Intern",
    company: "HeadCodes, Kochi",
    duration: "2023 Sept to 2024 Feb",
    description:
      "Helped complete various live projects by working on development, implementation, and troubleshooting aspects. Served as a team lead, managing tasks and ensuring smooth collaboration for on-time project delivery. Received an award for being the best performer, recognized for dedication, innovation, and significant contributions to project success. Guided and trained students, offering support on coding standards, best practices, and project methods. Conducted MERN Stack bootcamps for students at various colleges, contributing to their practical learning and skill development.",
  },
];
const educations = [
  {
    college: "Thejus Engineering College",
    university: " APJ Abdul Kalam Technological University",
    year: "2023",
    course: "Computer Science And Engineering",
  },
  {
    college: "TMHSS Perumpilavu",
    university: "Kerala HSE Board: DHSE",
    year: "2019",
    course: "",
  },
];

const Services = () => {
  return (
    <section className="section mb-48 " id="services">
      <div className="container mx-auto flex">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 mb-8">
            <h2 className="h2 text-center">EDUCATION</h2>
            <div>
              {educations.map((education, index) => {
                const { college, university, year, course } = education;
                return (
                  <div
                    className="border-b border-white/20 h-[136px] mb-38px lg:mr-8 lg:h-[120px]"
                    key={index}
                  >
                    <div className="'max-w-[476px]">
                      <div className="flex flex-col lg:flex-row lg:justify-between">
                        <h3 className="text-[20px] tracking-wider font-primary font-semibold">
                          {college}
                        </h3>
                        <h4 className="font-medium">{year}</h4>
                      </div>
                      <h4 className="font-medium">{university}</h4>
                      <p className="font-medium">{course}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex-1 ">
            <h2 className="h2 text-center">Experience</h2>
            <div>
              {services.map((service, index) => {
                const { name, company, duration, description } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-38px"
                    key={index}
                  >
                    <div className="'max-w-[476px]">
                      <div className="flex flex-col lg:flex-row lg:justify-between">
                        <h3 className="text-[20px] tracking-wider font-primary font-semibold">
                          {name}
                        </h3>
                        <h4 className="font-medium">{duration}</h4>
                      </div>
                      <h4 className="font-medium mb-4">{company}</h4>
                      <p className="text-[17px] font-secondary leading-6">
                        {description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
