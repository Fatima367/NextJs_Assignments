import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-screen bg-red-900 h-40 -ml-6 -mb-10">
      <div className="flex flex-row space-x-10 items-center justify-center text-white mt-5">
        <Link href="/">
          <p className="border-b-2 border-b-white hover:border-b-0 transition 
          hover:cursor-pointer">
            Back to Top
          </p>
        </Link>
        <br />
        <br />
      </div>
      <div className="flex flex-row space-x-10 items-center justify-center text-white -mt-6">
        <h1 className="mt-8 font-bold text-2xl">Readventory</h1>
      </div>
      <br />
      <br />
      <div className="flex items-center justify-center text-white -mt-9">
        <p>&copy; 2024 | All Rights Reserved</p>
      </div>
    </footer>
  );
}
