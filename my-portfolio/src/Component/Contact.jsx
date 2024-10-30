import { PERSONAL_INFO } from "../constants";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";


const Contact = () => {
    return (
        <div className="p-8 bg-gray-100 antialiased selection:bg-purple-200">
            <h2 className="my-10 text-center text-4xl font-bold text-purple-950">Contact Information</h2>
            <div className="flex flex-col items-center space-y-4">
                {/* Email */}
                <div className="flex items-center space-x-2 text-purple-950">
                    <FaEnvelope />
                    <p>{PERSONAL_INFO.email}</p>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-2 text-purple-950">
                    <FaPhone />
                    <p>{PERSONAL_INFO.phone}</p>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-2 text-purple-950">
                    <FaMapMarkerAlt />
                    <p>{PERSONAL_INFO.location}</p>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center space-x-2 text-purple-950">
                    <FaLinkedin />
                    <a
                        href={`https://www.linkedin.com/in/${PERSONAL_INFO.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        {PERSONAL_INFO.linkedin}
                    </a>
                </div>

                {/* GitHub */}
                <div className="flex items-center space-x-2 text-purple-950">
                    <FaGithub />
                    <a
                        href={`https://github.com/${PERSONAL_INFO.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        {PERSONAL_INFO.github}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
