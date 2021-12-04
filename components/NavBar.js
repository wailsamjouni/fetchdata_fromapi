import React from 'react'

const NavBar = () => {
    return (
        <nav className="flex item-center space-x-56 px-2 m-3">
            <div className="flex font-mono text-2xl  cursor-pointer tracking-widest
                p-3 bg-gray-50  border border-gray-300 drop-shadow-md
                hove:bg-gray-100 items-center">
                Logo
            </div>
            <div className="flex justify-center item-center bg-gray-50 
                drop-shadow-md p-2 hover:bg-gray-100">
                <a className="mx-8 p-3 cursor-pointer">Home</a>
                <a className="mx-8 p-3  cursor-pointer">About</a>
                <a className="mx-8 p-3  cursor-pointer">Cart</a>
            </div>
            <div className="inline-flex items-center">
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-800
                mr-3 font-bold py-2 px-4 rounded-l">Log in</button>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 
                mr-4 font-bold py-2 px-4 rounded-r">Register</button>
            </div>
        </nav>
    )
}

export default NavBar
