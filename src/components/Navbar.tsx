"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useThemeStore } from '@/lib/themeStore';

const navLinks = [
    { path: '/projects', label: 'Projects' },
    { path: '/tech', label: 'Tech Stack' },
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
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[70%]"
        >
            <div className="w-full relative">
                <div
                    className={`relative rounded-full px-6 transition-all duration-300 border shadow-2xl flex items-center justify-between ${scrolled
                        ? 'bg-[hsl(var(--surface))]/95 backdrop-blur-xl border-[hsl(var(--border))]'
                        : 'bg-[hsl(var(--surface))]/80 backdrop-blur-md border-[hsl(var(--border))]/50'
                        }`}
                    style={{ height: '70px' }}
                >
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-3 group shrink-0">
                        <div className="w-10 h-10 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center text-white font-black text-lg shadow-lg">
                            A
                        </div>
                        <div className="flex flex-col">
                            <span className="font-extrabold text-sm tracking-tight leading-none uppercase">AWASH D3V</span>
                            <span className="text-[9px] opacity-60 font-medium uppercase tracking-widest leading-none mt-1">Mohammed Hussen</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map(link => {
                            const isActive = pathname === link.path;
                            return (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    className={`relative px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 uppercase tracking-wide ${isActive
                                        ? 'text-[hsl(var(--text-primary))]'
                                        : 'text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))]'
                                        }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="navbar-pill"
                                            className="absolute inset-0 rounded-full bg-[hsl(var(--surface))] border border-[hsl(var(--border))]"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative z-10">{link.label}</span>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-[hsl(var(--surface))] transition-colors border border-transparent hover:border-[hsl(var(--border))]/50"
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
                                        <Sun size={18} className="text-yellow-400" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="moon"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Moon size={18} className="text-blue-500" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>

                        <Link href="/contact" className="hidden lg:block">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="h-10 px-6 rounded-full bg-[hsl(var(--primary))] text-white font-black text-[10px] uppercase tracking-widest shadow-lg shadow-[hsl(var(--primary))]/20"
                            >
                                Hire Me
                            </motion.button>
                        </Link>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 rounded-full"
                        >
                            {isOpen ? <X size={22} className="text-[hsl(var(--primary))]" /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-[80px] left-0 right-0 p-4 bg-[hsl(var(--surface))]/95 backdrop-blur-2xl rounded-3xl border border-[hsl(var(--border))] shadow-2xl md:hidden z-50"
                        >
                            <div className="flex flex-col gap-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.path}
                                        href={link.path}
                                        className={`px-6 py-4 rounded-2xl text-xs font-bold uppercase tracking-widest ${pathname === link.path
                                            ? 'bg-[hsl(var(--primary))] text-white'
                                            : 'text-[hsl(var(--text-secondary))] hover:bg-white/5'
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                <Link href="/contact" className="mt-2">
                                    <button className="w-full py-4 rounded-2xl bg-[hsl(var(--primary))] text-white font-black text-xs uppercase tracking-widest shadow-lg">
                                        Hire Me
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;
