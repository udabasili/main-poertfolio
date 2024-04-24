import { responsive } from '@/utils/responsive';
import styled from 'styled-components';

export const CardContainer = styled.div`
	grid-column: 1 / -1;

	${responsive.tabPort} {
		display: flex;
		flex-direction: column;
	}

	.preview {
		&__background {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			height: 100%;
			width: 30%;

			${responsive.tabPort} {
				width: 100%;
			}
		}

		&__content {
			display: grid;
			flex-direction: column;
			position: absolute;
			right: 0;
			top: 0;
			height: 100%;
			color: white;
			grid-template-columns: min-content 1fr;
			grid-template-rows: max-content min-content;
			grid-auto-rows: min-content;
			gap: 2rem 3rem;
			padding: 2rem 1.5rem;
			width: 70%;

			${responsive.tabPort} {
				z-index: 10;
				color: #000;
				width: 100%;
				position: relative;
			}

			.index {
				width: 10rem;
				height: 10rem;
				border-radius: 50%;
				font-size: 4rem;
				color: #ffffff;
				background-color: #000000;
				display: flex;
				justify-content: center;
				align-items: center;
				font-family: var(--title);
				grid-column: 1 / 2;
				grid-row: 1 / 3;
				align-self: center;
				outline: 1px solid #000000;
				outline-offset: 10px;

				${responsive.tabPort} {
					width: 5rem;
					height: 5rem;
					font-size: 2rem;
					grid-row: 1 / 2;
				}

				${responsive.mobile} {
					grid-column: 1 / 3;
				}
			}

			p {
				${responsive.tabPort} {
					grid-column: 1 / 3;
					text-align: justify;
				}
			}

			.links {
				.website,
				.detail {
					padding: 1rem 1.5rem;
					background-color: #000000;
					cursor: pointer;
					display: inline-block;

					${responsive.tabPort} {
						padding: 0.8rem 1.1rem;
					}

					&:hover {
						opacity: 0.78;
					}
				}

				.detail {
					background-color: var(--secondary);
					color: black;
				}

				${responsive.tabPort} {
					width: 100%;
					grid-column: 1 / 3;
				}
			}
		}
	}
`;

// -------------------------------------------------- PROJECTS -------------------------------------------------- //

export const ProjectSection = styled.section`
	padding: 10rem 0;
	grid-column: center-start / center-end;

	${responsive.tabPort} {
		padding: 5rem 0;
		grid-column: full-start / full-end;
	}
`;
