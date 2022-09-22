import logo from './logo.svg';
import './App.css';
import { CardGenerator } from './Services/CardGenerator';
import Panel from './components/Panel';

function App() {

  const card = new CardGenerator().generateCard();
  console.log(card)
  return (
    <div className="App">
      <Panel/>
    </div>
  );
}

export default App;
