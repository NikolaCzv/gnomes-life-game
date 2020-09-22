import React, { useState } from "react";
import { Container, QuestText, ButtonWrapper, Health } from '../style';
import Button from '@material-ui/core/Button';
import FirstLeft from '../firstLeft';
import FirstRight from '../firstRight';
import DeathScreen from '../deathScreen';

const FirstScreen = props => {
    const [isLeft, setIsLeft] = useState(false);
    const [isRight, setIsRight] = useState(false)

    const handleLeftButton = () => setIsLeft(true);

    const handleRightButton = () => setIsRight(true);
    
    if(props.energy <= 0)
        return <DeathScreen />

    if(isRight)
    return <FirstRight energy={props.energy} setEnergy={props.setEnergy}/>
      
    if(isLeft)
    return <FirstLeft energy={props.energy} setEnergy={props.setEnergy}/>

    return(
        <Container>
            <Health>
                Gnome's Energy: {props.energy} ❤️
            </Health>
            <QuestText>
                After a long night the gnome, dazed, wakes ups in the middle of a forrest opening.
                Noticing his hat is gone, he sees two paths infront of him what will he choose?
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
                    variant="outlined" 
                    color="primary"
                    onClick={handleRightButton}
                >
                    Right
                </Button>
            </ButtonWrapper>
        </Container>
    );
};

export default FirstScreen;