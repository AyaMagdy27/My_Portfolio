import { CERTIFICATIONS } from "../constants";
import { motion } from "framer-motion";
const Certification = () => {
    return (
        <div className="p-8">
            <h2 className="my-20 text-center text-4xl text-purple-950">Certification</h2>
            <div className="flex flex-wrap justify-between">
                {CERTIFICATIONS.map((item, index) => (
                    <div key={index} className="bg-white shadow-lg shadow-violet-400 500/50 p-4 rounded-lg w-1/4">
                        <p className="text-lg font-semibold">{item.title}</p>
                        <p className="text-sm text-gray-500">{item.institution}</p>
                        <p className="text-sm text-gray-500">{item.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Certification