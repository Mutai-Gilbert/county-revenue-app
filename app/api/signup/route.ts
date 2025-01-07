import { NextResponse } from 'next/server'

// This is a mock user database. In a real application, you'd use a proper database.
const users = [
    { id: '32602373', email: 'gilloh@example.com', password: 'password123', name: 'Gilbert Mutai' }
]

export async function POST(request: Request) {
  const body = await request.json()
  const { username, email, password } = body

  // Check if user already exists
  if (users.some(user => user.id === username || user.email === email)) {
    return NextResponse.json({ success: false, message: 'User already exists' }, { status: 400 })
  }

  // Create new user
  const newUser = { id: username, email, password, name: username.toUpperCase() }
  users.push(newUser)

  return NextResponse.json({ success: true, message: 'User created successfully' })
}

