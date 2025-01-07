import { Headphones } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-white">
      <h1 className="text-xl font-semibold">Home</h1>
      <Button variant="outline" className="flex items-center gap-2">
        <Headphones className="w-5 h-5" />
        Contact Support
      </Button>
    </header>
  )
}

