import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
    return (
        <section className="mt-15 relative h-[90vh] bg-black text-white flex items-center justify-center text-center px-6 overflow-hidden">
            {/* Stylish blurred background element */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black via-gray-900 to-neutral-900 opacity-90 z-0" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="z-10"
            >
                <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight tracking-tight">
                    Transform Your Look.<br />
                    Elevate Your Confidence.
                </h1>
                <p className="text-lg md:text-xl font-body mb-8 text-gray-300">
                    Learn fashion, grooming & confidence in a curated course by Akshay.
                </p>
                <a
                    href="#course"
                    className="inline-block px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition shadow-md"
                >
                    Enroll Now
                </a>
            </motion.div>
        </section>
    );
};
export default HeroSection;
