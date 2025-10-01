
//Class work:

```
'use client';
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {

   return (
     <div className="bg-slate-950 font-serif w-screen min-h-screen">
       <div className="mx-auto items-center justify-center flex flex-col">
         <h1 className="text-cyan-300 text-4xl font-bold mt-5">
           Welcome to TechHive
         </h1>
        </div>
        <div className="mt-4 flex flex-shrink mx-auto">
        <Link href="./user">
        <Button variant="destructive" className="ml-16">
         Sign To Web
        </Button>
      </Link>
     </div>
   </div>
  );
}
```