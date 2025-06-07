"use client"

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react"

export const AuthContext = createContext(undefined);

export const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const currentPath = usePathname();
    
    const router = useRouter();
    
    useEffect(() => {
        const session = typeof window !== "undefined" ? localStorage.getItem("cms-session") : null;
        if(!session && currentPath != "/"){
            router.replace("/");
        }else if(session && currentPath == "/"){
            router.replace("/dashboard");
            setIsLoggedIn(true)
        }

    }, [currentPath])
    
    return(
        <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuthContext must be used within an AuthProvider");
    return context;
}