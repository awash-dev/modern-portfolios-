"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Database, Server, Cpu, Terminal, Sparkles, Zap, Shield, Globe } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { TiltCard } from '@/components/ui/TiltCard';

export default function HomePage() {
  const stats = [
    { value: "4+", label: "Years Experience", icon: <Zap size={20} /> },
    { value: "50+", label: "Projects Completed", icon: <Terminal size={20} /> },
    { value: "30+", label: "Happy Clients", icon: <Globe size={20} /> },
    { value: "98.7%", label: "Satisfaction", icon: <Sparkles size={20} /> },
  ];

  const expertise = [
    {
      title: "Backend Architecture",
      desc: "Scalable systems with Go & Rust. High-concurrency masters.",
      icon: <Server className="text-blue-500" />,
    },
    {
      title: "Database Design",
      desc: "PostgreSQL, Redis, and custom ledger systems.",
      icon: <Database className="text-emerald-500" />,
    },
    {
      title: "API Systems",
      desc: "gRPC and REST APIs with advanced security.",
      icon: <Cpu className="text-purple-500" />,
    },
    {
      title: "Infrastructure",
      desc: "Cloud-native, Docker, and K8s expert deployment.",
      icon: <Shield className="text-orange-500" />,
    },
  ];

  return (
    <div className="relative isolate overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-[20%] w-[60%] h-[60%] bg-primary/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-secondary/5 blur-[120px] rounded-full" />
      </div>

      <div className="space-y-20 md:space-y-32 px-4 md:px-0">
        {/* Hero Section - Balanced for Mobile */}
        <section className="flex flex-col items-start space-y-10 pt-6 md:pt-12">
          <div className="space-y-6 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-surface border border-border text-[10px] font-black uppercase tracking-widest text-primary shadow-lg"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for new projects
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter italic leading-[0.9] uppercase"
            >
              ENGINEERING
              <br />
              <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-secondary">PERFORMANCE</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg md:text-xl text-text-secondary max-w-2xl font-medium leading-relaxed"
            >
              I&apos;m <span className="font-bold text-text-primary underline decoration-primary/40 underline-offset-4 decoration-2">Mohammed Hussen</span>.
              A Backend Architect focused on building high-concurrency systems using Go, Rust, and Next.js.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Link href="/projects" className="w-full sm:w-auto">
              <Button size="lg" className="w-full h-14 md:h-16 px-8 rounded-2xl gap-3 font-black uppercase tracking-widest text-[10px] group shadow-xl shadow-primary/20">
                View Selected Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full h-14 md:h-16 px-8 rounded-2xl font-black uppercase tracking-widest text-[10px] border-2">
                Get In Touch
              </Button>
            </Link>
          </motion.div>

          <motion.div
            className="w-full pt-16 border-t border-border/30 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-text-tertiary mb-10 px-4 md:px-0">Advanced Tech Stack</p>

            <div className="relative flex overflow-x-hidden group">
              <motion.div
                className="flex items-center gap-16 py-4 whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {[
                  { name: 'GO-LANG', icon: <Terminal size={20} /> },
                  { name: 'RUST', icon: <Cpu size={20} /> },
                  { name: 'BUN', icon: <Zap size={20} /> },
                  { name: 'FAST-API', icon: <Zap size={20} /> },
                  { name: 'NEST-JS', icon: <Server size={20} /> },
                  { name: 'EXPO', icon: <Globe size={20} /> },
                  { name: 'NEXT-JS', icon: <Globe size={20} /> },
                  { name: 'POSTGRES', icon: <Database size={20} /> },
                  { name: 'DOCKER', icon: <Shield size={20} /> },
                  { name: 'REDIS', icon: <Database size={20} /> },
                ].concat([
                  { name: 'GO-LANG', icon: <Terminal size={20} /> },
                  { name: 'RUST', icon: <Cpu size={20} /> },
                  { name: 'BUN', icon: <Zap size={20} /> },
                  { name: 'FAST-API', icon: <Zap size={20} /> },
                  { name: 'NEST-JS', icon: <Server size={20} /> },
                  { name: 'EXPO', icon: <Globe size={20} /> },
                  { name: 'NEXT-JS', icon: <Globe size={20} /> },
                  { name: 'POSTGRES', icon: <Database size={20} /> },
                  { name: 'DOCKER', icon: <Shield size={20} /> },
                  { name: 'REDIS', icon: <Database size={20} /> },
                ]).map((tech, i) => (
                  <div key={i} className="flex items-center gap-4 group/item">
                    <span className="text-primary/40 group-hover/item:text-primary transition-colors duration-500">
                      {tech.icon}
                    </span>
                    <span className="text-xl md:text-4xl font-black text-text-primary/10 hover:text-primary transition-all duration-500 cursor-default select-none tracking-tighter italic hover:scale-110">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Expertise with Pro Tilt */}
        <section className="space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter italic leading-none">Selected <br /><span className="text-primary italic">Expertise</span></h2>
              <p className="text-text-secondary text-sm md:text-xl font-medium uppercase tracking-widest">Architecting scalable solutions.</p>
            </div>
            <Link href="/tech" className="inline-flex w-fit text-[10px] font-black uppercase tracking-[0.2em] p-6 border border-border rounded-3xl hover:bg-surface transition-all items-center gap-3">
              Explore full stack <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item) => (
              <TiltCard
                key={item.title}
                className="h-full"
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="h-full"
                >
                  <Card className="h-full group hover:border-primary/50 transition-all duration-500 bg-surface/40 backdrop-blur-xl border border-white/5 rounded-4xl relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 blur-3xl rounded-full group-hover:bg-primary/20 transition-all" />
                    <CardHeader className="p-10">
                      <div className="w-14 h-14 rounded-2xl bg-background border border-white/10 flex items-center justify-center mb-8 group-hover:scale-125 group-hover:rotate-6 group-hover:bg-primary/10 transition-all duration-500 shadow-xl">
                        {item.icon}
                      </div>
                      <CardTitle className="mb-4 text-2xl group-hover:text-primary transition-colors italic uppercase tracking-tighter font-black">{item.title}</CardTitle>
                      <CardDescription className="leading-relaxed group-hover:text-text-primary transition-colors font-medium text-[11px] uppercase tracking-wider">{item.desc}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </section>

        {/* Stats - Grid optimized for mobile */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-px bg-border/20 rounded-[3rem] overflow-hidden border border-border/30">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-surface/60 backdrop-blur-md py-8 flex flex-col items-center justify-center text-center space-y-2 group"
              >
                <div className="text-primary mb-2 opacity-30 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500">
                  {stat.icon}
                </div>
                <div className="text-5xl md:text-6xl font-black italic tracking-tighter text-text-primary group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-[10px] uppercase font-black tracking-[0.3em] text-text-tertiary">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </section>


      </div>
    </div>
  );
}
