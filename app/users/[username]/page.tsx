"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sidebar } from "@/components/sidebar";
import { UserStats } from "@/components/user-stats";
import { UserBadges } from "@/components/user-badges";
import {
  Calendar,
  MapPin,
  LinkIcon,
  MessageSquare,
  Award,
  ArrowUp,
  Eye,
} from "lucide-react";

interface UserPageProps {
  params: {
    username: string;
  };
}

export default function UserPage({ params }: UserPageProps) {
  const { username } = params;
  const [isFollowing, setIsFollowing] = useState(false);

  // サンプルユーザーデータ
  const user = {
    username,
    displayName: "音楽プロデューサー",
    avatar: "/placeholder.svg?height=128&width=128",
    coverImage: "/placeholder.svg?height=300&width=1200",
    bio: "音楽プロデューサー・サウンドデザイナー。EDMとアンビエント音楽を中心に活動しています。シンセサイザーとサウンドデザインが専門です。",
    location: "東京, 日本",
    website: "https://example.com",
    joinedDate: "2022年5月",
    reputation: 3240,
    stats: {
      questions: 24,
      answers: 156,
      bestAnswers: 42,
      upvotes: 1872,
      views: 45600,
    },
    badges: [
      { name: "音響マスター", type: "gold", count: 2 },
      { name: "シンセの達人", type: "gold", count: 1 },
      { name: "熱心な回答者", type: "silver", count: 5 },
      { name: "良質な質問", type: "silver", count: 3 },
      { name: "初めての質問", type: "bronze", count: 1 },
      { name: "初めての回答", type: "bronze", count: 1 },
    ],
  };

  // サンプルの質問データ
  const questions = [
    {
      id: 1,
      title: "シンセサイザーでウォブル・ベースを作る最適な方法は？",
      votes: 24,
      answers: 8,
      views: 142,
      tags: ["シンセサイザー", "ベース", "EDM", "サウンドデザイン"],
      createdAt: "2週間前",
    },
    {
      id: 2,
      title: "Abletonでのサイドチェインコンプレッションのやり方",
      votes: 18,
      answers: 5,
      views: 98,
      tags: ["Ableton", "サイドチェイン", "コンプレッション", "DAW"],
      createdAt: "1ヶ月前",
    },
    {
      id: 3,
      title: "アナログシンセとデジタルシンセの音質の違いについて",
      votes: 32,
      answers: 15,
      views: 278,
      tags: ["アナログシンセ", "デジタルシンセ", "音質", "機材選び"],
      createdAt: "2ヶ月前",
    },
  ];

  // サンプルの回答データ
  const answers = [
    {
      id: 1,
      questionTitle: "ボーカルのリバーブ設定について質問です",
      votes: 42,
      accepted: true,
      createdAt: "1週間前",
    },
    {
      id: 2,
      questionTitle: "FLStudioでのサイドチェインコンプレッションのやり方",
      votes: 29,
      accepted: true,
      createdAt: "3週間前",
    },
    {
      id: 3,
      questionTitle: "ドラムサンプルのレイヤリング方法について",
      votes: 15,
      accepted: false,
      createdAt: "1ヶ月前",
    },
    {
      id: 4,
      questionTitle: "マスタリングでのリミッターの使い方",
      votes: 23,
      accepted: true,
      createdAt: "2ヶ月前",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-6 flex gap-6">
        <Sidebar className="hidden md:block w-64 flex-shrink-0" />
        <main className="flex-1">
          {/* カバー画像 */}
          <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64 rounded-lg overflow-hidden mb-6">
            <img
              src={user.coverImage || "/placeholder.svg"}
              alt="カバー画像"
              className="w-full h-full object-cover"
            />
          </div>

          {/* ユーザープロフィール */}
          <div className="relative -mt-20 mb-6 px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4">
              <div className="relative">
                <img
                  src={user.avatar || "/placeholder.svg"}
                  alt={user.displayName}
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white bg-white object-cover"
                />
                <div className="absolute bottom-0 right-0 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                  Pro
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-2">
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">
                      {user.displayName}
                    </h1>
                    <p className="text-slate-500">@{user.username}</p>
                  </div>
                  <div className="flex gap-2 mt-2 sm:mt-0 sm:ml-auto">
                    <Button
                      variant={isFollowing ? "outline" : "default"}
                      className={
                        isFollowing
                          ? "border-blue-600 text-blue-600"
                          : "bg-blue-600 hover:bg-blue-700"
                      }
                      onClick={() => setIsFollowing(!isFollowing)}
                    >
                      {isFollowing ? "フォロー中" : "フォローする"}
                    </Button>
                    <Button variant="outline" className="border-slate-300">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      メッセージ
                    </Button>
                  </div>
                </div>
                <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm text-slate-600 mt-2">
                  {user.location && (
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {user.location}
                    </div>
                  )}
                  {user.website && (
                    <div className="flex items-center">
                      <LinkIcon className="h-4 w-4 mr-1" />
                      <a
                        href={user.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {user.website.replace(/^https?:\/\//, "")}
                      </a>
                    </div>
                  )}
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {user.joinedDate}に登録
                  </div>
                  <div className="flex items-center">
                    <Award className="h-4 w-4 mr-1" />
                    {user.reputation.toLocaleString()} レピュテーション
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ユーザーの自己紹介 */}
          {user.bio && (
            <div className="mb-6">
              <Card>
                <CardContent className="p-4 sm:p-6">
                  <p className="text-slate-700">{user.bio}</p>
                </CardContent>
              </Card>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* サイドバー（統計とバッジ） */}
            <div className="lg:col-span-1 space-y-6">
              <UserStats stats={user.stats} />
              <UserBadges badges={user.badges} />
            </div>

            {/* メインコンテンツ（質問と回答） */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="questions" className="w-full">
                <TabsList className="mb-4">
                  <TabsTrigger value="questions">
                    質問 ({questions.length})
                  </TabsTrigger>
                  <TabsTrigger value="answers">
                    回答 ({answers.length})
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="questions" className="space-y-4">
                  {questions.map((question) => (
                    <Card key={question.id}>
                      <CardContent className="p-0">
                        <div className="flex flex-col sm:flex-row">
                          <div className="p-3 sm:p-4 flex flex-row sm:flex-col items-center justify-start gap-4 sm:gap-2 bg-slate-100 text-slate-600 sm:w-20 border-b sm:border-b-0">
                            <div className="flex flex-col items-center">
                              <ArrowUp className="h-4 w-4" />
                              <span className="font-medium">
                                {question.votes}
                              </span>
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
                            <div className="text-sm text-slate-500">
                              <span>{question.createdAt}に質問</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  {questions.length === 0 && (
                    <div className="text-center py-8">
                      <p className="text-slate-500">まだ質問がありません</p>
                    </div>
                  )}
                </TabsContent>
                <TabsContent value="answers" className="space-y-4">
                  {answers.map((answer) => (
                    <Card key={answer.id}>
                      <CardContent className="p-4">
                        <div className="flex items-start gap-4">
                          <div className="flex flex-col items-center text-slate-600 min-w-[60px]">
                            <ArrowUp className="h-4 w-4" />
                            <span className="font-medium">{answer.votes}</span>
                            {answer.accepted && (
                              <div className="mt-1 text-green-600">
                                <Award className="h-5 w-5" />
                              </div>
                            )}
                          </div>
                          <div className="flex-1">
                            <Link
                              href={`/questions/${answer.id}`}
                              className="block"
                            >
                              <h2 className="text-lg font-semibold text-blue-700 hover:text-blue-800 mb-2">
                                {answer.questionTitle}
                              </h2>
                            </Link>
                            <div className="text-sm text-slate-500">
                              <span>{answer.createdAt}に回答</span>
                              {answer.accepted && (
                                <span className="ml-2 text-green-600 font-medium">
                                  ベスト回答
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  {answers.length === 0 && (
                    <div className="text-center py-8">
                      <p className="text-slate-500">まだ回答がありません</p>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
