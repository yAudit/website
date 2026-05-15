import FlickeringGrid from "@/components/ui/flickering-grid";
import NumberTicker from "@/components/ui/number-ticker";

export function AuditStats() {
  return (
    <div className="relative lg:h-[40vh] md:h-[28vh] sm:h-[50vh] my-6 w-full bg-background overflow-hidden">
      <FlickeringGrid
        className="z-0 absolute inset-0 size-full"
        squareSize={4}
        gridGap={6}
        color="#000000"
        maxOpacity={0.1}
        flickerChance={0.1}
        height={1000}
        width={2000}
      />
      <div className="lg:mx-[20vw] lg:my-24  md:my-20 sm:my-8 flex flex-col gap-12">
        <div className="grid grid-cols-3 sm:grid-cols-1 gap-2 sm:gap-4">
          <div className="flex flex-col items-center justify-center col-span-1 ">
            <NumberTickerDemo num={2} text="Bn +" />
            <p>TVL Secured</p>
          </div>
          <div className="flex flex-col items-center justify-center col-span-1">
            <NumberTickerDemo num={59} text="" />
            <p>Audits in 2024</p>
          </div>
          <div className="flex flex-col items-center justify-center col-span-1">
            <NumberTickerDemo num={80} text="%" />
            <p>Return Customers</p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:gap-8">
          <div className="flex flex-col items-center justify-center col-span-1">
            <NumberTickerDemo num={150} text="+" />
            <p>Fellows Graduated</p>
          </div>
          <div className="flex flex-col items-center justify-center col-span-1">
            <NumberTickerDemo num={8} text="" />
            <p>Fellowships Completed since 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function NumberTickerDemo({ num, text }: { num: number; text: string }) {
  return (
    <p className="whitespace-pre-wrap text-5xl sm:text-2xl font-medium tracking-tighter text-black dark:text-white">
      <NumberTicker value={num} />
      {text}
    </p>
  );
}
