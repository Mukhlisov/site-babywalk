import Image from "next/image";

export function ImagesPC() {
    return (
        <div className="relative p-4 basis-1/3 hidden xl:inline-block">
            <Image
                src={"/home-visiting-img-2.jpg"}
                alt={"img"}
                width={250}
                height={250}
                className="absolute z-[0] rounded-lg shadow-2xl shadow-zinc-950"
            />
            <Image
                src={"/home-visiting-img-1.jpg"}
                alt={"img"}
                width={250}
                height={250}
                className="absolute z-[5] translate-x-[76%] translate-y-[76%] rounded-lg shadow-2xl shadow-zinc-950"
            />
            <Image
                src={"/home-visiting-img-3.jpg"}
                alt={"img"}
                width={250}
                height={250}
                className="absolute z-[5] -translate-x-[20%] translate-y-[120%] rounded-lg shadow-2xl shadow-zinc-950"
            />
        </div>
    );
}

export function ImagesPhone(){
    return (
        <div className="flex flex-col gap-1 shrink-1 justify-between xl:hidden">
            <Image
                src={"/home-visiting-img-2.jpg"}
                alt={"img"}
                width={120}
                height={120}
                className="rounded-lg"
            />
            <Image
                src={"/home-visiting-img-1.jpg"}
                alt={"img"}
                width={120}
                height={120}
                className="rounded-lg"
            />
            <Image
                src={"/home-visiting-img-3.jpg"}
                alt={"img"}
                width={120}
                height={120}
                className="rounded-lg"
            />
        </div>
    );
}