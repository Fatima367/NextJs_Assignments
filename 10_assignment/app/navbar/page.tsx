import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-red-900 p-3 shadow-md fixed top-0 w-screen -ml-6">
      <div className="max-w-5xl mx-auto flex justify-start items-start text-white">
        <Link href="/">
          <h1 className="text-2xl font-bold">Readventory</h1>
        </Link>
      </div>
    </div>
  );
}
