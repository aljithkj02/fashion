
import AboutCourse from "./components/AboutCourse"
import CTA from "./components/CTA"
// import CTASection from "./components/CTASection"
import Header from "./components/Header"
// import HeroSection from "./components/HeroSection"
import PreviewVideo from "./components/PreviewVideo"


function App() {

  return (
    <>
    <main className="bg-black text-white font-body">
      <Header />
      {/* <HeroSection /> */}
      <PreviewVideo  />
      <AboutCourse />
      <CTA />
      {/* <WhatYouLearn /> */}
      {/* <CTASection /> */}
    </main>
    </>
  )
}

export default App
