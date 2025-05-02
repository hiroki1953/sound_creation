"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, CheckCircle } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("メールアドレスを入力してください");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("有効なメールアドレスを入力してください");
      return;
    }

    // ここでパスワードリセットのリクエストを送信
    console.log("パスワードリセット:", email);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-8 flex justify-center">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
            {!isSubmitted ? (
              <>
                <div className="text-center mb-6">
                  <h1 className="text-2xl font-bold text-slate-800">
                    パスワードをリセット
                  </h1>
                  <p className="text-slate-500 mt-2">
                    アカウントに関連付けられたメールアドレスを入力してください
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">メールアドレス</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError("");
                      }}
                      className={error ? "border-red-500" : ""}
                    />
                    {error && (
                      <p className="text-red-500 text-sm mt-1">{error}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 mt-6 text-white"
                  >
                    リセットリンクを送信
                  </Button>
                </form>

                <div className="text-center mt-6">
                  <Link
                    href="/login"
                    className="text-blue-600 hover:underline inline-flex items-center"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    ログインに戻る
                  </Link>
                </div>
              </>
            ) : (
              <div className="text-center py-6">
                <div className="flex justify-center mb-4">
                  <CheckCircle className="h-16 w-16 text-green-500" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">
                  メールを確認してください
                </h2>
                <p className="text-slate-600 mb-6">
                  {email} にパスワードリセットのリンクを送信しました。
                  メールが届かない場合は、迷惑メールフォルダを確認してください。
                </p>
                <Button
                  variant="outline"
                  className="mr-2"
                  onClick={() => setIsSubmitted(false)}
                >
                  別のメールアドレスを試す
                </Button>
                <Link href="/login">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    ログインに戻る
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
