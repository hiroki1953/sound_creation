export type Question = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  votes: number;
  answers: number;
  createdAt: string;
  user: { name: string; avatar: string };
};

export const questions: Question[] = [
  {
    id: 1,
    title: "Serum で Porter Robinson っぽいキラキラリードを作るには？",
    body: "エンベロープやフィルタの設定をいじっても近づきません…",
    tags: ["Serum", "シンセ音作り"],
    votes: 8,
    answers: 3,
    createdAt: "2025-04-26T15:00:00Z",
    user: {
      name: "Aya",
      avatar: "https://www.gravatar.com/avatar/000?d=identicon",
    },
  },
  /* …もっと追加してOK… */
];
