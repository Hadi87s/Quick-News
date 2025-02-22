import HeroGeometric from "@/components/hero-geometrics/HeroGeometrics";
import ScrollVelocity from "@/components/scroll-velocity/ScrollVelocity";

export default function Home() {
  const velocity = 41;
  return (
    <>
      <HeroGeometric />

      <ScrollVelocity
      texts={['Hadi is trying reactBits for the first time', 'And reactBits is COOL!']} 
      velocity={velocity} 
      className="custom-scroll-text p-2"
    />
    </>
  );
}
