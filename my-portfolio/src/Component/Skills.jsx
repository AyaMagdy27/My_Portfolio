import { SKILLS } from '../constants';
import { motion } from "framer-motion";

const skillMotion = (duration, reverse = false) => ({
    initial: { y: -5 },
    animate: {
        y: reverse ? [-5, 5] : [5, -5],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        },
    },
});

const Skills = () => {
    return (
        <div className="p-8 bg-gray-100">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-10 text-center text-4xl text-purple-950">Skills</motion.h2>
            <div className="grid md:grid-cols-2 gap-10">

                {/* Expertise Section */}
                <div>
                    <motion.h3
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -100 }}
                        transition={{ duration: 1.5 }}
                        className="text-2xl font-semibold text-purple-950 mb-6">Expertise</motion.h3>
                    <div className="flex flex-wrap gap-3">
                        {SKILLS.expertise.map((skill, index) => (
                            <motion.span
                                key={index}
                                variants={skillMotion(2.5, index % 2 === 1)}
                                initial="initial"
                                animate="animate"
                                className="inline-block px-4 py-2 bg-purple-100 text-purple-900 rounded-full font-medium shadow-md hover:bg-purple-200 transition duration-300"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </div>

                {/* Tools Section */}
                <div>
                    <motion.h3
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -100 }}
                        transition={{ duration: 1.5 }}
                        className="text-2xl font-semibold text-purple-950 mb-6">Tools</motion.h3>
                    <div className="flex flex-wrap gap-3">
                        {SKILLS.tools.map((tool, index) => (
                            <motion.span
                                key={index}
                                variants={skillMotion(2.5, index % 2 === 1)}
                                initial="initial"
                                animate="animate"
                                className="inline-block px-4 py-2 bg-purple-100 text-purple-900 rounded-full font-medium shadow-md hover:bg-purple-200 transition duration-300"
                            >
                                {tool}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
