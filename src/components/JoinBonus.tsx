import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const images = [
    "https://res.cloudinary.com/dquq0mrkt/image/upload/v1747393873/WhatsApp_Image_2025-05-16_at_4.35.16_PM_1_pojpzm.jpg",
    "https://res.cloudinary.com/dquq0mrkt/image/upload/v1747393866/WhatsApp_Image_2025-05-16_at_4.34.57_PM_1_lgeszu.jpg",
];

const JoinBonus = () => {
    const [current, setCurrent] = useState(0);
    const [isManuallyChanged, setIsManuallyChanged] = useState(false);
    const timeoutRef = useRef<number | null>(null);

    const goToNext = () => {
        setCurrent((prev) => (prev + 1) % images.length);
        setIsManuallyChanged(true);
    };

    const goToPrev = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
        setIsManuallyChanged(true);
    };

    useEffect(() => {
        if (isManuallyChanged && timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => setIsManuallyChanged(false), 6000);
        }

        if (!isManuallyChanged) {
            const interval = setInterval(() => {
                setCurrent((prev) => (prev + 1) % images.length);
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [isManuallyChanged]);

    return (
        <section className="py-20 px-6 bg-black text-white text-center">
            <div className="max-w-5xl mx-auto">
                <motion.h3
                    className="text-3xl md:text-4xl font-display font-bold mb-10 leading-snug"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    ജോയിൻ ചെയ്യുന്നതിലൂടെ അടുത്ത 1 Month ലേക്ക്<br />
                    നിങ്ങൾക്കുള്ള Costume Selection<br />
                    <u className="text-yellow-400">ഞങ്ങൾ ചെയ്‌ത്‌ തരുന്നുണ്ടായിരിക്കും..</u>
                </motion.h3>

                <div className="relative w-full max-w-sm mx-auto aspect-[9/16] overflow-hidden rounded-xl shadow-lg">
                    <AnimatePresence>
                        <motion.img
                            key={images[current]}
                            src={images[current]}
                            alt={`Costume ${current + 1}`}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 w-full h-full object-fill"
                            draggable={false}
                        />
                    </AnimatePresence>

                    {/* Prev/Next Buttons */}
                    <button
                        onClick={goToPrev}
                        className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white px-3 py-1 rounded-full"
                    >
                        ‹
                    </button>
                    <button
                        onClick={goToNext}
                        className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white px-3 py-1 rounded-full"
                    >
                        ›
                    </button>
                </div>

                {/* Dot indicators (optional) */}
                <div className="mt-4 flex justify-center space-x-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setCurrent(index);
                                setIsManuallyChanged(true);
                            }}
                            className={`w-3 h-3 rounded-full ${current === index ? "bg-white" : "bg-white/40"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default JoinBonus;
