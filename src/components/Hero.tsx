import React, { ReactNode } from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  ctaText?: string;
  onCtaClick?: () => void;
  children?: ReactNode;
}

const Hero = ({ title, subtitle, imageUrl, ctaText, onCtaClick, children }: HeroProps) => {
  return (
    <div className="relative h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Centered Content */}
      <div className="relative text-center flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl">
          {subtitle}
        </p>
        {ctaText && (
          <button
            onClick={onCtaClick}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-200"
          >
            {ctaText}
          </button>
        )}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </div>
  );
};

export default Hero;
