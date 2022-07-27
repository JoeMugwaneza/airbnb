// import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Hero from './components/hero';
import Card from './components/card';
// import Joke from './components/Joke';
// import jokesData from './components/jokesData';

import cardData from './components/cardData';

function App() {
//  const jokeElements = jokesData.map((joke, index) =>{
//   return <Joke 
//   setup={joke.setup}
//   punchline={joke.punchline}
//   />
//  })

const cards = cardData.map(card => {
  return <Card 
  key={card.id}
  {...card}
  />
})

  return (
    <div className="App">
      <NavBar />
      <Hero />
      <section className='card-list'>
        {cards}
      </section>
      {/* <Card 
      img="katie-zaferes.png"
      rating="5.0"
      reviewCount="(6)"
      country="Rw"
      title="Life Lessons with Katie Zaferes"
      price="136"
      /> */}
  
      {/* {jokeElements} */}
    </div>
  );
}

export default App;
