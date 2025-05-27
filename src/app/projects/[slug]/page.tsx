
"use client"
import { ParsedUrlQuery } from 'querystring';

import { useEffect } from 'react';

import { CustomPageHeader } from '@/components/Elements/Headers';
import { portfolioDetails } from '@/feature/projects';
import { PortfolioDetailsContainer, Summary, Description, MainImage, Goal, WebStack, ThoughtProcess, LessonLearnt } from '@/feature/portfolios-details';
import { notFound } from 'next/navigation';
import { Video } from '@/components/Elements';


type PortfolioDetail = typeof portfolioDetails[0];

interface CtxCustom extends ParsedUrlQuery {
    pid: string;
}



export default function PortfolioDetail({ params }: { params: { slug: string } }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { slug } = params;

    if (!slug) {
        return notFound()
    }
    const url = decodeURIComponent(slug);
    const portfolioData = portfolioDetails.find((project) => project['Project name'].toLowerCase() === url);
    const {
        ['Project name']: title,
        ['GitHub Link']: github,
        ['Project Link']: link,
        ['Tech Stack']: technologies,
        ['Summary']: summary,
        ['Screenshots or animated GIFs']: screenshots,
        ['Video']: video,
        ['Project Purpose and Goal']: goal,
        ['Web Stack and Explanation']: stackInfo,
        ['Problems and Thought Process']: thought,
        ['Lesson Learned']: lesson,
    } = portfolioData as PortfolioDetail;
    return (
        portfolioData ? (
            < >
                {Object.keys(portfolioData).length > 0 ? (
                    <>
                        <CustomPageHeader
                            title={title}
                            link={`projects*${title}`}
                            path={`projects/${slug}`}
                        />
                        <PortfolioDetailsContainer>
                            <Summary
                                title={title}
                                technologies={technologies}
                                github={github}
                                link={link}

                            />
                            <Description text={summary} />

                            {
                                video ? (
                                    <Video src={video} />
                                ) : <MainImage images={screenshots} />
                            }
                            <Goal text={goal} />
                            <WebStack
                                tech={technologies}
                                info={stackInfo}
                            />
                            {thought ? (
                                <ThoughtProcess text={thought} />
                            ) : null}

                            <LessonLearnt text={lesson} />
                        </PortfolioDetailsContainer>
                    </>
                ) : null}
            </>
        ) : notFound()
    )
}


