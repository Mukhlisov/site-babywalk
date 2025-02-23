'use client'

import { getProgramComponent } from '@/app/components/programs/ProgramPages'
import { usePathname } from "next/navigation";

export default function ProgramPage() {
    const path = usePathname()
    const programName = getProgramName(path);
    return (getProgramComponent(programName));
}

function getProgramName(path : string) : string {
    return path.slice(path.lastIndexOf('/') + 1);
}