import React from 'react'
import useConversation from '../../zustand/useConversation';
import { useSocketContext } from '../../context/SocketContext';

const Conversation = ({conversation, lastIdx}) => {
  const {selectedConversation, setSelectedConversation} = useConversation();

  const isSelected = selectedConversation?._id == conversation._id
  const {onlineUsers} = useSocketContext()
  const isOnline = onlineUsers.includes(conversation._id)


  return (
    <>
      <div className={`flex pt-3 pl-3 pr-3 pb-3 gap-2 items-center hover:bg-gray-300 rounded p-2 py-1 cursor-pointer
            ${isSelected ? "bg-gray-300" : ""}
        `}
        onClick={() => setSelectedConversation(conversation)}
        >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
            <div className='w-12 rounded-full'>
                <img src={conversation.profilePic} alt="user avatar" />
            </div>
        </div>
        <div className='flex flex-col flex-1'>
            <div className='flex gap-3 justify-between'>
                <div className='flex flex-col'>
                    <h3 className='font-blod text-gray-950'> {conversation.fullName} </h3>
                    <p className='text-sm text-gray-600'>Hello Arif! This is John</p>
                </div>
                <span className='text-xl'>1</span>
            </div>
        </div>
      </div>
      {!lastIdx && <div className='divider my-0 py-0 h-1' />}
    </>
  )
}

export default Conversation
