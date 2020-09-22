import React, { useState } from "react";
import { Container, QuestText, ButtonWrapper, Health, GameOverImage } from '../style';
import Button from '@material-ui/core/Button';
import SnakeLeft from '../snakeLeft';
import SnakeRight from '../snakeRight';
import gameOver from '../../assets/game-over.jpg';
import DeathScreen from '../deathScreen';

const FirstLeft = (props) => {

    const [isLeft, setIsLeft] = useState(false);
    const [isRight, setIsRight] = useState(false);

    const handleLeftButton = () => setIsLeft(true);
    const handleRightButton = () => setIsRight(true);

    if(props.energy <= 0)
        return <DeathScreen />

    if(isRight)
        return <SnakeRight energy={props.energy}/>
      
    if(isLeft)
        return <SnakeLeft energy={props.energy} setEnergy={props.setEnergy} />

    return(  
        <Container>
            <Health>
                Gnome's Energy: {props.energy} ❤️
            </Health>
            <QuestText>
                As our hero proceeds left he comes to a stunning halt near a giant snake. But to his surprise the snake is actually a really nice guy, not the smartest however.
                "Ssssssorry, I was asleep on the job" The snake adds "what bringsss a gnome here?" as the gnome explains his situation the snake in an attempt to help points the way...
                realizing the snake doesnt have arms the gnome has two choices:
            </QuestText>
            <ButtonWrapper>
                    <Button
                        variant="outlined" 
                        color="primary"
                        onClick={handleLeftButton}
                    >
                        Left
                    </Button>
                    <Button
                        variant='outlined' 
                        color="primary"
                        onClick={handleRightButton}
                    >
                        Right
                    </Button>
                </ButtonWrapper>
        </Container>
 );
};


export default FirstLeft;