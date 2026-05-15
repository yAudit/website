"use client";

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { Trophy, Shield, Users, Star } from 'lucide-react';

// Counter animation hook
function useCountUp(end: number, duration: number = 2000, start: number = 0): number {
  const [count, setCount] = useState<number>(start);
  
  useEffect(() => {
    let startTime: number | undefined;
    let animationFrame: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(progress * (end - start) + start);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);
  
  return count;
}

// Enhanced Typewriter Component
function EnhancedTypewriter() {
  const [currentText, setCurrentText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  
  const words: string[] = ['proofs', 'code', 'cryptography'];
  const [wordIndex, setWordIndex] = useState<number>(0);
  
  useEffect(() => {
    const speed = isDeleting ? 50 : 50;
    const word = words[wordIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting && currentIndex < word.length) {
        setCurrentText(word.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else if (isDeleting && currentIndex > 0) {
        setCurrentText(word.substring(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      } else if (!isDeleting && currentIndex === word.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false);
        setWordIndex((wordIndex + 1) % words.length);
      }
    }, speed);
    
    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting, wordIndex]);
  
  return (
    <h1 className="lg:leading-normal lg:text-5xl md:text-3xl sm:text-3xl font-bold">
      Breaking your <br />
      <span className="bg-gradient-to-r from-deepblue to-deepblue bg-clip-text text-transparent">
        {currentText}
        <span className="animate-pulse">|</span>
      </span>
      <br />
      so no one else can
    </h1>
  );
}

// Authority Metrics Component
function AuthorityMetrics() {
  const tvlCount = useCountUp(2.1, 2000);
  const bugsCount = useCountUp(500, 2500);
  const alumniCount = useCountUp(200, 2200);
  
  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      <div className="bg-deepblue bg-opacity-5 p-4 text-center border border-deepblue hover:-translate-y-1 transition-transform duration-300">
        <div className="text-2xl font-bold text-deepblue">${tvlCount.toFixed(1)}B+</div>
        <div className="text-sm text-gray-600">High</div>
      </div>
      <div className="bg-deepblue bg-opacity-5 p-4 text-center border border-deepblue hover:-translate-y-1 transition-transform duration-300">
        <div className="text-2xl font-bold text-deepblue">{bugsCount}+</div>
        <div className="text-sm text-gray-600">Medium</div>
      </div>
      <div className="bg-deepblue bg-opacity-5 p-4 text-center border border-deepblue hover:-translate-y-1 transition-transform duration-300">
        <div className="text-2xl font-bold text-deepblue">{alumniCount}+</div>
        <div className="text-sm text-gray-600">Infollow</div>
      </div>
    </div>
  );
}

// Credential Badges Component
function CredentialBadges() {
  return (
    <div className="flex flex-wrap gap-3 mb-6 justify-center">
      <div className="flex items-center gap-2 bg-opacity-10 text-deepblue px-4 py-2 text-sm font-semibold hover:-translate-y-1 transition-transform duration-300">
        <Trophy className="w-4 h-4" />
        Ethereum Foundation Grantee
      </div>
      <div className="flex items-center gap-2 bg-opacity-10 text-deepblue px-4 py-2 text-sm font-semibold hover:-translate-y-1 transition-transform duration-300">
        <Shield className="w-4 h-4" />
        Boosted Audits
      </div>
      <div className="flex items-center gap-2 bg-opacity-10 text-deepblue px-4 py-2 text-sm font-semibold hover:-translate-y-1 transition-transform duration-300">
        <Users className="w-4 h-4" />
        2 ZK Fellowships Completed
      </div>
    </div>
  );
}

// Recent Achievement Ticker
function AchievementTicker() {
  const achievements: string[] = [
    "🔥 Critical Halo2 vulnerability discovered",
    "🏆 Noir Grantee to build noir web proofs SDK",
    "⚡ Spartan ECDSA Audit completed",
    "🚀 Binius Blog out now!",
  ];
  
  const [currentAchievement, setCurrentAchievement] = useState<number>(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAchievement((prev) => (prev + 1) % achievements.length);
    }, 3000);
    
    return () => clearInterval(timer);
  }, [achievements.length]);
  
  return (
    <div className="bg-white/80 backdrop-blur-sm p-3 mb-6 hover:-translate-y-1 transition-transform duration-300">
      <div className="flex items-center justify-center gap-2">
        <div className="flex">
          <Star className="w-4 h-4 text-yellow-500 animate-pulse" />
          <Star className="w-4 h-4 text-yellow-500 animate-pulse" style={{animationDelay: '0.2s'}} />
          <Star className="w-4 h-4 text-yellow-500 animate-pulse" style={{animationDelay: '0.4s'}} />
        </div>
        <span className="text-sm font-medium text-gray-700 animate-fade-in">
          {achievements[currentAchievement]}
        </span>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <div className="h-full relative sm:my-8 md:p-10 lg:mx-[20vw] lg:mt-24 lg:mb-24">
      {/* Top Credential Badges - Full Width */}
      <CredentialBadges />
      
      <div className="flex sm:flex-col flex-row sm:text-center justify-between gap-12">
        {/* Left Content */}
        <div className="my-8 flex-1">
          {/* Main Heading with Enhanced Typewriter */}
          <EnhancedTypewriter />
          
          {/* Enhanced Subtitle */}
          <div className="my-6">
            <h2 className="text-xl sm:mx-4 text-gray-600 mb-4">
              Security - Development - Research - Tooling
            </h2>
          </div>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-row sm:flex-col gap-4 items-center justify-start sm:justify-center mb-8">
            <Link href="/contact-us">
              <button className="px-8 py-4 text-base text-white font-bold bg-deepblue hover:bg-white hover:text-deepblue hover:border hover:border-deepblue duration-700 hover:-translate-y-1 transition-transform">
                Get a Boosted Audit
              </button>
            </Link>
            <a href="https://research.yaudit.dev" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-4 text-deepblue font-bold border-2 border-deepblue hover:bg-deepblue hover:bg-opacity-5 transition-all duration-300">
                View Research
              </button>
            </a>
          </div>
          
          {/* Trust Indicators */}
          <div className="pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-3">Trusted by:</p>
            <div className="flex flex-wrap gap-4 items-center justify-start sm:justify-center opacity-60">
              <div className="bg-deepblue bg-opacity-10 px-3 py-1 text-sm font-medium">PSE Team</div>
              <div className="bg-deepblue bg-opacity-10 px-3 py-1 text-sm font-medium">Personae Labs</div>
            </div>
          </div>
        </div>
        
        {/* Right Content */}
        <div className="flex-1 flex flex-col justify-center items-center sm:hidden lg:items-end">
          {/* Illustration */}
          <div className="mb-8">
            <img
              alt="ZK Security Hero Illustration"
              src="/dd.png"
              className="w-full h-auto max-h-[24rem] object-contain"
            />
          </div>
          
          {/* Achievement Ticker - Moved to Right */}
          <div className="w-full max-w-md">
            <AchievementTicker />
          </div>

          {/* Authority Metrics - Moved to Right */}
          {/* <div className="w-full max-w-md ml-auto">
            <AuthorityMetrics />
          </div>  */}

        </div>
      </div>
    </div>
  );
}