import React from "react";
import { Container, QuestText } from '../style';

const StartGame = (props) => {

    const { energy } = props;

        return(
            <Container>
                Gnom's Health: {energy} ❤️
                <QuestText></QuestText>
            </Container>
        );
};

export default StartGame;