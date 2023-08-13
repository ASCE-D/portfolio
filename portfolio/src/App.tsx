import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import './App.css'

function App() {


  return (
    <>
    <div className="bg-black p-4">
    
      
    <Router>
      <Navbar/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/about' element={<About/>}/>
     
       
       </Routes>
      
       </Router>
      
      
      
      
      
      
      
      
        {/* <h1 className="bg-black p-4 text-4xl font-bold text-center text-pink-600 p-4 bg-gray-100 rounded-lg shadow-md">
  Full Stack Developer
</h1> */}


        terimummy
        </div>
    </>
  )
}

export default App
