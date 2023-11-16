import './App.css'
import ContactInfo from './components/contact-info/ContactInfo'
import Footer from './components/footer/Footer'
import Introduction from './components/introduction/Introduction'
import Header from './components/header/Header'
import ProjectDisplay from './components/project_display/ProjectDisplay'

function App() {
  return (
    <>
      <Header />
      <Introduction />
      <ProjectDisplay />
      <ContactInfo />
      <Footer />
    </>
  )
}

export default App
