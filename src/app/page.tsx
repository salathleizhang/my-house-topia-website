'use client';

import Navbar from "../components/Navbar";
import RiveAnimation from "../components/RiveAnimation";

export default function Home() {
  return (
    <div 
      className="relative w-full" 
      style={{ 
        minHeight: "250vh",
        backgroundImage: "url('/img/background.png')",
        backgroundSize: "100% auto",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center"
      }}
    >
      {/* 导航栏组件 */}
      <Navbar />
      
      {/* Rive动画组件 */}
      <RiveAnimation />
      
      {/* 主要内容区域可以在这里添加 */}
      <main className="flex-grow relative z-1 p-6">
        {/* 网站内容 */}
      </main>
    </div>
  );
}