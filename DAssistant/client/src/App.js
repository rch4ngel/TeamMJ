import React, { Component } from 'react';
import './App.css';

import DCard from './components/DCard/DCard'
import CatImg from './assets/img/animals/cat.png'
import DogImg from './assets/img/animals/dog.png'
import BirdImg from './assets/img/animals/bird.png'
import CowImg from './assets/img/animals/cow.png'
import ElephantImg from './assets/img/animals/elephant.png'
import FrogImg from './assets/img/animals/frog.png'
import GoatImg from './assets/img/animals/goat.png'
import HorseImg from './assets/img/animals/horse.png'
import RoosterImg from './assets/img/animals/rooster.png'

import CatSnd from './assets/snd/cat.mp3'
import DogSnd from './assets/snd/dog.mp3'
import BirdSnd from './assets/snd/bird.mp3'
import CowSnd from './assets/snd/cow.mp3'
import ElephantSnd from './assets/snd/elephant.mp3'
import FrogSnd from './assets/snd/frog.mp3'
import GoatSnd from './assets/snd/goat.mp3'
import HorseSnd from './assets/snd/horse.mp3'
import RoosterSnd from './assets/snd/rooster.mp3'

import Button from "./components/CustomButtons/Button.jsx";


class App extends Component {
    state = {
        dcards: [
            {animal: "Cat", animalImg: CatImg, animalSnd: {CatSnd}},
            {animal: "Dog", animalImg: DogImg, animalSnd: {DogSnd}},
            {animal: "Bird", animalImg: BirdImg, animalSnd: {BirdSnd}},
            {animal: "Cow", animalImg: CowImg, animalSnd: {CowSnd}},
            {animal: "Elephant", animalImg: ElephantImg, animalSnd: {ElephantSnd}},
            {animal: "Frog", animalImg: FrogImg, animalSnd: {FrogSnd}},
            {animal: "Goat", animalImg: GoatImg, animalSnd: {GoatSnd}},
            {animal: "Horse", animalImg: HorseImg, animalSnd: {HorseSnd}},
            {animal: "Rooster", animalImg: RoosterImg, animalSnd: {RoosterSnd}},
        ],
        showDCards: false
    };

    handleClick = () => {
        this.setState({showDCards: true})
    };

    render() {
        if(this.state.showDCards) {
            return (
                <div className="App">
                    <DCard animal={this.state.dcards[0].animal} animalImg={this.state.dcards[0].animalImg}/>
                </div>
            );
        }
        return (
            <div className="App">
                <Button onClick={this.handleClick}>Start Game</Button>
            </div>
        );
    }
}

export default App;
