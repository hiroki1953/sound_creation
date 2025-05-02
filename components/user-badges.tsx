import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Badge {
  name: string
  type: "gold" | "silver" | "bronze"
  count: number
}

interface UserBadgesProps {
  badges: Badge[]
}

export function UserBadges({ badges }: UserBadgesProps) {
  // バッジをタイプ別にグループ化
  const goldBadges = badges.filter((badge) => badge.type === "gold")
  const silverBadges = badges.filter((badge) => badge.type === "silver")
  const bronzeBadges = badges.filter((badge) => badge.type === "bronze")

  // バッジの色を取得する関数
  const getBadgeColor = (type: string) => {
    switch (type) {
      case "gold":
        return "bg-amber-500"
      case "silver":
        return "bg-slate-300"
      case "bronze":
        return "bg-amber-700"
      default:
        return "bg-slate-500"
    }
  }

  // バッジのグループを表示する関数
  const renderBadgeGroup = (badgeGroup: Badge[], type: string) => {
    if (badgeGroup.length === 0) return null

    return (
      <div className="mb-4 last:mb-0">
        <div className="flex items-center gap-2 mb-2">
          <div className={`w-3 h-3 rounded-full ${getBadgeColor(type)}`}></div>
          <h3 className="font-medium text-slate-700 capitalize">{type}</h3>
        </div>
        <div className="space-y-2">
          {badgeGroup.map((badge, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="text-sm text-slate-600">{badge.name}</span>
              <span className="text-xs font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full">
                ×{badge.count}
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">バッジ</CardTitle>
      </CardHeader>
      <CardContent>
        {renderBadgeGroup(goldBadges, "gold")}
        {renderBadgeGroup(silverBadges, "silver")}
        {renderBadgeGroup(bronzeBadges, "bronze")}

        {badges.length === 0 && (
          <div className="text-center py-4">
            <p className="text-slate-500 text-sm">まだバッジがありません</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
