"use client"; //important for session components
import { signIn } from "next-auth/react";
import { useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";


export default function SignInPage() {
  const [gitMessage, setGitMessage] = useState("");
  const [googleMessage, setGoogleMessage] = useState("");

  const handleSignInGitHub = async () => {
    try {
      await signIn("github");
      setGitMessage("Signing in with GitHub...");
    } catch (err) {
      console.error("Sign in error:", err);
      setGitMessage("Error signing in. Please try again.");
    }
  };

  const handleSignInGoogle = async () => {
    try {
      await signIn("google");
      setGoogleMessage("Signing in with Google...");
    } catch (err) {
      console.error("Sign in error:", err);
      setGoogleMessage("Error signing in. Please try again.");
    }
  };

  return (
    <div className="text-center p-4">
      <h1 className="text-xl mb-4">Signin with</h1>
      <div className="flex items-center justify-center flex-row gap-6">
      <button
        onClick={handleSignInGitHub}
        className="w-48 bg-gray-800 hover:bg-gray-900 text-white px-3 py-2 rounded flex
        items-center justify-center"
      >
       Signin with GitHub <FaGithub className="h-5 w-5 ml-2"/>
      </button>
      {gitMessage && <div className="mt-4 text-blue-600">{gitMessage}</div>}


      <button
        onClick={handleSignInGoogle}
        className="w-48 bg-blue-800 hover:bg-blue-900 text-white px-3 py-2 rounded flex
        items-center justify-center"
      >
       Signin with Google <FaGoogle className="h-4 w-4 ml-2"/>
      </button>
      {googleMessage && <div className="mt-4 text-red-600">{googleMessage}</div>}
      </div>
    </div>
  );
}