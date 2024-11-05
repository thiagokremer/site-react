import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import styles from './App.module.css'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Projetos from './pages/Projetos'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/sobre' element={<Sobre/>}/>
            <Route path='/projetos' element={<Projetos/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>    
  )
}

export default App
