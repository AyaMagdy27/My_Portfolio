import { PERSONAL_INFO } from "../constants";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <div className="p-8 bg-gray-100 antialiased selection:bg-purple-200">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-10 text-center text-4xl font-bold text-purple-950">Contact Information</motion.h2>
            <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col items-center space-y-4">
                {/* Email */}
                <div className="flex items-center space-x-2 text-purple-950">
                    <FaEnvelope />
                    <p>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">
                            {PERSONAL_INFO.email}
                        </a>
                    </p>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-2 text-purple-950">
                    <FaPhone />
                    <p>
                        <a href="tel:+201555117246" target="_blank" rel="noopener noreferrer" className="hover:underline">
                            {PERSONAL_INFO.phone}
                        </a>
                    </p>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center space-x-2 text-purple-950">
                    <FaWhatsapp />
                    <p>
                        <a href={`https://wa.me/${PERSONAL_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            {PERSONAL_INFO.whatsapp}
                        </a>
                    </p>
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
                <motion.div className="flex items-center space-x-2 text-purple-950">
                    <FaGithub />
                    <a
                        href={`https://github.com/${PERSONAL_INFO.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        {PERSONAL_INFO.github}
                    </a>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Contact;
