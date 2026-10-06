import React from 'react';
import CursorProvider from '@/components/cursor/CursorProvider';
import SiteHeader from '@/components/SiteHeader';
import SignatureTag from '@/components/SignatureTag';
import SiteFooter from '@/components/SiteFooter';
import HeroSection from '@/components/sections/HeroSection';
import MethodSection from '@/components/sections/MethodSection';
import PrecisionBand from '@/components/sections/PrecisionBand';
import ColorSection from '@/components/sections/ColorSection';
import ShapeSection from '@/components/sections/ShapeSection';
import SizeSection from '@/components/sections/SizeSection';
import GoldenRatioSection from '@/components/sections/GoldenRatioSection';
import ColorDimensionsSection from '@/components/sections/ColorDimensionsSection';

export default function Home() {
  return (
    <CursorProvider>
      <div id="top" className="min-h-screen bg-[#050A0F] font-body text-[#E0FBFC]">
        <SiteHeader />
        <main>
          <HeroSection />
          <MethodSection />
          <PrecisionBand />
          <ColorSection />
          <ShapeSection />
          <SizeSection />
          <GoldenRatioSection />
          <ColorDimensionsSection />
        </main>
        <SiteFooter />
        <SignatureTag />
      </div>
    </CursorProvider>
  );
}