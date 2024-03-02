import React from 'react'
import { TbTextScan2 } from "react-icons/tb";

const CardIcon = ({icon, text}) => {
  return (
    <div>
      {icon}
        <p>
            {text}
        </p>
    </div>
  )
}

export default CardIcon