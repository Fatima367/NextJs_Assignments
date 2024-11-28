"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";

export default function FetchPostsPage() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/external")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setPosts(data.data);
        } else {
          setError(data.message);
        }
      })
      .catch((error) => "An unexpected error occured.")
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-slate-100 -mb-5 font-LibreBaskerville">
      <div className="flex items-center justify-center">
        <h1 className="mt-3 text-4xl font-bold text-gray-800">Posts</h1>
      </div>

      <div className="py-2 gap-8 grid grid-cols-3 ml-5 mr-5 mt-3 mb-5">
        {posts.map((post: { id: number; title: string; body: string }) => (
          <Dialog>
            <DialogTrigger asChild>
              <div
                key={post.id}
                className="h-42 w-auto border border-gray-200 p-4 
                    rounded-lg shadow-md hover:shadow-slate-600 bg-white 
                    hover:cursor-pointer ring-offset-1 ring-offset-gray-200"
              >
                <h3 className="font-bold mt-3"> {post.title.toUpperCase()} </h3>
                <br />
                <p className="mb-3">
                  <span className="font-bold">Description:</span> {post.body}{" "}
                </p>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md font-LibreBaskerville">
              <DialogHeader>
                <DialogTitle>{post.title.toUpperCase()}</DialogTitle>
              </DialogHeader>
                <p className="text-black">
                  {" "}
                  <span className="font-bold">Description:</span> {post.body}{" "}
                </p>
              <DialogFooter className="sm:justify-start">
                <DialogClose asChild>
                  <Button type="button" variant="default">
                    Close
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
