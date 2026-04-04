'use client'
import Programs from "@/extra/components/home/programs";
import About from "@/extra/components/home/about";

export default function Home() {
    return (
        <div className="p-1 pb-16">
            <About/>
            <Programs/>
        </div>
    );
}