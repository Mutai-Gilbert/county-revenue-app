import { ArrowUpRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export default function InspectionCard() {
  return (
    <Card className="bg-red-500 text-white overflow-hidden">
      <CardContent className="p-6">
        <h2 className="text-sm font-medium mb-2">VALUE OF MY INSPECTION</h2>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl sm:text-4xl font-bold">KES 0</span>
        </div>
        <div className="flex items-center gap-2 mt-4 text-sm">
          <ArrowUpRight className="w-4 h-4" />
          <span>KES 0 Below Yesterday</span>
        </div>
      </CardContent>
    </Card>
  )
}