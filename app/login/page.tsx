'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { User, Lock } from 'lucide-react'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // This is a mock login. In a real app, you'd validate credentials against a backend.
    if (username && password) {
      // Store login state in localStorage
      localStorage.setItem('isLoggedIn', 'true')
      router.push('/dashboard')
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-white max-w-7xl mx-auto">
      {/* Hero Section with Background and Logos */}
      <div className="relative h-48 sm:h-64 md:h-80 w-full overflow-hidden rounded-b-3xl">
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

      {/* Login Form */}
      <main className="flex-1 px-4 sm:px-6 pt-8">
        <div className="max-w-md mx-auto w-full">
          <h1 className="text-2xl font-bold mb-2">WELCOME</h1>
          <p className="text-gray-600 mb-8">Enter your correct credentials to continue.</p>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-gray-700">
                Enter your ID No./User name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <Input 
                  type="text"
                  placeholder="22673632"
                  className="w-full pl-10"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-gray-700">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <Input 
                  type="password"
                  className="w-full pl-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <p className="text-sm text-gray-600">
              By using our services, you agree to the collection and processing of your
              data for the purpose of enhancing user experience, in accordance with our
              privacy policy and applicable regulations.
            </p>

            <Button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-lg font-semibold py-4 sm:py-6"
            >
              LOGIN
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don&apos;t have an account?{' '}
              <Link href="/signup" className="text-blue-600 hover:text-blue-700 font-semibold">
                Create one here
              </Link>
            </p>
          </div>

          <div className="mt-8 text-center space-y-6">
            <p className="text-gray-600">IMEI NOT AVAILABLE</p>
            <div className="space-y-2">
              <p className="text-gray-600">Version: 174</p>
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

