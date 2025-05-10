import Link from "next/link";
import Image from "next/image";

// 900 x 265 (55, 185)
export default function BabyWalkLogo() {
    return (
        <div className="flex justify-center">
            <Link href="/">
                <Image
                    src={"/nav-logo-dark.png"}
                    width={250}
                    height={75}
                    priority
                    alt="АНО Движение детям"
                />
            </Link>
        </div>
    );
}