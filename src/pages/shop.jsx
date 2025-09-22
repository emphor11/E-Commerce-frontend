import React, { useEffect } from 'react'
import Hero from '../components/Hero/hero'
import Popular from '../components/popular/popular'
import Offer from '../components/Offers/Offer'
import NewCollection from '../components/NewCollectios/NewCollection'
import NewsLetter from '../components/NewsLetter/NewsLetter'
import { useAuth } from "../context/AuthContext"
import { useNavigate } from 'react-router-dom'

const Shop = () => {
  const { isAuthenticated } = useAuth()
  // console.log("fuowevbuf2o4vfu2", isAuthenticated)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/login")
    }
  }, [isAuthenticated, navigate]) 

  return (
    <div>
      <Hero />
      <Popular />
      <Offer />
      <NewCollection />
      <NewsLetter />
    </div>
  )
}

export default Shop
