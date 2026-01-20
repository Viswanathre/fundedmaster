import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function TradingRules() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <div className="container mx-auto px-6 py-32 text-white">
                <h1 className="text-4xl font-serif mb-8">Trading Rules</h1>
                <div className="prose prose-invert max-w-none">
                    <p className="text-gray-400 text-lg">
                        This page provides detailed information about our trading rules and guidelines.
                        (Content to be added).
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
