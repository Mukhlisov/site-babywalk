'use client';

import {Document, Page, pdfjs} from 'react-pdf';
import {useState} from 'react';

import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PDFViewer({filename}: PdfViewerProps) {
    const [numPages, setNumPages] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);

    const onDocumentLoadSuccess = ({numPages}: { numPages: number }) => {
        setNumPages(numPages);
        setError(null);
    };

    const onDocumentLoadError = (error: Error) => {
        console.error('Ошибка загрузки PDF:', error);
        setError('Не удалось загрузить документ. Попробуйте скачать файл.');
    };

    const src = "/docs/" + filename;

    return (
        <div className={"flex flex-col"}>
            <div className={"flex justify-evenly"}>
                {error && (
                    <p className="text-red-500 text-center">
                        {error}
                    </p>
                )}
                {!error && (
                    <div className="overflow-x-scroll p-4 bg-zinc-200">
                        <Document
                            file={src}
                            onLoadSuccess={onDocumentLoadSuccess}
                            onLoadError={onDocumentLoadError}
                            loading="Загрузка документа..."
                            className="flex flex-row gap-4 scroll-smooth"
                        >
                            {numPages &&
                                Array.from(new Array(numPages), (_, index) => (
                                    <Page
                                        key={`page_${index + 1}`}
                                        pageNumber={index + 1}
                                        width={typeof window !== 'undefined' && window.innerWidth <= 768
                                            ? window.innerWidth - 60
                                            : undefined}
                                        height={typeof window !== 'undefined' && window.innerWidth > 768
                                            ? window.innerHeight * 0.7
                                            : undefined}
                                    />
                                ))}
                        </Document>
                    </div>
                )}
            </div>
            <a href={src} target="_blank" rel="noopener noreferrer" className="underline self-end p-4" download={filename}>
                Скачать PDF
            </a>
        </div>
    );
}

interface PdfViewerProps {
    filename: string;
}