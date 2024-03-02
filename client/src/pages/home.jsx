import React from 'react'
import CardIcon from '../component/cardIcon.jsx'
import { TbTextScan2 } from "react-icons/tb";


const Home = () => {
  return (
    <div className='container'>
        <CardIcon icon={<TbTextScan2 />} text={"Scan"} />
    </div>
  )
}

export default Home