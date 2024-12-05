"use client";
import LoginForm from "@/components/pages/LoginForm";
import SignupForm from "@/components/pages/SignupForm";
import { useState } from "react";

export default function AuthPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div
      className="bg-[url('/images/bgimg.png')] bg-cover min-h-screen flex flex-col 
        justify-center items-center text-white font-serif w-screen"
    >
      <div className="mb-2 mt-2">
        <button
          onClick={() => setIsLoggedIn(!isLoggedIn)}
          className="font-bold border-none"
        >
          {isLoggedIn
            ? "Need an account? Signup."
            : "Already have an account? Login"}
        </button>
      </div>
      {isLoggedIn ? <LoginForm /> : <SignupForm />}
    </div>
  );
}
