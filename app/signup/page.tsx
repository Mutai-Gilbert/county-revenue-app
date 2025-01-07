'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { User, Lock, Mail } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function SignupPage() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      })

      const data = await response.json()

      if (data.success) {
        router.push('/login?message=Account created successfully. Please log in.')
      } else {
        setError(data.message || 'An error occurred during signup')
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
          <h1 className="text-2xl font-bold mb-2 text-gray-900">Create an Account</h1>
          <p className="text-gray-700 mb-8 font-medium">Sign up to access the Kericho County Revenue System.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="username" className="block text-gray-900 font-medium">
                ID No./User name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-500" />
                </div>
                <Input 
                  id="username"
                  type="text"
                  placeholder="Enter your ID number"
                  className="pl-10 h-12 text-gray-900 font-medium border-gray-300"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-gray-900 font-medium">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-500" />
                </div>
                <Input 
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10 h-12 text-gray-900 font-medium border-gray-300"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  placeholder="Create a password"
                  className="pl-10 h-12 text-gray-900 font-medium border-gray-300"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            {error && <p className="text-red-500 font-medium">{error}</p>}

            <p className="text-gray-700 font-medium">
              By signing up, you agree to the collection and processing of your
              data for the purpose of enhancing user experience, in accordance with our
              privacy policy and applicable regulations.
            </p>

            <Button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-lg font-semibold h-[52px]"
            >
              SIGN UP
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-900 font-medium">
              Already have an account?{' '}
              <Link href="/login" className="text-blue-600 hover:underline">
                Log in
              </Link>
            </p>
          </div>

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

