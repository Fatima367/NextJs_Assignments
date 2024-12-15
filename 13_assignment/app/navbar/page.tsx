import { ClerkProvider, SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Nav() {
  return (
    <ClerkProvider>
      <nav
        className="bg-indigo-950 p-3 flex items-end justify-end space-x-5
         text-white font-bold font-serif"
      >
        <div className="mr-12 flex items-center justify-center space-x-8">
          <Link href="/">
            <button>Home</button>
          </Link>

          <div className="-mb-[5px]">
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </nav>
    </ClerkProvider>
  );
}
