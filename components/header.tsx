'use client'

import { useRouter } from 'next/navigation'
import { Headphones, LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    router.push('/')
  }

  return (
    <header className="flex flex-col sm:flex-row items-center justify-between py-4 bg-white rounded-lg shadow-sm">
      <h1 className="text-xl font-semibold mb-4 sm:mb-0">Dashboard</h1>
      <div className="flex flex-col sm:flex-row gap-2">
        <Button variant="outline" className="flex items-center gap-2 w-full sm:w-auto">
          <Headphones className="w-5 h-5" />
          Contact Support
        </Button>
        <Button variant="ghost" onClick={handleLogout} className="flex items-center gap-2 w-full sm:w-auto">
          <LogOut className="w-5 h-5" />
          Logout
        </Button>
      </div>
    </header>
  )
}