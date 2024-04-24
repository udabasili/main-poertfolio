"use client"

import { CustomPageHeader } from '@/components/Elements';
import { Layout } from '@/components/Layout';
import { AboutMeSummary, Education, Experience, TabComponent } from '@/feature/about';
import { useState } from 'react';

type TabComponentProps = 'experience' | 'education';

export default function About() {

    const [activeTab, setActiveTab] = useState<TabComponentProps>('experience');

    return (
        <Layout>
            <CustomPageHeader title={'About Me '} link={'about'} path={'about'} />
            <AboutMeSummary />
            {/* <TabComponent activeTab={activeTab} setActiveTab={setActiveTab} />
            {
                activeTab === 'experience' ? (
                    <Experience />
                ) : (
                    <Education />
                )
            } */}
        </Layout>
    );
}
