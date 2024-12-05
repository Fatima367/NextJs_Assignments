import Link from "next/link";

export default function Nav() {
  return (
    <nav
      className="bg-indigo-950 p-3 w-screen flex items-end justify-end space-x-5
         text-white font-bold font-serif"
    >
      <div className="space-x-8">
        <Link href="/">
          <button>Home</button>
        </Link>
        <Link href="/login-signup">
          <button>Login-Signup</button>
        </Link>
      </div>
    </nav>
  );
}
