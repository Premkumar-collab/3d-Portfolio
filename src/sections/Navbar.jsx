import React from 'react'
import { useState } from 'react'
import {navLinks} from '../constents/index.js'

const NavItems = ()=>{
    return (
        <>
        <ul className='nav-ul sm:flex hidden'>
            {navLinks.map(({id,name,href})=>(
                <li key={id} className='nav-li'>
                    <a href={href}>{name}</a>
                </li>
            ))}

        </ul>
        
        </>
    )
}


const Navbar = () => {
    const [isopen, setIsopen] = useState(false)

 

    return (
        <>
            <header className='fixed top-0 left-0 w-full bg-black/90 text-white  z-50'>
                <div className="mx-w-7xl mx-auto ">
                    <div className="flex justify-between items-center py-5 mx-auto c-space">
                        <a href="/" className='text-neutral-400 font-bold text-xl hover:text-white transition-colors '>
                            PREM
                        </a>

                        <button onClick={()=>setIsopen(!isopen)} className='text-neutral-400 hover:text-white focus:outline-none sm:hidden flex' aria-label='Toggle Menu'>
                            <img src={isopen ? "assets/close.svg" : "assets/menu.svg"} alt="toggle" className='w-6 h-6'/>
                        </button>

                        <nav className='sm:flex hidden'>
                            <NavItems/>
                        </nav>
                    </div>
                </div>

                <div className={`nav-sidebar ${isopen ? "max-h-screen" : "max-h-0"}`}>
                    <nav className='p-5'>
                        <NavItems/>
                    </nav>

                </div>

            </header>
        </>
    )
}

export default Navbar
