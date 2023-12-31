"use client"
import React from 'react'

const Newsletter = () => {
  return (
    <section className='bg-gray-50 mt-20'>
        <div  className='container mx-auto md:px-20 py-16 text-center'>
            <h1 className='text-3xl font-bold'> Subscribe NewsLetter</h1>
            <div className='py-4'>
              <input type='text' className='shadow border rounded w-3/4 py-3 px-3 text-gray-700 focus:outline-none focus:shadow-outline' placeholder='Enter your mail' /> 
            </div>

            <button className='bg-orange-400 px-20 py-3 rounded-full text-gray-50 text-xl'>
               Subscribe
            </button>
        </div>


    </section>
  )
}

export default Newsletter