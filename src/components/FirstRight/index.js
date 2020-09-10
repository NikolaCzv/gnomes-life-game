import React, { useState } from "react";
import { Container, QuestText, ButtonWrapper, Health } from '../style';
import Button from '@material-ui/core/Button';


const FirstRight = props => {
    const [isGently, setIsGently] = useState(false);
    const [isStone, setIsStone] = useState(false);
    const [isScreem, setIsScreem] = useState(false);

    const handleGentlyButton = () => setIsGently(true);
    const handleStoneButton = () => setIsStone(true);
    const handleScreemButton = () => setIsScreem(true);

    if(isGently)
    return

 return(  
    <Container>
        <Health>
            Gnome's Energy: {props.energy} ❤️
        </Health>
        <QuestText>
            OWL SLEEPING
        </QuestText>
        <ButtonWrapper>
            <Button
                variant="contained" 
                color="primary"
                onClick={handleGentlyButton}
            >
                Gently
            </Button>
            <Button
                variant="contained" 
                color="primary"
                onClick={handleStoneButton}
            >
                Try a stone at the owl
            </Button>
            <Button
                variant="contained" 
                color="primary"
                onClick={handleScreemButton}
            >
                Screem
            </Button>
        </ButtonWrapper>
    </Container>
 );
};

export default FirstRight;