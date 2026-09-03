export default function Page() {
    return (
        <div className={'flex flex-col items-center min-w-full p-4'}>
            <h3 className={'text-3xl font-bold'}>
                Отчеты
            </h3>
            <div className={'p-6 flex flex-col gap-4'}>
                <table className={'overflow-hidden rounded-lg shadow-lg'}>
                    <thead>
                        <tr className={'bg-primary-green text-white'}>
                            <td className={'px-6 py-3 font-semibold'}>Год</td>
                            <td className={'px-6 py-3 font-semibold'}>Ссылка на отчёт</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={'bg-zinc-100 transition hover:bg-zinc-200'}>
                            <td className={'px-6 py-3'}>2025</td>
                            <td className={'px-6 py-3'}>
                                <a
                                    href={'/docs/reports/NCO-Reoirt-2025.pdf'}
                                    download
                                    className={'font-medium text-primary-green underline underline-offset-2 transition hover:text-zinc-900'}
                                >
                                    Скачать отчёт
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
