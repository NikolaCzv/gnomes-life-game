import React, { useState } from 'react';
import { Container, QuestText, ButtonWrapper, Health } from '../style';
import Button from '@material-ui/core/Button';
import AtRabbits from '../atRabbits';
import DeathScreen from '../deathScreen';
import Racoon from '../racoons';

const Fox = props => {
    const [isRabbit, setIsRabbit] = useState(false);
    const [isForest, setIsForest] = useState(false);

    const handleRabbitButton = () => setIsRabbit(true);
    const handleForestButton = () => setIsForest(true);

    if(props.energy <= 0)
        return <DeathScreen />
    if(isRabbit)
        return <AtRabbits energy={props.energy}/>
    if(isForest)
        return <Racoon energy={props.energy}/>

    return (
        <Container>
            <Health>
                Gnome's Energy: {props.energy} ❤️
            </Health>
            {props.isFood ? 
                <QuestText>
                    OH NO! When Gnome eats to much, he gets dizzy! Now he got lost, but the old
                    fox found him! You are back at foxes! What are you going to do now??? Better think this time! 
                </QuestText>
            :
                <QuestText>
                    Finally you found her... But you never know is it a good idea to trust the fox... Just because
                    the fox is fox... She told your friend that you were last night at rabbit's, and that his hat is
                    there! What are you going to do...
                </QuestText>
            }
            <ButtonWrapper>
                <Button
                    variant='outlined'
                    color='primary'
                    onClick={handleRabbitButton}
                >
                    Go at Rabbit's
                </Button>
                <Button
                    variant='outlined'
                    color='primary'
                    onClick={handleForestButton}
                >
                    Keep Going Thru the Forest
                </Button>
            </ButtonWrapper>
        </Container>
    );
};

export default Fox;