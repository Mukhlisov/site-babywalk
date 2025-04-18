import PDFViewer from "@/app/components/pdf-viewer";

export default function Page() {
    return (
        <div className={"flex flex-col gap-16 py-8"}>
            <div className={"p-4"}>
                <h2 className={"py-4 text-3xl text-center font-bold"}>Устав</h2>
                <PDFViewer filename={"charter.pdf"}/>
            </div>
            <div className={"p-4"}>
                <h2 className={"py-4 text-3xl text-center font-bold"}>Свидетельство о гос. регистрации</h2>
                <PDFViewer filename={"state-registration.pdf"}/>
            </div>
        </div>
    );
}