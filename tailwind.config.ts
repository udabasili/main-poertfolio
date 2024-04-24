import { paragraph } from '@/constant/font';
import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				title: ['var(--title)'],
				content: ['var(--content)'],
			},
			colors: {
				primaryLight: 'var(--primary-light)',
				primaryDark: 'var(--primary-dark)',
				primary: 'var(--primary)',
				secondary: 'var(--secondary)',
				secondaryDark: 'var(--secondary-dark)',
				background: 'var(--background)',
				paragraph: 'var(--paragraph)',
			},
			screens: {
				desktop: { min: '1800px' },
				tabLand: { max: '1200px' },
				tabPort: { max: '900px' },
				mobile: { max: '600px' },
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [],
};
export default config;
