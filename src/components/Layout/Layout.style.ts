import { $Rwd } from 'src/style/rwd';
import styled from 'styled-components';

export const MainPageBlock = styled.div`
	margin: 0 auto;
	max-width: 1024px;
	padding: 10px 15px;

	@media (max-width: ${$Rwd.tablet}) {  
		max-width: 560px;
	}

	@media (max-width: ${$Rwd.tablet}) {  
		max-width: 560px;
	}
`;
