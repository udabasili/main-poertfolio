"use client"
import React, { HTMLAttributes, useEffect, useState } from 'react'
import { Container, Main } from './Layout.styled'
import { MainNavigation } from '../Navigation'
import { header, paragraph } from '@/constant/font'
import colors from '@/constant/color'
import { Footer } from '../Footer'

type LayoutProps = {
    children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {

    const [sticky, setSticky] = useState(false)
    const ref = React.useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (window !== undefined && ref.current !== null) {
            const windowHeight = window.scrollY;

            if (sticky) {
                ref.current.classList.add('sticky')
            } else {
                ref.current.classList.remove('sticky')
            }
        }
    }, [sticky])


    useEffect(() => {
        const handleScroll = () => {
            // if desktop screen and scroll more than 100px
            // if (window.scrollY > 300) {
            //     setSticky(true)
            // } else {
            //     setSticky(false)
            // }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <Container >
            <MainNavigation ref={ref} />
            <Main>{children}</Main>
            <Footer />
        </Container>
    )
}
