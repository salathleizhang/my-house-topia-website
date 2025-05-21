'use client';

import Image from "next/image";
import { useState, useEffect } from 'react';

export default function Navbar() {
  // 添加状态来跟踪滚动位置
  const [isScrolled, setIsScrolled] = useState(false);
  
  // 监听滚动事件
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // 清理事件监听器
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <>
      <nav className={`w-full bg-[#f8e8c1] border-b-2 border-black z-50 transition-all duration-300 ${
        isScrolled ? 'fixed top-0 left-0 right-0 shadow-md' : ''
      }`}>
        <div className="flex items-center justify-between h-10 md:h-12 lg:h-15 max-w-6xl mx-auto">
          {/* 左侧菜单项 */}
          <div className="flex items-center h-full">
            <a href="#" className="px-3 sm:px-4 md:px-6 py-2 md:py-3 border-x-2 border-black font-medium text-black text-xl md:text-2xl lg:text-3xl h-full flex items-center font-[ShangShouTuHuaTi] hover:bg-black hover:text-white transition-all">mail</a>
            <a href="#" className="px-3 sm:px-4 md:px-6 py-2 md:py-3 border-r-2 border-black font-medium text-black text-xl md:text-2xl lg:text-3xl h-full flex items-center font-[ShangShouTuHuaTi] hover:bg-black hover:text-white transition-all">about</a>
          </div>
          
          {/* 中间Logo (矢量图) */}
          <div className="flex justify-center">
            <Image
              src="/vercel.svg" 
              alt="My Home Topia Logo"
              width={40}
              height={40}
              className="dark:invert md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px]"
              priority
            />
          </div>
          
          {/* 右侧菜单项 */}
          <div className="flex items-center h-full">
            <a href="#" className="px-3 sm:px-4 md:px-6 py-2 md:py-3 border-l-2 border-black font-medium text-black text-xl md:text-2xl lg:text-3xl h-full flex items-center font-[ShangShouTuHuaTi] hover:bg-black hover:text-white transition-all">connection</a>
            <a href="#" className="px-3 sm:px-4 md:px-6 py-2 md:py-3 border-x-2 border-black font-medium text-black text-xl md:text-2xl lg:text-3xl h-full flex items-center font-[ShangShouTuHuaTi] hover:bg-black hover:text-white transition-all">news</a>
          </div>
        </div>
      </nav>
      {/* 当导航栏固定时，添加一个占位符，以防止内容跳动 */}
      {isScrolled && <div className="h-10 md:h-12 lg:h-15"></div>}
    </>
  );
}