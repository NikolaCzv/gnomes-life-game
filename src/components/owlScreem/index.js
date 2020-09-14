import React, { useState } from 'react';
import { Container, QuestText, Health, ButtonWrapper } from '../style';
import Button from '@material-ui/core/Button';
import Fox from '../fox';

const OwlScreem = props => {
    const [isFox, setIsFox] = useState(false);

    const handleFoxButton = () => {
        setIsFox(true);
    };

    if(isFox)
        return <Fox energy={props.energy}/>


    return (
        <Container>
            <Health>
                Gnome's Energy: {props.energy} ❤️
            </Health>
            <QuestText>
                OH NOOOO! That screem was too loud for an old owl! Now she is frustrated!
                What you gonna do now!? Your gnome friend is in danger! She tells you to go the deer, or fox... She loks like she
                is making up stuff! Will you trust her? Now think before you make one more stupid move. 
            </QuestText>
            <ButtonWrapper>
                <Button
                    variant="contained" 
                    color="primary"
                    onClick={handleFoxButton}
                >
                    Find the Fox
                </Button>
                <Button
                    variant="contained" 
                    color="primary"
                    //goes to the cave
                >
                    Find the Deer
                </Button>
            </ButtonWrapper>
        </Container>
    );
};

export default OwlScreem;