import React, { useState } from "react";
import { Container, QuestText, ButtonWrapper, Health } from '../style';
import Button from '@material-ui/core/Button';
import FirstLeft from '../firstLeft';
import HungryEagle from "../hungryEagle";
 
const SnakeLeft = props => {
    const [isJump, setIsJump] = useState(false);
    const [isthink, setIsThink] = useState(false);

    const handleJumpButton = () => setIsJump(true);

    const handleThinkButton = () => setIsThink(true);
    
    if (isthink)
        return <FirstLeft energy={props.energy - 20} />
    if (isJump)
        return <HungryEagle energy={props.energy}/>

    return(  
        <Container>
            <Health>
                Gnome's Energy: {props.energy} ❤️ 
            </Health>
            <QuestText>
                The gnome keeps moving foward twoards the giant cliff. Now the real debate begins, does he chicken out, or does he jump?
                Find out next tim- i mean right now!
            </QuestText>
            <ButtonWrapper>
                        <Button
                            variant="outlined" 
                            color="primary"
                            onClick={handleJumpButton}
                        >
                            Jump!
                        </Button>
                        <Button
                            variant="outlined" 
                            color="primary"
                            onClick={handleThinkButton}
                        >
                            Rethink..
                        </Button>
            </ButtonWrapper>
        </Container>
    );
};


export default SnakeLeft;