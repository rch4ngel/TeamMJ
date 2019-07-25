import React, { Component } from 'react';
import './App.css';

import DCard        from './components/DCard/DCard'
import CatImg       from './assets/img/animals/cat.png'
import DogImg       from './assets/img/animals/dog.png'
import BirdImg      from './assets/img/animals/bird.png'
import CowImg       from './assets/img/animals/cow.png'
import ElephantImg  from './assets/img/animals/elephant.png'
import FrogImg      from './assets/img/animals/frog.png'
import GoatImg      from './assets/img/animals/goat.png'
import HorseImg     from './assets/img/animals/horse.png'
import RoosterImg   from './assets/img/animals/rooster.png'

import CatSnd       from './assets/snd/cat.mp3'
import DogSnd       from './assets/snd/dog.mp3'
import BirdSnd      from './assets/snd/bird.mp3'
import CowSnd       from './assets/snd/cow.mp3'
import ElephantSnd  from './assets/snd/elephant.mp3'
import FrogSnd      from './assets/snd/frog.mp3'
import GoatSnd      from './assets/snd/goat.mp3'
import HorseSnd     from './assets/snd/horse.mp3'
import RoosterSnd   from './assets/snd/rooster.mp3'

import Button       from './components/CustomButtons/Button.jsx';
import DNavTab      from './components/DNavTab/DNavTab.jsx';

const dCards = [
    {
        animal: "Cat",
        animalImg: CatImg,
        animalSnd: {CatSnd}
    },
    {
        animal: "Dog",
        animalImg: DogImg,
        animalSnd: {DogSnd}
    },
    {
        animal: "Bird",
        animalImg: BirdImg,
        animalSnd: {BirdSnd}
    },
    {
        animal: "Cow",
        animalImg: CowImg,
        animalSnd: {CowSnd}
    },
    {
        animal: "Elephant",
        animalImg: ElephantImg,
        animalSnd: {ElephantSnd}
    },
    {
        animal: "Frog",
        animalImg: FrogImg,
        animalSnd: {FrogSnd}
    },
    {
        animal: "Goat",
        animalImg: GoatImg,
        animalSnd: {GoatSnd}
    },
    {
        animal: "Horse",
        animalImg: HorseImg,
        animalSnd: {HorseSnd}
    },
    {
        animal: "Rooster",
        animalImg: RoosterImg,
        animalSnd: {RoosterSnd}
    }
];

class App extends Component {
    state = {
        dCards,
        showDCards: false,
        dAnswer: 0,
        dStartCardIndex: 0,
        dEndCardIndex: 3,
        dScore: 0,
    };

    populateDCards = () => {
        this.setState({dCards}, () => {
            this.randomDCardsHandler();
        });
        this.setState({showDCards: true})
    };

    toggleDCardsHandler = () => {
        this.setState({showDCards: true});
        this.randomDCardsHandler();
        // this.setDAnswer();
    };

    randomDCardsHandler = () => {
        const dCards = [...this.state.dCards];

        console.log("Randomizing the cards: ", dCards);
        let dTempCard;
        let dCardIndex;
        let dSize = dCards.length;

        while (dSize > 0) {
            dCardIndex = Math.floor(Math.random() * dSize);
            dSize--;
            dTempCard = dCards[dSize];
            let dCard = dCards[dCardIndex];
            dCards[dSize] = dCard;
            dCards[dCardIndex] = dTempCard;
        }

        this.setState({dCards: dCards}, () => {console.log(this.state.dCards)});
    };

    setDAnswer = () => {
        let dRandomIndex = Math.floor(Math.random() * 3);

        this.setState({dAnswer: dRandomIndex}, () => {
            console.log("dAnswer is :", this.state.dAnswer);
        });

    };

    toggleDNextCardsHandler = () => {
        const dCards = [...this.state.dCards];
        dCards.splice(this.state.dAnswer, 1);

        this.setDAnswer();

        if (dCards.length <= 3){
            dCards.splice(0, dCards.length);
            this.setState({showDCards: false})
        }

        this.setState({dCards: dCards});

        console.log(this.state.dCards)
    };

    render() {
        let dCards = null;
        let dNextButton = null;
        let dStartButton = null;
        let dPlayAgainButton = null;

        if(this.state.showDCards === true) {
            dCards = (
                <div className="Animals">
                    {this.state.dCards.slice(this.state.dStartCardIndex,this.state.dEndCardIndex).map((dCard) => {
                       return <DCard
                           animal={dCard.animal}
                           animalImg={dCard.animalImg}
                           key={dCard.animal}
                       />
                    })}
                </div>
            );
            dNextButton = (
                <Button onClick={this.toggleDNextCardsHandler}>Next</Button>
            );
        }
        else {
            if (this.state.dCards.length === 0) {
                dPlayAgainButton = (
                    <Button onClick={this.populateDCards}>Play Again</Button>
                )
            } else {
                dStartButton = (
                    <Button onClick={this.toggleDCardsHandler}>Start Game</Button>
                );
            }
        }
        return (
            <div className="App">
                <DNavTab navtab/>
                { dStartButton }
                { dCards }
                { dNextButton}
                { dPlayAgainButton }

            </div>
        );
    }
}

export default App;