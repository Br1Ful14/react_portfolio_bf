import React from "react";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, OrbitControls } from "@react-three/drei";
import { ArrowSection } from "./ArrowSection";
import glasses from "../../src/assets/img/logos/glasses.svg";
import { inViewHandler } from "../animationHandler";
import { motion, useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";

export const Hero = () => {
  const animation = useAnimation();

  return (
    <InView onChange={(inView) => inViewHandler(inView, animation)}>
      <section
        id="home"
        className="h-[100vh] bg-primary flex items-center w-full flex-col"
      >
        <div className="container mx-auto h-full flex justify-center">
          <motion.div
            className="content-wrapper flex items-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={animation}
          >
            <div className="flex">
              <div className="w-1 mr-8 md:h-58 bg-gradient-to-br from-violet-500 via-pink-500 to-red-500" />
              <div className="flex flex-col items-center lg:items-start">
                <div className="text-content">
                  <h1 className="text-4xl lg:text-5xl pb-4 font-bold">
                    Bienvenue, <br />
                    Je m'appelle <br />
                    <span className="text-fuchsia-600">
                      Bruno <br />
                    </span>
                    <span className="text-yellow-500">
                      Développeur Web <br />
                      Fullstack
                    </span>
                  </h1>
                </div>
              </div>
            </div>
            <div className="w-1/3 h-full lg:block hidden relative">
              <Canvas className="absolute inset-0">
                <OrbitControls enableZoon={false} />
                <ambientLight intensity={0.9} />
                <directionalLight position={[3, 2, 1]} />
                <Sphere args={[1, 100, 200]} scale={1}>
                  <MeshDistortMaterial
                    color="#86198f"
                    attach="material"
                    distort={0.5}
                    speed={2}
                  />
                </Sphere>
              </Canvas>
            </div>
          </motion.div>
        </div>
        <div className="bg-primary flex items justify-center">
          <ArrowSection />
        </div>
      </section>
    </InView>
  );
};
