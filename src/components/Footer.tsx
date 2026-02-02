import { Trophy, Send, Instagram, Youtube, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Custom Discord Icon since Lucide might not have the exact brand one
const DiscordIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 127.14 96.36"
        fill="currentColor"
        className={className}
        width="24"
        height="24"
    >
        <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.09,105.09,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.11,77.11,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.89,105.89,0,0,0,126.6,80.22c2.36-24.44-5-47.27-18.9-72.15ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
    </svg>
);

export function Footer() {
    return (
        <footer className="bg-black pt-20 pb-10 border-t border-white/5 text-sm">
            <div className="container mx-auto px-6">

                {/* Main Footer Links */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">

                    {/* Brand Column - Spans 2 cols on desktop if needed, usually 1 or 2 */}
                    <div className="col-span-2 lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6 group">
                            <div className="relative w-10 h-10 transition-transform group-hover:scale-110">
                                <Image src="/logo.png" alt="Funded Master Logo" fill className="object-contain" />
                            </div>
                            <span className="font-bold text-xl text-white tracking-tight">Funded Master</span>
                        </Link>
                        <p className="text-gray-400 max-w-xs leading-relaxed">
                            To win the game, you need strong support and diligent preparation, For Traders.
                        </p>
                    </div>

                    {/* Company Links */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-semibold text-base mb-2">Company</h4>

                        <Link href="/pricing" className="text-gray-400 hover:text-primary transition-colors">Pricing</Link>
                        <Link href="/trading-rules" className="text-gray-400 hover:text-primary transition-colors">Trading Rules</Link>
                        <Link href="/faq" className="text-gray-400 hover:text-primary transition-colors">FAQs</Link>
                        <Link href="/affiliates" className="text-gray-400 hover:text-primary transition-colors">Affiliates</Link>
                    </div>

                    {/* Legal Links */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-semibold text-base mb-2">Legal</h4>
                        <Link href="/privacy-policy" className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="/terms-and-conditions" className="text-gray-400 hover:text-primary transition-colors">Terms & Conditions</Link>
                    </div>

                    {/* Social Links */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-semibold text-base mb-2">Let's Connect</h4>
                        <Link href="#" className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors">
                            <DiscordIcon /> Discord
                        </Link>
                        <Link href="#" className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors">
                            <Twitter size={20} /> x.com
                        </Link>
                        <Link href="#" className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors">
                            <Send size={20} /> Telegram
                        </Link>
                        <Link href="#" className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors">
                            <Instagram size={20} /> Instagram
                        </Link>
                        <Link href="#" className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors">
                            <Youtube size={20} /> Youtube
                        </Link>
                        <Link href="#" className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors">
                            <Linkedin size={20} /> Linkedin
                        </Link>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/10 mb-8" />

                {/* Copyright Row */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs mb-12">
                    <p>© 2025 Funded Master . All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/terms-and-conditions" className="hover:text-primary transition-colors">Terms & Conditions</Link>
                        <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                    </div>
                </div>

                {/* Disclaimer Text */}
                <div className="space-y-4 text-[10px] text-gray-600 leading-relaxed text-justify">
                    <p>
                        Funded Master is an education and evaluation company that does not collect customer deposits or offer financial services to customers. All accounts provided to customers are in a virtual environment with virtual money.
                    </p>
                    <p>
                        All information provided on this website is for educational purposes only in the area of financial market trading and does not serve in anyway as specific investment recommendations, trading recommendations, analysis of investment opportunities or similar general recommendations regarding the trading of investment instruments. The Company does not provide investment services within the meaning of MiFID II The Company is not a licensed investment services provider (securities broker-dealer) within the meaning of MiFID II All trading on the platform made available as part of the services provided by the Company, although it may be based on real trading data and simulates real trading, is only notional trading on a demo account. In this sense, i.e. that it is fictitious trading on fictitious accounts, terms such as "trading" or "trader" should also be understood and should not be given the meanings they have in the context of real trading.
                    </p>
                    <p>
                        The technical solution offered in the form of platforms made available as part of the services offered by the Company (i.e. platforms for fictitious trading on demo accounts) uses third party services. The website is operated and owned by the Company and all content is copyrighted by the Company.
                    </p>
                    <p>
                        Restricted countries: Pakistan, Iran, Syria, Myanmar, Bangladesh, Vietnam, North Korea, the Russian Federation, the Republic of Belarus, Cuba, Lebanon, Libya, Sudan, Crimea, Donetsk and Luhansk regions of Ukraine, United Arab Emirates.
                    </p>
                </div>

            </div>
        </footer>
    );
}
