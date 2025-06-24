import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, RotateCcw } from 'lucide-react';
import BeforeAfter from '../assets/before.jpg'
import NisaFashion from '../assets/nisa_fashion.mp4'
import Nisa from '../assets/Nisa.jpg'

// Helper component for animated sections
const Section = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
    <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`py-16 md:py-24 ${className}`}
    >
        {children}
    </motion.section>
);

// Helper for the CTA buttons for consistency
const CtaButton = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
    <motion.button
        whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px -5px rgba(59, 130, 246, 0.4)" }}
        whileTap={{ scale: 0.95 }}
        className={`bg-blue-500 text-white font-bold text-lg rounded-lg shadow-lg hover:bg-blue-600 transition-colors duration-300 ${className}`}
    >
        {children}
    </motion.button>
);

 
const Landing = () => {
    const [videoKey, setVideoKey] = useState(0);

    const handleReload = () => {
        setVideoKey(prev => prev + 1); // Force re-render of iframe
    };
    return (
        <div className="bg-slate-900 text-slate-200 font-sans leading-relaxed">

            {/* Header */}
            <header className="sticky top-0 bg-slate-900 bg-opacity-80 backdrop-blur-md z-40">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-white tracking-wider">Standard Fashion</h1>

                    <a href="https://superprofile.bio/course/standard-fashion">
                        <CtaButton className="px-6 py-2 text-base cursor-pointer">Join Now</CtaButton>
                    </a>
                </div>
            </header>

            <main>
                {/* Section 1: Hero */}
                <section className="pt-10 md:pt-28 pb-16 md:pb-24 overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="text-center md:text-left"><motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="mb-4"
                            >
                                <div className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-4 py-2 text-sm ring-1 ring-inset ring-slate-700">
                                    {/* <PartyPopper className="h-5 w-5 text-blue-400" /> */}
                                    <p className="font-semibold tracking-wide text-blue-400">
                                        നിന്റെ സ്റ്റൈൽ മാറ്റാൻ ഇതിലും നല്ലൊരു സ്ഥലം വേറെയില്ല.
                                    </p>
                                </div>
                            </motion.div>
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
                                >
                                    {/* ആളുകൾ <span className="text-blue-400">തിരിഞ്ഞുനോക്കുന്ന</span>, നിനക്ക് ആത്മവിശ്വാസം തരുന്ന ഒരു പുത്തൻ സ്റ്റൈലിലേക്ക് മാറാം. */}
                                    ആളുകൾ ശ്രദ്ധിക്കും, അവസരങ്ങൾ തേടിവരും. നിന്റെ സ്റ്റൈൽ ഒന്നു മാറ്റിയാൽ മതി.
                                </motion.h2>

                                <motion.ul
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ staggerChildren: 0.2, delayChildren: 0.6 }}
                                    className="space-y-4 mb-8 text-lg text-slate-300"
                                >
                                    <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-start text-left">
                                        <CheckCircle className="text-green-400 w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                                        <span>ഏത് ഡ്രസ്സ്‌ എവിടെ ഇടണം എന്ന് ആലോചിച്ച് ഇനി <strong className="text-white">തല പുകയ്‌ക്കേണ്ട.</strong></span>
                                    </motion.li>
                                    <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-start text-left">
                                        <CheckCircle className="text-green-400 w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                                        <span>വലിയ വില കൊടുക്കാതെ <strong className="text-white">നിന്റെ ലുക്ക്</strong> എങ്ങനെ അടിപൊളിയാക്കാം എന്ന് പഠിക്കാം.</span>
                                    </motion.li>
                                    <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-start text-left">
                                        <CheckCircle className="text-green-400 w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                                        <span>നിന്റെ ബഡ്ജറ്റിൽ നിന്നുകൊണ്ട് തന്നെ ഒരു <strong className="text-white">സ്റ്റൈൽ ഐക്കൺ</strong> ആകാം.</span>
                                    </motion.li>
                                </motion.ul>

                            </div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
                                className="relative w-full max-w-md mx-auto md:max-w-none"
                            >
                                {/* Before/After Image Demonstration */}
                                <div className="relative rounded-lg shadow-2xl overflow-hidden aspect-[1/1] bg-slate-800">
                                    <img
                                        src={BeforeAfter}
                                        alt="Before fashion transformation"
                                        className="absolute top-0 left-0 h-full object-fit"
                                    />
                                </div>

                                <div className="flex flex-col items-center md:items-start mt-6">
                                    <a href='https://superprofile.bio/course/standard-fashion'>
                                        <CtaButton className='px-6 py-4 cursor-pointer'>എന്റെ സ്റ്റൈൽ മാറ്റാൻ ഞാൻ റെഡി! <ArrowRight className="inline ml-1" /></CtaButton>
                                    </a>
                                    <p className="mt-4 text-sm text-slate-500">നിനക്ക് വേണ്ടി നീ എടുക്കുന്ന ഏറ്റവും മികച്ച തീരുമാനം.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Section 2: The "Why" Video */}
                <Section className="bg-black bg-opacity-20">
                    <div className="container mx-auto px-6 text-center">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            {/* നീ അറിയാതെ പോകുന്ന ഈ ഫാഷൻ അബദ്ധങ്ങൾ <br className="hidden md:block" />
                            <span className="text-blue-400">നിന്റെ ലുക്ക് നശിപ്പിക്കുന്നുണ്ടോ?</span> */}

                            99% പുരുഷന്മാരും ഈ ഫാഷൻ തെറ്റുകൾ കാരണം <br className="hidden md:block" />
                            <span className="text-blue-400">നല്ല അവസരങ്ങൾ നഷ്ടപ്പെടുത്തുന്നു.</span>
                        </h3>

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
                        <div className="mt-8">
                            <a href="https://superprofile.bio/course/standard-fashion">
                                <CtaButton className='px-8 py-4 cursor-pointer'>എന്റെ തെറ്റുകൾ തിരുത്തണം</CtaButton>
                            </a>
                        </div>
                    </div>
                </Section>

                {/* Section 3: The "Girl's Perspective" Video */}
                <Section>
                    <div className="container mx-auto px-6 text-center">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            {/* ഒരു പെൺകുട്ടിയുടെ കണ്ണിൽ, എന്താണ് യഥാർത്ഥ സ്റ്റൈൽ?<br className="hidden md:block" />
                            <span className="text-blue-400 text-2xl">(Hint: അത് വിലകൂടിയ ഷർട്ടും ഷൂസും അല്ല!)</span> */}

                            ഞങ്ങൾ പെൺകുട്ടികൾ തുറന്നുപറയാൻ മടിക്കുന്ന ആ രഹസ്യം : <br className="hidden md:block" />
                            <span className="text-blue-400">നിങ്ങളുടെ Dress കൊള്ളാം, പക്ഷെ...</span>
                        </h3>

                        <div className="max-w-[375px] w-full mx-auto aspect-[9/14] rounded-xl overflow-hidden shadow-lg">
                            <video
                                controls
                                className="w-full h-full object-cover"
                                poster={Nisa}
                            >
                                <source src={NisaFashion} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="mt-8">
                            <a href="https://superprofile.bio/course/standard-fashion">
                                <CtaButton className='px-8 py-4 cursor-pointer'>ഈ രഹസ്യം എനിക്കറിയണം</CtaButton>
                            </a>
                        </div>
                    </div>
                </Section>

                {/* Section 4: Reasons to Join */}
                <Section className="bg-black bg-opacity-20">
                    <div className="container mx-auto px-6">
                        <h3 className="text-center text-3xl md:text-4xl font-bold text-white mb-12">എന്തുകൊണ്ട് നീ ഈ കോഴ്സിൽ ഇപ്പോൾ ചേരണം?</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                "നിനക്ക് വേണ്ടി ഡ്രസ്സ്‌ തിരഞ്ഞെടുക്കാനുള്ള സഹായം",
                                "നിന്റെ ബഡ്ജറ്റിൽ ഒതുങ്ങുന്ന ഷോപ്പിംഗ്",
                                "ഗ്രൂമിങ് & സ്കിൻകെയർ രഹസ്യങ്ങൾ",
                                "ആത്മവിശ്വാസം കൂട്ടാനുള്ള ടെക്നിക്കുകൾ",
                                "സംശയങ്ങൾ ചോദിക്കാൻ ഒരു Premium കമ്മ്യൂണിറ്റി",
                                "പുതിയ ഫാഷൻ ട്രെൻഡുകൾ അപ്പപ്പോൾ തന്നെ അറിയാം"
                            ].map((reason, i) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ delay: i * 0.1 }}
                                    key={reason}
                                    className="bg-slate-800 p-6 rounded-lg flex items-center space-x-4"
                                >
                                    <CheckCircle className="text-blue-400 w-8 h-8 flex-shrink-0" />
                                    <p className="text-lg font-medium text-slate-200">{reason}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* Section 5: How It Works */}
                <Section>
                    <div className="container mx-auto px-6">
                        <h3 className="text-center text-3xl md:text-4xl font-bold text-white mb-12">വെറും 3 സ്റ്റെപ്പിൽ നിന്റെ സ്റ്റൈൽ മാറ്റാം</h3>
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            {/* Step 1 */}
                            <div className="bg-slate-800 p-8 rounded-lg border-t-4 border-blue-500 shadow-lg">
                                <p className="text-5xl font-extrabold text-blue-500 mb-4">01</p>
                                <h4 className="text-2xl font-bold text-white mb-3">Join & Unlock</h4>
                                <p className="text-slate-400">ഇപ്പോൾ തന്നെ കോഴ്സിൽ ജോയിൻ ചെയ്യൂ, ഉടൻതന്നെ പാഠങ്ങൾ പഠിച്ചു തുടങ്ങാം. ഞങ്ങളുടെ പ്രീമിയം കമ്മ്യൂണിറ്റിയിലേക്കും നിനക്ക് പ്രവേശനം ലഭിക്കും.</p>
                            </div>
                            {/* Step 2 */}
                            <div className="bg-slate-800 p-8 rounded-lg border-t-4 border-blue-500 shadow-lg">
                                <p className="text-5xl font-extrabold text-blue-500 mb-4">02</p>
                                <h4 className="text-2xl font-bold text-white mb-3">Learn & Practice</h4>
                                <p className="text-slate-400">നിന്റെ സൗകര്യത്തിനനുസരിച്ച് വീഡിയോകൾ കാണുക. സംശയങ്ങൾ ഞങ്ങളുടെ കമ്മ്യൂണിറ്റിയിൽ ചോദിക്കാം, പുതിയ കാര്യങ്ങൾ പഠിക്കാം.</p>
                            </div>
                            {/* Step 3 */}
                            <div className="bg-slate-800 p-8 rounded-lg border-t-4 border-blue-500 shadow-lg">
                                <p className="text-5xl font-extrabold text-blue-500 mb-4">03</p>
                                <h4 className="text-2xl font-bold text-white mb-3">Impress & Succeed</h4>
                                <p className="text-slate-400">പുതിയ അറിവുകൾ നിന്റെ ജീവിതത്തിൽ കൊണ്ടുവാ. ആത്മവിശ്വാസത്തോടെ ആളുകളെ ഫേസ് ചെയ്യൂ, വിജയം നിന്റെ കൂടെ വരും.</p>
                            </div>
                        </div>
                        <div className="mt-16 text-center">
                            <a href="https://superprofile.bio/course/standard-fashion">
                                <CtaButton className='px-6 py-4 cursor-pointer'>എനിക്ക് ഇപ്പോൾ തന്നെ തുടങ്ങണം <ArrowRight className="inline ml-0" /></CtaButton>
                            </a>
                            <p className="mt-4 text-sm text-slate-500">ഒരു സിനിമ ടിക്കറ്റിന്റെ വിലയ്ക്ക് നിന്റെ ആത്മവിശ്വാസം കൂട്ടാം.</p>
                        </div>
                    </div>
                </Section>
            </main>

            {/* Footer */}
            <footer className="bg-black bg-opacity-30">
                <div className="container mx-auto px-6 py-6 text-center text-slate-500">
                    <p className="text-sm">Standard Fashion With Akshay ❤️</p>
                </div>
            </footer>
        </div>
    );
};

export default Landing;
