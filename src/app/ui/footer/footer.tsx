export default function Footer() {
    return (
        <footer className="bg-zinc-950 text-white p-2 flex flex-row min-h-[240px] items-center justify-center">
            <div className="grid grid-rows-2 md:grid-cols-2 md:grid-rows-none gap-2 md:gap-0">
                <div className="p-4">
                    <p className="pb-2" id="contacts">
                        Контакты:
                    </p>
                    <div className="flex flex-row flex-wrap gap-4">
                        <a>ТГ</a>
                        <a>Мобила</a>
                        <a>Почта</a>
                    </div>
                </div>
                <div className="flex flex-col gap-2 p-4">
                    <div>
                        <a className="underline" href="/docs/oferta.pdf" target="_blank" rel="noopener noreferrer">Публичная оферта</a>
                    </div>
                    <div>
                        <a className="underline" href="/docs/privacy.docx" target="_blank" rel="noopener noreferrer">Политика конфиденциальности</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}