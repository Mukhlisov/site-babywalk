import {notFound} from "next/navigation";

const programs: Record<string, React.ReactNode> = {
    "home-visiting": <HomeVisitingPage />,
    "baby-walk": <BabyWalkUdm />,
    "education": <Education />,
    "devs-support": <DomesticDevelopmentsSupport />
};

export function getProgramComponent(programName: string) : React.ReactNode {
    return programs[programName] ?? notFound();
}


function HomeVisitingPage() {
    return (
        <div>Home Visiting</div>
    );
}

function BabyWalkUdm() {
    return (
        <div>BabyWalk Udmurtia</div>
    );
}

function Education() {
    return (
        <div>Education</div>
    );
}

function DomesticDevelopmentsSupport() {
    return (
        <div>Support for domestic developments</div>
    );
}