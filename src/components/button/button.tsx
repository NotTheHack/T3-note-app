import React from "react";
import { useSession , signIn } from "next-auth/react";
import Link from "next/link";

const Button = () => {
const { data:sessionData } = useSession()
  if(!sessionData){
    return(
      <>
      <button onClick={() => signIn()} className="px-6 py-2 bg-transparent border border-black font-semibold hover:bg-black hover:text-white">Log In!</button>
      </>
    )
  }
  return(
    <Link href="/dashboard" className="px-6 py-2 bg-transparent border border-black font-semibold hover:bg-black hover:text-white">Go to Dashboard</Link>
  )
}

export default Button;