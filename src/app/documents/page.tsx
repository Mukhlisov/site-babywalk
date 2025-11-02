'use client'
import dynamic from "next/dynamic";

const DynamicPdfViewer = dynamic(
    () => import("../components/pdf-viewer"),
    { ssr: false }
)

export default function Page() {
    return (
        <div className={"flex flex-col gap-16 py-8"}>
            <div className={"p-4"}>
                <h2 className={"py-4 text-3xl text-center font-bold"}>Устав</h2>
                <DynamicPdfViewer filename={"charter.pdf"}/>
            </div>
            <div className={"p-4"}>
                <h2 className={"py-4 text-3xl text-center font-bold"}>Свидетельство о гос. регистрации</h2>
                <DynamicPdfViewer filename={"state-registration.pdf"}/>
            </div>
            <div className={"p-4"}>
                <h2 className={"py-4 text-3xl text-center font-bold"}>Свидетельство о постановке на учет</h2>
                <DynamicPdfViewer filename={"certificate-of-registration.pdf"}/>
            </div>
        </div>
    );
}