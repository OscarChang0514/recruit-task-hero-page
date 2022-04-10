import styled from 'styled-components';

export const StyledLoadingBlock = styled.div<{color?: string, dotSpacing?: string, size?: string}>`

	display: flex;
	justify-content: center;
	align-items: center;

	overflow: hidden;
	width: 100%;
	min-width: 50px;

	position: absolute;
	z-index: 50;
	height: 100%;
	background-color: rgba(255,255,255, 0.5);

	.dot-flashing{
		width: ${props => props.size};
		height: ${props => props.size};
		border-radius: 200px;
		position: relative;
		animation: dot-flashing 1s infinite linear alternate;
		animation-delay: -0.5s;
	
		&::before,
		&::after {
			content: '';
			width: ${props => props.size};
			height: ${props => props.size};
			border-radius: 200px;
			display: inline-block;
			position: absolute;
			top: 0;
		}
	
		&::before {
			left: -${props => props.dotSpacing};
			animation: dot-flashing 1s infinite alternate;
			animation-delay: 0s;
		}
	
		&::after {
			left: ${props => props.dotSpacing};
			animation: dot-flashing 1s infinite alternate;
			animation-delay: -1s;
		}
	}
  
	@keyframes dot-flashing {
		0%, 50% {
			background-color: ${props => props.color};
			opacity: 1;
		}

		100% {
			background-color: ${props => props.color};
			opacity: 0.2;
		}
	}

`;
