import { responsive } from '@/utils/responsive';
import styled from 'styled-components';

// ---------------------------------------------------- GENERAL STYLES ---------------------------------------------------- //

// grid row with props for grid column
export const GridRow = styled.div<{ cols: number }>`
	display: grid;
	grid-template-columns: ${(props) => `repeat(${props.cols}, 1fr)`};

	${responsive.tabLand} {
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 2rem;
	}

	${responsive.tabPort} {
		grid-template-columns: 1fr;
		padding: 1rem;
	}
`;

export const GridItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	${responsive.tabPort} {
		padding: 2rem 0;
	}
`;

export const Section = styled.section`
	margin: 10rem 0;
	padding: 2rem 0;
	grid-column: center-start / center-end;

	${responsive.tabPort} {
		grid-column: full-start / full-end;
	}
`;
// ---------------------------------------------------- HEADER STYLES ---------------------------------------------------- //

export const HeaderWrapper = styled.header`
	padding: 20px 0;
	text-align: center;
	width: 100%;
	height: 100vh;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-column: full-start / full-end;
	height: 100vh;

	${responsive.tabPort} {
		grid-template-columns: 1fr;
	}

	.heading-left {
		display: inline-block;
		width: 100%;
		height: 100%;
		position: relative;

		${responsive.tabPort} {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}

	.heading-right {
		display: inline-block;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;

		${responsive.tabPort} {
			display: none;
		}

		figure {
			width: 70%;
			height: 70%;
		}
	}

	.heading-text-box {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		padding: 2rem;

		${responsive.tabPort} {
			position: relative;
			transform: unset;
			left: unset;
			top: unset;
			text-align: center;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
	}

	.heading-primary {
		text-align: left;

		p {
			color: white;
			padding: 1rem 0;

			${responsive.tabPort} {
				font-size: 1rem;
				padding: 2rem 0;
			}
		}

		${responsive.tabPort} {
			text-align: center;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
	}

	.heading-primary-main {
		font-size: 3rem;
		font-family: var(--title);
		font-weight: 900;
		color: var(--primary);
		display: block;

		${responsive.tabPort} {
			font-size: 2.3rem;
		}
	}

	.heading-primary-sub {
		display: block;
		font-size: 1.1rem;
		font-family: var(--content);
		font-weight: 400;
		color: white;

		${responsive.tabPort} {
			font-size: 0.7rem;
		}
	}
`;

// ---------------------------------------------------- ABOUT STYLES ---------------------------------------------------- //

export const AboutWrapper = styled(Section)``;

export const AboutContent = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: 1fr;
	justify-content: left;
	grid-template-rows: min-content min-content 1fr;
	padding: 2rem;
`;

export const AboutImage = styled.div`
	width: 100%;
	display: grid;
	grid-template-rows: repeat(6, 1fr);
	grid-template-columns: repeat(6, 1fr);
	align-items: center;
	position: relative;

	.img-1 {
		width: 100%;
		grid-row: 1 / -1;
		grid-column: 1 / -1;
		background-color: black;
		object-fit: cover;
	}

	.img-2 {
		width: 115%;
		grid-row: 4 / 6;
		grid-column: 4 / 6;
		z-index: 20;
		object-fit: cover;
	}
`;

// ---------------------------------------------------- SERVICES STYLES ---------------------------------------------------- //

export const ServicesWrapper = styled(Section)``;

export const ServicesHeading = styled.div`
	height: 100%;
`;

export const ServicesContent = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	width: 100%;

	${responsive.tabPort} {
		grid-template-columns: 1fr;
	}
`;

export const ServicesCard = styled.div`
	background-color: var(--background);
	color: white;
	padding: 2rem;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: max-content min-content 1fr;

	.number {
		color: #222731;
		font-size: 48px;
		font-weight: 700;
		line-height: 1;
		display: block;
		font-style: italic;
		justify-self: flex-end;
	}

	h3 {
		grid-column: 1 / -1;
		padding: 1rem 0;
	}

	figure {
		max-width: 350px;
		grid-column: 1 / -1;
		width: 100% !important;
		height: 207px !important;
		position: relative;
	}
`;

// ---------------------------------------------------- PROJECT SUMMARY STYLES ---------------------------------------------------- //

export const ProjectSummaryWrapper = styled(Section)`
	.gallery {
		display: grid;
		gap: 2rem;

		${responsive.tabPort} {
			padding: 1rem;
		}

		&__item {
			box-shadow: var(--shadow);
			border-radius: 15px;
			overflow: hidden;
			background-color: #fff;
			position: relative;

			&--1 {
				grid-column: 1 / 6;
			}

			&--2 {
				grid-column: 7 / 12;
			}

			&--3 {
				grid-column: 1 / 4;
			}

			&--4 {
				grid-column: 5 / 8;
			}

			&--5 {
				grid-column: 9 / 12;
			}
			&--6 {
				grid-column: 1 / 6;
			}

			&--7 {
				grid-column: 7 / 12;
			}

			${responsive.tabPort} {
				grid-column: unset;
				grid-row: unset;
			}
		}
	}
`;

// ---------------------------------------------------- WORK PROCESS STYLES ---------------------------------------------------- //

export const WorkProcessWrapper = styled(Section)``;

export const WorkProcessCard = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	background-color: var(--background);
	padding: 3rem 3rem;
	box-shadow: var(--shadow);
`;
