"use client";
import { useRouter } from "next/navigation";
import React from "react";

function About() {
  const route = useRouter();
  return (
      <div className="bg-sky-50 w-screen h-screen">
        <div className="mr-4 ml-4 mt-4">
          <h1 className="text-2xl font-bold">This is About Page</h1>
          <br />
          <br />
          <div className="ml-2 flex justify-between items-center mr-2 mb-4 ">
            <button
              onClick={() => route.push("/")}
              className=" bg-white p-2 rounded-lg ring-2 ring-gray-700 shadow-lg"
            >
              Back to Home Page
            </button>
            <button
              onClick={() => route.push("/navbar")}
              className=" bg-white p-2 rounded-lg ring-2 ring-gray-700 shadow-lg"
            >
              Go to Navbar Page
            </button>
            <button
              onClick={() => route.push("/contact")}
              className=" bg-white p-2 rounded-lg ring-2 ring-gray-700 shadow-lg"
            >
              Go to Contact Page
            </button>
            <button
              onClick={() => route.push("/footer")}
              className=" bg-white p-2 rounded-lg ring-2 ring-gray-700 shadow-lg"
            >
              Go to Footer Page
            </button>
          </div>
        </div>
      </div>
  );
}

export default About;
