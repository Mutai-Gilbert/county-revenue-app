import { NextResponse } from 'next/server'

// This is a mock user database. In a real application, you'd use a proper database.
const users = [
  { id: '32602373', email: 'gilloh@example.com', password: 'password123', name: 'Gilbert Mutai' }
]

export async function POST(request: Request) {
  const body = await request.json()
  const { username, password } = body

  const user = users.find(u => (u.id === username || u.email === username) && u.password === password)

  if (user) {
    // In a real application, you'd create a proper session or JWT here
    return NextResponse.json({ success: true, user: { id: user.id, name: user.name } })
  } else {
    return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 })
  }
}

