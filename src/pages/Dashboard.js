import React, { useEffect } from 'react'

function Dashboard() {
    const fetchData = async () => {
       try {
        const response = await fetch('http://localhost:5000/')
        const data = await response.json()
        console.log(data)        
       } catch (error) {
        console.log(error)
        
       }
    }

    useEffect(() => {
        fetchData()
    }, [])
  return (
    <div>
        dasgbord ddd
      
    </div>
  )
}

export default Dashboard
