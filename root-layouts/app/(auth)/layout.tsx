'use client'
import './style.css'
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const navLink = [
    {
        name : "Register" , href : "/register"
    },
    {
        name : "Login" , href : "/login"
    },
    {
        name : "Forgot Password" , href : "/forgot-password"
    }
]
export default function AuthLayout({
    children
} : {
    children : React.ReactNode
}){
    const pathname = usePathname();
       return(

           <div>
                 {
                    navLink.map((link) => {
                        const isActive = 
                              pathname === link.href ||
                              (pathname.startsWith(link.href) && link.href !== '/')

                        return(
                            <Link 
                             className={isActive ? "font-bold text-red-600 mr-4" : "text-blue-500 mr-4"}
                             href={link.href}
                             key={link.name}
                            >
                             {
                                link.name
                             }
                            </Link>
                        )
                    })
                 }
                 {
                    children
                 }
           </div>
       )
}