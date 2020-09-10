import React from "react";
import { Container, QuestText, ButtonWrapper, Health } from '../style';
import Button from '@material-ui/core/Button';
 
const snakeLeft = props => {
    return(  
        <Container>
            <Health>
                Gnome's Energy: {props.energy} ❤️ 
            </Health>
            <QuestText>
                The gnome keeps moving foward twoards the giant cliff. Now the real debate begins,
                does he chicken out, or does he jump? Find out next tim- i mean right now!
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


export default snakeLeft;