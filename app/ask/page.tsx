"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Ask() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // いまはモックで PUSH だけ
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("まだ API 未実装ですが投稿した体で一覧に戻ります");
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-2xl space-y-4">
      <h1 className="text-xl font-bold">質問する</h1>

      <label className="block">
        <span className="text-sm font-medium">タイトル</span>
        <input
          className="mt-1 w-full rounded border p-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium">本文</span>
        <textarea
          className="mt-1 h-40 w-full resize-none rounded border p-2"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
      </label>

      <button className="rounded bg-indigo-600 px-4 py-1.5 text-sm text-white hover:bg-indigo-500">
        投稿
      </button>
    </form>
  );
}
