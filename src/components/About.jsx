import { ABOUT } from '../constants'
import {  useRef } from 'react'
import { motion as m, useScroll, useTransform } from 'framer-motion'
const About = () => {

    const element = useRef(null)
    const { scrollYProgress } = useScroll({
        target: element,
        offset: ['start 0.75', 'start 0.25']
    })

    const words = ABOUT[0].split(" ")
    return (
        <section className='mt-32 lg:mt-[250px]  flex flex-col items-center' id='aboutMe'>
            <h2 className=' text-4xl md:text-6xl lg:text-6xl text-center text-textColor  font-bold'>ABOUT ME</h2>
            <m.p
                ref={element}
                className=' text-2xl lg:mt-20 whitespace-nowrap px-3 lg:px-0  flex flex-wrap gap-1 font-oswald font-thin  lg:w-[70%] md:w-[80%] md:text-3xl md:text-center mt-12 lg:text-5xl  '>
                {
                    words.map((word, i) => {
                        const start = i / words.length;
                        const end = start + (1 / words.length)

                        return <Word key={i} word={word} range={[start, end]} progress={scrollYProgress} className=''></Word>
                    })
                }
            </m.p>

        </section>
    )
}


export const Word = ({ word, range, progress }) => {
    const opacity = useTransform(progress, range, [0, 1])
    return (
        <span className='relative '>
            <span className='absolute opacity-10 text-whitee '>{word}</span>
            <m.span
                style={{ opacity: opacity }}
                className='mr-1 opacity-0'>{word}</m.span>
        </span>
    )
}

export default About
