"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Card from "./components/card";

/* Assignment 3 :
-Create four route pages : Navbar, About, Contact & Footer
-Link all components together using the 'Link' component
-Add navigation for all routes using buttons and useRouter
-Study parent & child components, and learn how to pass data through props
-Read about routing in NextJs
*/
export default function Home() {
  const route = useRouter();
  return (
      <div>
        <header className="bg-blue-600 font-bold text-white text-lg p-2 text-end">
          <div className=" justify-between items-center space-x-3 ">
            <Link href={"./navbar"} className="underline">
              {" "}
              Navbar{" "}
            </Link>

            <Link href="./about" className="underline">
              {" "}
              About Page{" "}
            </Link>

            <Link href={"./contact"} className="underline">
              {" "}
              Contact{" "}
            </Link>

            <Link href={"./footer"} className="underline">
              {" "}
              Footer{" "}
            </Link>
          </div>
        </header>
        <br />

        <h1 className="font-bold text-3xl ml-2">This is Home Page</h1>
        <br />

        <div className="ml-4 mr-4 items-center justify-between">
          <h2 className="text-3xl font-bold">Cards :</h2>

          <p className="text-lg text-foreground text-neutral-400">
            Made cards and passed the data through 'props'
          </p>

          <br />

          <div className="flex flex-wrap gap-6 mb-4">
            <Card name="Fatima" rollno="6567" day="Monday" /> <br />
            <Card name="Fatima" rollno="4874" day="Tuesday" /> <br />
            <Card name="Fatima" rollno="3988" day="Friday" />
            <br />
          </div>
        </div>
      </div>
  );
}
