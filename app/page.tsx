import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Full-screen background image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
                src="/county-revenue-app/assets/kericho-landscape.jpg"
                alt="Kericho Landscape"
                fill
                className="object-contain"
        />
      </div>

      {/* Content overlay */}
      <div className="relative flex flex-col min-h-screen">
        {/* Hero Section with Logos */}
        <div className="w-full pt-8">
          <div className="flex items-center justify-between px-8">
            <div className="relative h-24 w-24 bg-white rounded-lg p-2">
              <Image
                src="/assets/county-logo.jpg"
                alt="County Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-2 drop-shadow-lg">KERICHO</h1>
              <p className="text-2xl drop-shadow-lg">County Revenue System</p>
            </div>
            <div className="relative h-24 w-24 bg-white rounded-lg p-2">
              <Image
                src="/assets/county-logo.jpg"
                alt="County Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-6">
          <div className="max-w-md w-full bg-white/95 backdrop-blur-sm rounded-2xl p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Welcome to Kericho County Revenue System</h2>
              <p className="mb-8 text-gray-600">Manage your county services, payments, and more.</p>
              <div className="space-y-4">
                <Link href="/login" className="block">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg font-semibold py-6">
                    Login
                  </Button>
                </Link>
                <Link href="/signup" className="block">
                  <Button variant="outline" className="w-full text-lg font-semibold py-6 bg-white">
                    Create Account
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-4 text-center text-white">
          <p className="text-sm">© 2023 Kericho County. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

