import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-red-900 p-2 shadow-md fixed top-0 w-screen rounded-full">
      <div className="max-w-5xl mx-auto flex justify-between items-center text-white px-4">
        <Link href="/">
          <h1 className="text-base font-bold sm:text-2xl">Readventory</h1>
        </Link>

        <div
          className="bg-white px-2 py-1 sm:px-6 sm:py-2 rounded-full shadow-lg border border-red-300 
        flex gap-4 mr-5 sm:mr-0 ml-2 sm:-ml-3"
        >
          <nav className="flex gap-2 sm:gap-7">
            <Link
              href="/"
              className="text-red-900 font-semibold hover:underline text-xs sm:text-base"
            >
              Home
            </Link>
            <Link
              href="/#addbook"
              className="text-red-900 font-semibold hover:underline text-xs sm:text-base"
            >
              Add New Book
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
