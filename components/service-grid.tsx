import { Bus, Car, Truck, Leaf } from 'lucide-react'
import { Card, CardContent } from './ui/card'

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
  }
]

export default function ServiceGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {services.map((service) => (
        <Card key={service.title} className="bg-white">
          <CardContent className="p-4">
            <div className="mb-4">{service.icon}</div>
            <h3 className="font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-gray-600">{service.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

