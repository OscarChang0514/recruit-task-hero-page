import PrimaryButton from 'src/components/PrimaryButton';
import styled from 'styled-components';

export const StyledHeroProfile = styled.div`
	position: relative;
	display: flex;
`;

export const AbilityBlock = styled.div`
	flex: 1 0 65%;
	animation: fade-in 1.2s ease-in-out 1;
`;

export const RemainPointBlock = styled.div`
	flex: 1 0 30%; 
	display: flex; 
	align-items: end; 
	justify-content: right;
	text-align: left;
	animation: fade-in 1.2s ease-in-out 1;
`;

export const SaveButton = styled(PrimaryButton)`
	width: 100%;
`;