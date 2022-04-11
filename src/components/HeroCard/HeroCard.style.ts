import { $Green, $LightGreen } from 'src/style/color';
import styled from 'styled-components';

export const StyledHeroCard = styled.a<{selected?: boolean}>`
  box-shadow: 0 1px 4px 0 rgb(0 0 0 / 10%);
	text-align: center;
	border-radius: 10px;
	overflow: hidden;
	cursor: pointer;
	min-width: 120px;
	max-width: 250px;
	transition-duration: 0.2s;
	background: white;
	text-decoration: none;
	color: inherit;
	${props => props.selected && `color: ${$Green};`}
	&:hover{
		color: ${$LightGreen};
	}
`;

export const HeroImg = styled.img`
	object-fit: cover; 
	width: 100%;
	height: 100%;
`;
