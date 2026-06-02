import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { Layout } from "@/components/sanixor/Layout";
import { GlassCard } from "@/components/sanixor/GlassCard";

// Products Data
const products = [
  {
    title: "HackEval",
    status: "Live",
    description: "The only agent-powered hackathon evaluation platform.",
    features: [
      "Agent-based PPT evaluator — automated scoring with rubric intelligence",
      "GitHub Agent — complete code analysis, dependency mapping, quality scoring",
      "Automated leaderboard, team panel & judge panel — zero manual overhead",
      "Supports any AI-themed event with structured evaluation pipelines",
    ],
    cta: "Learn more →",
    highlight: "95%+ Code Analysis Accuracy",
  },
  {
    title: "BitBenchmark",
    status: "Live",
    description: "Your complete developer progress dashboard.",
    features: [
      "Full GitHub profile analysis — commits, quality, consistency",
      "LeetCode performance tracking & pattern insights",
      "Codeforces integration — coming soon",
      'AI-powered search: "why am I stuck?" answered with a plan',
    ],
    cta: "View Dashboard →",
    highlight: "Track Your Progress",
  },
  {
    title: "Sanixor Studio - Story",
    status: "Live",
    description:
      "One prompt. A fully generated story, complete with characters, arc, and world-building.",
    features: [
      "Story generation from a single prompt",
      "Custom anime character creation",
      "Narrative structure & scene writing",
    ],
    cta: "Learn more →",
    highlight: "Create Stories Instantly",
  },
  {
    title: "Sanixor Studio - Image",
    status: "Live",
    description: "Bi-directional image intelligence.",
    features: [
      "Image to Prompt reverse engineering",
      "Prompt to Image generation",
      "AI vs Real image detection engine",
    ],
    cta: "Learn more →",
    highlight: "Detect AI-Generated Images",
  },
  {
    title: "LexAI by Sanixor",
    status: "Live",
    description: "Constitutional AI for legal professionals.",
    features: [
      "GST & criminal law specialisation",
      "Constitutional chatbot with citation",
      "Built for practising lawyers",
    ],
    cta: "Learn more →",
    highlight: "Legal Research, Redefined",
  },
  {
    title: "AgentVerse 2.0",
    status: "Live",
    description: "India's only agent-exclusive AI event.",
    features: [
      "Agent-Based Only",
      "College Collaboration",
      "Open to All",
      "Institutional Partnership",
    ],
    cta: "Register Your College →",
    highlight: "6 AI Agent Products",
  },
];

// Services Data
const services = [
  {
    title: "Agent as a Service",
    description:
      "Deploy a Sanixor-built AI agent into your product, workflow, or event. We handle the architecture, fine-tuning, and integration — you get a working agent from day one. No vague roadmaps, no pilots that go nowhere.",
    features: ["API Integration", "Event Automation", "Custom Workflows", "Managed Hosting"],
  },
  {
    title: "Custom Agent Development",
    description:
      "Have a problem that needs a tailored AI solution? We scope, design, and build custom agents specific to your domain — whether it's legal, educational, financial, or technical. Full handover with documentation.",
    features: ["Domain-Specific", "Full Ownership", "Docs & Handover"],
  },
];

