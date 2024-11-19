import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-red-900 p-2 shadow-md fixed top-0 w-screen rounded-full">
      <div className="max-w-5xl mx-auto flex justify-between items-center text-white px-4">
        <Link href="/">
          <h1 className="text-xl font-bold sm:text-2xl">Readventory</h1>
        </Link>

        <div
          className="bg-white px-3 py-2 sm:px-8 sm:py-2 rounded-full shadow-lg border border-red-300 
        flex gap-4"
        >
          <nav className="flex gap-4 sm:gap-7">
            <Link
              href="/"
              className="text-red-900 font-semibold hover:underline text-sm sm:text-md"
            >
              Home
            </Link>
            <Link
              href="/#addbook"
              className="text-red-900 font-semibold hover:underline text-sm sm:text-md"
            >
              Add New Book
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
