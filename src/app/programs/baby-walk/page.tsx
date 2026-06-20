import Image from "next/image";
import Title from "@/app/programs/components/program-title";
import NewsFeed from "@/extra/components/news/news-feed";

export default function Page() {
    const marathonPhotos = ["/marathon/1.jpg", "/marathon/2.jpg", "/marathon/3.jpg", "/marathon/4.jpg"];
    return (
        <div>
            <Title title={"Движение BabyWalk Удмуртия"}/>
            <div className="px-2 my-8">
                <div className="py-4 p-4 bg-zinc-100 shadow-lg rounded-lg text-pretty">
                    <h3 className={"text-2xl md:text-3xl"}>Марафон BabyWalk г.Ижевск</h3>
                    <div className={'flex flex-col gap-y-4 mt-4 text-pretty'}>
                        <p>
                            Наш марафон - это не просто показательное мероприятие или досуг для детей
                        </p>
                        <p>
                            ☝️ ЭТО ВОПЛОЩЕНИЕ НАШЕЙ ФИЛОСОФИИ В РЕАБИЛИТАЦИИ! ☝️
                        </p>
                        <p>
                            Смотрите!<br/>
                            Прямо здесь и сейчас происходит двигательная реабилитация детей:
                        </p>
                        <div className={'flex flex-col gap-y-4 text-pretty'}>
                            <p>
                                🚩 не в стенах реабилитационного центра или больницы, не в палатах, а в пространстве свободы, общения и игры, на свежем воздухе!
                            </p>
                            <p>
                                🚩 не изнурительные курсы реабилитации, а постоянная поддержка развития через то, что дети любят - движение и игру!
                            </p>
                            <p>
                                🚩 реабилитация может быть радостной и интересной: собственная мотивация ребенка - лучший терапевт!
                            </p>
                        </div>
                        <p>
                            Это эффективно, экономно, разумно!
                        </p>
                    </div>
                    <div className={`mt-4 flex flex-row flex-wrap gap-2 justify-center w-full`}>
                        {marathonPhotos.map((photo, index) => (
                            <Image key={index} src={photo} alt={'marathon babywalk'} width={300} height={450}
                                   className={`rounded-sm`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="px-2 my-8">
                <div className="py-4 p-4 bg-zinc-100 shadow-lg rounded-lg text-pretty">
                    <h3 className={"text-2xl md:text-3xl"}>Беги со мной</h3>
                    <div className={'flex flex-col gap-y-4 mt-4'}>
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
            <NewsFeed program="baby-walk"/>
        </div>
    );
}