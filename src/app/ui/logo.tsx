import Image from "next/image";
import Link from "next/link";
// 900 x 265 (55, 185)
export default function BabyWalkLogo() {
    return (
        <div className="flex justify-center">
            <Link href="/">
                <Image
                    src="/without_bg(1).png"
                    width={250}
                    height={75}
                    alt="АНО Движение детям"
                />
            </Link>
        </div>
    );
}