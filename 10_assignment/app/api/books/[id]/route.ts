import { NextResponse } from "next/server";
import { deleteBooks, updateBooks } from "../route";

export async function GET(req: Request) {
  try {
    const id = req.url.split("books/")[1];
    console.log(id);
    const book = (id);

    if (!book) {
      return NextResponse.json({ message: "ERROR" }, { status: 404 });
    }
    return NextResponse.json({ message: "OK" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { messaage: "Error, book not found", error },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    const { title, author, genre, available, image } = await req.json();

    // Using URL to extract ID safely
    const url = new URL(req.url)
    const id = url.pathname.split("/").pop();

    await updateBooks(id, title, author, genre, available, image);

    return NextResponse.json({ message: "OK" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error, something went wrong", error },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const id = req.url.split("books/")[1];
    deleteBooks(id);

    return NextResponse.json({ message: "OK" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { messaage: "Error, something went wrong", error },
      { status: 500 }
    );
  }
}
