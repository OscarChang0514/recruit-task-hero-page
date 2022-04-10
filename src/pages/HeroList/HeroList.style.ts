import { $Rwd } from "src/style/rwd";
import styled from "styled-components";

export const ListBlock = styled.div`
	display: grid;
	gap: 10px;
	grid-template-columns: 1fr 1fr 1fr 1fr;

	@media (max-width: ${$Rwd.tablet}) {  
		grid-template-columns: 1fr 1fr;
	}
`;