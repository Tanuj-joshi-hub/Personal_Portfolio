import EnterSlider from "@/components/EnterSlider";

export default function HomePage() {
  return (
    <main className="relative h-screen w-full overflow-hidden bg-black">
      
      {/* Tree video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/Tree-poster.jpg"
      >
        <source src="/Tree.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Welcome content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
        
        <h1 className="text-center text-5xl font-calligraphy tracking-wide text-white sm:text-7xl">
          Welcome
        </h1>

        <p className="mt-4 text-center text-sm uppercase tracking-[0.35em] text-white/70">
          Tanuj Joshi
        </p>

        {/* Slider */}
        <div className="mt-10">
          <EnterSlider />
        </div>

      </div>

    </main>
  );
}