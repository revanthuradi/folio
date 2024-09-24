import { HERO } from "../constants"
import { motion as m, useScroll, useTransform } from "framer-motion";
import { FaArrowCircleDown } from "react-icons/fa";

const Hero = () => {
    const { scrollYProgress } = useScroll();
    const scaledProgress = useTransform(scrollYProgress, (value) => value * 2000 + 200);
    return (
        <section className="h-[100vh]  py-8">
            <m.div
                initial={{ y: "-180%" }}
                animate={{ y: "0%" }}
                transition={{
                    duration: 0.8,
                    ease: "anticipate",
                }}
                className="px-12 flex flex-wrap  gap-6 lg:gap-0 justify-between items-center">
                <div className=" scale-y-125 flex  gap-20 items-center ">
                    <h1 className="text-xl  text-white hover:text-orange title">
                        REVANTH URADI
                        <span className="outer" aria-hidden="true">
                            <span className="inner">REVANTH URADI</span>
                        </span>
                    </h1>
                    <h2 className="text-lg">
                        FRONTEND / BACKEND
                    </h2>
                </div>
                <div>
                    <div className=" ">
                        <a href="#contact" className="relative inline-flex items-center justify-center px-4 py-2  lg:px-7  overflow-hidden font-medium  transition duration-300 ease-out border border-textColor rounded-full shadow-md group">
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full  duration-300 translate-y-full  group-hover:translate-y-0 ease">
                                CONTACT
                            </span>
                            <span className="absolute flex items-center justify-center w-full h-full text-textColor transition-all duration-200 transform group-hover:-translate-y-full ease">CONTACT</span>
                            <span className="relative invisible">CONTACT</span>
                        </a>
                    </div>
                </div>
            </m.div>
            <div className="mt-10 ml-12 py-3 overflow-hidden  ">
                <m.h1
                    className="flex items-center gap-3 "
                    initial={{ y: "130%" }}
                    animate={{ y: "0%" }}
                    transition={{
                        duration: 0.8,
                        ease: "anticipate",
                        delay: 0.4
                    }}
                >
                    <m.div
                        className="text-7xl  inline-block lg:text-[18vw] scale-y-125 tracking-wide  font-bebas font-semibold  ">
                        <span className="hover:text-white">F</span>
                        <span className="hover:text-white">U</span>
                        <span className="hover:text-white">L</span>
                        <span className="hover:text-white">L</span>

                    </m.div>
                    <m.span
                        className="origin-center hidden lg:inline h-8   bg-[#777777]"
                        style={{ width: scaledProgress, originX: 0.5 }}>
                    </m.span>
                    <m.div
                        className="text-7xl inline lg:text-[18vw] scale-y-125 tracking-wide font-bebas font-semibold  ">
                        <span className="hover:text-white">S</span>
                        <span className="hover:text-white ">T</span>
                        <span className="hover:text-white">A</span>
                        <span className="hover:text-white">C</span>
                        <span className="hover:text-white">K</span>
                    </m.div>
                </m.h1>
            </div>
            <div className="text-nowrap overflow-hidden lg:flex  gap-6  px-12  ">
                <div className="overflow-hidden ">
                    <m.h1
                        initial={{ y: "100%", scaleY: 1.25 }}
                        animate={{ y: "0%" }}
                        transition={{
                            duration: 0.8,
                            ease: "anticipate",
                            delay: 0.6
                        }}
                        className="text-7xl overflow-hidden lg:text-[18vw] scale-y-125 tracking-wide font-bebas font-semibold py-5  ">
                        <span className="hover:text-white ">D</span>
                        <span className="hover:text-white">E</span>
                        <span className="hover:text-white">V</span>
                        <span className="hover:text-white">E</span>
                        <span className="hover:text-white">L</span>
                        <span className="hover:text-white">O</span>
                        <span className="hover:text-white">P</span>
                        <span className="hover:text-white">E</span>
                        <span className="hover:text-white">R</span>
                    </m.h1>
                </div>
                <div className="text-xl flex items-center  text-wrap lg:w-[25vw] py-4 ">
                    <m.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.8,
                            ease: "anticipate",
                            delay: 1
                        }}
                        className="lg:text-2xl font-oswald font-thin  ">
                        ABOUT
                        <span className="font-thin ml-2 text-white">

                            {HERO.description}
                        </span>
                    </m.p>

                </div>

            </div>




        </section >
    )
}

export default Hero
