import React from "react";
import { Container, QuestText, ButtonWrapper, Health } from '../style';
import Button from '@material-ui/core/Button';

const FirstRight = (props) => {
 return(  
    <Container>
        <Health>
            Energy: {props.energy} 
        </Health>
        <QuestText>
            FirstRight
            
        </QuestText>
        <ButtonWrapper>
        </ButtonWrapper>
    </Container>
 );
};


export default FirstRight;