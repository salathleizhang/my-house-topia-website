'use client';

import { useRef, useEffect } from 'react';
import { useRive, Layout, Fit, Alignment, } from '@rive-app/react-canvas';

interface RiveAnimationProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function RiveAnimation({ className, style }: RiveAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { RiveComponent, rive } = useRive({
    src: '/rive/housetopia.riv',
    autoplay: true,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.TopCenter,
    }),
    stateMachines: "control",
  });

  // 添加窗口大小变化监听器
  useEffect(() => {
    const handleResize = () => {
      // 如果rive实例存在，调整画布大小
      if (rive && containerRef.current) {
        // 通知Rive重新调整画布大小
        rive.resizeDrawingSurfaceToCanvas();
      }
    };

    // 添加resize事件监听器
    window.addEventListener('resize', handleResize);
    
    // 组件卸载时清除事件监听器
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [rive]);

  return (
    <div 
      ref={containerRef} 
      className={`${className || ''} flex items-center justify-center`}
      style={{
        position: 'relative',
        margin: '0 auto',
        width: '100vw',
        top: '-0px',
        height: '120vh',
        zIndex: -1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...style
      }}
    >
      <RiveComponent />
    </div>
  );
} 