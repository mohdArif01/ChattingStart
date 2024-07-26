import React from 'react'

const Conversation = () => {
  return (
    <>
      <div className='flex pt-3 pl-3 pr-3 pb-3 gap-2 items-center hover:bg-gray-300 rounded p-2 py-1 cursor-pointer'>
        <div className='avatar online'>
            <div className='w-12 rounded-full'>
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="user avatar" />
            </div>
        </div>
        <div className='flex flex-col flex-1'>
            <div className='flex gap-3 justify-between'>
                <div className='flex flex-col'>
                    <h3 className='font-blod text-gray-950'>John Deo</h3>
                    <p className='text-sm text-gray-600'>Hello Arif! This is John</p>
                </div>
                <span className='text-xl'>1</span>
            </div>
        </div>
      </div>
      <div className='divider my-0 py-0 h-1' />
    </>
  )
}

export default Conversation
