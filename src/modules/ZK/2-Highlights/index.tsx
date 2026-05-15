import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github, Calendar, Users, Award, Shield } from 'lucide-react';
import AvatarCircles from "@/components/ui/avatar-circles";

const workItems = [
  {
    id: 1,
    title: "Tornado Cash in Halo2",
    subtitle: "Rust + ZK Circuit Implementation",
    description: "Reimplemented Tornado Cash in Halo2 as a deep dive into Rust and ZK circuit design. Included Summa Solvency code walkthroughs and MST code improvements.",
    difficulty: "Expert",
    authors: [
      {
        name: "teddav",
        avatar: "https://avatars.githubusercontent.com/teddav"
      }
    ],
    tags: ["Halo2", "Rust", "Circuits"],
    links: {
      github: "https://github.com/summa-dev/summa-solvency/pull/269",
      blog: "https://dev.to/teddav/tornado-cash-with-halo2-62b"
    }
  },
  {
    id: 2,
    title: "PSE-Halo2 Bug Discovery",
    subtitle: "Critical Soundness Fix",
    description: "Identified and reported a critical bug in PSE-Halo2 library, leading to an official fix and community acknowledgment.",
    difficulty: "Expert",
    authors: [
      {
        name: "teddav",
        avatar: "https://avatars.githubusercontent.com/teddav"
      }
    ],
    tags: ["Halo2", "Bug Discovery", "Security"],
    links: {
      github: "https://github.com/privacy-scaling-explorations/halo2/pull/347",
      blog: "https://github.com/privacy-scaling-explorations/halo2/issues/335"
    }
  },
  {
    id: 3,
    title: "Summa Tooling Enhancements",
    subtitle: "Patch for Analysis Tools",
    description: "Developed patches for halo2-analyzer and Polyexen-demo, enabling smoother onboarding and analysis for fellowship participants.",
    difficulty: "Advanced",
    authors: [
      {
        name: "zeroqn",
        avatar: "https://avatars.githubusercontent.com/zeroqn"
      }
    ],
    tags: ["Tooling", "Halo2", "Summa"],
    links: {
      github: "https://github.com/zeroqn/summa-analysis",
      blog: "https://nullity00.notion.site/Halo2-Tools-ef0166c5807f43109b672c0c5954a6b0"
    }
  },
  {
    id: 4,
    title: "Merkle Sum Tree Attack Analysis",
    subtitle: "Deep Dive Articles",
    description: "Pia and 0xpanicError analyzed vulnerabilities in Merkle Sum Trees, producing detailed gists and blog posts that advanced community knowledge.",
    difficulty: "Research",
    authors: [
      {
        name: "Pia",
        avatar: "https://avatars.githubusercontent.com/rkdud007"
      },
      {
        name: "0xpanicError",
        avatar: "https://avatars.githubusercontent.com/0xpanicError"
      }
    ],
    tags: ["MST", "Security", "Ethereum"],
    links: {
      github: "https://gist.github.com/rkdud007/5c10c8edcf583ef0e5550a09e9301962",
      blog: "https://0xpanicerror.substack.com/p/merkle-sum-tree-a-vulnerability-analysis"
    }
  },
  {
    id: 5,
    title: "Mastering KZG by Hand",
    subtitle: "Educational Article",
    description: "An in-depth article explaining KZG commitments and polynomial math by hand, enabling deeper understanding of core ZK primitives.",
    difficulty: "Advanced",
    authors: [
      {
        name: "0xnagu",
        avatar: "https://avatars.githubusercontent.com/thogiti"
      }
    ],
    tags: ["KZG", "Formal Methods", "Education"],
    links: {
      github: "",
      blog: "https://thogiti.github.io/2024/03/22/Mastering-KZG-by-hands.html"
    }
  }, 
  {
    id: 6,
    title: "Verifier Validator Registry Proposal",
    subtitle: "Standardizing Verifier Validation",
    description: "Proposal and proof of concept for a unified verifier-validator registry to improve standardization and security across ZK ecosystems.",
    difficulty: "Research",
    authors: [
      {
        name: "Flying Nobita",
        avatar: "https://avatars.githubusercontent.com/flyingnobita"
      }
    ],
    tags: ["Verification", "Standards", "Ethereum"],
    links: {
      github: "https://github.com/flyingnobita/vvr-poc",
      blog: "https://hackmd.io/@FlyingNobita/verifier-validator-registry-proposal-draft"
    }
  },
  {
  id: 7,
  title: "Halo2 Starter: Lightning-Fast PoC Framework",
  subtitle: "20 LoC Security PoC",
  description: "Developed a minimal, ready-to-use Halo2 starter template empowering researchers to write security proof-of-concepts in just 20 lines. Streamlines reproducibility and accelerates bug discovery in ZK circuits.",
  difficulty: "Expert",
  authors: [
    {
      name: "teddav",
      avatar: "https://avatars.githubusercontent.com/teddav"
    }
  ],
  tags: ["Halo2", "Security", "PoC"],
  links: {
    github: "https://github.com/teddav/halo2-starter",
    blog: "https://github.com/privacy-scaling-explorations/halo2/pull/352"
  }
}

];



