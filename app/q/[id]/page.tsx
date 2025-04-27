import { questions } from "../../lib/mock";
import { notFound } from "next/navigation";

export default function QuestionDetail({ params }: { params: { id: string } }) {
  const q = questions.find((x) => x.id === Number(params.id));
  if (!q) return notFound();

  return (
    <article className="space-y-4">
      <h1 className="text-2xl font-bold">{q.title}</h1>

      {/* タグ */}
      <div className="flex flex-wrap gap-1">
        {q.tags.map((t) => (
          <span
            key={t}
            className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-700"
          >
            {t}
          </span>
        ))}
      </div>

      {/* 本文 */}
      <p className="whitespace-pre-wrap">{q.body}</p>

      {/* --- 回答フォーム（ダミー） --- */}
      <section className="rounded-lg border p-4">
        <h2 className="mb-2 font-semibold">回答を投稿する</h2>
        <textarea
          className="h-24 w-full resize-none rounded border p-2 text-sm"
          placeholder="あなたの知見やヒントを書いてください"
        />
        <button className="mt-2 rounded bg-indigo-600 px-4 py-1.5 text-sm text-white hover:bg-indigo-500">
          投稿
        </button>
      </section>
    </article>
  );
}
