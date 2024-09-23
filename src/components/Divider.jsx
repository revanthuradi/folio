import { motion as m } from 'framer-motion'
const Divider = ({ index }) => {
    return (
        <m.div className={`lg:px-10 px-4 ${index % 2 == 0 ? "origin-right" : "origin-left"} `}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ amount: "all", once: true }}
            transition={{ duration: 1, ease: "linear" }}
        >
            <div className=" h-[2.5px] bg-textColor px-10"></div>
        </m.div>
    )
}

export default Divider
