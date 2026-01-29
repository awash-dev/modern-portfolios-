"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sun, Moon, ArrowRight } from 'lucide-react';
import { useThemeStore } from '@/lib/themeStore';
import Image from 'next/image';

const navLinks = [
    { path: '/projects', label: 'Projects' },
    { path: '/tech', label: 'Tech Stack' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, toggleTheme } = useThemeStore();
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[94%] md:w-fit min-w-[300px]"
        >
            <div className="w-full relative">
                <div
                    className={`relative rounded-full px-6 transition-all duration-300 border shadow-2xl flex items-center gap-8 ${scrolled
                        ? 'bg-[hsl(var(--surface))]/95 backdrop-blur-xl border-[hsl(var(--border))]'
                        : 'bg-[hsl(var(--surface))]/80 backdrop-blur-md border-[hsl(var(--border))]/50'
                        }`}
                    style={{ height: '70px' }}
                >
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-3 group shrink-0">
                        <div className="w-11 h-11 rounded-2xl overflow-hidden bg-white border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-500">
                            <Image
                                src="/logo.png"
                                alt="Logo"
                                width={44}
                                height={44}
                                className="object-contain"
                                priority
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-black text-sm tracking-tighter leading-none uppercase italic group-hover:text-primary transition-colors">AWASH D3V</span>
                            <span className="text-[8px] font-black uppercase tracking-[0.25em] leading-none mt-1 text-text-tertiary">MOHAMMED HUSSEN</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-4">
                        {navLinks.map(link => {
                            const isActive = pathname === link.path;
                            return (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    className={`relative px-6 py-2 rounded-full text-[10px] font-black transition-all duration-200 uppercase tracking-tighter text-center flex flex-col items-center justify-center min-h-[45px] group ${isActive
                                        ? 'text-primary'
                                        : 'text-text-secondary hover:text-text-primary'
                                        }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="navbar-pill"
                                            className="absolute inset-0 rounded-full bg-primary/10 border border-primary/20 shadow-2xl"
                                            transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative z-10 whitespace-pre-line leading-[1.1] text-[9px] md:text-[10px]">
                                        {link.label === 'Tech Stack' ? 'TECH\nSTACK' : link.label}
                                    </span>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-5">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-white/5 transition-colors"
                        >
                            <AnimatePresence mode="wait">
                                {theme === 'dark' ? (
                                    <motion.div
                                        key="sun"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Sun size={20} className="text-yellow-400" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="moon"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Moon size={20} className="text-blue-500" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>

                        <Link href="/contact" className="hidden md:block">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="h-12 w-24 rounded-full bg-primary text-white font-black text-[9px] uppercase leading-none shadow-[0_0_20px_rgba(var(--primary),0.3)] flex flex-col items-center justify-center tracking-tighter"
                            >
                                HIRE<br />ME
                            </motion.button>
                        </Link>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 rounded-full hover:bg-surface/50 transition-colors"
                        >
                            {isOpen ? <X size={22} className="text-primary" /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu - Reverted to previous inline dropdown style */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute top-[80px] left-0 right-0 p-4 bg-surface/95 backdrop-blur-2xl rounded-4xl border border-border shadow-2xl md:hidden z-50 overflow-hidden"
                        >
                            <div className="flex flex-col gap-1">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.path}
                                        href={link.path}
                                        className={`px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-between group ${pathname === link.path
                                            ? 'bg-primary text-white shadow-lg'
                                            : 'text-text-secondary hover:bg-white/5'
                                            }`}
                                    >
                                        {link.label}
                                        <ArrowRight size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                ))}
                                <Link href="/contact" className="mt-2">
                                    <button className="w-full py-4 rounded-2xl bg-primary text-white font-black text-[10px] uppercase tracking-widest shadow-lg flex items-center justify-center gap-2">
                                        Hire Me <ArrowRight size={14} />
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav >
    );
};

export default Navbar;
