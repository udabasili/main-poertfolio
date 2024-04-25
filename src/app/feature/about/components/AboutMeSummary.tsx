import Image from 'next/image';
import React from 'react';

import { Header2, Header3 } from '@/components/Elements/Headers';
import { AboutMePhoto, AboutMeSummarySection, AboutMeSummaryText, GridItem, GridRow } from './index.styled';

export const AboutMeSummary = () => {

	return (
		<AboutMeSummarySection>
			<GridRow cols={2} className="gap-x-5">
				<GridItem>
					<AboutMePhoto >
						<Image
							src="/home/owner.jpeg"
							alt="Udendu Abasili"
							width={400}
							height={400}
						/>
					</AboutMePhoto>
				</GridItem>
				<GridItem>
					<AboutMeSummaryText>
						<Header2 className=" text-primary">Hi, I&apos;m Udendu Abasili</Header2>
						<Header3 className="text-white">Full Stack Developer</Header3>
						<p>

							I am a highly skilled web developer with a strong background in customer service, sales, and front-end development. With a degree in software development and experience in web technologies such as JavaScript, C#, Java, and Node.js, I bring a unique blend of technical expertise and interpersonal skills to every project. My passion for creating innovative and user-friendly websites drives me to stay updated with the latest industry trends and technologies, ensuring high-quality solutions for clients
						</p>
					</AboutMeSummaryText>

				</GridItem>
			</GridRow>


		</AboutMeSummarySection>
	);
};
