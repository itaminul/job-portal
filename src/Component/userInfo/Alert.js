import React from 'react'
import { useAppContext } from '../../context/appContext'

function Alert() {
  const { alertType, alertText } =  useAppContext();
  return (

    <div>
        <div className={``}>             
        <div className={`p-4 mb-4 text-sm text-red-700 ${alertType}  dark:text-red-800`} role="alert">
         <span class="font-medium"> {alertText}</span> 
        </div> 
        </div>
        </div>
       
  )
}

export default Alert
