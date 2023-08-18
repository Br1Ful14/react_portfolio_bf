import React from "react";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, OrbitControls } from "@react-three/drei";

export const About = () => {
  return (
    <section id="about" className="section bg-primary">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <div className="w-1/3 h-72 lg:block hidden relative">
            <Canvas className="w-1/3 xl:w-1/2 mx-auto">
              <OrbitControls enableZoon={false} />
              <ambientLight intensity={0.9} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={1.5}>
                <MeshDistortMaterial
                  color="#ffa700"
                  attach="material"
                  distort={0.7}
                  speed={2}
                />
              </Sphere>
            </Canvas>
          </div>
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left w-full xl:w-1/2">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg::font-extrabold mb-3">
                Bruno Fulia
              </h2>
              <p className="mb-4 text-accent text-center sm:text-left">
                Devéloppeur Web
              </p>
              <div className="h-1 w-72 bg-fuchsia-500 mb-4 mx-auto sm:mx-0" />
              <p className="mb-8 text-center sm:text-left">
              Je suis un développeur web full-stack avec une expérience professionnelle antérieure en tant qu'avocat et chef de partie. Grâce à cette expérience diversifiée, j'ai développé une grande capacité d'adaptation, une forte éthique de travail et une grande créativité dans mon approche du développement web. <br />
              En plus de mes compétences en développement web, je parle couramment le français, l'espagnol, l'anglais et l'italien, ce qui me permet de travailler efficacement avec des clients de différentes cultures et de différentes langues.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
