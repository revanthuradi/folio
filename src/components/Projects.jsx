import { motion as m, useScroll, useTransform } from "framer-motion";
import Divider from "./Divider";
import { PROJECTS } from '../constants'
const Projects = () => {
    const { scrollYProgress } = useScroll()
    const xRange = useTransform(scrollYProgress, [0, 1], [1500, 0]);
    const xRange2 = useTransform(scrollYProgress, [0, 1], [0, 1500]);
    return (
        <section className="font-bebas" >
            {
                PROJECTS.map((project, index) => (
                    <a href={project.githubLink} key={project.id} target="_blank">
                        {
                            index == 0 && <Divider index={index} />
                        }
                        <m.div className="mb-3 relative hoverElement">
                            <div className="text-end px-24 py-2 lg:py-5 text-2xl">
                                <p>FRONTEND /</p>
                                <p>BACKEND</p>
                            </div>
                            <div className="w-screen title realative h-14  lg:h-56 overflow-hidden text-nowrap relative    ">
                                <m.div className={`  gap-5 absolute  ${index % 2 == 0 ? "-ml-[1000px]" : "-ml-[400px]"}`}
                                    style={{ x: index % 2 == 0 ? xRange : xRange2 }}
                                    transition={{ duration: 1, ease: "linear" }}
                                >
                                    <m.h2
                                        className=" text-5xl lg:text-[10vw] ">
                                        {project.name} - {project.description}
                                        <span className="outer" aria-hidden="true">
                                            <span className="inner"> {project.name} - {project.description}</span>
                                        </span>
                                    </m.h2>

                                </m.div>
                            </div>
                            <Divider index={index} />
                        </m.div>
                    </a>

                ))
            }

        </section>
    )
}

export default Projects
