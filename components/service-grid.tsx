import { Bus, Car, Truck, Leaf, Link2, Briefcase, LockIcon as CarLock, FileSearch, Users, MilkIcon as Cow, Receipt, FlagIcon as LicensePlate, QrCode, AlertTriangle, Store, Fish, LassoIcon as Lion, Flame, MessageSquareWarning, Tractor, Heart } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import React from 'react';

const services = [
  {
    icon: <Car className="w-8 h-8" />,
    title: 'Street Parking',
    description: 'Parking Charges for motorbikes, personal vehicles and more.'
  },
  {
    icon: <Bus className="w-8 h-8" />,
    title: 'Matatu/Bus Park',
    description: 'A fee applied to matatus/buses at a stage.'
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: 'Cess',
    description: 'Drivers pay for materials like ballast, sand etc...'
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    title: 'Markets',
    description: 'Taxes for vendors on items sold at our markets.'
  },
  {
    icon: <Link2 className="w-8 h-8" />,
    title: 'Fines & Penalties',
    description: 'Apply this section for penalizing individuals for their offenses.'
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: 'SBP Data Collection',
    description: 'Efficient tenant payment request and tracking.'
  },
  {
    icon: <CarLock className="w-8 h-8" />,
    title: 'Clamping Modules',
    description: 'Check and release vehicles using a payment-controlled system'
  },
  {
    icon: <FileSearch className="w-8 h-8" />,
    title: 'Search Invoice(Print)',
    description: 'View invoice details and issue print'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Toilet',
    description: 'Charge for toiled fee'
  },
  {
    icon: <Cow className="w-8 h-8" />,
    title: 'Vet & Livestock Services',
    description: 'Vet & Livestock Services'
  },
  {
    icon: <Receipt className="w-8 h-8" />,
    title: 'Receipt Inspection',
    description: 'Check for valid receipt and enforce compliance.'
  },
  {
    icon: <LicensePlate className="w-8 h-8" />,
    title: 'No. Plate Verification',
    description: 'Verify compliance for parking,Cess, bus station taxes etc..'
  },
  {
    icon: <QrCode className="w-8 h-8" />,
    title: 'Document Verification',
    description: 'Validate county documents such as receipts, permits, stickers etc'
  },
  {
    icon: <AlertTriangle className="w-8 h-8" />,
    title: 'Violation Reporting',
    description: 'Report violations and infractions'
  },
  {
    icon: <Store className="w-8 h-8" />,
    title: 'Rents',
    description: 'Efficient tenant payment request and tracking.'
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: 'SBP Permits',
    description: 'Efficient tenant payment request and tracking.'
  },
  {
    icon: <Fish className="w-8 h-8" />,
    title: 'Fish Cess',
    description: 'Fishermen are taxed per kilogram on their lake catches.'
  },
  {
    icon: <Lion className="w-8 h-8" />,
    title: 'Park Fee',
    description: 'Pay for entries fee and services'
  },
  {
    icon: <Flame className="w-8 h-8" />,
    title: 'Fire Service Levies',
    description: 'Streamlined collection to support fire services.'
  },
  {
    icon: <MessageSquareWarning className="w-8 h-8" />,
    title: 'Transaction Recon',
    description: 'Copy and an Original MPESA message in this section to auto reconcile them.'
  },
  {
    icon: <Tractor className="w-8 h-8" />,
    title: 'Hire of County Assets',
    description: 'Charges applicable for hire of county assets such as tractors, stadiums etc'
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Public Health',
    description: 'Medical Certificates, food hygiene, food handlers and so on.'
  }
]

export default function ServiceGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
      {services.map((service) => (
        <Card key={service.title} className="bg-white hover:bg-gray-50 transition-colors">
          <CardContent className="p-4 flex flex-col items-center text-center">
            <div className="mb-4 text-primary">{React.cloneElement(service.icon, { className: 'w-12 h-12' })}</div>
            <h3 className="font-semibold mb-2 text-lg">{service.title}</h3>
            <p className="text-sm text-gray-600 line-clamp-2">{service.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}