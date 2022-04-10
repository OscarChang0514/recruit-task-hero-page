import { $LightGreen } from 'src/style/color';
import { $Rwd } from 'src/style/rwd';
import styled from 'styled-components';

export const StyledNavbar = styled.nav`
	display: flex;
	background: white;
	align-items: center;
	padding: 0 30px;
	box-shadow: rgb(0 0 0 / 20%) 0px 1px 4px;
	margin-bottom: 20px;
	position: sticky;
	top: 0;
	z-index: 30;

	@media (max-width: ${$Rwd.tablet}) {  
		display: block;
		text-align: center;
		padding-bottom: 10px;
	}
`;

export const NavItem = styled.a<{highLight?: boolean}>`
	text-decoration: none;
	color: inherit;
	font-size: 1.1em;
	transition-duration: 0.2s;
	padding: 0px 10px;
	border-right: solid 1px grey;
	${props => props.highLight && `color: ${$LightGreen};`}
	&:hover {
		color: ${$LightGreen};
	}
	:last-of-type {
		border: none;
		margin-right: 20px;
	}
`;
