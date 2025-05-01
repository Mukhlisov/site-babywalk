'use client'
import Programs from "@/app/components/home/programs";
import About from "@/app/components/home/about";

export default function Home() {
    return (
        <div className="p-1 pb-16">
            <About/>
            <Programs/>
        </div>
    );
}