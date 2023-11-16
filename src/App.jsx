import './App.css'
import ContactInfo from './components/contact-info/ContactInfo'
import Footer from './components/footer/Footer'
import IntroductionSegment from './components/introduction_segment/IntroductionSegment'
import Navbar from './components/navbar/Navbar'
import ProjectDisplay from './components/project_display/ProjectDisplay'

function App() {
  return (
    <>
      <Navbar />
      <IntroductionSegment />
      <ProjectDisplay />
      <ContactInfo />
      <Footer />
    </>
  )
}

export default App
