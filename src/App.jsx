import './App.css'
import ContactInfo from './components/contact-info/ContactInfo'
import Footer from './components/footer/Footer'
import Introduction from './components/introduction/Introduction'
import Header from './components/header/Header'
import ProjectDisplay from './components/project_display/ProjectDisplay'
import Background from './components/background/Background'

function App() {
  return (
    <>
      <Header />
      <main id='main-wrapper'>
        <Background />
        <Introduction />
        <ProjectDisplay />
        <ContactInfo />
        <Footer />
      </main>
    </>
  )
}

export default App