// Learning Tracks
const learningTracks = [
  {
    title: "Transformer Architecture Deep Dives",
    description:
      "Attention mechanisms, positional encodings, multi-head attention — explained at the implementation level, not the blog-post level.",
  },
  {
    title: "Agent System Design",
    description:
      "How to architect multi-agent systems, tool use, memory management, and orchestration loops that don't break in production.",
  },
  {
    title: "LLM Internals & Evaluation",
    description:
      "RLHF, fine-tuning, RAG pipelines, benchmarking — the concepts that separate engineers who understand the stack from those who don't.",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 -right-32 h-80 w-80 rounded-full bg-accent/10 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <div className="relative mx-auto max-w-6xl px-6 pt-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-medium mb-8">
              🤖 Agent-First AI Platform
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Intelligence
              <br />
              <span className="text-gradient">Built to Deploy.</span>
            </h1>

            <p className="mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground mb-10">
              From code analysis to legal research — Sanixor AI builds production-grade AI agents
              that actually work, for students, developers, and institutions.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <a
                href="#products"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Explore Products <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#early-access"
                className="inline-flex items-center gap-3 rounded-full glass px-8 py-4 text-base font-semibold transition-all duration-300 hover:scale-105"
              >
                <span>Learn More</span>
              </a>
            </div>

            {/* Key Stats */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient">95%+</div>
                <div className="text-sm text-muted-foreground mt-2">Code Analysis Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient">6</div>
                <div className="text-sm text-muted-foreground mt-2">AI Agent Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient">Real</div>
                <div className="text-sm text-muted-foreground mt-2">No Fake Promises</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary mb-4">
            Products
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Every tool is an AI agent.</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Six purpose-built AI products — each solving a real problem with real accuracy, not
            demo-mode results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, idx) => (
            <GlassCard key={idx} className="flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                    {product.status}
                  </span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4 flex-grow">{product.description}</p>

              <ul className="space-y-2 mb-6">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {product.highlight && (
                <div className="mb-4 p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <p className="text-xs font-medium text-primary">{product.highlight}</p>
                </div>
              )}

              <a
                href="#"
                className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:text-primary-foreground transition-colors"
              >
                {product.cta}
                <ChevronRight className="h-4 w-4" />
              </a>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary mb-4">
            Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Agents, on demand.</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We don't just build our own agents — we build yours. Fully customised, production-ready,
            and actually deployed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <GlassCard key={idx}>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary mb-4">
              Institutional
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">AgentVerse 2.0</h2>
            <p className="text-lg text-muted-foreground mb-6">
              India's only agent-exclusive AI event. Open to all students and colleges —
              collaborate, compete, and build real agents. We partner directly with institutions. No
              entry-level fluff, only production-grade agent challenges.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                "Agent-Based Only",
                "College Collaboration",
                "Open to All",
                "Institutional Partnership",
              ].map((item, i) => (
                <span key={i} className="flex items-center gap-2 text-muted-foreground">
                  <Check className="h-4 w-4 text-primary" />
                  {item}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:shadow-glow"
              >
                Register Your College →
              </a>
              <a
                href="#"
                className="rounded-full glass px-6 py-3 font-medium transition-all hover:scale-105"
              >
                View Details
              </a>
            </div>
          </div>
          <GlassCard className="text-center">
            <p className="text-6xl font-bold text-gradient mb-2">2.0</p>
            <p className="text-muted-foreground mb-8">Season Two · Coming Soon</p>
            <div className="space-y-2">
              <p className="font-semibold text-lg">Agents Only</p>
              <p className="text-sm text-muted-foreground">No traditional hackathon categories</p>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Learning Section */}
      <section id="learn" className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary mb-4">
            Reading & Learning
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Architecture-level AI fundamentals.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Not tutorials. Not shallow overviews. Deep, engineering-grade content on how AI systems
            actually work — written for people who want to build, not just use.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {learningTracks.map((track, idx) => (
            <GlassCard key={idx}>
              <h3 className="text-xl font-semibold mb-3">{track.title}</h3>
              <p className="text-muted-foreground">{track.description}</p>
            </GlassCard>
          ))}
        </div>

        <div className="glass-strong rounded-3xl p-12 md:p-16 text-center">
          <h3 className="text-3xl font-bold mb-4">Industry Readiness Tracks</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Structured learning paths aligned to what top companies actually hire for — built with
            1st and 2nd year engineering students in mind.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground transition-all hover:shadow-glow"
          >
            Start building with Sanixor AI today <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="early-access" className="mx-auto max-w-6xl px-6 py-20">
        <div className="glass-strong rounded-[3rem] p-12 md:p-16 text-center shadow-elegant relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Real agents. Real accuracy. Real results.
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto text-lg">
              For students, institutions, and developers.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow transition-all hover:scale-105"
            >
              Open Sanixor.space <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
