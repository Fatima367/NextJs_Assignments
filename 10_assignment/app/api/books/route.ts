import { NextResponse } from "next/server";

type Books = {
  id: string;
  title: string;
  author: string;
  genre: string;
  available: boolean;
  image: string;
};

let books: Books[] = [
  {
    id: "1",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Classic, Romance, Literary Fiction",
    available: true,
    image: "../images/img2.jpg",
  },
  {
    id: "2",
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    genre: "Gothic Fiction, Philosophical Fiction",
    available: true,
    image: "../images/img4.jpg",
  },
  {
    id: "3",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic, Literary Fiction, Tragedy",
    available: false,
    image: "../images/img3.jpg",
  },
  {
    id: "4",
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy, Young Adult",
    available: false,
    image: "../images/img.jpg",
  },
  {
    id: "5",
    title: "The Odyssey",
    author: "Homer",
    genre: "Epic Poetry, Classical Literature",
    available: true,
    image: "../images/img5.jpg",
  },
];

//handlers

export const getBooks = () => books;

export const addBooks = (book: Books) => {
  books.push(book);
};

export const deleteBooks = (id: string) => {
  books = books.filter((book) => book.id !== id);
};

export const updateBooks = (
  id: string,
  title: string,
  author: string,
  genre: string,
  available: boolean,
  image: any
) => {
  const book = books.find((book) => book.id === id);

  if (book) {
    book.title = title;
    book.author = author;
    book.genre = genre;
    book.available = available;
    book.image = image;
  } else {
    throw new Error("Book not found.");
  }
};

export function getById(id: string) {
  return books.find((book) => book.id === id);
}

export async function GET(req: Request, res: Response) {
  try {
    const books = getBooks();
    return NextResponse.json({ message: "OK", books }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { messaage: "Error, books not found" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request, res: Response) {
  try {
    const { title, author, genre, available, image } = await req.json();

    const book = {
      id: Date.now().toString(),
      title,
      author,
      genre,
      available,
      image,
    };
    addBooks(book);
    return NextResponse.json({ message: "OK", book }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { messaage: "Error, books not found" },
      { status: 500 }
    );
  }
}
