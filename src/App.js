// import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Hero from './components/hero';
import Card from './components/card';
import Jokes from './components/jokes';

function App() {
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
      <Jokes 
      Setup="I got my daughter a fridge for her birthday."
      Punchline="I can't wait to see her face light up when she opens it."
      />
      
      <Jokes 
      Setup="How did the hacker escape the police?"
      Punchline="He just ransomware!"
      />

      <Jokes 
      Setup="Why don't pirates travel on mountain roads?"
      Punchline="Scurvy."
      />

      <Jokes 
      Setup="Why do bees stay in the hive in the winter?"
      Punchline="Swarm."
      />
      
    </div>
  );
}

export default App;
