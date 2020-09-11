import React, {useState} from "react";
import { Container, QuestText, ButtonWrapper, Health } from '../style';
import Button from '@material-ui/core/Button';

const FirstRight = (props) => {
 return(  
    <Container>
        <Health>
            Energy: {props.energy} 
        </Health>
        <QuestText>
            The gnome comes across an owl. She's asleep...pick your next BRIGHT idea
            
        </QuestText>
        <ButtonWrapper>
        </ButtonWrapper>
    </Container>
 );
};


export default FirstRight;