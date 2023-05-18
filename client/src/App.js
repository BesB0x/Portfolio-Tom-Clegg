import { BrowserRouter, Routes, Route } from 'react-router-dom'

import About from '../src/components/About'
import Projects from '../src/components/Projects'
import NavBar from '../src/components/NavBar'
import Experiments from '../src/components/Experiments'
import Landing from '../src/components/Landing'

const App = () => {


  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/about' element={<About />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/Experiments' element={<Experiments />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
