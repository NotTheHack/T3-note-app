import React from "react";
import Link from 'next/link'
import Image from "next/image";
import { useSession , signIn, signOut } from 'next-auth/react';

const Navbar = () => {
  const { data:sessionData } = useSession();
  return(
    <header className="bg-white border-b border-black py-2">
    <div className="flex justify-between min-w-fit mx-auto ml-4">
      <div className="flex basis-1/2">
        <Link href="/dashboard">
        <Image src="/images/generilogo.jpg" width="50" height="50" alt="logo"className="rounded-lg"/>
        </Link>
        
      </div>
      <div className="flex items-center justify-between">
      <nav className="flex items-center">
        <ul className="text-base text-gray-600 flex">
          <li>
            <button onClick={sessionData ? () => signOut() : () => signIn()} className="px-6 py-2 hover:bg-purple-500 bg-white rounded-xl font-semibold border border-black mr-2">{sessionData ? "Logout" : "Login"}</button>
          </li>

        </ul>
      </nav>
      </div>
    
    </div>
  </header>
  )
}

export default Navbar;