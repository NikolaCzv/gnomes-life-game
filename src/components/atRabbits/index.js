import React, { useState } from "react";
import { Container, Health, QuestText, ButtonWrapper } from '../style';
import Button from '@material-ui/core/Button';
import WinScreen from '../winScreen';

const AtRabbits = props => {
    const [beer, setBeer] = useState(false);

    const handleBeerButton = () => setBeer(true);

    if(beer)
        return <WinScreen />

    return (
        <Container>
            <Health>
                Gnome's Energy: {props.energy} ❤️
            </Health>
            <QuestText>
                Your friend arrived at Rabbit's place... Falshbacks hittng...
                The rabbit has offered your friend to stay, which the gnome would like for sure... But he cannot see his
                hat... What would you suggest him to do?
            </QuestText>
            <ButtonWrapper>
                <Button
                    variant='outlined'
                    color='primary'
                >
                    Eat With the Rabbit
                </Button>
                <Button
                    variant='outlined'
                    color='primary'
                    onClick={handleBeerButton}
                >
                    Grab a Beer
                </Button>
            </ButtonWrapper>
        </Container>
    );
};

export default AtRabbits;