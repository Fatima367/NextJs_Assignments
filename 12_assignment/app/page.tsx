import { SessionWrapper } from "@/components/SessionWrapper";
import SignOutPage from "@/components/SignOutComponent";
import { auth } from "@/lib/auth";
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
            <button
              className="flex p-4 bg-white text-purple-900 font-bold rounded-full mt-5
            space-x-4 text-xl ring-2 ring-white ring-offset-2 ring-offset-purple-500"
            >
              Sigin to Continue <FaArrowRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </SessionWrapper>
    </div>
  );
}
