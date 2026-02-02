"use client";

import { useState } from 'react';
import { Info, Check, Shield, TrendingUp, Calendar, Clock, AlertCircle } from 'lucide-react';
import { Button } from '@/components/Button';

type ProductTier = 'Prime' | 'Lite';
type PrimePath = 'INSTANT' | '2-Step';
type LitePath = 'Instant' | '1-Step' | '2-Step';
type PrimeAccountSize = '5K' | '10K' | '25K' | '50K' | '100K';
type LiteAccountSize = '3K' | '5K' | '6K' | '10K' | '12K' | '25K' | '50K' | '100K';

export function Programs() {
    const [productTier, setProductTier] = useState<ProductTier>('Lite');
    const [primePath, setPrimePath] = useState<PrimePath>('INSTANT');
    const [litePath, setLitePath] = useState<LitePath>('Instant');
    const [primeSize, setPrimeSize] = useState<PrimeAccountSize>('50K');
    const [liteSize, setLiteSize] = useState<LiteAccountSize>('50K');

    // Funded Master Prime Pricing
    const primePrices: Record<PrimePath, Record<PrimeAccountSize, number>> = {
        'INSTANT': {
            '5K': 80,
            '10K': 130,
            '25K': 310,
            '50K': 550,
            '100K': 760
        },
        '2-Step': {
            '5K': 94,
            '10K': 140,
            '25K': 370,
            '50K': 650,
            '100K': 990
        }
    };

    // Funded Master Lite Pricing - Only available sizes
    const litePrices: Record<LitePath, Partial<Record<LiteAccountSize, number>>> = {
        'Instant': {
            '3K': 60,
            '6K': 94,
            '12K': 140,
            '25K': 396,
            '50K': 790,
            '100K': 1198
        },
        '1-Step': {
            '5K': 76,
            '10K': 110,
            '25K': 245,
            '50K': 424,
            '100K': 890
        },
        '2-Step': {
            '5K': 50,
            '10K': 92,
            '25K': 200,
            '50K': 390,
            '100K': 700
        }
    };

    // Get available sizes based on current selection
    const getAvailableSizes = (): string[] => {
        if (productTier === 'Prime') {
            return ['5K', '10K', '25K', '50K', '100K'];
        } else {
            if (litePath === 'Instant') {
                return ['3K', '6K', '12K', '25K', '50K', '100K'];
            } else {
                return ['5K', '10K', '25K', '50K', '100K'];
            }
        }
    };

    // Get current price
    const getCurrentPrice = (): number => {
        if (productTier === 'Prime') {
            return primePrices[primePath][primeSize];
        } else {
            return litePrices[litePath][liteSize as LiteAccountSize] || 0;
        }
    };

    const drawdownRules: Record<LitePath, { daily: string, max: string }> = {
        'Instant': { daily: '3%', max: '7%' },
        '1-Step': { daily: '4%', max: '9%' },
        '2-Step': { daily: '5%', max: '10%' }
    };

    const primeDrawdownRules: Record<PrimePath, { daily: string, max: string }> = {
        'INSTANT': { daily: '4%', max: '7%' },
        '2-Step': { daily: '4%', max: '10%' }
    };

    const getCurrentDrawdown = () => {
        if (productTier === 'Prime') {
            return primeDrawdownRules[primePath];
        } else {
            return drawdownRules[litePath];
        }
    };

    const handlePathChange = (newPath: string) => {
        if (productTier === 'Prime') {
            setPrimePath(newPath as PrimePath);
        } else {
            const newLitePath = newPath as LitePath;
            setLitePath(newLitePath);
            // Reset to default size if changing paths
            if (newLitePath === 'Instant' && !['3K', '6K', '12K', '25K', '50K', '100K'].includes(liteSize)) {
                setLiteSize('50K');
            } else if (newLitePath !== 'Instant' && ['3K', '6K', '12K'].includes(liteSize)) {
                setLiteSize('50K');
            }
        }
    };

    const handleSizeChange = (newSize: string) => {
        if (productTier === 'Prime') {
            setPrimeSize(newSize as PrimeAccountSize);
        } else {
            setLiteSize(newSize as LiteAccountSize);
        }
    };

    const handleTierChange = (tier: ProductTier) => {
        setProductTier(tier);
        // Reset sizes when changing tiers
        if (tier === 'Prime') {
            setPrimeSize('50K');
        } else {
            setLiteSize('50K');
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
                            {/* Product Tier Selection */}
                            <div>
                                <label className="text-white text-lg mb-4 block">Choose Your Product</label>
                                <div className="flex flex-wrap gap-2">
                                    {(['Prime', 'Lite'] as ProductTier[]).map((tier) => (
                                        <button
                                            key={tier}
                                            onClick={() => handleTierChange(tier)}
                                            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${productTier === tier
                                                ? 'bg-primary text-primary-foreground shadow-[0_0_20px_rgba(204,243,129,0.3)]'
                                                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'
                                                }`}
                                        >
                                            Funded Master {tier}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Path Selection */}
                            <div>
                                <label className="text-white text-lg mb-4 block">Choose your Trading Path</label>
                                <div className="flex flex-wrap gap-2">
                                    {productTier === 'Prime'
                                        ? (['INSTANT', '2-Step'] as PrimePath[]).map((p) => (
                                            <button
                                                key={p}
                                                onClick={() => handlePathChange(p)}
                                                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${primePath === p
                                                    ? 'bg-primary text-primary-foreground shadow-[0_0_20px_rgba(204,243,129,0.3)]'
                                                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'
                                                    }`}
                                            >
                                                {p}
                                            </button>
                                        ))
                                        : (['Instant', '1-Step', '2-Step'] as LitePath[]).map((p) => (
                                            <button
                                                key={p}
                                                onClick={() => handlePathChange(p)}
                                                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${litePath === p
                                                    ? 'bg-primary text-primary-foreground shadow-[0_0_20px_rgba(204,243,129,0.3)]'
                                                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'
                                                    }`}
                                            >
                                                {p}
                                            </button>
                                        ))
                                    }
                                </div>
                            </div>

                            {/* Size Selection */}
                            <div>
                                <label className="text-white text-lg mb-4 block">Select Account Size</label>
                                <div className="flex flex-wrap gap-2">
                                    {getAvailableSizes().map((s) => {
                                        const currentSize = productTier === 'Prime' ? primeSize : liteSize;
                                        return (
                                            <button
                                                key={s}
                                                onClick={() => handleSizeChange(s)}
                                                className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 min-w-[100px] ${currentSize === s
                                                    ? 'bg-primary text-primary-foreground shadow-[0_0_20px_rgba(204,243,129,0.3)]'
                                                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'
                                                    }`}
                                            >
                                                ${s}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Verification Card - Hide for Instant paths */}
                        <div className="bg-card rounded-3xl p-8 border border-white/5 relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-xl font-medium text-white mb-4">
                                    {((productTier === 'Prime' && primePath === 'INSTANT') || (productTier === 'Lite' && litePath === 'Instant'))
                                        ? 'TRADING RULES'
                                        : '1. VERIFICATION'} {((productTier === 'Lite' && litePath === '2-Step') || (productTier === 'Prime' && primePath === '2-Step')) && '- PHASE 1'}
                                </h3>
                                <p className="text-gray-400 text-sm mb-8 leading-relaxed max-w-2xl">
                                    Choose a simulated account size and try to reach the minimum simulated gains target.
                                    Trade all available instruments. Subject to certain rules and objectives, your trading style is completely up to you!
                                </p>

                                <div className="space-y-4">
                                    {/* Profit Target */}
                                    <Row
                                        label="Profit Target"
                                        value={
                                            productTier === 'Prime'
                                                ? (primePath === 'INSTANT' ? 'None' : '9%')
                                                : (litePath === 'Instant' ? 'None' : litePath === '1-Step' ? '8%' : '8%')
                                        }
                                        tooltip
                                    />
                                    <Row label="Max Daily Drawdown" value={getCurrentDrawdown().daily} />
                                    <Row label="Max Overall Drawdown" value={getCurrentDrawdown().max} tooltip />
                                    <Row label="Minimum Profitable Days" value="3 Days" tooltip />
                                    <Row label="Sim Trading Leverage" value="30:1" />
                                </div>
                            </div>
                        </div>

                        {/* Phase 2 Card - Show for Lite 2-Step AND Prime 2-Step */}
                        {((productTier === 'Lite' && litePath === '2-Step') || (productTier === 'Prime' && primePath === '2-Step')) && (
                            <div className="bg-card rounded-3xl p-8 border border-white/5 relative overflow-hidden">
                                <div className="relative z-10">
                                    <h3 className="text-xl font-medium text-white mb-4">PHASE 2</h3>
                                    <p className="text-gray-400 text-sm mb-8 leading-relaxed max-w-2xl">
                                        After completing Phase 1, proceed to Phase 2 with reduced profit target before becoming a funded trader.
                                    </p>

                                    <div className="space-y-4">
                                        <Row
                                            label="Profit Target"
                                            value={productTier === 'Prime' ? '6%' : '5%'}
                                            tooltip
                                        />
                                        <Row
                                            label="Max Daily Drawdown"
                                            value={productTier === 'Prime' ? '4%' : '5%'}
                                        />
                                        <Row
                                            label="Max Overall Drawdown"
                                            value="10%"
                                            tooltip
                                        />
                                        <Row label="Minimum Profitable Days" value="3 Days" tooltip />
                                        <Row label="Sim Trading Leverage" value="30:1" />
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>

                    {/* Right Column - Pricing & Live Trader */}
                    <div className="lg:col-span-4 flex flex-col gap-8">

                        {/* Pricing Card */}
                        <div className="bg-card rounded-3xl p-8 border border-white/5 relative overflow-hidden flex flex-col items-center text-center">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#1a4d33] text-primary text-xs font-bold px-4 py-1.5 rounded-b-lg tracking-wider">
                                MOST POPULAR
                            </div>
                            <div className="mt-4 mb-2 text-sm text-gray-400 tracking-wider">START NOW AT ONLY</div>
                            <div className="text-6xl font-bold text-white mb-6">${getCurrentPrice()}</div>
                            <a href="https://app.funded-master.com/checkoutpage" target="_blank" rel="noopener noreferrer" className="w-full">
                                <Button className="w-full text-lg py-6 bg-primary hover:bg-primary-hover text-primary-foreground font-bold mb-2">
                                    Get Funded
                                </Button>
                            </a>
                        </div>

                        {/* Live Trader Card */}
                        {!((productTier === 'Prime' && primePath === 'INSTANT') || (productTier === 'Lite' && litePath === 'Instant')) && (
                            <div className="bg-card rounded-3xl p-8 border border-white/5 relative overflow-hidden flex-1">
                                <h3 className="text-xl font-medium text-white mb-4">2. LIVE SIMULATED TRADER</h3>
                                <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                                    You can now start trading on a simulated basis in the EmpireTrading program without simulated gain targets.
                                </p>

                                <div className="space-y-4">
                                    <Row label="Payout Share" value={<span className="bg-primary/20 text-primary px-2 py-0.5 rounded text-sm font-bold">90%</span>} tooltip />
                                    <Row label="Max Daily Drawdown" value="4%" />
                                    <Row label="Max Overall Drawdown" value="7%" tooltip />
                                    <Row label="Payout Frequency" value="14 days" />
                                    <Row label="Trading Period" value="Unlimited" />
                                </div>
                            </div>
                        )}

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
                <span className="text-sm font-medium">{label}</span>
            </div>
            <div className="flex items-center gap-2">
                <span className="text-white font-medium text-sm">{value}</span>
            </div>
        </div>
    );
}
