import React, { useState, useEffect } from 'react';
import { Shield, Award, Users, Zap, CheckCircle, ArrowRight, ExternalLink, Calendar, DollarSign, AlertTriangle, Star, Target, Microscope, Brain } from 'lucide-react';

// Boosted audit data
const boostedAudits = [
  {
    id: 1,
    name: "RLN",
    title: "Rate Limiting Nullifier Protocol",
    client: "Privacy & Scaling Explorations",
    findings: 8,
    severity: "circom",
    methodology: "Formal Verification + Fellowship Review",
    specialFeatures: ["Underconstrained Circuit Detection", "Formal Mathematical Proofs", "Differential Testing"],
    category: "Privacy Protocol",
    reportLink: "https://reports.yaudit.dev/2023-06-RLN"
  },
  {
    id: 2,
    name: "Spartan ECDSA",
    title: "Elliptic Curve Anonymous Signature Aggregation",
    client: "Persona Labs",
    severity: "circom",
    methodology: "Multi-Expert Fellowship + Advanced Tooling",
    specialFeatures: ["8+ Expert Review", "Custom Vulnerability Detection", "Property-Based Testing"],
    category: "Signature Scheme",
    reportLink: "https://reports.yaudit.dev/2023-06-Spartan-ECDSA"
  },
  {
    id: 3,
    name: "Summa Solvency Version A",
    title: "Proof of Solvency Protocol",
    client: "PSE",
    severity: "Halo2",
    methodology: "Collaborative Verification + Code Analysis",
    specialFeatures: ["Design Bug Detection", "End-to-End Security", "Zkvm Integration Testing"],
    category: "Financial Protocol",
    reportLink: "https://reports.yaudit.dev/2024-05-Summa-Va"
  },
  {
    id: 4,
    name: "Summa Solvency Version B",
    title: "Proof of Solvency Protocol",
    client: "PSE",
    severity: "Halo2",
    methodology: "Fellowship-Powered Analysis",
    specialFeatures: ["Privacy Property Verification", "Anonymity Set Analysis", "Soundness Proofs"],
    category: "Governance",
    reportLink: "https://reports.yaudit.dev/2024-05-Summa-Vb"
  }
];

// What makes audits "boosted"
const boostedFeatures = [
  {
    icon: <Users className="w-8 h-8 text-deepblue" />,
    title: "Fellowship-Powered",
    description: "8+ ZK specialists review each circuit vs typical 1-2 auditor teams",
    details: [
      "200+ fellowship alumni network",
      "Cross-validation by multiple experts",
      "Collaborative bug hunting sessions",
      "Peer review of all findings"
    ]
  },
  {
    icon: <Microscope className="w-8 h-8 text-deepblue" />,
    title: "Advanced Formal Verification",
    description: "Mathematical proofs of circuit correctness beyond traditional testing",
    details: [
      "Complete formal verification of zkVM instructions",
      "Property-based testing for soundness",
      "Differential testing against reference implementations", 
      "Automated constraint analysis"
    ]
  },
  {
    icon: <Brain className="w-8 h-8 text-deepblue" />,
    title: "Custom Security Tooling",
    description: "Proprietary tools for detecting ZK-specific vulnerabilities",
    details: [
      "Underconstrained circuit detection (90% accuracy)",
      "Design bug identification algorithms",
      "Cryptographic primitive verification",
      "End-to-end protocol analysis"
    ]
  },
  {
    icon: <Target className="w-8 h-8 text-deepblue" />,
    title: "Multi-Layer Analysis", 
    description: "Beyond circuits: protocol design, integration, and operational security",
    details: [
      "Protocol design security review",
      "Smart contract integration analysis",
      "Operational security assessment",
      "Privacy property verification"
    ]
  }
];

function BoostedAuditsSection() {
  const [selectedAudit, setSelectedAudit] = useState<number | null>(0);
  const [activeFeature, setActiveFeature] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Auto-hover through audit tabs
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setSelectedAudit(prev => {
          if (prev === null) return 0;
          return (prev + 1) % boostedAudits.length;
        });
      }, 4000); // Change every 4 seconds

      return () => clearInterval(interval);
    }
  }, [isHovered]);

  // Auto-cycle through features
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setActiveFeature(prev => (prev + 1) % boostedFeatures.length);
      }, 3000); // Change every 3 seconds

      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const handleAuditHover = (index: number, hovering: boolean) => {
    setIsHovered(hovering);
    if (hovering) {
      setSelectedAudit(index);
    }
  };

  const handleFeatureHover = (index: number, hovering: boolean) => {
    setIsHovered(hovering);
    if (hovering) {
      setActiveFeature(index);
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      // case 'Critical': return 'bg-red-100 text-red-700 border-red-200';
      // case 'High': return 'bg-orange-100 text-orange-700 border-orange-200';
      // case 'Medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default: return 'bg-deepblue bg-opacity-10 text-deepblue border-deepblue';
    }
  };

  return (
    <div className="py-16 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Boosted Audits
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Premium ZK security assessments with fellowship-powered depth, formal verification, 
            and cutting-edge tooling that traditional audits can't match.
          </p>
          
          {/* What are Boosted Audits CTA */}
          <button
            onClick={() => window.location.href = '/services'}
            className="inline-flex items-center gap-2 text-deepblue px-6 py-3 text-lg font-medium transition-colors cursor-pointer group border border-deepblue"
          >
            <Shield className="w-5 h-5" />
            <span>What are boosted audits?</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Featured Audits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
          {boostedAudits.map((audit, index) => (
            <div
              key={audit.id}
              className={`bg-white p-6 border-2 transition-all duration-500 cursor-pointer hover:-translate-y-1 ${
                selectedAudit === index
                  ? 'border-deepblue scale-105'
                  : 'border-gray-200 hover:border-deepblue'
              }`}
              onClick={() => setSelectedAudit(selectedAudit === index ? null : index)}
              onMouseEnter={() => handleAuditHover(index, true)}
              onMouseLeave={() => handleAuditHover(index, false)}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{audit.name}</h3>
              </div>

              {/* Content */}
              <p className="text-sm text-gray-600 mb-4">{audit.title}</p>
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs text-deepblue font-medium">{audit.client}</p>
                <div className="flex items-center gap-1">
                  <span className={`px-2 py-1 text-xs font-medium border ${getSeverityColor(audit.severity)}`}>
                    {audit.severity}
                  </span>
                </div>
              </div>
                <div className="grid grid-cols-1 w-full">
                <button
                  onClick={() => window.open(audit.reportLink, '_blank')}
                  className="flex items-center justify-center gap-2 px-6 py-3 text-base text-white font-bold bg-deepblue hover:bg-white hover:text-deepblue hover:border hover:border-deepblue duration-700"
                >
                  View Report
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                </div>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
}

export default BoostedAuditsSection;