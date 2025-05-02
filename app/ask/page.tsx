"use client";

import type React from "react";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sidebar } from "@/components/sidebar";
import { AudioPlayer } from "@/components/audio-player";
import { Upload, X, Info } from "lucide-react";

export default function AskPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [audioPreview, setAudioPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag();
    }
  };

  const addTag = () => {
    const trimmedTag = tagInput.trim();
    if (trimmedTag && !tags.includes(trimmedTag) && tags.length < 5) {
      setTags([...tags, trimmedTag]);
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("audio/")) {
      setAudioFile(file);
      const url = URL.createObjectURL(file);
      setAudioPreview(url);
    }
  };

  const removeAudioFile = () => {
    setAudioFile(null);
    if (audioPreview) {
      URL.revokeObjectURL(audioPreview);
      setAudioPreview(null);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ここで質問投稿のロジックを実装
    console.log({ title, description, tags, audioFile });
    // 成功したら質問ページにリダイレクト
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-6 flex gap-6">
        <Sidebar className="hidden md:block w-64 flex-shrink-0" />
        <main className="flex-1 max-w-3xl">
          <h1 className="text-2xl font-bold text-slate-800 mb-6">
            質問を投稿する
          </h1>

          <div className="bg-blue-50 border border-blue-200 rounded-md p-3 sm:p-4 mb-6">
            <div className="flex gap-3">
              <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h2 className="font-medium text-blue-800 mb-1">質問のヒント</h2>
                <ul className="text-sm text-blue-700 list-disc pl-5 space-y-1">
                  <li>具体的な問題や疑問点を明確に説明しましょう</li>
                  <li>
                    試したことや現在の理解を共有すると、より的確な回答が得られます
                  </li>
                  <li>音源サンプルを添付すると、問題の理解が深まります</li>
                  <li>
                    適切なタグを選ぶと、専門知識を持つユーザーに届きやすくなります
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">タイトル</Label>
              <Input
                id="title"
                placeholder="例: シンセサイザーでウォブル・ベースを作る最適な方法は？"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="bg-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">詳細な説明</Label>
              <Textarea
                id="description"
                placeholder="質問の詳細、試したこと、現在の理解などを記入してください..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="min-h-[200px] bg-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">カテゴリ</Label>
              <Select>
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder="カテゴリを選択" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="synthesis">シンセサイザー</SelectItem>
                  <SelectItem value="mixing">ミキシング</SelectItem>
                  <SelectItem value="mastering">マスタリング</SelectItem>
                  <SelectItem value="vocal">ボーカル</SelectItem>
                  <SelectItem value="daw">DAW</SelectItem>
                  <SelectItem value="hardware">ハードウェア</SelectItem>
                  <SelectItem value="other">その他</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tags">タグ (最大5つ)</Label>
              <div className="flex flex-wrap gap-2 mb-2">
                {tags.map((tag) => (
                  <div
                    key={tag}
                    className="flex items-center bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-sm"
                  >
                    {tag}
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="h-4 w-4 ml-1 hover:bg-blue-200 rounded-full"
                      onClick={() => removeTag(tag)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  id="tags"
                  placeholder="タグを入力してEnterキーを押す (例: シンセサイザー)"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={handleTagKeyDown}
                  onBlur={addTag}
                  className="bg-white flex-1"
                  disabled={tags.length >= 5}
                />
                <Button
                  type="button"
                  onClick={addTag}
                  disabled={tags.length >= 5 || !tagInput.trim()}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  追加
                </Button>
              </div>
              <p className="text-xs text-slate-500">
                {5 - tags.length}つのタグを追加できます
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="audio">音声ファイル (オプション)</Label>
              <div className="border-2 border-dashed border-slate-300 rounded-md p-4 sm:p-6 text-center bg-white">
                {audioPreview ? (
                  <div className="space-y-4">
                    <AudioPlayer src={audioPreview} />
                    <div className="flex justify-center">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={removeAudioFile}
                        className="text-red-600 hover:text-red-700"
                      >
                        <X className="h-4 w-4 mr-2" />
                        削除
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Upload className="h-8 w-8 mx-auto text-slate-400" />
                    <p className="text-sm text-slate-600">
                      ここにファイルをドラッグ&ドロップするか、
                      <Button
                        type="button"
                        variant="link"
                        className="text-blue-600 hover:text-blue-700 p-0 h-auto"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        ファイルを選択
                      </Button>
                    </p>
                    <p className="text-xs text-slate-500">
                      最大ファイルサイズ: 10MB (MP3, WAV, OGG形式)
                    </p>
                    <input
                      ref={fileInputRef}
                      id="audio"
                      type="file"
                      accept="audio/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="pt-4">
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                質問を投稿
              </Button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
