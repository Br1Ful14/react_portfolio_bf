import React from "react";
import { Accordion } from "./Accordion";
import { motion, useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";
import { inViewHandler } from "../animationHandler";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import  CVBF  from "../assets/cv/CVBrunoFulia.pdf"

export const Portfolio = () => {
  const animation = useAnimation();
  return (
    <InView onChange={(inView) => inViewHandler(inView, animation)}>
      <section id="portfolio" className="section bg-primary min-h-[600px]">
        <div className="container mx-auto">
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={animation}
          >
            <h2 className="section-title">PORTFOLIO</h2>
            <p className="subtitle">
              Vous trouverez ici les projets que j'ai réalisés dernièrement
            </p>
            <Projects />
            <h2 className="section-title" id="resume">RESUME</h2>
            <p className="subtitle">
              Vous trouverez ici une brève description de mon expérience
              professionnelle <br />
              Vous pouvez aussi télécharger mon resume 
              <a href={CVBF} download="CVBrunoFulia" target="_blank" rel="noreferrer" className="text-yellow-500"> ICI</a>
            </p>
            <Accordion />
          </motion.div>
        </div>
      </section>
    </InView>
  );
};
