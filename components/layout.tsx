import Link from 'next/link'
import { Home, Clock, User } from 'lucide-react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F8FF]">
      {children}
      <nav className="mt-auto fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="max-w-7xl mx-auto flex justify-between px-4 py-2">
          <Link href="/dashboard" className="flex flex-col items-center p-2 text-primary">
            <Home className="w-6 h-6" />
            <span className="text-xs">Home</span>
          </Link>
          <Link href="/history" className="flex flex-col items-center p-2 text-gray-600">
            <Clock className="w-6 h-6" />
            <span className="text-xs">My History</span>
          </Link>
          <Link href="/profile" className="flex flex-col items-center p-2 text-gray-600">
            <User className="w-6 h-6" />
            <span className="text-xs">My Profile</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}