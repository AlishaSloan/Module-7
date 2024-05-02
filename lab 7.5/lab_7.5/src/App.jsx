import './App.css'
import BitcoinRates from './components/BitcoinRates'
import React from 'react';
import { EmojiProvider } from './context/EmojiContext';
import Emoji from './components/Emoji'
import NavBar from './components/NavBar';
import AppRoutes from './routes/AppRoutes';

function App() {
  

  return (
    <div>

    <NavBar />
  
    <AppRoutes />
  
  </div>
  )
}

export default App
