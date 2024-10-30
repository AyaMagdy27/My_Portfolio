import about from '../assets/about.jpg';
import { ABOUT_TXT } from '../constants';
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="pb-4">
            <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            className="my-20 text-center text-4xl text-purple-950">
                About <span className="text-purple-600">Me</span>
            </motion.h2>
            <div className="flex flex-wrap ">
                <div className=" w-full lg:w-1/2 lg:p-8">
                    <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="flex items-center justify-center">
                        <img src={about} alt="about" className="rounded-2xl shadow-lg" />
                    </motion.div>

                </div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className='my-2 max-w-xl py-6 font-light tracking-tight leading-relaxed text-purple-950 text-xl'>{ABOUT_TXT} </p>
                    </div>
                </motion.div>
            </div>

        </div >
    );
};

export default About