import React from 'react'
import { GridItem, GridRow, WebDevelopmentCard, WebDevelopmentSection } from './index.styled'
import Image from 'next/image'
import { Header3, Header4, Header5, Header6 } from '@/components/Elements'

const websites = [
  {
    title: "American Barber Shop",
    imageUrl: "/web-dev/american-barbershop.png",
    url: "https://udabasili.github.io/american-barbershop/",
    category: "Barbershop"
  },
  {

    title: "Business Template",
    imageUrl: "/web-dev/business.png",
    url: "https://udabasili.github.io/business-1/",
    category: "Business"

  },
  {
    title: "Real Estate",
    imageUrl: "/web-dev/rental-1.png",
    url: "https://udabasili.github.io/rental-1/",
    category: "Real Estate"
  },
  {
    title: "Real Estate 2",
    imageUrl: "/web-dev/rental-2.png",
    url: "https://udabasili.github.io/rental-2/",
    category: "Real Estate"
  }
]



export const WebDevelopment = () => {

  return (
    <WebDevelopmentSection>
      <GridRow cols={2} className="gap-x-5 gap-y-8">
        {
          websites.map((website) => (
            <GridItem key={website.title}>
              <WebDevelopmentCard>
                <figure className="w-full h-full object-cover mb-8 bg-background">
                  <Image src={website.imageUrl} alt={website.title} fill />
                </figure>
                <span className="title">{website.title}</span>
                <span className="category">{website.category}</span>
                <a href={website.url} target="_blank" className="button"> Visit</a>
              </WebDevelopmentCard>

            </GridItem>
          ))
        }
      </GridRow>
    </WebDevelopmentSection>
  )
}
