import React, { useState } from "react";
import { Container, QuestText, ButtonWrapper } from '../style';
import Button from '@material-ui/core/Button';
import FirstScreen from '../firstScreen';

const StartGame = (props) => {
    const [isNotPlaying, setIsNotPlaying] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const { energy } = props;

    const handleNoButton = () => {
        setIsNotPlaying(false);
    }

    const handleYesButton = () => {
        setIsPlaying(true);
    }

    if(isPlaying)
        return <FirstScreen />
        
        return(
            <Container>
                <QuestText>
                    HEY! We got a problem. Our friend gnome was drunk last night and he lost his
                    hat! If you understand the hangover situation, please help him! Would you like to start
                    the game and help the gnome find his hat???
                    {/* on codnitional ako hoce da igra, ostavi ovu poruku, ako nece da igra prikazi novu poruku
                    reci mu sta hoces, ne budi previse grub */}
                </QuestText>
                {isNotPlaying ? 
                    <ButtonWrapper>
                            <Button 
                                variant="contained" 
                                color="secondary"
                                onClick={handleNoButton}
                            >
                                No, Thanks
                            </Button>
                            <Button 
                                variant="contained" 
                                color="primary"
                                onClick={handleYesButton}>
                                Yes
                            </Button>
                    </ButtonWrapper>
                    :
                    <ButtonWrapper>
                        <Button 
                        variant="contained" 
                        color="primary"
                        //dodaj on click i kad se klinke da se vrati na homescreen
                        >
                                JOKE, I want to play!
                        </Button>
                    </ButtonWrapper>
                    }
            </Container>
        );
    
};

export default StartGame;