'use client';
import LoginForm from "@/components/LoginForm";
import SignupForm from "@/components/SignupForm";
import { Button } from "@/components/ui/button";
import { useState } from "react";


export default function AuthPage() {

    const [ isLoggedIn, setIsLoggedIn] = useState(true);

    return(
        <div className="min-h-screen flex flex-col justify-center items-center">
            <div className="mb-4">
                <Button variant="ghost" onClick={() => setIsLoggedIn(!isLoggedIn)}>
                    {isLoggedIn? "Need an account? Signup." : "Already have an account? Login"}
                </Button>
            </div>
            {isLoggedIn ? <LoginForm /> : <SignupForm />}
        </div>
    )
};