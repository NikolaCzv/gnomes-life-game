import React, { useState } from "react";
import { Container, QuestText, ButtonWrapper, Health } from '../style';
import Button from '@material-ui/core/Button';
import FirstLeft from '../firstLeft';


const FirstScreen = props => {
    const [isLeft, setIsLeft] = useState(false);

    const handleLeftButton = () => {
        setIsLeft(true);
    }

    //create right button handler
    //create new component for firstRight
    //dont need to render much

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
                >
                    Right
                </Button>
            </ButtonWrapper>
        </Container>
    );
};

export default FirstScreen;