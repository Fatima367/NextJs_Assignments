import { ClerkProvider, SignedOut, SignInButton } from "@clerk/nextjs";

export default function ClerkUI() {
    return(
        <ClerkProvider>
        <div className="bg-[url('/images/bgimg.png')] w-full min-h-screen bg-cover 
        flex flex-col items-center justify-center">
          <h1 className="text-7xl text-white font-bold"> Welcome</h1>

          <SignedOut>
          <button className="flex px-6 py-2 bg-white text-purple-900 font-bold rounded-full mt-5
            space-x-4 text-xl ring-2 ring-white ring-offset-2 ring-offset-purple-500 
            items-center justify-center hover:bg-gray-200">
          <SignInButton />
          </button>
          </SignedOut>
        </div>
     </ClerkProvider>


    )
}