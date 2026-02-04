"use client";

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/Button';

export function Navbar() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { href: '/pricing', label: 'Pricing' },
        { href: 'https://intercom.help/funded-master-7abfac9ee14d/en', label: 'Trading Rules' },
        { href: '/faq', label: 'FAQ' },
        { href: '/affiliates', label: 'Affiliates' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative w-10 h-10 transition-transform group-hover:scale-110">
                        <Image src="/logo.png" alt="Funded Master Logo" fill className="object-contain" />
                    </div>
                    <span className="text-2xl font-bold tracking-tight text-white">
                        Funded Master
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 text-gray-400 text-sm font-medium">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`transition-colors ${pathname === link.href ? 'text-primary border-b border-primary pb-0.5' : 'hover:text-primary'}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden md:block">
                        <a href="https://app.funded-master.com/checkoutpage" target="_blank" rel="noopener noreferrer">
                            <Button variant="primary" size="sm" className="font-semibold">
                                Log in
                            </Button>
                        </a>
                    </div>
                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-gray-300 hover:text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-0 top-20 bg-background/80 backdrop-blur-md z-50 p-6 flex items-start justify-center">
                    <div className="w-full max-w-md bg-card rounded-3xl p-8 shadow-2xl border border-primary/20">
                        <div className="flex flex-col gap-6 text-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`text-lg font-medium py-2 transition-colors ${pathname === link.href ? 'text-primary' : 'text-white hover:text-primary'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        <div className="flex flex-col gap-3 mt-8">
                            <a
                                href="https://app.funded-master.com/login"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="w-full py-3 px-6 rounded-full border-2 border-primary/30 text-white font-semibold hover:border-primary hover:text-primary transition-all">
                                    Log in
                                </button>
                            </a>
                            <a
                                href="https://app.funded-master.com/checkoutpage"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="w-full py-3 px-6 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary-hover transition-all shadow-lg shadow-primary/20">
                                    Get Started
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
