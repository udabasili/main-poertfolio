import React from 'react'
import { HeaderWrapper } from './index.styled'
import { Button } from '@/components/Elements'
import Link from 'next/link'

export const Header = () => {
    return (
        <HeaderWrapper>
            <div className="heading-left">
                <div className="heading-text-box">
                    <h1 className='heading-primary'>
                        <span className='heading-primary-sub'>Turning Ideas into Digital Reality!</span>
                        <span className='heading-primary-main'>Udendu Abasili</span>
                    </h1>
                    <Link href='/contact'>
                        <Button variant='primary' size='lg'>Hire me</Button>
                    </Link>

                </div>
            </div>
            <div className="heading-right">
            </div>

        </HeaderWrapper>
    )
}
