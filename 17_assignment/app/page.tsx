"use client";
import Form from "./components/Form";

function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-24 font-serif
    bg-gradient-to-br from-blue-50 via-white to-slate-100"
    >
      <div className="bg-white px-6 py-9 rounded-lg shadow-md">
        <Form />
      </div>
    </main>
  );
}

export default Home;
