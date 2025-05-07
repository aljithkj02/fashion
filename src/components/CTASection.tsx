import { motion } from "framer-motion";

const CTASection = () => {
    return (
        <section className="py-20 px-6 bg-gradient-to-r from-black via-gray-900 to-black text-center">
            <motion.h3
                className="text-4xl font-display font-bold mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Ready to Change How the World Sees You?
            </motion.h3>
            <p className="text-lg text-gray-300 mb-8">
                Invest in yourself. The journey begins with one decision.
            </p>
            <a
                href="#course"
                className="inline-block px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition shadow-lg"
            >
                Enroll in the Course
            </a>
        </section>
    );
};

export default CTASection;