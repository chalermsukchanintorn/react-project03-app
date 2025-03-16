import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginPage from './views/LoginPage.jsx'
import HomePage from './views/HomePage.jsx'
import AboutPage from './views/AboutPage.jsx'
import ContactPage from './views/ContactPage.jsx'
import RegisterPage from './views/RegisterPage.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/wow/contact" element={<ContactPage />} />
        <Route path="/sau/dti/regis" element={<RegisterPage />} />
      </Routes>    
    </BrowserRouter>
  )
}

export default App
