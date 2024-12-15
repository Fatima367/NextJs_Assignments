import { SessionWrapper } from "@/components/SessionWrapper";
import SignOutPage from "@/components/SignOutComponent";
import { auth } from "@/lib/auth";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default async function Login() {
  const session = await auth();
  const isAuthenticated = !!session?.user;

  return (
    <div className="font-serif">
      <SessionWrapper>
        {isAuthenticated ? (
          <SignOutPage />
        ) : (
          <div className="bg-[url('/images/bgimg.png')] bg-cover flex flex-col items-center justify-center w-screen min-h-screen">
            <h1 className="text-7xl text-white font-bold"> Welcome</h1>
            <h3 className="text-3xl text-white font-bold mt-4">
              To the appliction made with Auth!
            </h3>
            <p className="text-white text-2xl mt-2">Sigin to continue:</p>
            <Link href="/login-signup">
              <button
                className="flex px-6 py-2 bg-white text-purple-900 font-bold rounded-full mt-5
            space-x-4 text-xl ring-2 ring-white ring-offset-2 ring-offset-purple-500 
            items-center justify-center hover:bg-gray-200"
              >
                Sigin to Continue <FaArrowRight className="h-5 w-5 ml-2" />
              </button>
            </Link>
          </div>
        )}
      </SessionWrapper>
    </div>
  );
}
