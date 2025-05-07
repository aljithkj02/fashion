import { motion } from "framer-motion";

const Header: React.FC = () => {
    return (
        <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md shadow-sm text-white">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-xl font-display font-bold tracking-wide"
                >
                    Standard Fashion
                </motion.h1>

            </div>
        </header>
    );
};

export default Header;
