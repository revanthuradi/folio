import { motion as m, useScroll, useTransform } from "framer-motion";
import Divider from "./Divider";
import { useState, useEffect } from "react";
import { PROJECTS } from '../constants';
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

const Projects = () => {
    const { scrollYProgress } = useScroll();
    const xRange = useTransform(scrollYProgress, [0, 1], [1500, 0]);
    const xRange2 = useTransform(scrollYProgress, [0, 1], [0, 1500]);

    const [disableAnimation, setDisableAnimation] = useState(false);

    // UseEffect to check screen size and disable animations on mobile
    useEffect(() => {
        const handleResize = () => {
            // Disable animations if screen width is less than 768px (mobile size)
            if (window.innerWidth < 768) {
                setDisableAnimation(true);
            } else {
                setDisableAnimation(false);
            }
        };

        // Check on initial render
        handleResize();

        // Add resize event listener
        window.addEventListener("resize", handleResize);

        // Cleanup listener on unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <section className="font-bebas">
            {
                PROJECTS.map((project, index) => (
                    <a href={project.githubLink} key={project.id} target="_blank">
                        {
                            index === 0 && <Divider index={index} />
                        }
                        <m.div className="mb-3  relative">
                            <div className="text-end px-24  py-2 lg:py-5 lg:text-2xl">
                                <p>FRONTEND /</p>
                                <p>BACKEND</p>
                            </div>
                            <div className="w-screen title  relative  lg:h-56 overflow-x-hidden text-nowrap">
                                {!disableAnimation ? (
                                    <m.div className={`gap-5 absolute ${index % 2 === 0 ? "-ml-[1000px]" : "-ml-[400px]"}`}
                                        style={{ x: index % 2 === 0 ? xRange : xRange2 }}
                                        transition={{ duration: 1, ease: "linear" }}
                                    >
                                        <m.h2 className="text-5xl lg:text-[10vw]">
                                            {project.name} - {project.description}
                                            <span className="outer" aria-hidden="true">
                                                <span className="inner"> {project.name} - {project.description}</span>
                                            </span>
                                        </m.h2>
                                    </m.div>
                                ) : (
                                    <div className="py-5 px-4">
                                        <h2 className={`text-5xl  lg:text-[10vw] ${index % 2 == 0 ? "text-end" : "text-start"} text-wrap`}>
                                            {project.name} - <br /> {project.description}
                                        </h2>
                                        <div className="flex justify-end">
                                            <a href={Link.href} className=" inline-flex mt-3 items-center justify-end px-4 py-1  lg:px-7  overflow-hidden font-medium   border border-textColor rounded-full shadow-md group">
                                                <span className="inline">
                                                    VISIT SITE <GoArrowUpRight fontSize={18} className="inline" />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <Divider index={index} />
                        </m.div>
                    </a>
                ))
            }
        </section>
    );
};

export default Projects;
