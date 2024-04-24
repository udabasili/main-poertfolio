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
						<Header2 className="text-primary">Hi, I&apos;m Udendu Abasili</Header2>
						<Header3 className="text-white">Full Stack Developer</Header3>
						<p>
							I am a Full Stack Developer with a passion for creating beautiful and functional websites. I have a
							strong foundation in web development and I am always looking to learn new technologies and improve my
							skills.
						</p>
					</AboutMeSummaryText>

				</GridItem>
			</GridRow>


		</AboutMeSummarySection>
	);
};
