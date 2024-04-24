"use client"

import { CustomPageHeader } from '@/components/Elements';
import { Layout } from '@/components/Layout';
import { Services, servicesData } from '@/feature/services';
import Image from "next/image";

export default function ServicePage() {
    return (
        <Layout>
            <CustomPageHeader title={'Services '} link={'service'} path={'services'} />
            <Services serviceList={servicesData} />
        </Layout>
    );
}
