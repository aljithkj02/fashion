import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const getRandomDuration = () => {
    const hours = 33 + Math.floor(Math.random() * 3); // 33–35 hours
    const minutes = Math.floor(Math.random() * 60);
    const seconds = Math.floor(Math.random() * 60);
    return (hours * 3600 + minutes * 60 + seconds) * 1000; // in ms
};

const getOrSetExpiryTime = () => {
    const storedExpiry = localStorage.getItem("cta_offer_expiry");
    const now = Date.now();

    if (storedExpiry) {
        const expiry = parseInt(storedExpiry);
        if (expiry > now) {
            return expiry;
        }
    }

    const newExpiry = now + getRandomDuration();
    localStorage.setItem("cta_offer_expiry", newExpiry.toString());
    return newExpiry;
};

const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return {
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
    };
};

const CTA = () => {
    const [expiry, setExpiry] = useState(getOrSetExpiryTime());
    const [remainingMs, setRemainingMs] = useState(expiry - Date.now());

    useEffect(() => {
        const interval = setInterval(() => {
            const now = Date.now();
            const timeLeft = expiry - now;

            if (timeLeft <= 0) {
                const newExpiry = getOrSetExpiryTime();
                setExpiry(newExpiry);
                setRemainingMs(newExpiry - now);
            } else {
                setRemainingMs(timeLeft);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [expiry]);

    const { hours, minutes, seconds } = formatTime(remainingMs);

    return (
        <section className="py-20 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white px-6">
            <div className="max-w-xl mx-auto text-center space-y-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <span className="inline-block bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full uppercase tracking-wide text-sm shadow-md">
                        🎯 Entry Level Offer
                    </span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-4xl font-extrabold"
                >
                    <span className="text-gray-500 line-through mr-3">₹4999</span>
                    <span className="text-green-400">₹499</span>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-sm text-gray-400"
                >
                    Hurry! This offer expires in:
                </motion.p>

                <motion.div
                    className="flex justify-center gap-4 text-xl font-mono"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <div className="bg-neutral-700 px-4 py-3 rounded-xl shadow-md text-yellow-400">
                        {hours}<span className="text-sm">h</span>
                    </div>
                    <div className="bg-neutral-700 px-4 py-3 rounded-xl shadow-md text-yellow-400">
                        {minutes}<span className="text-sm">m</span>
                    </div>
                    <div className="bg-neutral-700 px-4 py-3 rounded-xl shadow-md text-yellow-400">
                        {seconds}<span className="text-sm">s</span>
                    </div>
                </motion.div>
            </div>

            <div className="flex justify-center mt-10">
                <a
                    target="_blank"
                    href="#"
                    className="inline-block px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition shadow-lg"
                >
                    Enroll in the Course
                </a>
            </div>
        </section>
    );
};

export default CTA;
