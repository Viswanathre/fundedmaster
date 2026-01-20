"use client";

import { useState } from 'react';
import { Info, Check, Shield, TrendingUp, Calendar, Clock, AlertCircle } from 'lucide-react';
import { Button } from '@/components/Button';

type TradingPath = 'Instant' | '1-Step' | '2-Step';
type AccountSize = '5K' | '10K' | '25K' | '50K' | '100K';

export function Programs() {
    const [path, setPath] = useState<TradingPath>('Instant');
    const [size, setSize] = useState<AccountSize>('50K');

    const prices: Record<TradingPath, Record<AccountSize, number>> = {
        'Instant': {
            '5K': 83,
            '10K': 119,
            '25K': 239,
            '50K': 359,
            '100K': 599
        },
        '1-Step': {
            '5K': 71,
            '10K': 119,
            '25K': 239,
            '50K': 359,
            '100K': 599
        },
        '2-Step': {
            '5K': 43,
            '10K': 79,
            '25K': 187,
            '50K': 347,
            '100K': 635
        }
    };

    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-medium text-white mb-4">
                        Become an <span className="text-primary font-bold">Master Trader</span>
                    </h2>
                    <p className="text-gray-400">Choose the evaluation based on your preference to become an Empire Trader.</p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8">

                    {/* Left Column - Controls & Info */}
                    <div className="lg:col-span-8 flex flex-col gap-10">

                        {/* Controls Container */}
                        <div className="space-y-8">
                            {/* Path Selection */}
                            <div>
                                <label className="text-white text-lg mb-4 block">Choose your Trading Path</label>
                                <div className="flex flex-wrap gap-2">
                                    {(['Instant', '1-Step', '2-Step'] as TradingPath[]).map((p) => (
                                        <button
                                            key={p}
                                            onClick={() => setPath(p)}
                                            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${path === p
                                                ? 'bg-primary text-primary-foreground shadow-[0_0_20px_rgba(204,243,129,0.3)]'
                                                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'
                                                }`}
                                        >
                                            {p}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Size Selection */}
                            <div>
                                <label className="text-white text-lg mb-4 block">Select Account Size</label>
                                <div className="flex flex-wrap gap-2">
                                    {(['5K', '10K', '25K', '50K', '100K'] as AccountSize[]).map((s) => (
                                        <button
                                            key={s}
                                            onClick={() => setSize(s)}
                                            className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 min-w-[100px] ${size === s
                                                ? 'bg-primary text-primary-foreground shadow-[0_0_20px_rgba(204,243,129,0.3)]'
                                                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'
                                                }`}
                                        >
                                            ${s}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Verification Card */}
                        <div className="bg-card rounded-3xl p-8 border border-white/5 relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-xl font-medium text-white mb-4">1. VERIFICATION</h3>
                                <p className="text-gray-400 text-sm mb-8 leading-relaxed max-w-2xl">
                                    Choose a simulated account size and try to reach the minimum simulated gains target.
                                    Trade all available instruments. Subject to certain rules and objectives, your trading style is completely up to you!
                                </p>

                                <div className="space-y-4">
                                    <Row label="Max Daily Drawdown" value="2%" />
                                    <Row label="Max Overall Drawdown" value="10%" tooltip />
                                    <Row label="Minimum Profitable Days" value="3 Days" tooltip />
                                    <Row label="Sim Trading Leverage" value="30:1" />
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Column - Pricing & Live Trader */}
                    <div className="lg:col-span-4 flex flex-col gap-8">

                        {/* Pricing Card */}
                        <div className="bg-card rounded-3xl p-8 border border-white/5 relative overflow-hidden flex flex-col items-center text-center">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#1a4d33] text-primary text-xs font-bold px-4 py-1.5 rounded-b-lg tracking-wider">
                                MOST POPULAR
                            </div>
                            <div className="mt-4 mb-2 text-sm text-gray-400 tracking-wider">START NOW AT ONLY</div>
                            <div className="text-6xl font-bold text-white mb-6">${prices[path][size]}</div>
                            <Button className="w-full text-lg py-6 bg-primary hover:bg-primary-hover text-primary-foreground font-bold mb-2">
                                Get Funded
                            </Button>
                        </div>

                        {/* Live Trader Card */}
                        <div className="bg-card rounded-3xl p-8 border border-white/5 relative overflow-hidden flex-1">
                            <h3 className="text-xl font-medium text-white mb-4">2. LIVE SIMULATED TRADER</h3>
                            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                                You can now start trading on a simulated basis in the EmpireTrading program without simulated gain targets.
                            </p>

                            <div className="space-y-4">
                                <Row label="Payout Share" value={<span className="bg-primary/20 text-primary px-2 py-0.5 rounded text-sm font-bold">90%</span>} tooltip />
                                <Row label="Max Daily Drawdown" value="4%" />
                                <Row label="Max Overall Drawdown" value="6%" tooltip />
                                <Row label="Payout Frequency" value="14 days" />
                                <Row label="Trading Period" value="Unlimited" />
                            </div>
                        </div>

                    </div>

                </div>

                {/* Bottom Banner */}
                <div className="mt-8 rounded-2xl bg-gradient-to-r from-emerald-950/50 to-primary/10 border border-white/5 p-8 text-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10" />
                    <div className="relative z-10 flex items-center justify-center gap-4">
                        <span className="text-2xl md:text-3xl font-medium text-primary shadow-green-glow">
                            Get Paid in 48 Hours or Get $2000!
                        </span>
                    </div>
                </div>

            </div>
        </section>
    );
}

function Row({ label, value, tooltip = false }: { label: string, value: React.ReactNode, tooltip?: boolean }) {
    return (
        <div className="flex items-center justify-between py-3 border-b border-white/5 last:border-0 hover:bg-white/5 px-2 rounded-lg transition-colors group">
            <div className="flex items-center gap-2 text-gray-400 group-hover:text-gray-300">
                <TrendingUp size={16} className="text-primary/70" />
                <span className="text-sm font-medium">{label}</span>
            </div>
            <div className="flex items-center gap-2">
                {tooltip && <Info size={14} className="text-gray-600" />}
                <span className="text-white font-medium text-sm">{value}</span>
            </div>
        </div>
    );
}
