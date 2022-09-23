
import './App.css';
import { CardGenerator } from './Services/CardGenerator';
import React from 'react';
import CardBank from './components/cardBank/CardBank';

function App() {
 const card = new CardGenerator().generateCard();
 console.log(card)
 return (
  <React.Fragment>
      <CardBank/>
  <React.Fragment/>

export default App;
