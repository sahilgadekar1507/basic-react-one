import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userId} = useParams()
  return (
    <div className='bg-gray-700 text-white '>User: {userId}</div>
  )
}

export default User