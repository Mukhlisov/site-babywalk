'use client'
import dynamic from "next/dynamic";

const DynamicPdfViewer = dynamic(
    () => import("@/extra/components/pdf-viewer"),
    { ssr: false }
)

const reports = [
    { year: 2025, filename: "reports/NCO-Report-2025.pdf" },
];

export default function Page() {
    return (
        <div className={"flex flex-col gap-16 py-8"}>
            <h3 className={"text-3xl text-center font-bold"}>Отчеты</h3>
            {reports.map((report) => (
                <div key={report.year} className={"p-4"}>
                    <h2 className={"py-4 text-3xl text-center font-bold"}>{`Отчёт за ${report.year} год`}</h2>
                    <DynamicPdfViewer filename={report.filename}/>
                </div>
            ))}
        </div>
    );
}
