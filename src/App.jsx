import './App.css'
import Header from './pages/Header'
import Home from './pages/Home'
import Footer from './pages/Footer'
import Sobre from './pages/Sobre'
import Projetos from './pages/Projetos'

function App() {
  return (
    <>
        <Header/>
        <Projetos/>
        <Home/>
        <Sobre
          texto="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, vitae nesciunt. Eius ad commodi perspiciatis, maiores placeat neque pariatur in quibusdam odit hic doloremque explicabo molestias officia modi dolore autem!"
          endereco="https://placehold.co/200"
        />
        <Footer/>
    </>    
  )
}

export default App
