import React from 'react'

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-100 bg-clip-padding '>
      <Sidebar />
      <Message /> 
    </div>
  )
}

export default Home
