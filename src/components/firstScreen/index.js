import React, { useState } from "react";
import { Container, QuestText, ButtonWrapper, Health } from '../style';
import Button from '@material-ui/core/Button';
import FirstLeft from '../firstLeft';
import FirstRight from '../FirstRight';


const FirstScreen = props => {
    const [isLeft, setIsLeft] = useState(false);
    const [isRight, setIsRight] = useState(false)

    const handleLeftButton = () => {
        setIsLeft(true);
    }

    const handleRightButton = () => {
        setIsRight(true)
    }
    
    
    if(isRight)
    return <FirstRight energy={props.energy}/>
      
    if(isLeft)
    return <FirstLeft energy={props.energy}/>

    return(
        <Container>
            <Health>
                Energy: {props.energy} 
            </Health>
            <QuestText>
                After a long night the gnome, dazed, wakes ups in the middle of a forrest opening.
                Noticing his hat is gone, he sees two paths infront of him what will he choose?
            </QuestText>
            <ButtonWrapper>
                <Button
                    variant="contained" 
                    color="primary"
                    onClick={handleLeftButton}
                >
                    Left
                </Button>
                <Button
                    variant="contained" 
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