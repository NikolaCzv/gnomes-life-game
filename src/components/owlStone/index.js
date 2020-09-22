import React, { useState } from 'react';
import { Container, QuestText, Health, ButtonWrapper } from '../style';
import Button from '@material-ui/core/Button';
import Fox from '../fox';
import DeathScreen from '../deathScreen';

const OwlStone = props => {
    const [isLeft, setIsLeft] = useState(false);

    const handleLeftButton = () => {
        setIsLeft(true);
    };

    if(props.energy <= 0)
        return <DeathScreen />
    if(isLeft)
        return <Fox energy={props.energy}/>

    return (
        <Container>
            <Health>
                Gnome's Energy: {props.energy} ❤️
            </Health>
            <QuestText>
                OH NOOOO! That stone was too heavy for an old a** owl! She is dead! What you gonna do now!?
                Your gnome friend is in danger! Chose his next steps... But now think before you make one more stupid move. 
            </QuestText>
            <ButtonWrapper>
                <Button
                    variant="outlined" 
                    color="primary"
                    onClick={handleLeftButton}
                >
                    Left Path
                </Button>
                <Button
                    variant="outlined" 
                    color="primary"
                    //goes to the cave
                >
                    Right Path
                </Button>
            </ButtonWrapper>
        </Container>
    );
};

export default OwlStone;