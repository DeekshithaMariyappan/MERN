import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/FunctionalComponents/About';
import Gallery from './components/FunctionalComponents/Gallery';
import Home from './components/FunctionalComponents/Home';
import Contact from './components/FunctionalComponents/Contact';
import Navbar from './components/FunctionalComponents/Navbar';
import Signup from './components/FunctionalComponents/Signup';
import Login from './components/FunctionalComponents/Login';
function App() {
  const [login, setLogin] = useState(false);
  const handleLogin = () => {
    setLogin(true); 
  };
  const handleLogout = () => {
    setLogin(false);
  };

  return (
    <BrowserRouter>
    <Navbar/>
    {login && <Navbar onLogout = {handleLogout}/>}
      <Routes>
      <Route path="/"element={<Home />}></Route>
      <Route path="/about"element={<About />}></Route>
      <Route path="/gallery"element={<Gallery page="Gallery" image="SECE Logo" />}></Route>
      <Route path="/contact"element={<Contact />}></Route>
      <Route path="/signup"element={<Signup />}></Route>
      {!login ? (
          <>
            <Route path="/" element={<Signup onLogin={handleLogin} />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
          </>
        ) : (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery image="chocolate" page="gallery" />} />
            <Route path="/contact" element={<Contact />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
