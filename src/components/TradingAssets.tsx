import { BarChart3, Zap, Newspaper, Target, TrendingUp } from 'lucide-react';

interface FeatureCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

function FeatureCard({ title, description, icon }: FeatureCardProps) {
    return (
        <div className="relative group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,213,99,0.1)] hover:-translate-y-1">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 flex items-center justify-center bg-black rounded-xl border border-white/10 text-primary shadow-lg group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3 mt-4 text-center">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed text-center">
                {description}
            </p>
        </div>
    );
}

export function TradingAssets() {
    const features = [
        {
            title: "Up to 100% Profit Splits",
            description: "Keep every dollar you earn—Our funding model lets you keep up to 100% of your profits.",
            icon: <TrendingUp size={24} />
        },
        {
            title: "1-Step Challenge",
            description: "One clear target, one easy step—prove your skills and unlock funding with no extra steps.",
            icon: <BarChart3 size={24} />
        },
        {
            title: "Lightning Fast Payouts",
            description: "Trade hard today, spend tomorrow—experience truly lightning fast payouts.",
            icon: <Zap size={24} />
        },
        {
            title: "Trade News Freely",
            description: "Earn your share of the profits and receive your payout within 24 hrs.",
            icon: <Newspaper size={24} />
        },
        {
            title: "6% Profit Target",
            description: "Hit your mark effortlessly with our Ultra-low 6% profit target, Less stress, more trading.",
            icon: <Target size={24} />
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-background">
            {/* Background glow for this section */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-medium text-white mb-4">
                        Multiple Trading <span className="text-primary font-bold">Assets</span>
                    </h2>
                    <p className="text-gray-400">Trade in the following markets:</p>
                </div>

                <div className="max-w-6xl mx-auto">
                    {/* Top Row - 3 Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12 mb-12">
                        {features.slice(0, 3).map((feature, index) => (
                            <FeatureCard key={index} {...feature} />
                        ))}
                    </div>

                    {/* Bottom Row - 2 Cards, Centered */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12 max-w-4xl mx-auto">
                        {features.slice(3, 5).map((feature, index) => (
                            <FeatureCard key={index + 3} {...feature} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
