import React from 'react'
import { AboutContent, AboutImage, AboutWrapper, GridItem, GridRow } from './index.styled'
import { Header3, Header4, Header6 } from '@/components/Elements'
import Image from 'next/image';


export const About = () => {
    return (
        <AboutWrapper>
            <GridRow cols={2} className="gap-x-4">
                <GridItem>
                    <AboutImage>
                        <figure className="img-1 ">
                            <Image src="/home/owner.jpeg" alt="about" fill className='img-1' />
                        </figure>
                        <figure className="img-2">
                            <Image src="/logo.png" alt="about" className='img-2' fill />
                        </figure>
                    </AboutImage>
                </GridItem>
                <GridItem>
                    <AboutContent>
                        <Header6 className="u-margin-bottom-small text-primary">Who am I?</Header6>
                        <Header3 className="u-margin-bottom-medium text-white capitalize">here to bring your concepts to life</Header3>
                        <p className="text-white">
                            I am a software engineer who is passionate about creating innovative solutions to complex problems. I have experience in full-stack development, with a focus on front-end technologies. I am driven by a desire to learn and grow, and I am always looking for new challenges to tackle.
                        </p>
                    </AboutContent>
                </GridItem>

            </GridRow>
        </AboutWrapper>
    )
}
