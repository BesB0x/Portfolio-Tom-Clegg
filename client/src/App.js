import { BrowserRouter, Routes, Route } from 'react-router-dom'

import About from '../src/components/About'
import Projects from '../src/components/Projects'
import NavBar from '../src/components/NavBar'
import Experiments from '../src/components/Experiments'
import Skills from './components/Skills'
import Landing from '../src/components/Landing'
import Archive from '../src/components/Archive'
import Footer from './components/Footer'

const App = () => {


  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/experiments' element={<Experiments />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/archive' element={<Archive />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App
