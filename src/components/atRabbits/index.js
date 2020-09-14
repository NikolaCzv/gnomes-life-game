import React, { useState } from "react";
import { Container, Health, QuestText, ButtonWrapper } from '../style';

const atRabbits = props => {
    return (
        <Container>
            <Health>
                Gnome's Energy: {props.energy} ❤️
            </Health>
            <QuestText>
                Your friend arrived at Rabbit's place... Falsbacks hittng... 
            </QuestText>
            <ButtonWrapper>

            </ButtonWrapper>
        </Container>
    );
};

export default atRabbits;