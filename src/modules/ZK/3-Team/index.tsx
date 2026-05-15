import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Star, Award, Shield, ChevronRight, X } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: "teddav",
    tagline: "MPC Guru",
    avatar: "https://avatars.githubusercontent.com/teddav",
    specializations: ["noir", "co-snarks", "halo2", "multi-party computation", "vole-zk", "binius"],
    background: "DevSecOps for Big Tech",
    tech: "solidity, rust, defi protocols, assembly, wasm, yul",
    achievements: [
      "Finished first in Epoch 0 Secureum",
      "Top fellow in Electi's 2nd ZK Security fellowship",
      "Found soundness error in Halo2 lookup-any API",
      "PSE grant recipient for halo2-soundness bugs"
    ],
    social: {
      github: "https://github.com/teddav",
      x: "https://x.com/teddav"
    },
    blogs: [
      {
        name: "Binius Blog Series",
        description: "Comprehensive series on extension fields, Reed-Solomon, FRI, sumcheck, GKR",
        link: "https://blog.yaudit.dev/binius-1-extension-fields"
      }
    ],
    keyProjects: [
      {
        name: "halo2-starter",
        description: "Advanced testing techniques with malicious prover emulation",
        link: "https://github.com/teddav/halo2-starter"
      },
      {
        name: "zk-tenant",
        description: "Verify 2D-Doc documents for housing applications without revealing excess info",
        link: "https://github.com/teddav/zk-tenant"
      },
      {
        name: "co-match",
        description: "Match discovery via secure MPC using TACEO's co-snarks",
        link: "https://github.com/teddav/co-match.noir"
      },
      {
        name: "Noir WebProof SDK",
        description: "Main Track Proposal Grantee for Noir development tools",
        link: "https://github.com/orgs/noir-lang/discussions/8595"
      },
      {
        name: "stark_by_hand",
        description: "SageMath implementation of STARK",
        link: "https://github.com/teddav/stark_by_hand"
      },
      {
        name: "fri_sage", 
        description: "FRI protocol implementation in SageMath",
        link: "https://github.com/teddav/fri_sage"
      },
      {
        name: "sumcheck-article",
        description: "Sumcheck protocol implementation and article",
        link: "https://github.com/teddav/sumcheck-article"
      }
    ]
  },
  {
    id: 2,
    name: "qpzm",
    tagline: "Rusty Bug Huntoor",
    avatar: "https://avatars.githubusercontent.com/qpzm",
    specializations: ["Noir", "Ultra Honk", "zkTLS", "Compilers"],
    background: "Bachelor's in Economics and CS, Seoul National University. Previously Solidity developer at Elysia (RWA platform)",
    tech: "noir, zk-SNARKs, solidity, Y86-64 Assembly, rust",
    achievements: [
      "Top 10 in 8 Sherlock audit contests",
      "1st place in Secureum's 34th, 36th race",
      "2 HIGH + 1 MEDIUM findings in his first ZK audit of PoR Protocol",
      "Noir WebProof SDK Grantee",
      "3rd place in EigenLayer track at Uniswap Hackathon"
    ],
    social: {
      github: "https://github.com/qpzm",
      x: "https://x.com/qpzmly",
      sherlock: "https://audits.sherlock.xyz/watson/qpzm"
    },
    keyProjects: [
      {
        name: "semaphore.nr",
        description: "PSE semaphore implementation in Noir",
        link: "https://github.com/ModoriLabs/semaphore.nr"
      },
      {
        name: "Genie",
        description: "zk-TLS based on-ramp system bridging Web2 payments to on-chain assets",
        link: "https://github.com/ModoriLabs/pluto-legacy-web-prover"
      },
      {
        name: "waveX",
        description: "Crypto perpetual DEX on Soneium chain",
        link: "https://wavex.fi/"
      },
      {
        name: "RwAsync",
        description: "Uniswap Hook for on-demand RWA minting/redemption",
        link: "https://www.notion.so/1565f0444abe81e4b866f45307cfeb6e?pvs=21"
      },
      {
        name: "Y86-64 Simulator",
        description: "64-bit processor simulator and toolchain development at SNU DaVINCI Lab"
      },
      {
        name: "Aztec UltraHonk Verifier",
        description: "Research on Aztec's verification system",
        link: "https://github.com/orgs/noir-lang/discussions/8560"
      }
    ]
  },
  {
    id: 3,
    name: "Oba",
    tagline: "Low-level Junkie", 
    avatar: "https://avatars.githubusercontent.com/obatirou",
    specializations: ["Multi-Party Computation", "zkEVM", "Privacy Protocols", "Elliptic Curve Cryptography"],
    background: "Software engineer in data harvesting for cybersecurity with microservice architecture. Smart Contract Dev for 3 years, now Core developer at Kakarot zkEVM.",
    tech: "Cairo, Huff, Rust, Python, EVM, Starknet",
    achievements: [
      "Core developer on Kakarot zkEVM & cairo-m",
      "Electi ZK Security Resident and Mentor", 
      "Authored RFC6979 vulnerability analysis",
      "Collaborated with Code4rena, Pashov, Trail of Bits, Zellic",
      "SEAL911 vulnerability research contributor"
    ],
    social: {
      github: "https://github.com/obatirou",
      x: "https://x.com/obatirou",
      website: "https://obatirou.xyz/"
    },
    keyProjects: [
      {
        name: "kakarot",
        description: "EVM emulator on Starknet in Cairo",
        link: "https://github.com/kkrt-labs/kakarot"
      },
      {
        name: "cairo-m",
        description: "Custom CPU AIR targeting M31 prime field",
        link: "https://github.com/kkrt-labs/cairo-m"
      },
      {
        name: "P256Signer",
        description: "WebAuthn signature verification (EIP-1271) with FreshCryptoLib",
        link: "https://github.com/cometh-hq/p256-signer"
      },
      {
        name: "RLN Audit",
        description: "Rate Limiting Nullifier security audit",
        link: "https://github.com/electisec/RLN-audit-report"
      },
      {
        name: "Spartan ECDSA Audit",
        description: "ECDSA implementation security review",
        link: "https://github.com/electisec/spartan-ecdsa-audit-report"
      },
      {
        name: "Summa Audit",
        description: "Mentored security audit of Summa protocol",
        link: "https://github.com/electisec/summa-audit-report"
      },
      {
        name: "RFC6979 Analysis",
        description: "ECDSA hash reduction vulnerability analysis",
        link: "https://github.com/obatirou/RFC6979-implementation-analysis"
      },
    ],
    blogs: [
      {
        name: "SEAL911 Blog",
        description: "Deep dive into RFC6979 vulnerability across crypto libraries",
        link: "https://blog.yaudit.dev/from-failing-test-to-calling-911"
      }
    ]
  },
  {
    id: 4,
    name: "Flying Nobita",
    tagline: "THE Researcher",
    avatar: "https://avatars.githubusercontent.com/flyingnobita",
    specializations: ["applied cryptography", "GKR", "SP1", "Halo2", "BLS signatures", "AI", "RISC0"],
    background: "Traditional finance quant and engineer turned crypto technologist (ex-hedge fund CTO, CFA, FRM)",
    tech: "Rust, Python, WASM",
    achievements: [
      "Aleo Hackathon Winner & Ignition Grantee (Onchain VRF with Leo)",
      "Completed Berkeley ZKP MOOC (Legendary Tier)",
      "Axiom Open Source Program - implementing BLS signatures on BN254 and BLS12-381 in Halo2",
      "Dual Winner (Arbitrum & Optimism awards) at ETHGlobal Scaling Ethereum Hackathon",
      "1st Place & Best UX Award at Techstars Global Startup Weekend (AI track)"
    ],
    social: {
      github: "https://github.com/flyingnobita",
      x: "https://x.com/FlyingNobita"
    },
    blogs: [
      {
        name: "A Gentle Introduction to ProgCrypto",
        description: "Introduction to programmable cryptography concepts",
        link: "https://flyingnobita.com/posts/2025/03/12/progcrypto-garbled-circuit"
      },
      {
        name: "Plonkathon (0xPARC) Exercises",
        description: "Hands-on exercises for learning PLONK from 0xPARC's Plonkathon",
        link: "https://flyingnobita.com/posts/2025/03/12/plonkathon"
      }
    ],
    keyProjects: [
      {
        name: "Verifier Validation Registry",
        description: "Proposal to allows users to quickly check the validity of zero-knowledge proof (ZKP) verifiers",
        link: ""
      },
      {
        name: "Onchain VRF",
        description: "Onchain Verifiable Random Function using Leo",
        link: ""
      },
      {
        name: "halo2-lib",
        description: "Add BLS signature verification for BN254",
        link: "https://github.com/flyingnobita/halo2-lib"
      },
      {
        name: "halo2curves",
        description: "Implement curve BLS12-381",
        link: "https://github.com/flyingnobita/halo2curves"
      },
      {
        name: "zkvote",
        description: "Anonymous voting using Semaphore + Polygon ID",
        link: "https://github.com/flyingnobita/zkvote"
      },
      {
        name: "halo2-wasm-demo",
        description: "Compile Halo2 circuits into WebAssembly for React apps",
        link: "https://github.com/flyingnobita/halo2-wasm-demo"
      },
      {
        name: "nft-zk",
        description: "Mint AI-generated Kanji NFTs with zero-knowledge proofs",
        link: "https://github.com/flyingnobita/nft-zk"
      }
    ]
  },
  {
    id: 5,
    name: "nullity",
    tagline: "Threat nullifier",
    avatar: "https://avatars.githubusercontent.com/nullity00",
    specializations: ["zero-knowledge proofs", "Circom", "Noir", "Halo2", "Bellman", "Plonky2", "Ethereum"],
    background: "Math graduate and former MERN-stack developer focused on ZK research (yAcademy)",
    tech: "Circom, Noir, Rust, JavaScript, Python",
    achievements: [
      "Authored zk-security-reviews (229★) for ZK protocol audits",
      "Contributed to security review of Summa protocol (yAcademy ZK Audit)",
      "Implemented batch ECDSA verification circuits (Circom)"
    ],
    social: {
      github: "https://github.com/nullity00",
      x: "https://x.com/nullity00"
    },
    blogs: [],
    keyProjects: [
      {
        name: "zk-security-reviews",
        description: "Collection of security reviews of ZK protocols",
        link: "https://github.com/nullity00/zk-security-reviews"
      },
      {
        name: "summa-audit-report",
        description: "Security review of Summa solvency protocol",
        link: "https://github.com/electisec/summa-audit-report"
      },
      {
        name: "batch-ecdsa-secp256r1",
        description: "Batch ECDSA signature verification (P-256) circuits",
        link: "https://github.com/nullity00/batch-ecdsa-secp256r1"
      },
      {
        name: "circom-circuits",
        description: "Bitwise operations library in Circom",
        link: "https://github.com/nullity00/circom-circuits"
      }
    ]
  }
];

