import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
import { $Green, $Orange } from 'src/style/color';
import styled from 'styled-components';

export const StyledAbilityNumberInput = styled.div`
	display: flex;
	align-items: center;
	font-size: 1.2em;
	padding: 10px;

	meter::-webkit-meter-optimum-value, 
	meter::-webkit-meter-suboptimum-value, 
	meter::-webkit-meter-even-less-good-value {
    transition: 1s width;
		background-image: linear-gradient(
			90deg, 
			${$Green} 100%,
			${$Green} 100%
		);
		background-size: 100% 100%;
	}
`;

export const AddButton = styled(FaPlusCircle)`
	transition-duration: 0.2s;
	color: ${$Green};
	cursor: pointer;
	margin: 0 10px;
	&:hover{
		color: ${$Orange};
	}
`;

export const MinusButton = styled(FaMinusCircle)`
	transition-duration: 0.2s;
	color: ${$Green};
	cursor: pointer;
	margin: 0 10px;
	&:hover{
		color: ${$Orange};
	}
`;

export const ValueBlock = styled.div`
	margin: 0 10px;
	display: flex;
	align-items: center;
	user-select: none;
`;

export const Progress = styled.meter`
	width: 100%;
	height: 25px;
`;