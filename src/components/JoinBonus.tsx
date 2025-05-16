import { motion } from "framer-motion";

const JoinBonus = () => {
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
                    <u>ഞങ്ങൾ ചെയ്ത തരുന്നുണ്ടായിരിക്കും..</u>
                </motion.h3>

                <motion.img
                    src="https://via.placeholder.com/800x400.png?text=Costume+Selection+Preview"
                    alt="Costume Selection Bonus"
                    className="w-full max-w-3xl mx-auto rounded-xl shadow-lg"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                />
            </div>
        </section>
    );
};

export default JoinBonus;
