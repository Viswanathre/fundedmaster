"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/Button';

export function Navbar() {
    const pathname = usePathname();

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
                    <Link
                        href="/programs"
                        className={`transition-colors ${pathname === '/programs' ? 'text-primary border-b border-primary pb-0.5' : 'hover:text-primary'}`}
                    >
                        Programs
                    </Link>
                    <Link
                        href="/pricing"
                        className={`transition-colors ${pathname === '/pricing' ? 'text-primary border-b border-primary pb-0.5' : 'hover:text-primary'}`}
                    >
                        Pricing
                    </Link>
                    <Link
                        href="/trading-rules"
                        className={`transition-colors ${pathname === '/trading-rules' ? 'text-primary border-b border-primary pb-0.5' : 'hover:text-primary'}`}
                    >
                        Trading Rules
                    </Link>
                    <Link
                        href="/faq"
                        className={`transition-colors ${pathname === '/faq' ? 'text-primary border-b border-primary pb-0.5' : 'hover:text-primary'}`}
                    >
                        FAQ
                    </Link>
                    <Link
                        href="/affiliates"
                        className={`transition-colors ${pathname === '/affiliates' ? 'text-primary border-b border-primary pb-0.5' : 'hover:text-primary'}`}
                    >
                        Affiliates
                    </Link>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4">
                    <Button variant="primary" size="sm" className="font-semibold">
                        Log in <span className="ml-2">👤</span>
                    </Button>
                </div>
            </div>
        </nav>
    );
}
