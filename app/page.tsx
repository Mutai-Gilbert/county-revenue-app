'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { User, Lock } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function HomePage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (data.success) {
        router.push('/home')
      } else {
        setError('Invalid credentials')
      }
    } catch {
      setError('An error occurred. Please try again.')
    }
  }

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Full-screen background image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/county-revenue-app/kericho-landscape.jpeg"
          alt="Kericho Landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Logo */}
      {/* <div className="absolute top-8 left-1/2 -translate-x-1/2 w-28 h-36 bg-black flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute w-px h-full bg-green-500"></div>
          <div className="absolute w-full h-px bg-green-500"></div>
        </div>
      </div> */}

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 z-10">
        <div className="w-full max-w-md backdrop-blur-md bg-white/20 p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold text-white mb-6 text-center">
            Kericho Revenue Collection System
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Email"
                  className="pl-10 h-12 bg-white/70 border-0 text-gray-900 placeholder-gray-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
              </div>

              <div className="relative">
                <Input
                  type="password"
                  placeholder="Password"
                  className="pl-10 h-12 bg-white/70 border-0 text-gray-900 placeholder-gray-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
              </div>
            </div>

            <div className="flex items-center">
              <Checkbox id="remember" className="border-white" />
              <label htmlFor="remember" className="ml-2 text-sm text-white">
                Remember Me
              </label>
            </div>

            {error && (
              <p className="text-red-500 text-sm font-medium bg-white/80 p-2 rounded">
                {error}
              </p>
            )}

            <div className="space-y-4">
              <Button
                type="submit"
                className="w-full h-12 text-white font-medium text-lg bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 transition-all duration-200"
              >
                Login
              </Button>

              <button
                type="button"
                className="w-full text-center text-white hover:text-gray-200 text-sm"
                onClick={() => router.push('/forgot-password')}
              >
                Forgot Password ? Get OTP
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

