import { auth } from "@/lib/auth";
import AuthPage from "../forms/page";
import SignOutPage from "@/components/SignOutComponent";


export default async function Dashboard() {

    const session = await auth();
    const isAuthenticated = !!session?.user;

    return(
        <div >
            <div className="bg-transparent">
                {isAuthenticated? <SignOutPage /> :
                <AuthPage />}
            </div>
        </div>
    )
};