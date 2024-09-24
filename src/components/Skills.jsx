import { SKILLS } from '../constants'
import { useRef } from 'react'
import { motion as m, useScroll, useTransform } from 'framer-motion'
const Skills = () => {
  const element = useRef(null)
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start 0.75', 'start 0.25']
  })
  const words = SKILLS
  return (
    <section className='mt-32 lg:mt-[280px] flex flex-col items-center' id='skills'>
      <h2 className=' text-4xl lg:text-6xl md:text-6xl text-center text-textColor  font-bold'>SKILLS</h2>
      <m.p
        ref={element}
        className='lg:mt-20 mt-12 flex flex-wrap justify-center text-whitee font-oswald font-thin  lg:w-2/3 md:text-5xl md:w-2/3  lg:text-7xl text-2xl px-4 lg:p-0'>
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
      <span className='absolute opacity-10 text-white'>{word}</span>
      <m.span
        style={{ opacity: opacity }}
        className='mr-2 md:mr-2  lg:mr-5  opacity-0'>{word}</m.span>
    </span>
  )
}

export default Skills
