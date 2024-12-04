import { SessionWrapper } from "@/components/SessionWrapper";
import SignOutPage from "@/components/SignOutComponent";
import { auth } from "@/lib/auth";
import Link from "next/link";

export default async function Login() {
  const session = await auth();
  const isAuthenticated = !!session?.user;

  return (
    <div className="font-serif">
      <SessionWrapper>
        {isAuthenticated
          ? <SignOutPage />
          : <Link href="./login-signup">
            <button className="text-xl font-bold text-cyan-300">Sigin</button>
          </Link>
        }
      </SessionWrapper>
    </div>
  );
}
