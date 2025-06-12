import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// รองรับ HTTP POST
export async function POST(req) {
  try {

    const data = await req.json()
    const firstName = data.ryb_name
    const lastName = data.ryb_lastname

    // ตรวจสอบข้อมูลที่ส่งมา
    if (!firstName || !lastName) {
      return NextResponse.json({ error: 'กรุณากรอกชื่อและนามสกุล' }, { status: 400 })
    }

    const checkName = await prisma.royal_blessings.findMany({
      where: {
        ryb_name: firstName,
        ryb_lastname: lastName,
        ryb_event_title: data.ryb_event_title,
      }
    })

    if (checkName.length > 0) {
      return NextResponse.json({ message: 'คุณได้ลงนามถวายพระพรเรียบร้อยแล้ว' }, { status: 400 })
    }

    // // บันทึกลงฐานข้อมูล
    await prisma.royal_blessings.create({
      data
    })

    // ตอบกลับว่า success
    return NextResponse.json({ data: { firstName, lastName }, message: 'success' }, { status: 200 })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ error: 'ไม่สามารถบันทึกข้อมูลได้' }, { status: 500 })
  }
}
