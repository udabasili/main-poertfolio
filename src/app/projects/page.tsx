"use client"

import { CustomPageHeader } from '@/components/Elements';
import { Layout } from '@/components/Layout';
import { Project } from '@/feature/projects';


export default function Projects() {
    return (
        <>
            <CustomPageHeader title={'Projects'} link={'projects'} path={'projects'} />
            <Project />
        </>
    );
}
