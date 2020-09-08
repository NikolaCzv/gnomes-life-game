import React from "react";
import { Container, QuestText, ButtonWrapper, Health } from '../style';
import Button from '@material-ui/core/Button';

//add text
//add two buttons, left and right
//don't need to do handlers

const FirstLeft = props => {
 return(  
    <Container>
        <Health>
            Energy: {props.energy} 
        </Health>
        <QuestText>
            FirstLeft
            {/* snake */}
        </QuestText>
        <ButtonWrapper>
        </ButtonWrapper>
    </Container>
 );
};


export default FirstLeft;