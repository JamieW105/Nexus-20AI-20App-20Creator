import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Code,
  Sparkles,
  Zap,
  Globe,
  Palette,
  Bot,
  Github,
  Chrome,
  Smartphone,
} from "lucide-react";

export default function LandingPage() {
  const [promptValue, setPromptValue] = useState("");

  const features = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI-Powered Generation",
      description:
        "Generate full-stack web apps with natural language prompts using DeepSeek, Gemini, Claude, and Grok.",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Live Code Editor",
      description:
        "Monaco-powered editor with syntax highlighting, auto-completion, and real-time collaboration.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Instant Preview",
      description:
        "See your changes in real-time with our live preview engine and one-click deployment.",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Visual Design Tools",
      description:
        "Click-to-edit interface with AI-assisted design generation and component libraries.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description:
        "Built for speed with hot reloading, instant saves, and optimized build processes.",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Smart Integrations",
      description:
        "Connect with GitHub, Vercel, Supabase, and more with one-click integrations.",
    },
  ];

  const techStack = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "📘" },
    { name: "Tailwind", icon: "🎨" },
    { name: "Node.js", icon: "💚" },
    { name: "Vercel", icon: "🔺" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated cosmic background */}
      <div className="absolute inset-0 cosmic-bg">
        <div className="absolute inset-0">
          {/* Animated particles */}
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cosmic-cyan rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${20 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 glass border-b border-cosmic-purple/20 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-cosmic rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-glow">AI Builder</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-cosmic-white/80 hover:text-cosmic-white transition-colors"
            >
              Features
            </a>
            <a
              href="#integrations"
              className="text-cosmic-white/80 hover:text-cosmic-white transition-colors"
            >
              Integrations
            </a>
            <a
              href="#pricing"
              className="text-cosmic-white/80 hover:text-cosmic-white transition-colors"
            >
              Pricing
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/signin">
              <Button
                variant="ghost"
                className="text-cosmic-white hover:bg-cosmic-purple/20 glow-purple"
              >
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="gradient-cosmic hover:gradient-cosmic-hover glow-purple">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 text-glow">
              Build with AI.{" "}
              <span className="bg-gradient-to-r from-cosmic-purple to-cosmic-cyan bg-clip-text text-transparent">
                Instantly.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-cosmic-white/80 mb-12 leading-relaxed">
              The next-generation AI-powered web development platform. Create,
              edit, and deploy full-stack applications with natural language.
            </p>

            {/* Prompt Input */}
            <div className="max-w-2xl mx-auto mb-16">
              <div className="glass-purple rounded-2xl p-6 glow-purple">
                <div className="flex items-center space-x-4">
                  <Sparkles className="w-6 h-6 text-cosmic-cyan animate-pulse" />
                  <Input
                    placeholder="Describe your app idea... e.g., 'Create a task manager with dark mode'"
                    value={promptValue}
                    onChange={(e) => setPromptValue(e.target.value)}
                    className="bg-transparent border-none text-cosmic-white placeholder-cosmic-white/50 text-lg focus:ring-0"
                  />
                  <Link to="/signup">
                    <Button className="gradient-cosmic hover:gradient-cosmic-hover px-8">
                      Build Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {techStack.map((tech, index) => (
                <div
                  key={tech.name}
                  className="glass rounded-full px-4 py-2 flex items-center space-x-2 cosmic-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-lg">{tech.icon}</span>
                  <span className="text-cosmic-white/90">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
              Powerful Features
            </h2>
            <p className="text-xl text-cosmic-white/80 max-w-2xl mx-auto">
              Everything you need to build modern web applications, powered by
              cutting-edge AI technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="glass-purple rounded-2xl p-8 cosmic-hover group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-cosmic-cyan mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-cosmic-white">
                  {feature.title}
                </h3>
                <p className="text-cosmic-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section id="integrations" className="relative z-10 py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
              Seamless Integrations
            </h2>
            <p className="text-xl text-cosmic-white/80 max-w-2xl mx-auto">
              Connect with your favorite tools and services with one-click
              integrations.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                name: "GitHub",
                icon: <Github className="w-8 h-8" />,
                desc: "Version control & collaboration",
              },
              {
                name: "Vercel",
                icon: <Globe className="w-8 h-8" />,
                desc: "Instant deployment",
              },
              {
                name: "Supabase",
                icon: <Zap className="w-8 h-8" />,
                desc: "Backend & database",
              },
              {
                name: "Chrome",
                icon: <Chrome className="w-8 h-8" />,
                desc: "Browser testing",
              },
            ].map((integration, index) => (
              <div
                key={integration.name}
                className="glass text-center p-8 rounded-2xl cosmic-hover group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-cosmic-cyan mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {integration.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-cosmic-white">
                  {integration.name}
                </h3>
                <p className="text-cosmic-white/60 text-sm">
                  {integration.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="glass-purple rounded-3xl p-16 glow-purple max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
              Ready to Build the Future?
            </h2>
            <p className="text-xl text-cosmic-white/80 mb-8 max-w-2xl mx-auto">
              Join thousands of developers building next-generation applications
              with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button
                  size="lg"
                  className="gradient-cosmic hover:gradient-cosmic-hover glow-purple px-8"
                >
                  Start Building Free
                </Button>
              </Link>
              <Link to="/signin">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-cosmic-purple text-cosmic-white hover:bg-cosmic-purple/20"
                >
                  View Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-cosmic-purple/20 py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-gradient-cosmic rounded flex items-center justify-center">
                  <Code className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-cosmic-white">AI Builder</span>
              </div>
              <p className="text-cosmic-white/60 text-sm">
                The next-generation AI-powered web development platform.
              </p>
            </div>

            {[
              {
                title: "Product",
                links: ["Features", "Pricing", "Integrations", "Documentation"],
              },
              {
                title: "Company",
                links: ["About", "Blog", "Careers", "Contact"],
              },
              {
                title: "Resources",
                links: ["Help Center", "Community", "Tutorials", "API Docs"],
              },
            ].map((column) => (
              <div key={column.title}>
                <h3 className="font-semibold text-cosmic-white mb-4">
                  {column.title}
                </h3>
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-cosmic-white/60 hover:text-cosmic-white text-sm transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-cosmic-purple/20 mt-12 pt-8 text-center">
            <p className="text-cosmic-white/60 text-sm">
              © 2024 AI Builder. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
