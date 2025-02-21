import Image from "next/image";

export default function BabyWalkLogo() {
    return (
        <div className="justify-items-center">
            <Image
                src="/logo.webp"
                width={120}
                height={75}
                alt="BabyWalk"
            />
            {/*<p className="text-[44px]">BabyWalk</p>*/}
        </div>
    );
}