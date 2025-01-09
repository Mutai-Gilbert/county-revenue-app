'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Lock, Mail, Phone, BadgeCheck } from 'lucide-react'

export default function SignupPage() {
  const [formData, setFormData] = useState({
    idNumber: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  })
  const router = useRouter()

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password === formData.confirmPassword) {
      localStorage.setItem('isLoggedIn', 'true')
      router.push('/dashboard')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
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
      </div>

      {/* Content overlay */}
      <div className="relative flex flex-col min-h-screen">
        {/* Hero Section with Logos */}
        <div className="w-full pt-8">
          <div className="flex items-center justify-between px-8">
            <div className="relative h-24 w-24 bg-white rounded-lg p-2">
              <Image
                src="/county-revenue-app/county-logo.jpg"
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
                src="/county-revenue-app/county-logo.jpg"
                alt="County Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-6 py-8">
          <div className="max-w-md w-full bg-white/95 backdrop-blur-sm rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-2">CREATE ACCOUNT</h2>
            <p className="text-gray-600 mb-8">Fill in your details to register.</p>

            <form onSubmit={handleSignup} className="space-y-6">
              <div className="space-y-2">
                <label className="block text-gray-700">ID Number</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <BadgeCheck className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input 
                    type="text"
                    name="idNumber"
                    placeholder="22673632"
                    className="w-full pl-10"
                    value={formData.idNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-gray-700">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input 
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    className="w-full pl-10"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-gray-700">Phone Number</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input 
                    type="tel"
                    name="phone"
                    placeholder="+254 700 000000"
                    className="w-full pl-10"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-gray-700">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input 
                    type="password"
                    name="password"
                    className="w-full pl-10"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-gray-700">Confirm Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input 
                    type="password"
                    name="confirmPassword"
                    className="w-full pl-10"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <p className="text-sm text-gray-600">
                By creating an account, you agree to the collection and processing of your
                data for the purpose of enhancing user experience, in accordance with our
                privacy policy and applicable regulations.
              </p>

              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-lg font-semibold py-6"
              >
                CREATE ACCOUNT
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Already have an account?{' '}
                <Link href="/login" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Login here
                </Link>
              </p>
            </div>

            <div className="mt-8 text-center space-y-4">
              <p className="text-gray-600">IMEI NOT AVAILABLE</p>
              <div className="space-y-2">
                <p className="text-gray-600">Version: 174</p>
                <div className="relative h-16 w-16 mx-auto bg-white rounded-lg p-2">
                  <Image
                    src="/county-revenue-app/county-logo.jpg"
                    alt="County Logo"
                    fill
                    className="object-contain"
                  />
                </div>
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

