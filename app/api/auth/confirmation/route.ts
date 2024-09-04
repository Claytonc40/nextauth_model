import { NextResponse } from 'next/server';

import prisma from '@/app/libs/prismaDb';

export async function POST(request: Request) {
  const body = await request.json();
  const { token } = body;

  try {
    // Find user by reset token
    const user = await prisma.user.findFirst({
      where: {
        resetToken: token,
        resetTokenExpiry: {
          not: null,
        },
      },
    });

    if (!user || !user?.resetTokenExpiry) {
      return NextResponse.json('Token inválido ou expirado', { status: 404 });
    }

    // Check if token is expired
    const now = new Date();

    if (now > user?.resetTokenExpiry) {
      return NextResponse.json(
        `Seu link de e-mail de confirmação expirou porque não foi usado dentro do limite de 24 horas. Se você quiser usar o mesmo endereço de e-mail, entre em contato conosco.`,
        { status: 400 },
      );
    }

    // Update user's password and clear reset token fields
    await prisma.user.update({
      where: { id: user.id },
      data: {
        emailVerified: true,
        resetToken: null,
        resetTokenExpiry: null,
      },
    });

    return NextResponse.json(
      { email: user.email, message: 'O e-mail foi verificado, faça login' },
      { status: 200 },
    );
  } catch (error) {
    console.log(error, 'REGISTRATION ERROR');
    return new NextResponse('Internal Error', { status: 500 });
  }
}
