import React from 'react'

function TopBar() {
    return (
        <div className="flex justify-end w-full overflow-hidden rounded-xl">
            <section className="relative">
                <nav className="flex justify-between bg-transparent text-slate-800">
                    <div className="px-5 py-6 flex  items-center">
                        <div className="flex items-center space-x-5">

                            <a className="flex items-center hover:text-gray-200" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className='ml-1 font-bold text-sm'>Ariel Noah (Owner)</p>
                            </a>

                        </div>
                    </div>
                </nav>

            </section>
        </div>
    )
}

export default TopBar
