"use client";

import { useAuthContext } from "@/providers/AuthProvider";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function useAuth() {
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { setIsLoggedIn } = useAuthContext();
    const router = useRouter();
    
    const LOGIN_API = process.env.NEXT_PUBLIC_API_LOGIN
    console.log(LOGIN_API)
    const handleLogin = async (password) => {
        setIsLoading(true);
        setError(false);
        //Hash password (Igore for now)
        //Send to server (Igore for now)
        if (!password.trim()) {
            setError("Password is required. Try again");
            setIsLoading(false);
            return;
        }

        try {
            // Fake check — replace this with real password validation via fetch
            const result = axios.post(LOGIN_API, {
                userPassword: password
            })

            console.log(result)
            let isValid = false
            if (!isValid) {
                setError("Incorrect password.");
            } else {
                localStorage.setItem("cms-session", "valid"); // Simulate login
                setIsLoggedIn(true);
                router.replace("/dashboard");
            }
        } catch (err) {
            setError("Something went wrong.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleLogout = async () => {
        localStorage.removeItem("cms-session");
        setIsLoggedIn(false);
        router.replace("/")
    }

    return { handleLogin, handleLogout, isLoading, error };
}
