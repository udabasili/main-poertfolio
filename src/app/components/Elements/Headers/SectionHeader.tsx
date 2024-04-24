import Image from 'next/image';
import React from 'react';

import { SectionHeaderContainer } from './index.style';

type SectionHeaderProps = {
	title: string;
	subText?: string;
};

export const SectionHeader = ({ title, subText }: SectionHeaderProps) => {
	return (
		<SectionHeaderContainer className=" font-title text-center u-margin-bottom-medium">
			<span className=" text-4xl  lg:text-6xl  font-title font-bold u-margin-bottom-small text-primary">{title}</span>

			{subText ? (
				<span className="font-paragraph text-white leading-tight text-md md:text-lg lg:text-xl u-margin-bottom-small font-normal">
					{subText}
				</span>
			) : null}
		</SectionHeaderContainer>
	);
};
