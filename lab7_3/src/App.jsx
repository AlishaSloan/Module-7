import { useState } from 'react'
import './App.css'
import BitcoinRates from './components/BitcoinRates'
import React from 'react';
import { EmojiProvider } from './context/EmojiContext';
import Emoji from './components/Emoji'

function App() {
  

  return (
    <>
<EmojiProvider>

<BitcoinRates />

<Emoji />

</EmojiProvider>
    </>
  )
}

export default App
