import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <nav className="h-16 bg-gradient-to-r from-purple-700 to-purple-600 flex justify-between items-center px-10 text-white shadow-lg">

            <div className="logo font-extrabold text-xl tracking-wide">
                <Link href="/">Bitlinks</Link>
            </div>

            <ul className="flex justify-center gap-6 items-center font-medium">
                <Link href="/"><li className="hover:text-purple-200 transition cursor-pointer">Home</li></Link>
                <Link href="/about"><li className="hover:text-purple-200 transition cursor-pointer">About</li></Link>
                <Link href="/shorten"><li className="hover:text-purple-200 transition cursor-pointer">Shorten</li></Link>
                <Link href="/contact"><li className="hover:text-purple-200 transition cursor-pointer">Contact Us</li></Link>

                <li className="flex gap-3 ml-4">
                    <Link href="/shorten">
                        <button className="bg-white text-purple-700 hover:bg-purple-100 transition-all rounded-xl shadow-md px-4 py-2 font-bold active:scale-95">
                            Try Now
                        </button>
                    </Link>

                    <Link href="/github">
                        <button className="bg-purple-500 hover:bg-purple-400 transition-all rounded-xl shadow-md px-4 py-2 font-bold active:scale-95">
                            GitHub
                        </button>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
