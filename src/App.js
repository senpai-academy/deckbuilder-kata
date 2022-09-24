import logo from './logo.svg';
import './App.css';
import { CardGenerator } from './Services/CardGenerator';

function App() {

  const card = new CardGenerator().generateCard();
  console.log(card)

  return (
    <div id="GridMain">
        <div id="DeckGrid" className="backGround">a</div>
        <div id="CardBank" className="backGround">
            <ul>
              <li className='flex-between fila-lista'>
                  
                  <div className='relative'>
                    <span className='numero'> 6 </span>
                    <div className='img-mana'></div>
                  </div>

                  <span className='text-bank'> Fiery Mercenary </span>

                  <div></div>
              </li>
              <li className='flex-between fila-lista'>
                
                  <div className='relative'>
                    <span className='numero'> 1 </span>
                    <div className='img-mana'></div>
                  </div>

                  <span className='text-bank'> Altered Goblin </span>

                  <div></div>
              </li>

              <li className='flex-between fila-lista'>

                  <div className='relative'>
                    <span className='numero'> 7 </span>
                    <div className='img-mana'></div>
                  </div>

                  <span className='text-bank'> Fiery Bolt </span>

                  <div></div>
              </li>
             
              <li className='flex-between fila-lista'>
                
                  <div className='relative'>
                    <span className='numero'> 1 </span>
                    <div className='img-mana'></div>
                  </div>

                  <span className='text-bank'> Transformed Goblin Elemental </span>

                  <div></div>
              </li>

            </ul>
        </div>
        <div id="DeckInfo" className="backGround">c</div>
    </div>
  );
}

export default App;
