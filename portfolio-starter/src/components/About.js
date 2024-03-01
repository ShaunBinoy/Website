import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className=" container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-y-0 h-screen">
          <div className="flex-1 bg-about bg-contain bg-no-repeat mix-blend-lighten bg-top lg:h-[440px] hidden lg:flex max-w-[320px] lg:max-w-[482px] mx-auto"></div>
          <div className="flex-1 text-center lg:text-left">
            <h2 className="h2 text-accent font-bold">About Me</h2>
            <h3 className="h3">Full Stack Developer ( MERN Stack )</h3>
            <p>
              Motivated Software Developer with six months experience in MERN
              Stack (MongoDB, Express.js, React.js, Node.js) and an aptitude for
              Front-End Development and Back-End using MERN Stack. Skilled in
              Python, SQL, C, and C++, with a commitment to delivering top-notch
              solutions for client satisfaction. Strong problem-solving and
              analytical abilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
