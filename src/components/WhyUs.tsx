import { DollarSign, Briefcase, CreditCard, Headphones, Rocket, Circle } from 'lucide-react';

interface FeatureCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

function FeatureCard({ title, description, icon }: FeatureCardProps) {
    return (
        <div className="group relative p-8 rounded-3xl bg-card border border-white/5 overflow-hidden hover:border-primary/50 transition-all duration-300">
            {/* Background Icon Watermark */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 text-primary/5 pointer-events-none transform translate-x-1/3 scale-[2.5]">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-24 h-24">
                    {/* Simple pillar path as placeholder for the watermark */}
                    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 0-2 2zm2-18h12v16H6V4z" />
                </svg>
            </div>

            <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-black/60 border border-emerald-500/30 flex items-center justify-center text-primary mb-6 shadow-[0_0_20px_rgba(204,243,129,0.2)] group-hover:scale-110 transition-transform duration-300">
                    {icon}
                </div>

                <h3 className="text-xl font-medium text-white mb-3">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}

export function WhyUs() {
    const features = [
        {
            title: "Lower Spreads",
            description: "Reduce your trading costs with our average spread on majors from 0.0 pips, low commissions, and deep interbank liquidity.",
            icon: <DollarSign size={28} />
        },
        {
            title: "$0 Minimum Acc Size",
            description: "We don't believe in teasing you with lower costs and then making you pay extra for it. With Global Prime, you can start with as little or as much as you like.",
            icon: <div className="font-bold text-2xl">0</div>
        },
        {
            title: "Range of Markets",
            description: "Trade our 150+ range of global markets covering FX, Indices, Commodities, Cryptocurrency, and more.",
            icon: <Briefcase size={28} />
        },
        {
            title: "No Fees to Deposit",
            description: "We cover all your deposit fees on all 20+ funding methods. Fund with Visa, MasterCard, PayPal, Neteller, Skrill and more.",
            icon: <CreditCard size={28} />
        },
        {
            title: "24/7 Support",
            description: "The market never sleeps, so neither does our team. The Empire is here to help you on your trading journey all day, every day.",
            icon: <Headphones size={28} />
        },
        {
            title: "Low Latency",
            description: "X-Connected low latency servers within the NY4 datacentre execute your trades with fast execution speeds from as low as 5ms.",
            icon: <Rocket size={28} />
        }
    ];

    return (
        <section className="py-24 bg-background relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-medium text-white">
                        Why We're <span className="text-primary font-bold">Top Rated PropFirm</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
}
