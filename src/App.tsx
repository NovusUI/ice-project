
import './App.css'
import MainLayout from './layout/MailLayout'
import Expertise from './pages/Expertise'
import HomePage from './pages/HomePage'
import ProjectsPage from  './pages/Projects'
import ProjectPage from  './pages/Project'
import AboutUs from './pages/AboutUs'
import Contacts from './pages/Contacts'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <Router>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/home' element={<HomePage />} />
        {/* Add more routes like this */}
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/projects" element={<ProjectsPage/>} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/contacts" element={<Contacts/>} />
        <Route path='/project/:id' element={<ProjectPage/>} />
      </Route>
    </Routes>
  </Router>
  )
}

export default App





