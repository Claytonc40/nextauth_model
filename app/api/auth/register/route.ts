import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import { NextResponse } from 'next/server';

import prisma from '@/app/libs/prismaDb';
import sendEmail from '@/app/utils/sendEmail';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { email, name, password } = body;
    if (!email || !name || !password) {
      return NextResponse.json('Falta informação', { status: 400 });
    }

    // Check if the user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      // User already exists, handle accordingly
      return NextResponse.json('O usuário já existe com este e-mail', { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const token = crypto.randomBytes(32).toString('hex');
    const tokenExpiration = new Date(new Date().getTime() + 24 * 60 * 60 * 1000); // 1000 milliseconds in a second

    await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
        resetToken: token,
        resetTokenExpiry: tokenExpiration,
      },
    });

    // Send email
    const link = `${process.env.APP_URL}/auth?token=${token}`;
    sendEmail(email, 'Confirmação de e-mail', link);

    return NextResponse.json(`O link de confirmação foi enviado para ${email}. Por favor, verifique seu e-mail!`, {
      status: 200,
    });
  } catch (error) {
    console.log(error, 'REGISTRATION ERROR');
    return NextResponse.json('Internal Error', { status: 500 });
  }
}
