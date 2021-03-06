import React, { useState } from "react";
import { Container, QuestText, ButtonWrapper, Health } from '../style';
import Button from '@material-ui/core/Button';
import OwlGently from '../owlGently';
import OwlStone from '../owlStone';
import OwlScreem from '../owlScreem';
import DeathScreen from '../deathScreen';

const FirstRight = props => {
    const [isGently, setIsGently] = useState(false);
    const [isStone, setIsStone] = useState(false);
    const [isScreem, setIsScreem] = useState(false);

    const handleGentlyButton = () => { 
        setIsGently(true);
        props.setEnergy(props.energy - 10);
    };

    const handleStoneButton = () => {
        setIsStone(true);
        props.setEnergy(props.energy - 50);
    }
    const handleScreemButton = () => {
        setIsScreem(true);
        props.setEnergy(props.energy - 30);
    };

    if(props.energy <= 0)
        return <DeathScreen />

    if(isGently)
        return <OwlGently energy={props.energy}/>

    if(isStone)
        return <OwlStone energy={props.energy}/>

    if(isScreem)
        return <OwlScreem energy={props.energy}/>


 return(
    <Container>
        <Health>
            Gnome's Energy: {props.energy} ❤️
        </Health>
        <QuestText>
            Oh, finally to meet someone after a rough night. There is an owl. She is sleeping. The owl 
            is in deep sleep, you need to chose a way to wake her up. Maybe she knows where is gnomes hat,
            they were at the same party! Please feel free to chose a way to wake her up:
        </QuestText>
        <ButtonWrapper>
            <Button
                variant="outlined" 
                color="primary"
                onClick={handleGentlyButton}
            >
                Gently
            </Button>
            <Button
                variant="outlined" 
                color="primary"
                onClick={handleStoneButton}
            >
                Throw a stone at her
            </Button>
            <Button
                variant="outlined" 
                color="primary"
                onClick={handleScreemButton}
            >
                Screem at her
            </Button>
        </ButtonWrapper>
    </Container>
 );
};



export default FirstRight;