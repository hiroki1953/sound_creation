"use client";

import Link from "next/link";
import { TagBadge } from "./TagBadge";
import { Question } from "../lib/mock";

export function QuestionCard({ q }: { q: Question }) {
  return (
    <Link
      href={`/q/${q.id}`}
      className="block rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:bg-gray-50"
    >
      {/* 上段：タイトル */}
      <h2 className="mb-1 line-clamp-2 text-lg font-semibold">{q.title}</h2>

      {/* 中段：本文プレビュー */}
      <p className="line-clamp-2 text-sm text-gray-600">{q.body}</p>

      {/* タグ */}
      <div className="mt-2 flex flex-wrap gap-1">
        {q.tags.map((t) => (
          <TagBadge key={t} label={t} />
        ))}
      </div>

      {/* 下段：メタ情報 */}
      <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
        <span>
          👍 {q.votes}　💬 {q.answers}
        </span>
        <span>{new Date(q.createdAt).toLocaleDateString()}</span>
      </div>
    </Link>
  );
}
