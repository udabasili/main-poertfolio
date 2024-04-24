import React, { FC } from 'react';

import { Header3 } from '@/components/Elements/Headers';

interface ThoughtProcessProps {
	text: string;
}

export const ThoughtProcess = ({ text }: ThoughtProcessProps) => {
	return (
		<div className="thought-process">
			<Header3 className="u-margin-bottom-small text-[#ffffff]">Thought Process</Header3>
			<p className="paragraph text-[#ffffff]">{text}</p>
		</div>
	);
};
