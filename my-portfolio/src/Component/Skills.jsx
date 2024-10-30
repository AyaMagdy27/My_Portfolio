import { SKILLS } from '../constants';
import { motion } from "framer-motion";

const Skills = () => {
    return (
        <div className="p-8 bg-gray-100">
            <h2 className="my-10 text-center text-4xl  text-purple-950">Skills</h2>
            <div className="grid md:grid-cols-2 gap-10">
                
                {/* Expertise Section */}
                <div>
                    <h3 className="text-2xl font-semibold text-purple-950 mb-6">Expertise</h3>
                    <div className="flex flex-wrap gap-3">
                        {SKILLS.expertise.map((skill, index) => (
                            <span
                                key={index}
                                className="inline-block px-4 py-2 bg-purple-100 text-purple-900 rounded-full font-medium shadow-md hover:bg-purple-200 transition duration-300"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Tools Section */}
                <div>
                    <h3 className="text-2xl font-semibold text-purple-950 mb-6">Tools</h3>
                    <div className="flex flex-wrap gap-3">
                        {SKILLS.tools.map((tool, index) => (
                            <span
                                key={index}
                                className="inline-block px-4 py-2 bg-purple-100 text-purple-900 rounded-full font-medium shadow-md hover:bg-purple-200 transition duration-300"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
