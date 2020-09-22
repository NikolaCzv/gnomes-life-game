import React, { useState } from "react";
import { Container, Health, QuestText, ButtonWrapper } from '../style';
import Button from '@material-ui/core/Button';
import WinScreen from '../winScreen';
import Fox from '../fox';
import DeathScreen from '../deathScreen';

const AtRabbits = props => {
    const [isBeer, setIsBeer] = useState(false);
    const [isFood, setIsFood] = useState(false);

    const handleBeerButton = () => setIsBeer(true);
    const handleFoodButton = () => setIsFood(true);

    if(props.energy <= 0)
        return <DeathScreen />
    if(isBeer)
        return <WinScreen />
    if(isFood)
        return <Fox energy={props.energy - 40} isFood={isFood}/>

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
                    onClick={handleFoodButton}
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