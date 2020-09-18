import React, { useState } from "react";
import { Container, QuestText, ButtonWrapper, Health } from '../style';
import Button from '@material-ui/core/Button';
import DeathScreen from "../deathScreen";

const HungryEagle = (props) => {
    const [isDead, setIsDead] = useState(false);
    
    const handleButton = () => setIsDead(true);
    
    if(isDead)
        return <DeathScreen /> 

    return(  
    <Container>
            <Health>
                Gnome's Energy: {props.energy} ❤️
            </Health>
            <QuestText>
                He gets grabed by an Eagle?! And its taking him to her childern!
                As she drops him in the nest, the chicks getting hungry look at the gnome, quick choose!
            </QuestText>
            <ButtonWrapper>
                <Button
                variant="contained" 
                color="primary"
                onClick={handleButton}
                >
                Fight!
                </Button>
                <Button
                variant="contained" 
                color="primary"
                onClick={handleButton}
                >
                    Run!
                </Button>
            </ButtonWrapper>
    </Container>
 );
};


export default HungryEagle;