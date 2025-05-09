
import AboutCourse from "./components/AboutCourse"
import CTA from "./components/CTA"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import PreviewVideo from "./components/PreviewVideo"
import WhyThisWork from "./components/WhyThisWork"

function App() {

  return (
    <>
    <main className="bg-black text-white font-body">
      <Header />
      <HeroSection />
      <PreviewVideo  />
      <AboutCourse />
      <WhyThisWork />
      <CTA />
    </main>
    </>
  )
}

export default App
