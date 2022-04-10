import { $Green, $LightGreen } from 'src/style/color';
import styled from 'styled-components';

export const StyledHeroProfilePage = styled.div`
    display: flex;
`;

export const SaveButton = styled.button`
    cursor: pointer;
    border-radius: 100px;
    width: 100%;
    padding: 5px;
    border: 2px solid ${$Green};
    transition-duration: 0.2s;
    font-weight: bolder;
    color: ${$Green};
    &:hover {
        color: white;
        background: ${$LightGreen};
        border-color: ${$LightGreen};
    }
`;