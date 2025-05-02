"use client";

import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "@/components/sidebar";

export function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="border-b bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">メニュー</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 pt-16 w-72">
              <Sidebar className="w-full" />
            </SheetContent>
          </Sheet>

          <Link href="/" className="text-2xl font-bold text-blue-600">
            OTOZUKURI
          </Link>
          <div className="relative hidden md:block w-96">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
            <Input
              type="search"
              placeholder="検索..."
              className="w-full pl-9 bg-slate-50 border-slate-200"
            />
          </div>
        </div>

        <nav className="flex items-center gap-2 sm:gap-4">
          {isSearchOpen ? (
            <div className="absolute inset-0 z-50 flex items-center px-4 bg-white md:hidden">
              <Input
                type="search"
                placeholder="検索..."
                className="flex-1 bg-slate-50 border-slate-200"
              />
              <Button
                variant="ghost"
                size="icon"
                className="ml-2"
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </Button>
          )}

          <Link
            href="/about"
            className="hidden sm:block text-slate-600 hover:text-blue-600"
          >
            About
          </Link>
          <Link href="/login">
            <Button
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 text-sm sm:text-base"
            >
              ログイン
            </Button>
          </Link>
          <Link href="/register">
            <Button className="bg-blue-600 hover:bg-blue-700 text-sm sm:text-base text-white">
              登録
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
