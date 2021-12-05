import React from 'react'
import Link from 'next/link'

const NavBar = () => {

    return (
        <nav className="flex item-center space-x-56 px-2 m-0 sticky top-0 bg-gray-200 p-2
        shadow-lg">
            <Link href="/">
                <a>
                    <div className="flex font-mono text-2xl  cursor-pointer tracking-widest
                px-5 py-2 bg-gray-50  border border-gray-300 drop-shadow-sm
                hover:bg-gray-200 hover:text-white items-center uppercase">
                        WS Store
                    </div>
                </a>
            </Link>
            <div className="flex justify-center item-center bg-gray-50
                hover:shadow-none drop-shadow-md p-2 hover:bg-gray-200">
                <Link href="/">
                    <a className="mx-8 p-3 cursor-pointer">Home</a>
                </Link>
                <Link href="/about">
                    <a className="mx-8 p-3 cursor-pointer">About</a>
                </Link>
                <Link href="/cart">
                    <a className="mx-8 p-3 cursor-pointer">Cart</a>
                </Link>
            </div>
            <div className="inline-flex items-center">

                <button className="bg-gray-200 hover:bg-gray-300 text-gray-800
                mr-3 font-bold py-2 px-4 rounded-l">
                    <Link href="/login">
                        <a>Log in</a>
                    </Link>
                </button>

                <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 
                mr-4 font-bold py-2 px-4 rounded-r">
                    <Link href="/register">
                        <a>Register</a>
                    </Link>
                </button>

            </div>
        </nav>
    )
}

export default NavBar
