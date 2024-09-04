'use client';
import FadeIn from '@/components/animation/FadeIn';

const BottomText = () => {
  return (
    <FadeIn delay={0.9} direction="up">
      <div className="border-t pt-12">
        <div className="space-y-2 text-center">
          <span className="block text-sm tracking-wide text-gray-500">
          BurgerMetrics é uma ferramenta para análise de indicadores KPI's
          </span>
        </div>
      </div>
    </FadeIn>
  );
};

export default BottomText;
