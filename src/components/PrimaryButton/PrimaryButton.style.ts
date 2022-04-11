import { $Green, $LightGreen } from 'src/style/color';
import styled from 'styled-components';

export const BasePrimaryButton = styled.button`
	border-radius: 200px;
	padding: 5px;
	border: 2px solid ${$Green};
	transition-duration: 0.2s;
	font-weight: bolder;
	background: inherit;
	color: ${$Green};

	${props => props.disabled ?
		`opacity: 0.5;`
		:
		`
		cursor: pointer;
		&:hover {
			color: white;
			background: ${$LightGreen};
			border-color: ${$LightGreen};
		}
	`}
`;
