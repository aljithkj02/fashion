import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
    return (
        <section className="mt-15 relative min-h-screen bg-black text-white flex flex-col items-center justify-center text-center px-6 overflow-hidden">
            {/* Stylish gradient overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black via-gray-900 to-neutral-900 opacity-90 z-0" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="z-10 max-w-4xl"
            >
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight font-display">
                    It’s not just a <span className="text-yellow-400">“Fashion Course”</span>
                </h1>
                <h2 className="text-3xl md:text-5xl font-semibold text-gray-300 mb-8 font-display">
                    It’s a <span className="text-green-400">Transformation</span>
                </h2>

                <motion.img
                    src="https://res.cloudinary.com/dquq0mrkt/image/upload/v1746783647/IMG_0442_qvlrtz.jpg"
                    alt="Transformation by Akshay"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    className="w-full max-w-md mx-auto rounded-2xl shadow-2xl border-4 border-neutral-800"
                />
            </motion.div>
        </section>
    );
};

export default HeroSection;
