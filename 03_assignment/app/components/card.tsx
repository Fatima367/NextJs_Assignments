import Image from "next/image";
import React from "react";

function Card(props: any) {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="bg-white max-w-md p-8 h-auto w-90px ring-2 ring-gray-200 
        shadow-lg flex">
          <div className="flex-grow flex flex-col justify-center">
            <h1 className="text-2xl text-blue-800 font-bold"> Student Card</h1>
            <br />
            <h2>Name : {props.name}</h2>
            <h2>RollNo : {props.rollno}</h2>
            <h2>Day : {props.day}</h2>
          </div>
          <div className="ml-8 bg-white ring-2 ring-gray-200 w-32 h-32 flex-shrink-0">
            <Image
              src={"/"}
              alt="profile image"
              width={32}
              height={32}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
