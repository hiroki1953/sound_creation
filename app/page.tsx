import { QuestionCard } from "./components/QuestionCard";
import { questions } from "./lib/mock";

export default function Home() {
  return (
    <section className="space-y-4">
      {questions.map((q) => (
        <QuestionCard key={q.id} q={q} />
      ))}
    </section>
  );
}
