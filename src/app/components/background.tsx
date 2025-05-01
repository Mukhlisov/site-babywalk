import Image from "next/image";

export default function BackgroundImage() {
    return (
        <div className="fixed inset-0 -z-10 hidden md:block">
            <Image
                id={"document-bg"}
                src="/background.jpg"
                alt="Background"
                fill
                className="object-cover object-center blur-[4px]"
                sizes="100vh"
                priority
            />
        </div>
    );
}