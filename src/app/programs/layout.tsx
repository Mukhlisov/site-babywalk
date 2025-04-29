export default function Layout({children,}: Readonly<{children: React.ReactNode;}>) {
    return (
        <div className="px-4 md:px-16 my-2 md:my-8">
            {children}
        </div>
    );
}