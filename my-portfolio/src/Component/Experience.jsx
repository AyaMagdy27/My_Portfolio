import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const projectMotion = (duration, reverse = false) => ({
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

const Experience = () => {
    return (
        <div className="p-8">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-10 text-center text-4xl font-bold text-purple-950"
            >
                Projects
            </motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3"
            >
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={projectMotion(2.5, index % 2 === 1)} 
                        initial="initial"
                        animate="animate"
                        className="p-6 shadow-lg rounded-lg shadow-violet-400"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-2xl font-semibold text-purple-950 mb-2">
                            <a href={project.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                {project.title}
                            </a>
                        </h3>
                        <p className="text-purple-950 mb-4">{project.description}</p>
                        <div>
                            <h4 className="text-lg font-semibold text-purple-950 mb-2">
                                Technology:
                            </h4>
                            <div className="flex flex-wrap space-x-4 text-violet-700">
                                {project.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="mb-2">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Experience;