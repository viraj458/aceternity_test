import { BackgroundGradientDemo } from '@/app/BackgroundGradientDemo';
import { ThreeDCardDemo } from '@/app/ThreeDCard';
import { HeroParallax } from '@/components/ui/hero-parallax';
import { products } from '@/utils/products';

export default function Home() {
  return (
    <main className="bg-black">
      <HeroParallax products={products} />
      <div className="max-container padding-container">
        <div className="flex justify-between flex-wrap">
          <ThreeDCardDemo buttonText2="SignUp" />
          <BackgroundGradientDemo />
          <ThreeDCardDemo buttonText2="SayHello" />
        </div>
      </div>
    </main>
  );
}
