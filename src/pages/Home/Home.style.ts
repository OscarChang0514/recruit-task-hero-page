import PrimaryButton from "src/components/PrimaryButton";
import { $Rwd } from "src/style/rwd";
import styled from "styled-components";

export const MainTitle = styled.h1`
	font-size: 70px;
	
	@media (max-width: ${$Rwd.tablet}) {  
		font-size: 50px;
	}
`; 

export const StyledPrimaryButton = styled(PrimaryButton)`
	font-size: 1.2em;
	padding: 5px 15px;
	width: 150px;
	margin: 10px 15px;
`;

export const StyledHome = styled.div`
	text-align: center;
	animation: fade-move-in 2s ease-in 1;
`;