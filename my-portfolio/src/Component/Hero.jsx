import { OBJECTIVE } from '../constants/index';
import hero from '../assets/hero1.png';
import { motion } from "framer-motion";
const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: .7, delay: delay }
    },
});
const imgContainer = (delay) => ({
    hidden: { x: 100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 1, delay: delay }
    },
});
const Hero = () => {
    return (
        <div className=" pb-4 lg:mb-35 w-full">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h2 
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl text-purple-950">Aya Magdy</motion.h2>
                        <motion.span 
                        variants={container(.5)}
                        initial="hidden"
                        animate="visible"
                        className="bg-gradient-to-r from-violet-400  via-slate-500 to-purple-950 bg-clip-text text-4xl tracking-tight text-transparent"> Software Engineer </motion.span>
                        <motion.p 
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                        className='my-2 max-w-xl py-6 font-light tracking-tight leading-relaxed text-purple-950 text-lg'>{OBJECTIVE}</motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img 
                        variants={imgContainer(1.2)}
                        initial="hidden"
                        animate="visible"
                        src={hero} alt="Aya Magdy" className="w-full lg:w-2/3 " />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero