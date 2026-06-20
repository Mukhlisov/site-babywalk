import {ContactLinks, DetailsOrg, Documents} from "@/extra/components/footer/sections";

export default function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center bg-zinc-950 text-zinc-50 p-2">
            <div>
                <div className="flex flex-col md:grid md:grid-cols-2 gap-y-1 md:gap-y-6">
                    <ContactLinks/>
                    <Documents/>
                </div>
                <DetailsOrg/>
            </div>
        </footer>
    );
}