import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const Container = styled.div`
    width: 100%;
    height: 99vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${colors.mainColor};
    border-radius: 20px;
`

export const GameContainer = styled.div`
    width: 70%;
    height: 60vh;
    border-radius: 20px;
    display: flex;
    background-color: ${colors.white};
`

export const Title = styled.h1`
    font-size: 44px;
`