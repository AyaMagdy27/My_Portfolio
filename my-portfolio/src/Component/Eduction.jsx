import { EDUCATION } from "../constants";
import { motion } from "framer-motion";
const Eduction = () => {
    return (
        <div>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl text-purple-950">Eduction
            </motion.h2>
            <div className="flex flex-wrap">
                <div className="w-full">
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1.5 }}
                        className="flex flex-col justify-center lg:justify-start font-light tracking-tight leading-relaxed text-purple-950 ">
                        {EDUCATION.map((item, index) => (
                            <div key={index} className="mb-6">
                                <p className="text-2xl text-center font-semibold">{item}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

        </div>
    )
}

export default Eduction