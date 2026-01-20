import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function AffiliatesPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <div className="container mx-auto px-6 py-32 text-white">
                <h1 className="text-4xl font-serif mb-8">Affiliates</h1>
                <div className="prose prose-invert max-w-none">
                    <p className="text-gray-400 text-lg">
                        Join our affiliate program and earn commissions.
                        (Content to be added).
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
