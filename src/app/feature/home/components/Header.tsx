import React from 'react'
import { HeaderWrapper } from './index.styled'
import { Button } from '@/components/Elements'
import Link from 'next/link'
import Image from 'next/image'

export const Header = () => {
    return (
        <HeaderWrapper>
            <div className="heading-left">
                <div className="heading-text-box">
                    <h1 className='heading-primary'>
                        <span className='heading-primary-main'>Crafting Digital Excellence, One Pixel at a Time</span>
                        <p>
                            Passion for creating innovative and user-friendly websites drives me to stay updated with the latest industry trends and technologies, ensuring high-quality solutions for clients
                        </p>
                    </h1>
                    <Link href='/contact'>
                        <Button variant='primary' size='lg'>Hire me</Button>
                    </Link>

                </div>
            </div>
            <div className="heading-right">
                <figure className="hero-image">
                    <Image
                        src="/home/header.svg"
                        alt="Homepage Image"
                        fill
                        className="avatar"
                        priority
                        quality={80}
                        sizes="(max-width: 768px) 100vw,
					(max-width: 1200px) 50vw,
					33vw"
                    />
                </figure>
            </div>

        </HeaderWrapper>
    )
}
