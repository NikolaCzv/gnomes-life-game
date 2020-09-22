import React, { useState } from 'react';
import { Container, QuestText, ButtonWrapper, Health } from '../style';
import Button from '@material-ui/core/Button';
import DeathScreen from '../deathScreen';

const Racoon = props => {
    const [isClicked, setIsClicked] = useState(false);

    const handleButton = () => setIsClicked(true);

    if(props.energy <= 0)
        return <DeathScreen />
    if(isClicked)
        return <DeathScreen />

    return <Container>
                <Health>
                    Gnome's Energy: {props.energy} ❤️
                 </Health>
                <QuestText>
                    Ohhh NO! This looks like it bad idea! There is a gang of racoons if front of our little gnome friend!
                    What are you going to do? looks like the end of the game is near.......
                </QuestText>
                <ButtonWrapper>
                    <Button
                        variant="outlined" 
                        color="secondary"
                        onClick={handleButton}
                    >
                        Fight!
                    </Button>
                    <Button
                        variant="outlined" 
                        color="secondary"
                        onClick={handleButton}
                    >
                        Run!
                    </Button>
                </ButtonWrapper>
            </Container>
};

export default Racoon;