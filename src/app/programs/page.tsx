import { Navbar } from "@/components/Navbar";
import { Programs } from "@/components/Programs";
import { Footer } from "@/components/Footer";

export default function ProgramsPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <div className="pt-20">
                <Programs />
            </div>
            <Footer />
        </main>
    );
}
