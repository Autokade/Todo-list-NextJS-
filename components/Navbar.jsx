import React from 'react'

const navbar = () => {
  return (
    <div className='flex py-3 flex-wrap justify-around'>
        <h1 className='text-lg font-semibold'>ToDo APP</h1>
        <ul className='flex gap-[40px] text-m'>
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Contacts</li>
        </ul>
    </div>
  )
}

export default navbar