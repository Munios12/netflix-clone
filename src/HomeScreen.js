import React from 'react';
import './HomeScreen.css';
import Nav from './Nav';
import Banner from './Banner';
import requests from './Requests';
import Row from './Row';

function HomeScreen() {
    return (
        <div className = 'homeScreen'>
            <Nav />
            
            <Banner />

            <Row title='Originales de MANUFLIX' fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
            <Row title='Tendencias ahora' fetchUrl={requests.fetchTopRated}/>
            <Row title='Más valoradas' fetchUrl={requests.fetchNetflixOriginals}/>
            <Row title='Acción' fetchUrl={requests.fetchActionMovies}/>
            <Row title='Comedias' fetchUrl={requests.fetchComedyMovies}/>
            <Row title='Horror' fetchUrl={requests.fetchHorrorMovies}/>
            <Row title='Románticas' fetchUrl={requests.fetchRomanceMovies}/>
            <Row title='Documentales' fetchUrl={requests.fetchDocumentaries}/>
        </div>
    )
}

export default HomeScreen
