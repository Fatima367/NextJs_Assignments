import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-red-900 p-2 shadow-md fixed top-0 w-screen -ml-5 rounded-full">
      <div className="max-w-5xl mx-auto flex justify-start items-start text-white">
        <Link href="/">
          <h1 className="text-2xl font-bold">Readventory</h1>
        </Link>
      </div>
      <div className="max-w-5xl mx-auto flex justify-end items-end -mt-9">
        <div className="bg-white px-6 py-2 rounded-full shadow-lg border border-red-300">
          <nav className="flex gap-8">
            <Link href="/" className="text-red-900 font-semibold hover:underline">
              Home
            </Link>
            <Link href="/#addbook" className="text-red-900 font-semibold hover:underline">
              Add New Book
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
