// src/layouts/MainLayout.tsx
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Nav'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <>
    <header className="sticky top-0 z-30">
      <Navbar />
      </header>
      <main className="flex-1">
        <Outlet /> {/* This will render your page */}
      </main>
      <Footer />
    </>
  )
}

export default MainLayout
