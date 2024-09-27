import About from "@/components/About";
import Header from "@/components/Header";
import Image from "next/image";
/* 
Assignment -2

Create 2 components named as Header.tsx and About.tsx and Import it on homepage
 */
export default function Home() {
  return ( <>
  <div className="flex justify-end">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        /> 
        </div>
        <h2 className="font-bold  flex justify-end">Assigmnet</h2>
       
        <Header />
        <br />
        <About />
        <br />
        <h1 className="font-serif text-4xl font-semibold italic bg-slate-50"> Home Page</h1>
      </>
  );
}
