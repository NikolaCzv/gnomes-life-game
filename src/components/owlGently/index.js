import React, { useState } from 'react';
import { Container, QuestText, Health, ButtonWrapper } from '../style';
import Button from '@material-ui/core/Button';
import Fox from '../fox';
import DeathScreen from '../deathScreen';

const OwlGently = props => {
    const [isFox, setIsFox] = useState(false);

    const handleFoxButton = () => {
        setIsFox(true);
    };

    if(props.energy <= 0)
        return <DeathScreen />
    if(isFox)
        return <Fox energy={props.energy}/>

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
                    variant="outlined" 
                    color="primary"
                    onClick={handleFoxButton}
                >
                    Find the Fox
                </Button>
                <Button
                    variant="outlined" 
                    color="primary"
                >
                    Keep looking for more clues
                </Button>
            </ButtonWrapper>
        </Container>
    );
};

export default OwlGently;