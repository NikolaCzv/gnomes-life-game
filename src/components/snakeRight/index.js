import React, { useState } from "react";
import { Container, QuestText, ButtonWrapper, Health } from '../style';
import Button from '@material-ui/core/Button';

const snakeRight = (props) => {

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
                        my hat back..
                    </Button>
                    <Button
                        variant="contained" 
                        color="primary"
                    >
                        more energy!
                    </Button>
                    <Button
                        variant="contained" 
                        color="primary"
                    >
                        "magic powder"
                    </Button>
        </ButtonWrapper>
    </Container>
 );
 };


export default snakeRight;