import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const points = [
    "Practical and easy to follow",
    "Designed for Kerala Men",
    "Result driven"
];

const WhyThisWork = () => {
    return (
        <section className="py-20 px-6 bg-gradient-to-r from-black via-gray-900 to-black text-center text-white">
            <motion.h3
                className="text-4xl md:text-5xl font-display font-bold mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >
                Why this course works?
            </motion.h3>

            <ul className="space-y-6 max-w-3xl mx-auto text-left">
                {points.map((point, index) => (
                    <motion.li
                        key={index}
                        className="flex items-start text-lg md:text-xl text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <CheckCircle className="text-green-400 w-6 h-6 mt-1 mr-4 shrink-0" />
                        <span>{point}</span>
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default WhyThisWork;
