import Image from "next/image";

export default function Home() {
  return (
    <>
      <body className="bg-teal-50">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />{" "}
        <h1 className="font-bold"> Assignment </h1>
        <br />
        <br />
       
        <h1 className="text-center font-serif font-bold text-7xl bg-white">
          <i> Hello World! </i>
        </h1>
       
      </body>
    </>
  );
}
