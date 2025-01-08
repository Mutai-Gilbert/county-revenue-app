'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/header'
import InspectionCard from '@/components/inspection-card'
import Layout from '@/components/layout'
import ServiceGrid from '@/components/service-grid'

export default function DashboardPage() {
  const router = useRouter()

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (!isLoggedIn) {
      router.push('/login')
    }
  }, [router])

  return (
    <Layout>
      <div className="pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <div className="mt-6">
          <InspectionCard />
        </div>
        <ServiceGrid />
      </div>
    </Layout>
  )
}