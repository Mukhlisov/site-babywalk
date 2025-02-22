import Image from 'next/image';

export default function Custom404() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex flex-col items-center justify-center">
                <Image className="pb-5"
                    src="/404.svg"
                    width={120}
                    height={120}
                    alt="404 Not Found"
                />
                <p className="text-3xl text-center">We are sorry, but this page does not exist...</p>
            </div>
        </div>
    );
}