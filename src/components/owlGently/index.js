import React from 'react';
import { Container, QuestText, Health, ButtonWrapper } from '../style';
import Button from '@material-ui/core/Button';

const OwlGently = props => {

    return (
        <Container>
            <Health>
                Gnome's Energy: {props.energy} ❤️
            </Health>
            <QuestText>
                After an hour of gently calling owls name she is finally awake! The gnome lost some energy,
                that was exausting! But, the owl is awake an ready to help your little drunk friend! She thinks
                that saw the young fox wearing his hat last night. Chose his destiny! 
            </QuestText>
            <ButtonWrapper>
                <Button
                    variant="contained" 
                    color="primary"
                >
                    Find the Fox
                </Button>
                <Button
                    variant="contained" 
                    color="primary"
                >
                    Keep looking for more clues
                </Button>
            </ButtonWrapper>
        </Container>
    );
};

export default OwlGently;