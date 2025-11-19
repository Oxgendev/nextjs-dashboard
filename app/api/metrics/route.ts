import { NextResponse } from 'next/server'

export async function GET() {
  const data = { players: 128, tickMs: 3.1 }
  return NextResponse.json(data)
}