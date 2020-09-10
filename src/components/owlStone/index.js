import React from 'react';
import { Container, QuestText, Health, ButtonWrapper } from '../style';
import Button from '@material-ui/core/Button';

const OwlStone = props => {
    return (
        <Container>
            <Health>
                Gnome's Energy: {props.energy} ❤️
            </Health>
            <QuestText>
                OH NOOOO! That stone was too heavy for an old a** owl! She is dead! What you gonna do now!?
                Your gnome friend is in danger! Chose his next steps... But now think before you make one more stupid move. 
            </QuestText>
            <ButtonWrapper>
                <Button
                    variant="contained" 
                    color="primary"
                    //going to the fox
                >
                    Left Path
                </Button>
                <Button
                    variant="contained" 
                    color="primary"
                    //goes to the cave
                >
                    Right Path
                </Button>
            </ButtonWrapper>
        </Container>
    );
};

export default OwlStone;