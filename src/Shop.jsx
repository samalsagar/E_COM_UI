import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import HeroSection from './components/HeroSection/HeroSection'

function Shop() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
        <Navigation />
        <HeroSection />
      </div>
    </>
  )
}

export default Shop
