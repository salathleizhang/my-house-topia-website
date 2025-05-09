import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#D2B48C]">
      {/* 顶部导航栏 */}
      <nav className="w-full bg-[#f8e8c1] border-b-2 border-black">
        <div className="flex items-center justify-between h-16 max-w-7xl mx-auto">
          {/* 左侧菜单项 */}
          <div className="flex items-center h-full">
            <a href="#" className="px-6 py-3 border-x-2 border-black font-medium text-black text-3xl h-full flex items-center font-[ShangShouTuHuaTi] hover:bg-black hover:text-white transition-all">mail</a>
            <a href="#" className="px-6 py-3 border-r-2 border-black font-medium text-black text-3xl h-full flex items-center font-[ShangShouTuHuaTi] hover:bg-black hover:text-white transition-all">about</a>
          </div>
          
          {/* 中间Logo (矢量图) */}
          <div className="flex justify-center">
            <Image
              src="/vercel.svg" 
              alt="My Home Topia Logo"
              width={180}
              height={60}
              className="dark:invert"
              priority
            />
          </div>
          
          {/* 右侧菜单项 */}
          <div className="flex items-center h-full">
            <a href="#" className="px-6 py-3 border-l-2 border-black font-medium text-black text-3xl h-full flex items-center font-[ShangShouTuHuaTi] hover:bg-black hover:text-white transition-all">connection</a>
            <a href="#" className="px-6 py-3 border-x-2 border-black font-medium text-black text-3xl h-full flex items-center font-[ShangShouTuHuaTi] hover:bg-black hover:text-white transition-all">news</a>
          </div>
        </div>
      </nav>

      {/* 页面内容区域 */}
      <div className="flex-grow flex items-center justify-center p-8">
        {/* 带圆角的框 */}
        <div className="w-full h-[80vh] border-4 border-black rounded-3xl bg-[#D2B48C] p-6">
          {/* 这里可以添加框内内容 */}
        </div>
      </div>
    </div>
  );
}