function DreamTeamSection() {
  const [selectedMember, setSelectedMember] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isUserClicked, setIsUserClicked] = useState<boolean>(false);

  // Auto-cycle through team members
  useEffect(() => {
    if (!isHovered && !isUserClicked) {
      const interval = setInterval(() => {
        setSelectedMember(prev => (prev + 1) % teamMembers.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isHovered, isUserClicked]);

  const handleMemberHover = (index: number, hovering: boolean) => {
    setIsHovered(hovering);
    if (hovering) {
      setSelectedMember(index);
    }
  };

  const handleMemberClick = (index: number) => {
    setSelectedMember(index);
    setIsUserClicked(true);
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            ZK Security Team
          </h2>
          <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
            ZK Circuit breakers, MPC Specialists, FHE experts, TEE geeks, seasoned Rustaceans and Cryptography connoisseurs
          </p>
        </div>

        {/* Team Member Selection - Horizontal */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className={`w-32 sm:w-40 p-2 sm:p-3 border-2 transition-all duration-500 cursor-pointer hover:-translate-y-1 ${
                  selectedMember === index
                    ? 'border-deepblue '
                    : 'border-gray-200 bg-white hover:border-deepblue'
                }`}
                onMouseEnter={() => handleMemberHover(index, true)}
                onMouseLeave={() => handleMemberHover(index, false)}
                onClick={() => handleMemberClick(index)}
              >
                <div className="flex flex-col items-center gap-1 sm:gap-2">
                  <div className="relative">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gray-200"
                    />
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xs sm:text-sm font-bold text-gray-900 truncate w-full">{member.name}</h3>
                    <p className="text-xs text-deepblue font-medium italic truncate w-full">{member.tagline}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Member View - Full Width */}
        <div>
          <div
            className="p-4 sm:p-6 border border-zinc-100"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {selectedMember !== null && (
              <div>
                {/* Header - Compact */}
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <img
                    src={teamMembers[selectedMember].avatar}
                    alt={teamMembers[selectedMember].name}
                    className="w-16 h-16 sm:w-12 sm:h-12 rounded-full border-2 border-white shadow-lg"
                  />
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      {teamMembers[selectedMember].name}
                    </h3>
                    <p className="text-deepblue font-medium italic">{teamMembers[selectedMember].tagline}</p>
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex gap-3 mt-2 sm:mt-0">
                    <a
                      href={teamMembers[selectedMember].social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-75 transition-opacity"
                    >
                      <Github className="w-5 h-5 sm:w-4 sm:h-4 text-gray-700" />
                    </a>
                    <a
                      href={teamMembers[selectedMember].social.x}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-75 transition-opacity"
                    >
                      <X className="w-5 h-5 sm:w-4 sm:h-4 text-gray-700" />
                    </a>
                    {teamMembers[selectedMember].social.website && (
                      <a
                        href={teamMembers[selectedMember].social.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-75 transition-opacity"
                      >
                        <ExternalLink className="w-5 h-5 sm:w-4 sm:h-4 text-deepblue" />
                      </a>
                    )}
                    {teamMembers[selectedMember].social.sherlock && (
                      <a
                        href={teamMembers[selectedMember].social.sherlock}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-75 transition-opacity"
                      >
                        <Shield className="w-5 h-5 sm:w-4 sm:h-4 text-deepblue" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  {/* Left Column */}
                  <div className="space-y-4 sm:space-y-6">
                    {/* Background & Tech */}
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed mb-2">
                        <strong>Background:</strong> {teamMembers[selectedMember].background}
                      </p>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>Tech Stack:</strong> {teamMembers[selectedMember].tech}
                      </p>
                    </div>

                    {/* Specializations */}
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Specializations:</h4>
                      <div className="flex flex-wrap gap-1">
                        {teamMembers[selectedMember].specializations.map((spec, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 text-deepblue text-xs font-medium border border-deepblue"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Achievements */}
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {teamMembers[selectedMember].achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Award className="w-4 h-4 text-deepblue mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Blogs */}
                    {teamMembers[selectedMember].blogs && (
                      <div>
                        <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Blogs & Articles:</h4>
                        <div className="space-y-1">
                          {teamMembers[selectedMember].blogs.map((blog, idx) => (
                            <div key={idx} className="flex items-center justify-between p-2 transition-colors">
                              <div className="flex-1 min-w-0">
                                <h5 className="font-medium text-gray-900 text-sm truncate">{blog.name}</h5>
                                <p className="text-gray-600 text-xs truncate">{blog.description}</p>
                              </div>
                              {blog.link && (
                                <a
                                  href={blog.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="ml-2 text-deepblue hover:text-deepblue flex-shrink-0"
                                >
                                  <ExternalLink className="w-3 h-3" />
                                </a>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column - Projects */}
                  <div className="mt-4 lg:mt-0">
                    <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Key Projects:</h4>
                    <div className="space-y-1">
                      {teamMembers[selectedMember].keyProjects?.slice(0, 10).map((project, idx) => (
                        <div key={idx} className="flex items-center justify-between p-2 transition-colors">
                          <div className="flex-1 min-w-0">
                            <h5 className="font-medium text-gray-900 text-sm truncate">{project.name}</h5>
                            <p className="text-gray-600 text-xs truncate">{project.description}</p>
                          </div>
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ml-2 text-deepblue hover:text-deepblue flex-shrink-0"
                            >
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Want to work with ZK experts?
          </h3>
          <div className="flex flex-row sm:flex-col gap-4 justify-center">
            <button
              className="px-8 py-3 font-semibold text-white bg-deepblue hover:bg-white hover:text-deepblue hover:border hover:border-deepblue duration-700"
              onClick={() => window.location.href = '/contact-us'}
            >
              Schedule Team Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DreamTeamSection;