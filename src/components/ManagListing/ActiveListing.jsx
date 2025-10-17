import React from 'react'

const ActiveListing = () => {
  return (
    <div className='bg-[#FFFFFF] p-4 sm:max-h-[150px] border border-[#E4E4E4] rounded-lg w-full sm:max-w-[250px]'>
        <p className='font-bold text-[20px] sm:text-[18px]'>Active listings</p>
        <div className='flex gap-14 sm:gap-4 mt-3'>
        <div>
            <p className='text-[#636363]'>Residencial </p>
            <p className='font-bold text-2xl'>7</p>
        </div>
        <div>
            <p className='text-[#636363]'>Comercial</p>
            <p className='font-bold text-2xl'>2</p>
        </div>
        </div>
    </div>
  )
}

export default ActiveListing