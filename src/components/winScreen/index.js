import React from 'react';
import { Container, WinText, WinImage, ImageWrapper } from '../style';
import victory from '../../assets/victory.jpg'

const WinScreen = () => {
    return <Container>
                <WinText>Congrats! 🍻 The Gnome found his hat! It means that you WON! 🏆</WinText>
                <ImageWrapper>
                    <WinImage src={victory}/>
                </ImageWrapper>
            </Container>
};

export default WinScreen;