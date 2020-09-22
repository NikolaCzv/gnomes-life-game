import React, { useState } from "react";
import { Container, QuestText, ButtonWrapper, Health, } from '../style';
import Button from '@material-ui/core/Button';
import HungryEagle from "../hungryEagle";
import FirstScreen from "../firstScreen";
import DeathScreen from '../deathScreen';

const SnakeRight = props => {
    const [isWings, setisWings] = useState(false);
    const [hatBack, setHatBack] = useState(false);
    const [doubleEnergy, isDoubleEnergy] = useState(false);
    const [powder, setIsPowder] = useState(false);

    const handleWingButton = () => setisWings(true);
    const handleHatButton = () => setHatBack(true); 
    const handleEnergyButton = () => isDoubleEnergy(true);
    const handlePowderButton = () => setIsPowder(true);

    if(props.energy <= 0)
        return <DeathScreen />
    if (isWings)
        return <HungryEagle energy={props.energy}/>
    if (hatBack)
        return <FirstScreen energy={props.energy - 99}/>
    if (doubleEnergy)
        return <FirstScreen energy={props.energy * 2}/>
    if (powder)
        return <DeathScreen/> 
    
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
                    variant="outlined" 
                    color="primary"
                    onClick={handleWingButton}
                >
                    Wings!
                </Button>
                <Button
                    variant="outlined" 
                    color="primary"
                    onClick={handleHatButton}
                    >
                        My Hat Back..
                </Button>
                <Button
                    variant="outlined" 
                    color="primary"
                    onClick={handleEnergyButton}
                >
                    More Energy PLS!
                </Button>
                <Button
                    variant="outlined" 
                    color="primary"
                    onClick={handlePowderButton}
                >
                    "Magic Powder"
                </Button>
            </ButtonWrapper>
        </Container>
    );
 };


export default SnakeRight;