function Highlights() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isHovered && scrollRef.current) {
      const interval = setInterval(() => {
        if (scrollRef.current) {
          const scrollAmount = 400;
          const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
          
          // Check if we've reached the end
          if (scrollRef.current.scrollLeft >= maxScroll - 10) {
            // Reset to beginning
            scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            // Continue scrolling
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
          }
        }
      }, 3000); // Auto-scroll every 3 seconds

      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              The best work
            </h2>
            <p className="text-xl text-gray-600">
              Cutting-edge research and security discoveries that shape the ZK ecosystem
            </p>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-3 bg-deepblue bg-opacity-10 text-deepblue hover:bg-deepblue hover:bg-opacity-20 transition-colors border border-deepblue hover:-translate-y-1 transition-transform duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 bg-deepblue bg-opacity-10 text-deepblue hover:bg-deepblue hover:bg-opacity-20 transition-colors border border-deepblue hover:-translate-y-1 transition-transform duration-300"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {/* Horizontal Scrolling Container */}
        <div 
          ref={scrollRef}
          className="flex gap-6 sm:gap-4 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {workItems.map((item) => (
            <div
              key={item.id}
              className="min-w-[380px] max-w-[380px] sm:min-w-[340px] sm:max-w-[340px] bg-white border border-zinc-100 p-6 transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                <AvatarCircles 
                  avatarUrls={item.authors.map(author => ({ 
                  imageUrl: author.avatar,
                  profileUrl: `https://github.com/${author.name}`
                  }))}
                />
                <div className="text-base text-gray-600 font-medium">
                  {item.authors.map(author => author.name).join(' & ')}
                </div>
                </div>

              {/* Content */}
              <div className="mb-4">
              <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                {item.title}
              </h3>
              <p className="text-sm font-medium text-deepblue mb-3">
                {item.subtitle}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                {item.description}
              </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-4">
              {item.tags.slice(0, 3).map((tag, index) => (
                <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs"
                >
                {tag}
                </span>
              ))}
              {item.tags.length > 3 && (
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs">
                +{item.tags.length - 3}
                </span>
              )}
              </div>

              {/* Actions */}
              <div className="flex gap-2">
              <button
                onClick={() => window.open(item.links.blog, '_blank')}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-white font-bold bg-deepblue hover:bg-white hover:text-deepblue hover:border hover:border-deepblue duration-700">
                View Details
                <ExternalLink className="w-3 h-3" />
              </button>
              <button
                onClick={() => window.open(item.links.github, '_blank')}
                className="flex items-center justify-center p-2 border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors">
                <Github className="w-4 h-4" />
              </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Highlights;