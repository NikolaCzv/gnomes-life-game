import React from "react";
import { Container, GameContainer, Title } from './style';

import StartGame from '../../components/startGame';

class HomeScreen extends React.Component {

    state = {
        energy: 100,
        name: "Gnomes's Life"
    }

    render(){
        return(
            <Container>
                <Title>{this.state.name}</Title>
                <GameContainer>
                    <StartGame energy={this.state.energy}/>
                </GameContainer>
            </Container>
        );
    }
};

export default HomeScreen;