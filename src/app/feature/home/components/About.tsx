import React from 'react'
import { AboutContent, AboutImage, AboutWrapper, GridItem, GridRow } from './index.styled'
import { Header3, Header6 } from '@/components/Elements'
import Image from 'next/image';


export const About = () => {
    return (
        <AboutWrapper>
            <GridRow cols={2} className="gap-x-4">
                <GridItem>
                    <AboutImage>
                        <figure className="img-1  " data-aos="fade-right">
                            <Image src="/home/owner.jpeg"
                                alt="about"
                                fill
                                className='img-1'
                                priority
                                sizes="(max-width: 768px) 100vw,
					(max-width: 1200px) 50vw,
					33vw"/>
                        </figure>
                        <figure className="img-2" data-aos="fade-right">
                            <Image src="/logo.png" alt="about" className='img-2' fill />
                        </figure>
                    </AboutImage>
                </GridItem>
                <GridItem>
                    <AboutContent>
                        <Header6 className="u-margin-bottom-small text-primary">Who am I?</Header6>
                        <Header3 className="u-margin-bottom-medium text-white capitalize">here to bring your concepts to life</Header3>
                        <div>
                            <p className="text-white">
                                With creativity as my compass and innovation as my fuel, I dive into every project with a commitment to excellence and a keen eye for detail. My goal is not just to build websites; it&rsquo;s to create online journeys that leave a lasting impact.
                            </p>
                            <p className="text-white pt-6">
                                Let&apos;s embark on a digital adventure together, where your dreams meet the power of technology, and where every click leads to a world of possibilities

                            </p>
                        </div>

                    </AboutContent>
                </GridItem>

            </GridRow>
        </AboutWrapper>
    )
}
