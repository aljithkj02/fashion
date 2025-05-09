import { motion } from "framer-motion";

const PreviewVideo = () => {
    return (
        <section className="flex flex-col items-center py-16 px-6 bg-neutral-900 text-center">
            <motion.h2
                className="text-3xl md:text-4xl font-display font-bold text-white mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                ഇതൊരു സാധാരണ കോഴ്സ് അല്ല.<br />
                <span>100% Women Approved കോഴ്സ്.</span>
            </motion.h2>

            <div className="max-w-[375px] w-full aspect-[9/16] rounded-xl overflow-hidden shadow-lg">
                <video
                    controls
                    className="w-full h-full object-cover"
                    poster="https://res.cloudinary.com/dquq0mrkt/image/upload/v1746788211/Reel_Cover_c02ruk.jpg"
                >
                    <source src="https://res.cloudinary.com/dquq0mrkt/video/upload/v1746607729/fashion_s3llhe.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
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

export default PreviewVideo;
