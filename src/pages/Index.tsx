
import { useEffect, useRef } from 'react';
import BikeIcon from '../components/BikeIcon';
import QRCode from '../components/QRCode';

const Index = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add a class after component mounts for the fade-in animation
    const timer = setTimeout(() => {
      if (pageRef.current) {
        pageRef.current.classList.add('opacity-100');
        pageRef.current.classList.remove('opacity-0');
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      ref={pageRef}
      className="min-h-screen w-full bg-gradient-purple-pink transition-opacity duration-700 opacity-0 overflow-hidden flex flex-col items-center justify-center p-4"
    >
      <div className="w-full max-w-md relative animate-fade-in">
        <div className="relative bg-white bg-opacity-90 backdrop-blur-card rounded-3xl p-8 card-shadow">
          {/* Top Section */}
          <div className="flex flex-col space-y-6 mb-8">
            <BikeIcon className="animate-fade-in-up w-14 h-14" />
            
            <div className="text-gray-500 animate-fade-in-up delay-100">
              2025年3月7日
            </div>
            
            {/* Main Title */}
            <div className="space-y-4 animate-fade-in-up delay-200">
              <h1 className="text-3xl font-bold leading-tight">
                <span className="inline-block mr-2">👋</span> Manus AI工具真的值得等待邀请码吗？ 前Monica会员现身说法 <span className="inline-block">👀</span>
              </h1>
              
              <p className="text-xl leading-relaxed">
                大家好呀！这是改的 lovable 作为一枚AI工具尝鲜达人，今天来给大家分享一下最近很火的Manus那些事儿～ <span className="inline-block">🧐</span>
              </p>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="flex justify-between items-end animate-fade-in-up delay-300">
            <div className="text-gray-600">
              <div className="font-medium text-xl mb-1">鉴赏师</div>
              <div className="text-sm text-gray-500">扫描二维码</div>
            </div>
            
            <div className="flex flex-col items-end">
              <QRCode />
              <div className="text-right mt-2 text-gray-500">字数：45</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
