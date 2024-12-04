'use client';
import LoginForm from "@/components/pages/LoginForm";
import SignupForm from "@/components/pages/SignupForm";
import { useState } from "react";


export default function AuthPage() {

    const [ isLoggedIn, setIsLoggedIn] = useState(true);

    return(
        <div className="min-h-screen flex flex-col justify-center items-center">
            <div className="mb-2 mt-5">
                <button onClick={() => setIsLoggedIn(!isLoggedIn)}
                    className="bg-transparent text-black font-bold border-none">
                    {isLoggedIn? "Need an account? Signup." : "Already have an account? Login"}
                </button>
            </div>
            {isLoggedIn ? <LoginForm /> : <SignupForm />}
        </div>
    )
};