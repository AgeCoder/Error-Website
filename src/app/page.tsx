import AnimatedBeam from "@/components/animata/background/animated-beam";
import Gradient from "@/components/animata/bento-grid/gradient";
import SlackIntro from "@/components/animata/hero";


export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <AnimatedBeam>
        <SlackIntro />
        <div className="md:mx-20 md:mt-36">
          <Gradient />
        </div>
      </AnimatedBeam>
    </div>
  );
}
