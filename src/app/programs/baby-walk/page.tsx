import Image from "next/image";
import Title from "@/app/programs/components/program-title";

export default function Page() {
    return (
        <div>
            <Title title={"Движение BabyWalk Удмуртия"}/>
            <div className="px-2 my-8">
                <div className="py-4 p-4 bg-zinc-100 shadow-lg rounded-lg text-pretty">
                    <div className={'flex flex-col gap-y-4'}>
                        <p className={"text-pretty"}>
                            19 июля 2025 года в 19:00 на набережной г. Ижевск состоится трогательный и вдохновляющий забег для детей с ограниченными возможностями здоровья.
                        </p>
                        <p className={"text-pretty"}>
                            Это не просто забег — это праздник силы духа, радости и маленьких больших побед! Здесь нет проигравших — каждый участник уже чемпион, каждый шаг — это подвиг, а ваша поддержка станет для них настоящим крылом!
                        </p>
                        <p className={"text-pretty"}>
                            Приходите, чтобы подарить им веру в себя и зарядиться их невероятной энергией.
                        </p>
                    </div>
                    <Image
                        src={'/babywalk-01.jpg'}
                        alt={'Беги со мной'}
                        width={1920}
                        height={1080}
                        className={"rounded-sm mt-4"}
                    />
                </div>
            </div>
        </div>
    );
}