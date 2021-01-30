import React from 'react';
import Directory from '../../Components/directory/directory.component'
import './homepage.style.scss';
import { HomePageContainer } from './homepage.styles'

const Homepage = () => (
    <HomePageContainer>
        <Directory />
    </HomePageContainer>
);

export default Homepage;