import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUp, ArrowDown, Eye, Clock, Award } from "lucide-react";
import { Sidebar } from "@/components/sidebar";
import { AudioPlayer } from "@/components/audio-player";

interface QuestionPageProps {
  params: {
    id: string;
  };
}

export default function QuestionPage({ params }: QuestionPageProps) {
  // サンプルの質問データ
  const question = {
    id: Number.parseInt(params.id),
    title: "シンセサイザーでウォブル・ベースを作る最適な方法は？",
    description: `EDMトラックでよく使われるウォブル・ベースを作りたいのですが、どのようなシンセ設定が最適ですか？

特に以下の点について知りたいです：
- 波形の選択（ノコギリ波？矩形波？）
- フィルターの設定
- LFOの使い方
- エフェクトチェーン

実際に作った音のサンプルも添付しています。これをさらに良くするアドバイスをいただけると嬉しいです。`,
    votes: 24,
    answers: 2,
    views: 142,
    tags: ["シンセサイザー", "ベース", "EDM", "サウンドデザイン"],
    user: {
      name: "bass_master",
      avatar: "/placeholder.svg?height=48&width=48",
      reputation: 1250,
    },
    createdAt: "2時間前",
    audioSample: "/sample-audio.mp3",
    comments: [
      {
        id: 1,
        text: "Serumを使っていますか？それとも別のシンセですか？",
        user: {
          name: "synth_expert",
          avatar: "/placeholder.svg?height=32&width=32",
        },
        createdAt: "1時間前",
      },
    ],
    answers: [
      {
        id: 1,
        text: `ウォブル・ベースを作るには、以下の手順がおすすめです：

1. **波形選択**: ノコギリ波をベースにすると倍音が豊かで良いスタート地点になります。
2. **フィルター**: ローパスフィルターを使い、カットオフ周波数をLFOでモジュレーションします。
3. **LFO設定**: LFOのレートをテンポに同期させ、1/4や1/8のノート値に設定します。
4. **エフェクト**: 軽いディストーション → EQ（低域を強調） → コンプレッサー の順で処理すると良いでしょう。

添付された音源を聴いた感じでは、フィルターのレゾナンスをもう少し上げると「うねり」が強調されると思います。また、ステレオ幅を広げるためにコーラスやディメンションエキスパンダーを試してみてはいかがでしょうか。`,
        votes: 15,
        user: {
          name: "edm_producer",
          avatar: "/placeholder.svg?height=48&width=48",
          reputation: 3420,
        },
        createdAt: "1時間前",
        accepted: true,
      },
      {
        id: 2,
        text: `私のアプローチを共有します：

Serumを使う場合は、ウェーブテーブルモジュレーションを活用すると面白い結果が得られます。基本的なウォブルに加えて：

- マルチバンドコンプレッサーで低域と高域を別々に処理
- OTTコンプレッサーを軽く適用（30%程度のウェット値）
- サイドチェインでキックとの干渉を防ぐ

また、単一のLFOだけでなく、複数のLFOを異なるパラメータにアサインすると、より有機的な動きが生まれます。例えば：
- LFO1: フィルターカットオフ（メインのウォブル）
- LFO2: 波形のポジション（ゆっくりと変化）
- LFO3: FMレベル（サブトルな変調）

試してみてください！`,
        votes: 8,
        user: {
          name: "wobble_king",
          avatar: "/placeholder.svg?height=48&width=48",
          reputation: 2150,
        },
        createdAt: "30分前",
        accepted: false,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-6 flex gap-6">
        <Sidebar className="hidden md:block w-64 flex-shrink-0" />
        <main className="flex-1">
          <div className="mb-6">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
              <h1 className="text-xl sm:text-2xl font-bold text-slate-800">
                {question.title}
              </h1>
              <Link href="/ask">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  質問する
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>質問日時: {question.createdAt}</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                <span>閲覧数: {question.views}</span>
              </div>
            </div>

            <Card className="mb-6">
              <CardContent className="p-0">
                <div className="flex flex-col sm:flex-row">
                  <div className="p-3 sm:p-4 flex flex-row sm:flex-col items-center justify-start gap-4 sm:gap-2 bg-slate-100 text-slate-600 sm:w-20 border-b sm:border-b-0">
                    <Button variant="ghost" size="sm" className="px-2">
                      <ArrowUp className="h-5 w-5" />
                    </Button>
                    <span className="font-medium">{question.votes}</span>
                    <Button variant="ghost" size="sm" className="px-2">
                      <ArrowDown className="h-5 w-5" />
                    </Button>
                  </div>
                  <div className="p-4 sm:p-6 flex-1">
                    <div className="prose max-w-none mb-6">
                      <p className="whitespace-pre-line">
                        {question.description}
                      </p>
                    </div>

                    {question.audioSample && (
                      <div className="mb-6">
                        <h3 className="text-sm font-medium mb-2">添付音源:</h3>
                        <AudioPlayer src={question.audioSample} />
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mb-4">
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

                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 text-sm">
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-slate-600"
                        >
                          シェア
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-slate-600"
                        >
                          フォロー
                        </Button>
                      </div>
                      <div className="flex items-center gap-2 bg-blue-50 p-2 rounded-md">
                        <span className="text-slate-600">質問者:</span>
                        <img
                          src={question.user.avatar || "/placeholder.svg"}
                          alt={question.user.name}
                          className="h-8 w-8 rounded-full"
                        />
                        <div>
                          <div className="font-medium text-blue-700">
                            {question.user.name}
                          </div>
                          <div className="flex items-center text-xs text-slate-500">
                            <Award className="h-3 w-3 mr-1" />
                            <span>{question.user.reputation}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-slate-50 border-t px-4 sm:px-6 py-3">
                <div className="w-full">
                  <h3 className="text-sm font-medium mb-2">コメント:</h3>
                  <div className="space-y-2 mb-3">
                    {question.comments.map((comment) => (
                      <div
                        key={comment.id}
                        className="flex items-start gap-2 text-sm"
                      >
                        <img
                          src={comment.user.avatar || "/placeholder.svg"}
                          alt={comment.user.name}
                          className="h-6 w-6 rounded-full mt-0.5"
                        />
                        <div className="flex-1">
                          <span className="font-medium text-blue-700">
                            {comment.user.name}:
                          </span>{" "}
                          <span className="text-slate-700">{comment.text}</span>
                        </div>
                        <span className="text-xs text-slate-500">
                          {comment.createdAt}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                    <Textarea
                      placeholder="コメントを追加..."
                      className="text-sm flex-1"
                      rows={1}
                    />
                    <Button
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700 shrink-0 text-white"
                    >
                      追加
                    </Button>
                  </div>
                </div>
              </CardFooter>
            </Card>

            <div className="mb-6">
              <h2 className="text-xl font-bold text-slate-800 mb-4">
                {question.answers.length}件の回答
              </h2>
              <div className="space-y-6">
                {question.answers.map((answer) => (
                  <Card key={answer.id}>
                    <CardContent className="p-0">
                      <div className="flex flex-col sm:flex-row">
                        <div className="p-3 sm:p-4 flex flex-row sm:flex-col items-center justify-start gap-4 sm:gap-2 bg-slate-100 text-slate-600 sm:w-20 border-b sm:border-b-0">
                          <Button variant="ghost" size="sm" className="px-2">
                            <ArrowUp className="h-5 w-5" />
                          </Button>
                          <span className="font-medium">{answer.votes}</span>
                          <Button variant="ghost" size="sm" className="px-2">
                            <ArrowDown className="h-5 w-5" />
                          </Button>
                          {answer.accepted && (
                            <div className="mt-2 text-green-600">
                              <Award className="h-6 w-6" />
                              <span className="text-xs">ベスト回答</span>
                            </div>
                          )}
                        </div>
                        <div className="p-4 sm:p-6 flex-1">
                          <div className="prose max-w-none mb-6">
                            <p className="whitespace-pre-line">{answer.text}</p>
                          </div>

                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 text-sm">
                            <div className="flex gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-slate-600"
                              >
                                シェア
                              </Button>
                              {!answer.accepted && (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="text-green-600 border-green-600 hover:bg-green-50"
                                >
                                  ベスト回答にする
                                </Button>
                              )}
                            </div>
                            <div className="flex items-center gap-2 bg-blue-50 p-2 rounded-md">
                              <span className="text-slate-600">回答者:</span>
                              <img
                                src={answer.user.avatar || "/placeholder.svg"}
                                alt={answer.user.name}
                                className="h-8 w-8 rounded-full"
                              />
                              <div>
                                <div className="font-medium text-blue-700">
                                  {answer.user.name}
                                </div>
                                <div className="flex items-center text-xs text-slate-500">
                                  <Award className="h-3 w-3 mr-1" />
                                  <span>{answer.user.reputation}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-slate-800 mb-4">
                  回答を投稿
                </h2>
                <Textarea
                  placeholder="あなたの回答を入力..."
                  className="min-h-[200px] mb-4"
                />
                <div className="flex items-center gap-4">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    回答を投稿
                  </Button>
                  <Button variant="outline" className="text-slate-600">
                    音声ファイルを添付
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
