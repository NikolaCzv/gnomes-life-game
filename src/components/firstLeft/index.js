import React from "react";
import { Container, QuestText, ButtonWrapper, Health } from '../style';
import Button from '@material-ui/core/Button';

const FirstLeft = props => {
 return(  
    <Container>
        <Health>
            Energy: {props.energy} 
        </Health>
        <QuestText>
            As our hero proceeds left he comes to a stunning halt near a giant snake. But to his surprise the snake is actually a really nice guy, not the smartest however.
            "Ssssssorry, I was asleep on the job" The snake adds "what bringsss a gnome here?" as the gnome explains his situation the snake in an attempt to help points the way...
            realizing the snake doesnt have arms the gnome has two choices:
        </QuestText>
        <ButtonWrapper>
                <Button
                    variant="contained" 
                    color="primary"
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


export default FirstLeft;