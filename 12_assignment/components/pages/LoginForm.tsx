"use client";
import { useState } from "react";
import SignInPage from "../login/AuthComponent";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Login attempt with :", { email, password });
  };

  return (
    <div
      className="rounded-xl border bg-card text-card-foreground shadow w-5/12
        ml-auto mr-auto mb-6 mt-3 bg-white text-black ring-2 ring-white ring-offset-2 
        ring-offset-purple-500"
    >
      <div className="flex flex-col space-y-1.5 p-6">
        <div className="font-semibold leading-none tracking-tight">Login</div>
        <div className="text-sm text-muted-foreground">
          Enter your credentials to access your account
        </div>
      </div>
      <div className="p-6 pt-0">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <input
              value={email}
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base
                        shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium
                        file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1
                        focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              required
            />
          </div>
          <div className="space-y-2">
            <input
              value={password}
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base
                        shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium
                        file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1
                        focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <h3>OR</h3>
          </div>
          <div className="flex flex-row items-center justify-center space-y-2">
            <SignInPage />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-950 text-white rounded-lg
                    p-2 hover:bg-gray-800"
            onClick={() => alert("Thanks for Login!")}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
