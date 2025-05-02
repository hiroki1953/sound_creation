import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HelpCircle, MessageSquare, Award, ThumbsUp, Eye } from "lucide-react"

interface UserStatsProps {
  stats: {
    questions: number
    answers: number
    bestAnswers: number
    upvotes: number
    views: number
  }
}

export function UserStats({ stats }: UserStatsProps) {
  const statItems = [
    { label: "質問", value: stats.questions, icon: HelpCircle },
    { label: "回答", value: stats.answers, icon: MessageSquare },
    { label: "ベスト回答", value: stats.bestAnswers, icon: Award },
    { label: "獲得投票", value: stats.upvotes, icon: ThumbsUp },
    { label: "閲覧数", value: stats.views, icon: Eye },
  ]

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">統計</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {statItems.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="flex flex-col items-center p-2 rounded-md bg-slate-50">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 mb-1">
                  <Icon className="h-4 w-4" />
                </div>
                <span className="font-bold text-lg">{item.value.toLocaleString()}</span>
                <span className="text-xs text-slate-500">{item.label}</span>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
