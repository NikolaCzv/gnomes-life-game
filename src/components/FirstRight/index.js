import React from "react";
import { Container, QuestText, ButtonWrapper, Health } from '../style';


const FirstRight = props => {
 return(  
    <Container>
        <Health>
            Gnome's Energy: {props.energy} ❤️
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