'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage('')

    // Here you would typically call an API to send the OTP
    // For this example, we'll just simulate the process
    try {
      // Simulating an API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      setMessage('OTP sent to your email. Please check your inbox.')
    } catch {
      setMessage('An error occurred. Please try again.')
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


      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 z-10">
        <div className="w-full max-w-md backdrop-blur-md bg-white/20 p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold text-white mb-6 text-center">
            Forgot Password
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-white">
                Enter your email address
              </label>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="pl-10 h-12 bg-white/70 border-0 text-gray-900 placeholder-gray-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
              </div>
            </div>

            {message && (
              <p className="text-sm font-medium bg-white/80 p-2 rounded text-center">
                {message}
              </p>
            )}

            <div className="space-y-4">
              <Button
                type="submit"
                className="w-full h-12 text-white font-medium text-lg bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 transition-all duration-200"
              >
                Get OTP
              </Button>

              <button
                type="button"
                className="w-full text-center text-white hover:text-gray-200 text-sm"
                onClick={() => router.push('/')}
              >
                Back to Login
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}