import { NextResponse } from "next/server";
import { title } from "process";

let books = [
    {
        title : "Harry Potter",
        author : "J.K Rowling",
        genre : "Mystery",
        available : true
    },
];

export async function GET () {
    try{
        return NextResponse.json(books, {status: 200})
    }
    catch(error){
        return NextResponse.json(
            {messaage : "Error, books not found"},
            {status: 500}
        )
    }
};