"use client";
import { useEffect, useState } from "react";

export default function FetchPostsPage () {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect ( () => {
        fetch("/api/external")
        .then( (res) => res.json())
        .then( (data) => {
            if(data.success) {
                setPosts(data.data);
            } else {
                setError(data.message);
            }
        })
        .catch( (error) => "An unexpected error occured.")
        .finally( () => setLoading(false) )
    }, []);

    return (
        <div>
            <div className="flex items-center justify-center">
                <h1 className="mt-3 text-4xl font-bold">Posts</h1>
            </div>

            <div className="py-2 gap-6 grid grid-cols-3 ml-5 mr-5 mt-3 mb-5">
                {posts.map((post: {id: number; title: string, body: string})=> (
                    <div key={post.id} className="h-42 w-auto border border-gray-200 p-4 rounded-md
                    shadow-md hover:shadow-slate-600">
                        <h3 className="font-bold"> {post.title} </h3>
                        <br />
                        <p> {post.body} </p>

                    </div>
                ))}
            </div>
        </div>
    )
};