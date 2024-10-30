import { RiReactjsLine, RiHtml5Line, RiCss3Line, RiAngularjsLine, RiJavascriptLine, RiBootstrapLine, RiTailwindCssLine } from 'react-icons/ri';
import { SiTypescript } from 'react-icons/si';
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        },
    },
});

const TechIcons = () => {
    return (
        <div className="pb-24">
            <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            className="my-20 text-center text-4xl text-purple-950">
                Technology
            </motion.h2>
            <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-2 border-violet-200 p-4 shadow-lg shadow-violet-400"
                >
                    <RiHtml5Line className="text-8xl text-violet-500" />
                </motion.div>

                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-2 border-violet-200 p-4 shadow-lg shadow-violet-400"
                >
                    <RiCss3Line className="text-8xl text-violet-500" />
                </motion.div>

                <motion.div
                    variants={iconVariants(2.3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-2 border-violet-200 p-4 shadow-lg shadow-violet-400"
                >
                    <RiBootstrapLine className="text-8xl text-violet-500" />
                </motion.div>

                <motion.div
                    variants={iconVariants(2.7)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-2 border-violet-200 p-4 shadow-lg shadow-violet-400"
                >
                    <RiTailwindCssLine className="text-8xl text-violet-500" />
                </motion.div>

                <motion.div
                    variants={iconVariants(2.4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-2 border-violet-200 p-4 shadow-lg shadow-violet-400"
                >
                    <RiJavascriptLine className="text-8xl text-violet-500" />
                </motion.div>

                <motion.div
                    variants={iconVariants(2.6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-2 border-violet-200 p-4 shadow-lg shadow-violet-400"
                >
                    <RiReactjsLine className="text-8xl text-violet-500" />
                </motion.div>

                <motion.div
                    variants={iconVariants(2.8)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-2 border-violet-200 p-4 shadow-lg shadow-violet-400"
                >
                    <SiTypescript className="text-8xl text-violet-500" />
                </motion.div>

                <motion.div
                    variants={iconVariants(2.9)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-2 border-violet-200 p-4 shadow-lg shadow-violet-400"
                >
                    <RiAngularjsLine className="text-8xl text-violet-500" />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default TechIcons;
