import { ClerkProvider, SignedIn } from "@clerk/nextjs";
import Nav from "../navbar/page";

export default function Dashboard() {
    return(
        <ClerkProvider>
        <SignedIn>
        <div className="bg-[url('/images/bgimg.png')] w-full min-h-screen bg-cover">
        <Nav/>
         <h1 className="text-7xl text-white font-bold">DB</h1>
        </div>
        </SignedIn>
        </ClerkProvider>
    )
};