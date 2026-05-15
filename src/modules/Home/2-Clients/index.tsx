 
"use client";

import { useEffect, useRef, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const clients = [
  { name: "Exit10", logo: "exit10.png", website: "https://exit10.com/" },
  { name: "Vmex", logo: "vmex.png", website: "https://vmex.finance/" },
  {
    name: "Timeless Finance",
    logo: "timelessfi.svg",
    website: "https://timelessfi.com/",
  },
  {
    name: "Manifold Finance",
    logo: "manifold.svg",
    website: "https://manifoldfinance.com/",
  },
  { name: "Rage Trade", logo: "rage.svg", website: "https://ragetrade.io/" },
  { name: "Strike", logo: "strike.svg", website: "https://www.strike.org/" },
  { name: "Inverse", logo: "inverse.svg", website: "https://inverse.finance/" },
  { name: "Ramses", logo: "ramses.svg", website: "https://ramses.exchange/" },
  { name: "vfat", logo: "vfat.svg", website: "https://vfat.io/" },
  { name: "TLX", logo: "tlx.svg", website: "https://tlx.fi/" },
  { name: "Peapods", logo: "peapods.svg", website: "https://peapods.finance/" },
  { name: "Cove", logo: "cove.svg", website: "https://cove.finance/" },
  { name: "Rysk", logo: "rysk.svg", website: "https://www.rysk.finance/" },
  {
    name: "Superfluid",
    logo: "superfluid.svg",
    website: "https://www.superfluid.finance/",
  },
  {
    name: "Get Protocol",
    logo: "get-protocol.svg",
    website: "https://www.get-protocol.io/",
  },
  {
    name: "Llama Pay",
    logo: "llamapay.svg",
    website: "https://llamapay.io/",
  },
  {
    name: "Lamalend",
    logo: "llamalend.svg",
    website: "https://llamalendnft.com/",
  },
  { name: "Temple", logo: "templedao.svg", website: "https://templedao.link/" },

  { name: "Curve", logo: "curve.svg", website: "https://curve.fi/" },
  { name: "Euler", logo: "euler.svg", website: "https://www.euler.finance/" },
  {
    name: "Asymmetry",
    logo: "asymetry.svg",
    website: "https://www.asymmetry.finance/",
  },

  {
    name: "Personae Lab",
    logo: "personaelab.png",
    website: "https://www.personaelabs.xyz/",
  },
  {
    name: "Privacy & Scaling Explorations",
    logo: "pse.png",
    website: "https://pse.dev/en",
  },
  {
    name: "Olympus DAO",
    logo: "olympus.svg",
    website: "https://www.olympusdao.finance/",
  },
  {
    name: "Nouns DAO",
    logo: "nouns.svg",
    website: "https://nouns.wtf/",
  },
  { name: "Yearn", logo: "yearn.svg", website: "https://yearn.fi/" },
  { name: "Centrifuge", logo: "centrifuge.png", website: "https://centrifuge.io/" },
];

interface EllipticalOrbitProps {
  children: React.ReactNode;
  radiusX: number;
  radiusY: number;
  duration?: number;
  delay?: number;
  className?: string;
}

const EllipticalOrbit: React.FC<EllipticalOrbitProps> = ({
  children,
  radiusX,
  radiusY,
  duration = 60,
  delay = 0,
  className = "",
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = ((elapsed / (duration * 1000)) % 1) * 2 * Math.PI;
      const angle = progress + (delay * Math.PI) / 180;

      const x = Math.cos(angle) * radiusX;
      const y = Math.sin(angle) * radiusY;

      element.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [radiusX, radiusY, duration, delay]);

  return (
    <div
      ref={elementRef}
      className={`absolute left-1/2 top-1/2 ${className}`}
      style={{
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
};

export default function ClientSection() {
  return (
    <section className="bg-white m-2">
      <div className="lg:mx-[20vw]">
        <h2 className="lg:text-4xl text-3xl font-bold">Clients</h2>
        <EllipticalOrbitDemo />
      </div>
    </section>
  );
}

function EllipticalOrbitDemo() {
  // Initialize with default large screen values
  const defaultOrbits = [
    {
      radiusX: 450,
      radiusY: 180,
      items: clients.slice(0, 10),
      duration: 45,
      startAngle: 30,
    },
    {
      radiusX: 350,
      radiusY: 130,
      items: clients.slice(10, 18),
      duration: 60,
      startAngle: 0,
    },
    {
      radiusX: 200,
      radiusY: 70,
      items: clients.slice(18),
      duration: 70,
      startAngle: -30,
    },
  ];

  // Move getOrbits inside useEffect to safely access window
  const getOrbits = (width: number) => {
    // For smaller screens
    if (width < 640) {
      return [
        {
          radiusX: 150,
          radiusY: 60,
          items: clients.slice(0, 10),
          duration: 45,
          startAngle: 30,
        },
        {
          radiusX: 120,
          radiusY: 45,
          items: clients.slice(10, 18),
          duration: 60,
          startAngle: 0,
        },
        {
          radiusX: 80,
          radiusY: 30,
          items: clients.slice(18),
          duration: 70,
          startAngle: -30,
        },
      ];
    }
    // For medium screens
    if (width < 1024) {
      return [
        {
          radiusX: 300,
          radiusY: 120,
          items: clients.slice(0, 10),
          duration: 45,
          startAngle: 30,
        },
        {
          radiusX: 230,
          radiusY: 90,
          items: clients.slice(10, 18),
          duration: 60,
          startAngle: 0,
        },
        {
          radiusX: 150,
          radiusY: 50,
          items: clients.slice(18),
          duration: 70,
          startAngle: -30,
        },
      ];
    }
    // For large screens (default)
    return defaultOrbits;
  };

  const [orbits, setOrbits] = useState(defaultOrbits);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Initial setup using window.innerWidth
    setOrbits(getOrbits(window.innerWidth));

    const handleResize = () => {
      setOrbits(getOrbits(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // During SSR or before mount, return a placeholder or default layout
  if (!isMounted) {
    return (
      <div className="relative flex lg:h-[50vh] md:h-[40vh] sm:h-[25vh] flex-col items-center justify-center overflow-hidden bg-white">
        {/* Optional loading state or static content */}
      </div>
    );
  }

  return (
    <div className="relative flex lg:h-[50vh] md:h-[40vh] sm:h-[25vh] flex-col items-center justify-center overflow-hidden bg-white">
      <svg
        className="absolute top-0 left-0 w-full h-full"
        style={{
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        {orbits.map((orbit, i) => (
          <ellipse
            key={`path-${i}`}
            cx="50%"
            cy="50%"
            rx={orbit.radiusX}
            ry={orbit.radiusY}
            fill="none"
            stroke="#666666"
            strokeWidth="1"
            opacity="0.5"
            strokeDasharray="4 4"
          />
        ))}
      </svg>

      <TooltipProvider>
        {orbits.map((orbit) =>
          orbit.items.map((client, i) => {
            const itemCount = orbit.items.length;
            const angleStep = 360 / itemCount;
            const delay = i * angleStep + orbit.startAngle;

            return (
              <Tooltip key={`tooltip-${client.name}`}>
                <EllipticalOrbit
                  radiusX={orbit.radiusX}
                  radiusY={orbit.radiusY}
                  duration={orbit.duration}
                  delay={delay}
                  className="transition-transform"
                >
                  <TooltipTrigger asChild>
                    <a
                      href={client.website}
                      aria-label={client.name}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                    >
                      <img
                        src={`/clients/${client.logo}`}
                        alt={client.name}
                        className="sm:w-4 sm:h-4 md:w-10 md:h-10 object-contain hover:scale-110 transition-transform"
                      />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{client.name}</p>
                  </TooltipContent>
                </EllipticalOrbit>
              </Tooltip>
            );
          })
        )}
      </TooltipProvider>
    </div>
  );
}
