"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, Presentation, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "AI-Powered Creation",
    description:
      "Transform your ideas into visually stunning slides in seconds",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Smart Generation",
    description: "Let AI handle the design while you focus on the content",
  },
  {
    icon: <Presentation className="w-6 h-6" />,
    title: "Premium Templates",
    description: "Access hundreds of professionally designed templates",
  },
];

const useCases = [
  "Business Presentations",
  "Sales Pitches",
  "Educational Content",
  "Project Updates",
  "Marketing Decks",
  "Research Presentations",
];

export default function Page() {
  return (
    <div className="min-h-screen bg-[#000000] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/5">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">Slidely</div>
          <div className="space-x-8">
            <Link
              href="/features"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              Pricing
            </Link>
            <Button
              variant="outline"
              className="border-white/10 hover:bg-white hover:text-black transition-colors"
              asChild
            >
              <Link href="/sign-in">Sign In</Link>
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Gradient Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-purple-500/20 via-transparent to-transparent blur-[120px]" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-blue-500/20 via-transparent to-transparent blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
              Create Stunning
              <span className="block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                AI-Powered Presentations
              </span>
            </h1>
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
              Transform your ideas into professional presentations in minutes.
              No design skills needed.
            </p>
            <div className="flex gap-6 justify-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 transition-colors px-8 py-6 text-lg rounded-full"
                asChild
              >
                <Link href="/sign-in">Get Started Free</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/10 hover:bg-white/5 transition-colors px-8 py-6 text-lg rounded-full"
                asChild
              >
                <Link href="/sign-in">Watch Demo</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Everything you need to create professional presentations in
              minutes
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-b from-white/[0.08] to-transparent border border-white/[0.08] backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="text-blue-400 mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-white/60">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Perfect For</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="p-4 rounded-lg border border-gray-800 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {useCase}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto p-8 rounded-xl bg-black/50 border border-white/10 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-center mb-2">Pro Plan</h3>
            <div className="text-4xl font-bold text-center mb-6">
              $59<span className="text-xl text-white/60">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                "Unlimited AI Presentations",
                "Premium Templates",
                "Custom Branding",
                "Advanced Analytics",
                "Priority Support",
              ].map((feature, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              className="w-full bg-white text-black hover:bg-white/90 transition-colors"
              asChild
            >
              <Link href="/sign-in">Get Started Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-8">
            Ready to Transform Your Presentations?
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Join thousands of professionals creating stunning presentations with
            AI
          </p>
          <Button
            size="lg"
            className="bg-white text-black hover:bg-white/90 transition-colors px-8 py-6 text-lg rounded-full"
            asChild
          >
            <Link href="/sign-in">Start Creating Now</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div>
              <h4 className="font-semibold mb-6">Product</h4>
              <ul className="space-y-4 text-white/60">
                <li>
                  <Link
                    href="/features"
                    className="hover:text-white transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="hover:text-white transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/templates"
                    className="hover:text-white transition-colors"
                  >
                    Templates
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6">Company</h4>
              <ul className="space-y-4 text-white/60">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="hover:text-white transition-colors"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6">Resources</h4>
              <ul className="space-y-4 text-white/60">
                <li>
                  <Link
                    href="/docs"
                    className="hover:text-white transition-colors"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/help"
                    className="hover:text-white transition-colors"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/guides"
                    className="hover:text-white transition-colors"
                  >
                    Guides
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6">Legal</h4>
              <ul className="space-y-4 text-white/60">
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-white transition-colors"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="hover:text-white transition-colors"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href="/security"
                    className="hover:text-white transition-colors"
                  >
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-white/5 text-center text-white/40">
            © {new Date().getFullYear()} Slidely. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
