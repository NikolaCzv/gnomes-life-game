import React from "react";
import { Container,  GameOverImage, DeathText, ImageWrapper } from '../style';
import Button from '@material-ui/core/Button';
import gameOver from '../../assets/game-over.jpg';

const DeathScreen = () => {
    return(
        <Container>
            <DeathText>
                Oh no! Looks like the gnome met his faith... Shall we start a new adventure?
            </DeathText>
            <ImageWrapper>
                <GameOverImage src={gameOver}/>
            </ImageWrapper>
        </Container>
    );
};
export default DeathScreen;