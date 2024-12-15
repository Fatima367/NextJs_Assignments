import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
} from "@clerk/nextjs";

export default function ClerkUI() {
  return (
    <ClerkProvider>
      <div className="bg-[url('/images/bgimg.png')] w-full min-h-screen bg-cover">
        <SignedOut>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-7xl text-white font-bold mt-32"> Welcome</h1>
            <h3 className="text-3xl text-white font-bold mt-4">
              To the appliction made with Clerk!
            </h3>
            <p className="text-white text-2xl mt-2">Sigin to continue:</p>
            <button
              className="flex px-6 py-2 bg-white text-purple-900 font-bold rounded-full mt-5
            space-x-4 text-xl ring-2 ring-white ring-offset-2 ring-offset-purple-500 
            items-center justify-center hover:bg-gray-200"
            >
              <SignInButton />
            </button>
          </div>
        </SignedOut>

        <div className="flex flex-col items-start mx-10">
          <SignedIn>
            <div className="text-5xl text-white mt-10">
              You are now signed in!
            </div>
            <div className="text-4xl font-bold text-white mt-16 ml-72">
              " Have a wonderful day! ✨"
            </div>
          </SignedIn>
        </div>
      </div>
    </ClerkProvider>
  );
}
