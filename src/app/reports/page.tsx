export default function Page() {
    return (
        <div className={'flex flex-col items-center min-w-full p-4'}>
            <h3 className={'text-3xl font-bold'}>
                Отчеты
            </h3>
            <div className={'p-6 flex flex-col gap-4'}>
                <h6 className={'text-lg'}>
                    Уважаемые жертвователи!
                </h6>
                <p>
                    Поскольку АНО «Движение детям»зарегистрирована в текущем 2025 году, то в соответствии
                    с законодательством РФ ближайший финансовый отчёт будет опубликован до 15 апреля 2026 года.
                </p>
            </div>
        </div>
    );
}