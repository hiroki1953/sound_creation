import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Home, Tag, Users, Headphones, Music, Mic2, Settings, HelpCircle } from "lucide-react"

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const categories = [
    { name: "ホーム", icon: Home, active: true },
    { name: "タグ", icon: Tag },
    { name: "ユーザー", icon: Users },
    { name: "人気のトピック", header: true },
    { name: "シンセサイザー", icon: Music },
    { name: "ミキシング", icon: Settings },
    { name: "マスタリング", icon: Headphones },
    { name: "ボーカル", icon: Mic2 },
    { name: "その他", header: true },
    { name: "ヘルプ", icon: HelpCircle },
  ]

  return (
    <aside className={cn("py-4", className)}>
      <nav className="space-y-1">
        {categories.map((item, index) => {
          if (item.header) {
            return (
              <div key={index} className="pt-4 pb-2">
                <h3 className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">{item.name}</h3>
              </div>
            )
          }

          const Icon = item.icon

          return (
            <Button
              key={index}
              variant="ghost"
              className={cn(
                "w-full justify-start px-3 py-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50",
                item.active && "bg-blue-50 text-blue-600 font-medium",
              )}
            >
              {Icon && <Icon className="mr-2 h-4 w-4" />}
              {item.name}
            </Button>
          )
        })}
      </nav>
    </aside>
  )
}
