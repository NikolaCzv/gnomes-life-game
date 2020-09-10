import React, { useState } from "react";
import { Container, QuestText, ButtonWrapper, Health } from '../style';
import Button from '@material-ui/core/Button';

const snakeRight = props => {

    return( 
        <Container>
            <Health>
                Gnome's Energy: {props.energy} ❤️ 
            </Health>
            <QuestText>
                Our friend keeps moving through the forest, stoping by a small river. Seeing the fish there he desides to whip out his trusty Gnome-Fishing-Rod™.
                after a long day of fishing, he finally catches a fish, surprise its a golden fish! QUICK MAKE A WISH!  
            </QuestText>
            <ButtonWrapper>
                <Button
                    variant="contained" 
                    color="primary"
                >
                    Wings!
                </Button>
                <Button
                    variant="contained" 
                    color="primary"
                    >
                        My Hat Back..
                </Button>
                <Button
                    variant="contained" 
                    color="primary"
                >
                    More Energy PLS!
                </Button>
                <Button
                    variant="contained" 
                    color="primary"
                >
                    "Magic Powder"
                </Button>
            </ButtonWrapper>
        </Container>
    );
 };


export default snakeRight;