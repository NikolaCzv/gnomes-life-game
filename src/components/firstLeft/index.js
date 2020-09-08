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
            FirstLeft
        </QuestText>
        <ButtonWrapper>
        </ButtonWrapper>
    </Container>
 );
};


export default FirstLeft;