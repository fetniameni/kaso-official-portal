import { useEffect, useRef } from 'react';

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <video
        ref={videoRef}
        className="absolute w-full h-full object-cover"
        src="https://videos.pexels.com/video-files/855564/855564-720p.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <img
          src="/assets/kaso-logo-DyWg0Od7.jpg"
          alt="Kaso"
          className="w-80 h-32 animate-pulse drop-shadow-2xl"
        />
        <h1 className="mt-4 text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
          كاسو: صوت الشوارع اللي يهزّ القلوب
        </h1>
        <button className="mt-6 px-8 py-3 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition">
          Play
        </button>
      </div>
    </div>
  );
}
