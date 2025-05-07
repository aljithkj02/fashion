
import AboutCourse from "./components/AboutCourse"
import CTASection from "./components/CTASection"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import PreviewVideo from "./components/PreviewVideo"
import WhatYouLearn from "./components/WhatYouLearn"


function App() {

  return (
    <>
    <main className="bg-black text-white font-body">
      <Header />
      <HeroSection />
      <PreviewVideo  />
      <AboutCourse />
      <WhatYouLearn />
      <CTASection />
    </main>
    </>
  )
}

export default App
