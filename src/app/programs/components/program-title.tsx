export default function Title({title}: TitleProps) {
    return(
        <div className="flex flex-row justify-start gap-2">
            <div className="h-min-full min-w-[20px] bg-lime-600"/>
            <h3 className="text-xl md:text-3xl font-extrabold text-left py-4">
                {title}
            </h3>
        </div>
    );
}

interface TitleProps {
    title: string
}