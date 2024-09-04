'use client';
import { CONFIG } from '@/app/config';
import FadeIn from '@/components/animation/FadeIn';
import Image from 'next/image';

const Logo = () => {
  return (
    <FadeIn delay={0} direction="down">
      <div className="space-y-4 text-center lg:text-left">
        <a href="" className="flex justify-center lg:justify-start">
          <Image src={CONFIG.logo} width={60} height={60} alt="logo" />
        </a>
        <p className="text-lg font-medium text-gray-600">
        Bem-vindo ao BurgerMetrics <br/><span className="text-sm">Faça login primeiro!</span>
        </p>
      </div>
    </FadeIn>
  );
};

export default Logo;
