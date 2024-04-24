import React from 'react'
import { GridItem, GridRow, ServicesCard, ServicesContent, ServicesHeading, ServicesWrapper } from './index.styled'
import { Header6, Header3, Button } from '@/components/Elements'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Image from 'next/image';
import { servicesData } from '@/feature/services';


type Services = {
    title: string;
    icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
    image: string;
}

export const Services = () => {
    return (
        <ServicesWrapper>
            <GridRow cols={3} className="gap-x-4">
                <GridItem >
                    <ServicesHeading>
                        <Header6 className="u-margin-bottom-small text-primary flex">
                            <MdKeyboardDoubleArrowRight />
                            <span className="u-margin-left-small">Who am I?</span>
                        </Header6>
                        <Header3 className="u-margin-bottom-medium text-white capitalize">here to bring your concepts to life</Header3>
                        <Button size="md" variant="primary">Learn More</Button>
                    </ServicesHeading>
                </GridItem>
                <GridItem className='col-span-2'>
                    <ServicesContent>
                        {
                            servicesData.map((service, index) => (
                                <ServicesCard key={index}>
                                    <service.Icon className=" text-4xl w-14 h-14 text-primary" />
                                    <span className="number">{(index + 1).toString().padStart(2, '0')}</span>
                                    <Header3 className="u-margin-bottom-medium text-white capitalize">{service.title}</Header3>
                                    <figure className="img relative">
                                        <Image src={service.image} alt={service.title} fill />

                                    </figure>
                                </ServicesCard>
                            ))
                        }
                    </ServicesContent>

                </GridItem>
            </GridRow>
        </ServicesWrapper>
    )
}
