import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Hero Section with Background and Logos */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src="/placeholder.svg?height=400&width=800"
          alt="Kericho Landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-between px-8">
          <div className="relative h-20 w-20">
            <Image
              src="/placeholder.svg?height=80&width=80"
              alt="County Logo Left"
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-2">KERICHO</h1>
              <p className="text-xl">County Revenue System</p>
            </div>
          </div>
          <div className="relative h-20 w-20">
            <Image
              src="/placeholder.svg?height=80&width=80"
              alt="County Logo Right"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 px-6 py-12">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Welcome to Kericho County Revenue System</h2>
          <p className="mb-8">Manage your county services, payments, and more.</p>
          <div className="space-y-4">
            <Link href="/login" passHref>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg font-semibold py-6">
                Login
              </Button>
            </Link>
            <Link href="/signup" passHref>
              <Button variant="outline" className="w-full text-lg font-semibold py-6">
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-4 text-center">
        <p className="text-sm text-gray-600">© 2023 Kericho County. All rights reserved.</p>
      </footer>
    </div>
  )
}

