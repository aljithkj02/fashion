// components/AboutCourse.tsx
import { motion } from "framer-motion";

const AboutCourse = () => {
    return (
        <section className="py-20 px-6 max-w-4xl mx-auto text-center">
            <motion.h2
                className="text-4xl font-display font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                What is This Course About?
            </motion.h2>
            <motion.p
                className="text-gray-300 text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
            >
                This is not just about clothes. It's about understanding the psychology of first impressions,
                mastering grooming basics, building timeless outfits, and expressing confidence.
                Akshay's years of experience are now available to you in one premium course.
            </motion.p>
        </section>
    );
};

export default AboutCourse;