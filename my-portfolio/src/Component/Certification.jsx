import { CERTIFICATIONS } from "../constants";
import { motion } from "framer-motion";

const certificationMotion = (duration, reverse = false) => ({
    initial: { y: -10 },
    animate: {
        y: reverse ? [-10, 10] : [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        },
    },
});

const Certification = () => {
    return (
        <div className="p-8">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
            className="my-20 text-center text-4xl text-purple-950">Certification</motion.h2>
            <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
            className="flex flex-wrap justify-between">
                {CERTIFICATIONS.map((item, index) => (
                    <motion.div 
                        variants={certificationMotion(2.5, index % 2 === 1)}
                        initial="initial"
                        animate="animate"
                    key={index} className="bg-white shadow-lg shadow-violet-400 500/50 p-4 mb-10 rounded-lg lg:w-1/4 md:w-11/12 sm:w-11/12  ">
                        <p className="text-lg font-semibold">{item.title}</p>
                        <p className="text-sm text-gray-500">{item.institution}</p>
                        <p className="text-sm text-gray-500">{item.date}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Certification