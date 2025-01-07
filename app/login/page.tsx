'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { User, Lock } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [username, setUsername] = useState('')
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
        body: JSON.stringify({ username, password }),
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
              <p className="text-sm font-medium">County Revenue System</p>
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
          <h1 className="text-2xl font-bold mb-2 text-gray-900">WELCOME</h1>
          <p className="text-gray-700 mb-8 font-medium">Enter your correct credentials to continue.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="username" className="block text-gray-900 font-medium">
                Enter your ID No./User name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-500" />
                </div>
                <Input 
                  id="username"
                  type="text"
                  placeholder="22673632"
                  className="pl-10 h-12 text-gray-900 font-medium border-gray-300"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-gray-900 font-medium">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-500" />
                </div>
                <Input 
                  id="password"
                  type="password"
                  className="pl-10 h-12 text-gray-900 font-medium border-gray-300"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            {error && <p className="text-red-500 font-medium">{error}</p>}

            <p className="text-gray-700 font-medium">
              By using our services, you agree to the collection and processing of your
              data for the purpose of enhancing user experience, in accordance with our
              privacy policy and applicable regulations.
            </p>

            <Button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-lg font-semibold h-[52px]"
            >
              LOGIN
            </Button>
          </form>

          <div className="mt-8 text-center space-y-6">
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