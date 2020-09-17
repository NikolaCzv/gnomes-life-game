import React from "react";
import { Container,  GameOverImage, DeathContainer } from '../style';
import Button from '@material-ui/core/Button';
import gameOver from '../../assets/game-over.jpg';

const DeathScreen = () => {
    return(
        <Container>
            <DeathContainer>
                Oh no! looks like the gnome met his faith...shall we start a new adventure?
            </DeathContainer>
            <GameOverImage src={gameOver}/>
        </Container>
    );
};
export default DeathScreen