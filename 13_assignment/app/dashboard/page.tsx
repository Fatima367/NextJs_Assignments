import { ClerkProvider, SignedIn } from "@clerk/nextjs";
import Nav from "../navbar/page";

export default function Dashboard() {
    return(
        <ClerkProvider>
        <SignedIn>
          <div className="text-7xl bg-white">You are signed in!!!</div>
        </SignedIn>
      </ClerkProvider>
    )
};