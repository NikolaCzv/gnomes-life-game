import React, { useState } from "react";
import { Container, QuestText, ButtonWrapper, Health } from '../style';
import Button from '@material-ui/core/Button';

const HungryEagle = (props) => {
    const [isFight, setIsFight] = useState(false);
    const [isRun, setIsRun] = useState(false);
    
    const handleFightButton = () => setIsFight(true)
    const handleRunButton = () => setIsRun(true) 
    
    return(  
    <Container>
        <Health>
            Energy: {props.energy} 
        </Health>
        <QuestText>
          the gnome keeps falling, and falling, and then.. STOP. He gets grabed by an Eagle?! And its taking him to her childern!
          As she drops him in, the childern getting hungry look at the gnome, quick choose!
            
        </QuestText>
        <ButtonWrapper>
            <Button
            variant="contained" 
            color="primary"
            onClick={handleFightButton}
            >
            Fight!
            </Button>
            <Button
            variant="contained" 
            color="primary"
            onClick={handleRunButton}
            >
                Run!
            </Button>
        </ButtonWrapper>
    </Container>
 );
};


export default HungryEagle;