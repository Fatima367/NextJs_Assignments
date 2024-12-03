import { SessionWrapper } from "@/components/SessionWrapper";
import SignOutPage from "@/components/SignOutComponent";
import AuthComponent from "@/components/login/AuthComponent";
import { auth } from "@/lib/auth";

export default async function Login() {
  const session = await auth();
  const isAuthenticated = !!session?.user;

  return (
    <div>
      <SessionWrapper>
        {isAuthenticated
          ? <SignOutPage />
          : <AuthComponent />
        }
      </SessionWrapper>
    </div>
  );
}

// export default function Home() {
//   return <div>Clerk Authentication</div>;
// }