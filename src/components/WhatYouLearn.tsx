import { motion } from "framer-motion";

const items = [
    "Master outfit formulas that always work",
    "Learn grooming habits that elevate appearance",
    "Discover body language tricks for confidence",
    "Avoid common style mistakes most men make",
    "Build a personal style that feels authentic",
];

const WhatYouLearn = () => {
    return (
        <section className="py-20 bg-neutral-800 text-white px-6">
            <div className="max-w-5xl mx-auto">
                <motion.h3
                    className="text-3xl md:text-4xl font-display font-bold text-center mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    What You Will Learn
                </motion.h3>
                <ul className="space-y-6 text-lg text-gray-300 list-disc pl-5">
                    {items.map((item, idx) => (
                        <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                        >
                            {item}
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default WhatYouLearn;