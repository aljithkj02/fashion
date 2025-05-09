import { useState } from "react";
import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";

const AboutCourse = () => {
    const [videoKey, setVideoKey] = useState(0);

    const handleReload = () => {
        setVideoKey(prev => prev + 1); // Force re-render of iframe
    };

    return (
        <section className="py-20 px-6 max-w-4xl mx-auto text-center">
            <motion.h2
                className="text-3xl md:text-4xl font-display font-bold text-white mb-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                ഇവിടെ നിങ്ങൾ എന്താണ് പഠിക്കാൻ പോകുന്നത്...?
            </motion.h2>

            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg mb-6">
                <iframe
                    key={videoKey}
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/XA-TT0NsGlo"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>

                <button
                    onClick={handleReload}
                    className="absolute top-3 right-3 bg-neutral-800/80 hover:bg-neutral-700 text-white p-2 rounded-full transition"
                    aria-label="Reload video"
                >
                    <RotateCcw className="w-5 h-5" />
                </button>
            </div>
        </section>
    );
};

export default AboutCourse;
