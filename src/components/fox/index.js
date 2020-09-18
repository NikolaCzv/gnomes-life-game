import React, { useState } from 'react';
import { Container, QuestText, ButtonWrapper, Health } from '../style';
import Button from '@material-ui/core/Button';
import AtRabbits from '../atRabbits';

const Fox = props => {
    const [isRabbit, setIsRabbit] = useState(false);

    const handleRabbitButton = () => {
        setIsRabbit(true);
    };

    if(isRabbit)
        return <AtRabbits energy={props.energy}/>

    return (
        <Container>
            <Health>
                Gnome's Energy: {props.energy} ❤️
            </Health>
            <QuestText>
                Finally you found her... But you never now is it a good idea to trust the fox... Just because
                the fox is fox... She told your friend that you were last night at rabbit's, and that his hat is
                there! What are you going to do...
            </QuestText>
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
                >
                    Keep Going Thru the Forest
                </Button>
            </ButtonWrapper>
        </Container>
    );
};

export default Fox;