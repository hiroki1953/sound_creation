import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThumbsUp, MessageSquare, Eye } from "lucide-react";
import { Sidebar } from "@/components/sidebar";

export default function Home() {
  // サンプルの質問データ
  const questions = [
    {
      id: 1,
      title: "シンセサイザーでウォブル・ベースを作る最適な方法は？",
      description:
        "EDMトラックでよく使われるウォブル・ベースを作りたいのですが、どのようなシンセ設定が最適ですか？",
      votes: 24,
      answers: 8,
      views: 142,
      tags: ["シンセサイザー", "ベース", "EDM", "サウンドデザイン"],
      user: {
        name: "bass_master",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      createdAt: "2時間前",
    },
    {
      id: 2,
      title: "ボーカルのリバーブ設定について質問です",
      description:
        "ポップスのミックスでボーカルにリバーブをかける際のベストプラクティスを教えてください。",
      votes: 18,
      answers: 12,
      views: 203,
      tags: ["ボーカル", "リバーブ", "ミキシング", "ポップス"],
      user: {
        name: "mix_engineer",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      createdAt: "5時間前",
    },
    {
      id: 3,
      title: "アナログシンセとデジタルシンセの音質の違いについて",
      description:
        "アナログシンセとデジタルシンセの音質の違いを詳しく知りたいです。実際のプロジェクトでどう使い分けるべきでしょうか？",
      votes: 32,
      answers: 15,
      views: 278,
      tags: ["アナログシンセ", "デジタルシンセ", "音質", "機材選び"],
      user: {
        name: "synth_lover",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      createdAt: "1日前",
    },
    {
      id: 4,
      title: "ドラムサンプルのレイヤリング方法について",
      description:
        "キックとスネアのサンプルをレイヤリングする効果的な方法を探しています。フェーズの問題を避けるコツはありますか？",
      votes: 15,
      answers: 7,
      views: 132,
      tags: ["ドラム", "サンプリング", "レイヤリング", "フェーズ"],
      user: {
        name: "drum_geek",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      createdAt: "2日前",
    },
    {
      id: 5,
      title: "FLStudioでのサイドチェインコンプレッションのやり方",
      description:
        "FLStudioでキックとベースにサイドチェインコンプレッションをかける最適な方法を教えてください。",
      votes: 29,
      answers: 11,
      views: 245,
      tags: ["FLStudio", "サイドチェイン", "コンプレッション", "DAW"],
      user: {
        name: "fl_producer",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      createdAt: "3日前",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-6 flex gap-6">
        <Sidebar className="hidden md:block w-64 flex-shrink-0" />
        <main className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl sm:text-2xl font-bold text-slate-800">
              最新の質問
            </h1>
            <Link href="/ask">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                質問する
              </Button>
            </Link>
          </div>

          <div className="space-y-4">
            {questions.map((question) => (
              <Card key={question.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col sm:flex-row">
                    <div className="p-3 sm:p-4 flex flex-row sm:flex-col items-center justify-start gap-4 sm:gap-2 bg-slate-100 text-slate-600 sm:w-20 border-b sm:border-b-0">
                      <div className="flex flex-col items-center">
                        <Button variant="ghost" size="sm" className="px-2">
                          <ThumbsUp className="h-5 w-5" />
                        </Button>
                        <span className="font-medium">{question.votes}</span>
                      </div>
                      <div className="flex flex-col items-center text-sm">
                        <MessageSquare className="h-4 w-4" />
                        <span>{question.answers}</span>
                      </div>
                      <div className="flex flex-col items-center text-sm">
                        <Eye className="h-4 w-4" />
                        <span>{question.views}</span>
                      </div>
                    </div>
                    <div className="p-4 flex-1">
                      <Link
                        href={`/questions/${question.id}`}
                        className="block"
                      >
                        <h2 className="text-lg font-semibold text-blue-700 hover:text-blue-800 mb-2">
                          {question.title}
                        </h2>
                        <p className="text-slate-600 text-sm mb-3 line-clamp-2">
                          {question.description}
                        </p>
                      </Link>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {question.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="bg-blue-100 text-blue-800 hover:bg-blue-200"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex justify-between items-center text-sm text-slate-500">
                        <div className="flex items-center gap-2">
                          <img
                            src={question.user.avatar || "/placeholder.svg"}
                            alt={question.user.name}
                            className="h-6 w-6 rounded-full"
                          />
                          <span>{question.user.name}</span>
                        </div>
                        <span>{question.createdAt}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
