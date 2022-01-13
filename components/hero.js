import React from 'react'

function Hero() {
    return (
        <div className='h-screen py-40 px-16 w-full text-white bg-cover bg-bottom bg-fixed bg-no-repeat relative' style={{ backgroundImage: `url("img/2959.jpg")` }}>
            <div className='white absolute top-0 right-0 bottom-0 w-6/12'>
                <div className='squares'>
                    <div className='square'></div>
                    <div className='square'></div>
                    <div className='square'></div>
                    <div className='square'></div>
                    <div className='square'></div>
                    <div className='square'></div>
                    <div className='square'></div>
                    <div className='square'></div>
                    <div className='square'></div>
                    <div className='square'></div>
                </div>
            </div>
            <div className='w-6/12'>
                <div className='text-6xl font-bold mb-3'>Digital Marketing & Web Solution.</div>
                <p className='text-lg text-white mb-3'>Whatever your challenges, Mitrais is always here to provide you with "long-term, high-trust" software development services.</p>

                <button className='bg-orange-400 shadow border-orange-400 text-white rounded py-2 px-4 mr-2 transition duration-500 hover:bg-purple-500'>Contact Us</button>
                <button className='border-orange-400 border transition duration-500 text-white rounded shadow py-2 px-4 hover:bg-white hover:border-white hover:bg-opacity-50 hover:text-purple-900'>Get Quote</button>

            </div>
        </div>
    )
}

export default Hero
