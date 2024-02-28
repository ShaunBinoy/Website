import React from "react";
import Image from "../assets/avatar.png";
import { FaGithub, FaYoutube, FaDribble } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section className="section" id="home">
      <div className="container mx-auto">
        <div>
          <div>text</div>
          <div>
            <img src={Image} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
