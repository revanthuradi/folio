import { motion as m } from 'framer-motion'
import Divider from './Divider'
import { SOCIAL_MEDIA_LINKS } from '../constants'

const Contact = () => {
    return (
        <section className="mt-36 lg:mt-[250px]  overflow-hidden" id="contact" >
            <div className="flex justify-center ">
                <p className="text-lg lg:text-3xl md:text-2xl text-center px-3 lg lg:w-2/3  ">
                    Got a question, proposal or project or want to work together on something? <br/>Feel free to reach out.
                </p>
            </div>
            <div className="mt-16">
                <Divider index={0} />
                <div className='text-nowrap flex font-bebas lg:text-9xl text-5xl tracking-wider lg:tracking-wide lg:py-10 py-6'>
                    <m.h2
                        initial={{ x: 0 }}
                        animate={{ x: "-100%" }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="title font-bold flex flex-shrink-0 "
                    >

                        {"LET'S  COLLABORATE - SAY HELLO - WANNA BE STARTING SOMETHING ?  LET'S TALK -"}
                        <span className="outer" aria-hidden="true">
                            <span className="inner">{"LET'S  COLLABORATE - SAY HELLO - WANNA BE STARTING SOMETHING ?  LET'S TALK -"}</span>
                        </span>
                    </m.h2>

                    <m.h2
                        initial={{ x: 0 }}
                        animate={{ x: "-100%" }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        whileHover={{}}  // Pauses the animation while hovering
                        className="title font-bebas flex  flex-shrink-0 font-bold"
                    >
                        {"LET'S  COLLABORATE - SAY HELLO - WANNA BE STARTING SOMETHING?  LET'S TALK "}
                        <span className="outer" aria-hidden="true">
                            <span className="inner">{"LET'S  COLLABORATE - SAY HELLO - WANNA BE STARTING SOMETHING ?  LET'S TALK -"}</span>
                        </span>
                    </m.h2>
                </div>
                <Divider index={1} />

            </div>
            <div className="mt-16 text-2xl text-whitee lg:text-4xl md:text-3xl text-center">
                <h2><a href="mailto: revanthuradi9866@gmail.com"> revanthuradi9866@gmail.com </a></h2>
            </div>

            <div className='mt-10 flex gap-5 items-center justify-center'>
                {
                    SOCIAL_MEDIA_LINKS.map((link, index) => (
                        <a key={index} href={link.href} target='_blank' className=" text-md lg:text-xl relative inline-flex items-center justify-center px-2 py-2 lg:p-4 lg:px-8 lg:py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border border-textColor rounded-full shadow-md group">
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 translate-y-full bg-orange group-hover:translate-y-0 ease">
                                <span>{link.icon}</span>
                            </span>
                            <span className="absolute flex items-center justify-center w-full h-full text-textColor transition-all duration-200 transform group-hover:-translate-y-full ease">{link.name}</span>
                            <span className="relative invisible">{link.name}</span>
                        </a>
                    ))
                }
            </div>

        </section>
    )
}

export default Contact
