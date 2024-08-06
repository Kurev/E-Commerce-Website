import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Info from './Components/Info/Info'
import Collection from './Components/Collection/Collection'
import Title from './Components/Titles/Title'
import Details from './Components/Details/Details'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
      <div className="container">
        <Navbar />
        <Hero />
        <Info />
        <Title title='Our Collection' subTitle='This collection showcases the craftsmanship of our expert furniture makers.'/>
        <Collection />
        <Title title='The Crafting Process' subTitle='The Crafting Process showcases the intricate steps our artisans take to create each piece.'/>
        <Details />
        <Contact title="Let's Get In Tourch."  subTitle="Contact us to learn more"/>
        <Footer />
      </div>
    </>
  )
}

export default App
