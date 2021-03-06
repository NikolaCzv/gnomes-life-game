import React, { useState } from "react";
import { Container, GameContainer, Title } from './style';

import StartGame from '../../components/startGame';

const HomeScreen = (props) => {
    console.log(props.store)

    const [energy, setEnergy] = useState(100);

    return(
        <Container>
            <Title>Gnomes's Life</Title>
            <GameContainer>
                <StartGame energy={energy} setEnergy={setEnergy}/>
            </GameContainer>
        </Container>
    );
};

export default HomeScreen;