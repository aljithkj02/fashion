
import AboutCourse from "./components/AboutCourse"
import CTA from "./components/CTA"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import JoinBonus from "./components/JoinBonus"
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
      <JoinBonus />
      <CTA />
    </main>
    </>
  )
}

export default App
