import { Bitcoin, Wallet } from 'lucide-react';

interface PayoutCardProps {
    name: string;
    country: string;
    amount: string;
    timeAgo: string;
    iconType: 'tether' | 'eth' | 'btc';
}

function PayoutCard({ name, country, amount, timeAgo, iconType }: PayoutCardProps) {
    const getIcon = () => {
        switch (iconType) {
            case 'btc': return <Bitcoin className="text-white" fill="currentColor" />;
            case 'eth': return <span className="text-white font-bold text-lg">Ξ</span>; // Simple ETH symbol
            case 'tether': return <span className="text-white font-bold text-lg">T</span>;
            default: return <Wallet className="text-white" />;
        }
    };

    const getBgColor = () => {
        switch (iconType) {
            case 'btc': return 'bg-orange-500/20 text-orange-500';
            case 'eth': return 'bg-purple-500/20 text-purple-500';
            case 'tether': return 'bg-emerald-500/20 text-primary';
            default: return 'bg-gray-500/20 text-gray-500';
        }
    };

    return (
        <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getBgColor()}`}>
                    {getIcon()}
                </div>
                <div>
                    <h4 className="text-white font-medium text-lg">{name}</h4>
                    <p className="text-gray-500 text-sm">{country}</p>
                </div>
            </div>
            <div className="text-right">
                <div className="text-primary font-bold text-xl">{amount}</div>
                <div className="inline-block mt-1 px-2 py-0.5 rounded bg-[#1a2e26] text-primary text-xs font-medium">
                    {timeAgo}
                </div>
            </div>
        </div>
    );
}

export function Payouts() {
    const payouts: PayoutCardProps[] = [
        { name: "John Bartlett", country: "Poland", amount: "$3,423.39", timeAgo: "1 Hours", iconType: "tether" },
        { name: "Thomas Vargas", country: "Austria", amount: "$9,423.39", timeAgo: "4 Hours", iconType: "tether" },
        { name: "James Colon", country: "Norway", amount: "$14,291.76", timeAgo: "8 Hours", iconType: "tether" },
        { name: "Joseph Hurst", country: "Poland", amount: "$1,117.97", timeAgo: "6 Hours", iconType: "eth" },
        { name: "Richard Miles", country: "Iraq", amount: "$6,142.12", timeAgo: "20 Hours", iconType: "tether" },
    ];

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Green Glow */}
            <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column - Text & Stats */}
                    <div>
                        <h2 className="text-4xl md:text-6xl font-medium text-white mb-6">
                            Rewarding Our <br />
                            <span className="font-bold">Best Traders</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-12 max-w-md">
                            Choose the evaluation based on your preference to become an Master Trader.
                        </p>

                        <div className="grid grid-cols-3 gap-8">
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">$2.7M+</div>
                                <div className="text-white font-medium">Total Payouts</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">$5K+</div>
                                <div className="text-white font-medium">Total Traders</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5hrs</div>
                                <div className="text-white font-medium">Avg.Payout time</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Payout List */}
                    <div className="space-y-4">
                        {payouts.map((payout, index) => (
                            <PayoutCard key={index} {...payout} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
