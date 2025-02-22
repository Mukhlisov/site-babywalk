import Image from "next/image";
import Link from "next/link";

export default function BabyWalkLogo() {
    return (
        <div className="flex justify-center">
            <Link href="/">
                <Image
                    src="/logo.webp"
                    width={120}
                    height={75}
                    alt="АНО Движение детям"
                />
            </Link>
        </div>
    );
}