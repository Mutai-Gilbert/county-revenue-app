'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { MapPin, ArrowUpRight, Clock, User } from 'lucide-react'
import Header from '@/components/header'
import ServiceGrid from '@/components/service-grid'

export default function HomePage() {
  const [userName] = useState('MOSES KIBET')
  const [zone] = useState('KERICHO TOWN')

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F8FF]">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 p-4">
        <h2 className="text-2xl font-bold mb-2 text-gray-900">Hello {userName}</h2>
        <div className="flex items-center gap-2 text-blue-600 mb-6">
          <MapPin className="w-5 h-5" />
          <span className="font-medium">Allocated Zone, {zone}</span>
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
            <ArrowUpRight className="w-5 h-5 text-blue-600" />
          </div>
        </div>

        {/* Inspection Card */}
        <Card className="bg-red-500 text-white mb-6 overflow-hidden relative">
          <div className="absolute right-4 top-4">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=20&width=20"
                alt="Search"
                width={20}
                height={20}
                className="opacity-50"
              />
            </div>
          </div>
          <CardContent className="p-6">
            <h3 className="text-sm font-semibold mb-2">VALUE OF MY INSPECTION</h3>
            <div className="text-4xl font-bold mb-4">KES 0</div>
            <div className="flex items-center gap-2 text-sm bg-white/10 w-fit px-3 py-1.5 rounded-full">
              <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4 text-red-500" />
              </div>
              <span className="font-medium">KES 0 Below Yesterday</span>
            </div>
          </CardContent>
          <div className="absolute bottom-0 left-0 right-0 flex justify-center p-4">
            <div className="flex gap-1">
              <div className="w-8 h-1 bg-white rounded-full opacity-50" />
              <div className="w-1 h-1 bg-white rounded-full opacity-25" />
              <div className="w-1 h-1 bg-white rounded-full opacity-25" />
            </div>
          </div>
        </Card>

        {/* Services Grid */}
        <ServiceGrid />
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="max-w-md mx-auto flex justify-between px-4 py-2">
          <Link 
            href="/home" 
            className="flex flex-col items-center p-2 text-blue-600"
          >
            <div className="grid grid-cols-2 grid-rows-2 gap-0.5 w-6 h-6">
              <div className="bg-current rounded-sm" />
              <div className="bg-current rounded-sm" />
              <div className="bg-current rounded-sm" />
              <div className="bg-current rounded-sm" />
            </div>
            <span className="text-xs mt-1 font-medium">Home</span>
          </Link>

          <Link 
            href="/history" 
            className="flex flex-col items-center p-2 text-gray-600"
          >
            <Clock className="w-6 h-6" />
            <span className="text-xs mt-1 font-medium">My History</span>
          </Link>

          <Link 
            href="/profile" 
            className="flex flex-col items-center p-2 text-gray-600"
          >
            <User className="w-6 h-6" />
            <span className="text-xs mt-1 font-medium">My Profile</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}

