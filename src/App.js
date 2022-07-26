// import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Hero from './components/hero';
import Card from './components/card';
import Joke from './components/Joke';
import jokesData from './components/jokesData';


function App() {
  const jokeElements = jokesData.map(joke =>{
    return <Joke 
    setup={joke.setup}
    punchline={joke.punchline}
    
    />
  })
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Card 
      img="katie-zaferes.png"
      rating="5.0"
      reviewCount="(6)"
      country="Rw"
      title="Life Lessons with Katie Zaferes"
      price="136"
      />
      {jokeElements}
    </div>
  );
}

export default App;
