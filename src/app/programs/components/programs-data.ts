export interface ProgramsData {
    entry: string;
    alt: string;
    src: string;
    link: string
}

export const programsData: ProgramsData[] = [
    {
        entry : 'Проект «Патронаж»',
        alt : 'Patronage project',
        src : '/home-visiting.jpg',
        link : '/programs/patronage'
    },
    {
        entry: 'Движение BabyWalk Удмуртия',
        alt : 'Baby Walk',
        src : '/baby-walk.jpg',
        link : '/programs/baby-walk'
    },
    {
        entry : 'Просветительская деятельность в области реабилитации',
        alt : 'Education',
        src : '/education.jpeg',
        link : '/programs/education'
    },
    /*{
        entry : 'Аренда и ремонт технических средств реабилитации',
        alt : 'Technical means of rehabilitation',
        src : '/tmr.jpg',
        link : '/programs/tmr'
    },*/
];