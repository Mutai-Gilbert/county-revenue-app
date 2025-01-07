import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="relative h-48 w-full overflow-hidden rounded-b-3xl">
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
              <h1 className="text-2xl font-bold mb-1">KERICHO</h1>
              <p className="text-sm">County Revenue System</p>
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

      <main className="flex-1 px-6 pt-8">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-2 text-center text-gray-900">Welcome to Kericho County</h1>
          <p className="text-gray-700 mb-8 text-center font-medium">Access the County Revenue System</p>

          <div className="space-y-4">
            <Button 
              asChild
              className="w-full bg-blue-600 hover:bg-blue-700 text-lg font-semibold h-[52px]"
            >
              <Link href="/login">
                LOGIN
              </Link>
            </Button>

            <Button 
              asChild
              variant="outline"
              className="w-full text-lg font-semibold h-[52px] bg-black text-blue-600 hover:bg-black/90 border-0"
            >
              <Link href="/signup">
                SIGN UP
              </Link>
            </Button>
          </div>

          <div className="mt-12 text-center space-y-6">
            <p className="text-gray-900 font-medium">IMEI NOT AVAILABLE</p>
            <div className="space-y-2">
              <p className="text-gray-900 font-medium">Version: 174</p>
              <div className="relative h-16 w-16 mx-auto">
                <Image
                  src="/placeholder.svg?height=64&width=64"
                  alt="County Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

