import React from 'react'
import FeaturedInfo from '../../components/featured/FeaturedInfo';
import './home.css';
import Chart from '../../components/chart/Chart'
const Home = () => {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart />
    </div>
  )
} 
export default Home

f