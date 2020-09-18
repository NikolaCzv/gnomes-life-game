import React, { useState } from "react";
import { Container, QuestText, ButtonWrapper } from '../style';
import Button from '@material-ui/core/Button';
import FirstScreen from '../firstScreen';

const StartGame = (props) => {
    const [isNotPlaying, setIsNotPlaying] = useState(true);
    const [startGame, setStartGame] = useState(false);

    const handleNoButton = () => setIsNotPlaying(false);

    const handleYesButton = () => setStartGame(true);
    
    const handleJokeButton = () => setIsNotPlaying(true);

    if(startGame)
        return <FirstScreen energy={props.energy} setEnergy={props.setEnergy} />
        
        return(
            <Container>
                {isNotPlaying ? 
                    <>
                        <QuestText>
                            HEY! We got a problem. Our friend gnome was drunk last night and he lost his
                            hat! If you understand the hangover situation, please help him! Would you like to start
                            the game and help the gnome find his hat???
                        </QuestText>    
                        <ButtonWrapper>
                                <Button 
                                    variant="outlined" 
                                    color="secondary"
                                    onClick={handleNoButton}
                                >
                                    No, Thanks
                                </Button>
                                <Button 
                                    variant="outlined" 
                                    color="primary"
                                    onClick={handleYesButton}>
                                    Yes
                                </Button>
                        </ButtonWrapper>
                    </>
                    :
                    <>
                        <QuestText>
                            Good job, you waisted your time, a solid 8 seconds. If you change your mind you can just press the button below and you'll be back at the main screen.
                        </QuestText>
                        <ButtonWrapper>
                            <Button 
                                variant="outlined" 
                                color="primary"
                                onClick={handleJokeButton}
                            >
                                JOKE, I want to play!    
                            </Button>
                        </ButtonWrapper>
                    </>}
            </Container>             
        );
};

export default StartGame;